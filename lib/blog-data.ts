import { promises as fs } from 'fs';
import path from 'path';

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string; // HTML string
    image: string;
    keywords: string[];
    schema?: any;
}

const postsDirectory = path.join(process.cwd(), 'content/blog');

export async function getBlogPosts(): Promise<BlogPost[]> {
    try {
        // Check if directory exists
        try {
            await fs.access(postsDirectory);
        } catch {
            return [];
        }

        const slugs = await fs.readdir(postsDirectory);
        const posts = await Promise.all(slugs.map(slug => getPostBySlug(slug)));

        // Filter out undefineds
        const validPosts = posts.filter((p): p is BlogPost => p !== undefined);

        // Sort by date (newest first)
        return validPosts.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
    } catch (e) {
        console.error("Error loading blog posts:", e);
        return [];
    }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const postDir = path.join(postsDirectory, slug);
    const metadataPath = path.join(postDir, 'metadata.json');
    const contentPath = path.join(postDir, 'index.md');

    try {
        const [metadataContent, content] = await Promise.all([
            fs.readFile(metadataPath, 'utf8'),
            fs.readFile(contentPath, 'utf8')
        ]);

        const metadata = JSON.parse(metadataContent);
        return {
            ...metadata,
            content,
            slug
        };
    } catch (e) {
        // If files don't exist or error parsing, return undefined
        return undefined;
    }
}
