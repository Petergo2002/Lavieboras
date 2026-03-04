import { promises as fs } from 'fs';
import path from 'path';
import { marked } from 'marked';

// Configure marked renderer for clean, semantic HTML
marked.setOptions({
    gfm: true,       // GitHub Flavored Markdown (tables, strikethrough, etc.)
    breaks: false,   // Require double newline for paragraph breaks
});

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string; // HTML string
    image: string;
    keywords: string[];
    schema?: unknown; // Use unknown instead of any for type safety
}

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Validate slug to prevent path traversal
function isValidSlug(slug: string): boolean {
    // Only allow alphanumeric, hyphens, and underscores
    const validSlugPattern = /^[a-zA-Z0-9_-]+$/;
    return validSlugPattern.test(slug) && !slug.includes('..');
}

export async function getBlogPosts(): Promise<BlogPost[]> {
    try {
        // Check if directory exists
        try {
            await fs.access(postsDirectory);
        } catch {
            return [];
        }

        const entries = await fs.readdir(postsDirectory);

        // Filter to only include directories and valid slugs
        const slugs = await Promise.all(
            entries.map(async (entry) => {
                const entryPath = path.join(postsDirectory, entry);
                try {
                    const stat = await fs.stat(entryPath);
                    return stat.isDirectory() && isValidSlug(entry) ? entry : null;
                } catch {
                    return null;
                }
            })
        );

        const validSlugs = slugs.filter((slug): slug is string => slug !== null);
        const posts = await Promise.all(validSlugs.map(slug => getPostBySlug(slug)));

        // Filter out undefineds
        const validPosts = posts.filter((p): p is BlogPost => p !== undefined);

        // Sort by date (newest first)
        const parseDateMs = (value: string) => {
            const ms = new Date(value).getTime();
            return Number.isNaN(ms) ? 0 : ms;
        };

        return validPosts.sort((a, b) => {
            return parseDateMs(b.date) - parseDateMs(a.date);
        });
    } catch (e) {
        console.error("Error loading blog posts:", e);
        return [];
    }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    // Validate slug to prevent path traversal
    if (!isValidSlug(slug)) {
        console.warn(`Invalid slug provided: ${slug}`);
        return undefined;
    }

    const postDir = path.join(postsDirectory, slug);
    const metadataPath = path.join(postDir, 'metadata.json');
    const contentPath = path.join(postDir, 'index.md');

    try {
        // Check if both files exist before reading
        await Promise.all([
            fs.access(metadataPath),
            fs.access(contentPath)
        ]);

        const [metadataContent, content] = await Promise.all([
            fs.readFile(metadataPath, 'utf8'),
            fs.readFile(contentPath, 'utf8')
        ]);

        const metadata = JSON.parse(metadataContent);

        // Validate date format
        const date = metadata.date ?? '';
        if (date && !isValidDate(date)) {
            console.warn(`Invalid date format for post ${slug}: ${date}`);
        }

        // Convert markdown to HTML so the blog page can render it properly
        const htmlContent = await marked(content);

        return {
            slug,
            title: metadata.title ?? slug,
            date,
            excerpt: metadata.excerpt ?? '',
            image: metadata.image ?? '/images/placeholder-blog.jpg', // Better fallback
            keywords: metadata.keywords ?? [],
            schema: metadata.schema,
            content: htmlContent,
        };
    } catch (e) {
        // Log specific errors for debugging
        if (e instanceof Error) {
            if (e.message.includes('ENOENT')) {
                // File not found - expected for missing posts
                return undefined;
            } else if (e instanceof SyntaxError && e.message.includes('JSON')) {
                // JSON parsing error
                console.error(`JSON parsing error for post ${slug}:`, e);
            } else {
                // Other errors
                console.error(`Error loading post ${slug}:`, e);
            }
        }
        return undefined;
    }
}

// Helper function to validate date format
function isValidDate(dateString: string): boolean {
    const date = new Date(dateString);
    return !Number.isNaN(date.getTime()) && dateString.match(/^\d{4}-\d{2}-\d{2}$/) !== null;
}

// Type guard for JSON-LD schema
export function isValidJsonLdSchema(schema: unknown): schema is Record<string, unknown> {
    return typeof schema === 'object' && schema !== null && !Array.isArray(schema);
}
