import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getBlogPosts, isValidJsonLdSchema } from '@/lib/blog-data';
import SafeImage from '@/components/ui/SafeImage';
import type { Metadata } from 'next';

function formatBlogDate(date: string) {
    const d = new Date(date);
    if (Number.isNaN(d.getTime())) return date;
    return new Intl.DateTimeFormat('sv-SE', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }).format(d);
}

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
    const blogPosts = await getBlogPosts();
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Artikel hittades inte | Lavie Borås',
        };
    }

    return {
        title: `${post.title} | Lavie Borås`,
        description: post.excerpt,
        keywords: post.keywords,
        alternates: {
            canonical: `https://www.lavieboras.se/blogg/${slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="bg-dark-900 min-h-screen text-white selection:bg-gold-500 selection:text-white">
            {isValidJsonLdSchema(post.schema) && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(post.schema) }}
                />
            )}
            {/* Hero Image */}
            <div className="relative h-[60vh] w-full">
                <SafeImage
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="100vw"
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 pb-12">
                    <div className="container mx-auto max-w-7xl">
                        <Link href="/blogg" className="inline-flex items-center text-gold-500 text-xs tracking-widest uppercase mb-6 hover:text-white transition-colors">
                            ← Tillbaka till Journalen
                        </Link>
                        <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-4 drop-shadow-lg">
                            {post.title}
                        </h1>
                        <span className="text-neutral-400 font-light tracking-widest text-sm">
                            {formatBlogDate(post.date)}
                        </span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <article className="container mx-auto max-w-3xl px-6 py-20">
                <div
                    className={[
                        "prose prose-invert prose-lg max-w-none",
                        // Headings — serif gold
                        "prose-headings:font-serif prose-headings:text-white prose-headings:leading-tight",
                        "prose-h1:text-5xl prose-h1:mb-8 prose-h1:text-white",
                        "prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-gold-400 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4",
                        "prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gold-300",
                        // Paragraphs
                        "prose-p:font-light prose-p:text-neutral-300 prose-p:leading-[1.9] prose-p:mb-6",
                        // Strong / emphasis
                        "prose-strong:text-white prose-strong:font-semibold",
                        "prose-em:text-gold-300 prose-em:not-italic",
                        // Links
                        "prose-a:text-gold-400 prose-a:no-underline hover:prose-a:text-gold-300 prose-a:border-b prose-a:border-gold-500/40 hover:prose-a:border-gold-400 prose-a:transition-colors",
                        // Lists
                        "prose-ul:text-neutral-300 prose-ul:font-light prose-ul:space-y-2",
                        "prose-ol:text-neutral-300 prose-ol:font-light prose-ol:space-y-2",
                        "prose-li:marker:text-gold-500",
                        // Blockquote
                        "prose-blockquote:border-l-2 prose-blockquote:border-gold-500 prose-blockquote:bg-white/5 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-sm prose-blockquote:text-neutral-300 prose-blockquote:not-italic",
                        // Tables
                        "prose-table:text-sm prose-table:border-collapse",
                        "prose-thead:border-b prose-thead:border-white/20",
                        "prose-th:text-gold-400 prose-th:font-medium prose-th:tracking-widest prose-th:uppercase prose-th:text-xs prose-th:pb-3 prose-th:pr-6",
                        "prose-td:text-neutral-300 prose-td:font-light prose-td:py-3 prose-td:pr-6 prose-td:border-b prose-td:border-white/5",
                        // HR divider
                        "prose-hr:border-white/10 prose-hr:my-12",
                        // Images
                        "prose-img:rounded-sm prose-img:w-full prose-img:shadow-2xl prose-img:my-10",
                        // Code
                        "prose-code:text-gold-300 prose-code:bg-white/5 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:text-sm",
                    ].join(" ")}
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
