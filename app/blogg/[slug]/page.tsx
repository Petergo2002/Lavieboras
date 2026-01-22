import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug, blogPosts } from '@/lib/blog-data';
import type { Metadata } from 'next';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Artikel hittades inte | Lavie Borås',
        };
    }

    return {
        title: `${post.title} | Lavie Borås`,
        description: post.excerpt,
        keywords: post.keywords,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="bg-dark-900 min-h-screen text-white selection:bg-gold-500 selection:text-white">
            {/* Hero Image */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="100vw"
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 pb-12">
                    <div className="container mx-auto max-w-3xl">
                        <Link href="/blogg" className="inline-flex items-center text-gold-500 text-xs tracking-widest uppercase mb-6 hover:text-white transition-colors">
                            ← Tillbaka till Journalen
                        </Link>
                        <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-4 drop-shadow-lg">
                            {post.title}
                        </h1>
                        <span className="text-neutral-400 font-light tracking-widest text-sm">
                            {post.date}
                        </span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <article className="container mx-auto max-w-3xl px-6 py-20">
                <div
                    className="prose prose-invert prose-lg prose-headings:font-serif prose-headings:text-gold-500 prose-p:font-light prose-p:text-neutral-300 prose-blockquote:border-gold-500 prose-blockquote:bg-white/5 prose-blockquote:p-4 prose-blockquote:not-italic prose-blockquote:text-white prose-a:text-gold-500 hover:prose-a:text-gold-400"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Footer CTA */}
                <div className="mt-20 pt-12 border-t border-white/10 text-center">
                    <h3 className="font-serif text-3xl mb-4">Redo för en förändring?</h3>
                    <p className="text-neutral-400 mb-8 font-light">Boka en tid hos våra experter idag.</p>
                    <a
                        href="tel:0707678779"
                        className="block w-full md:inline-block md:w-auto bg-gold-600 text-black px-8 py-3 font-medium tracking-widest hover:bg-white transition-colors duration-300 rounded-sm"
                    >
                        BOKA TID: 070-767 87 79
                    </a>
                </div>
            </article>
        </main>
    );
}
