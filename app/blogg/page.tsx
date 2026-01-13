import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blogg | Frisörtips & Trender för Män",
    description: "Läs våra expertartiklar om herrfrisyrer, skäggvård och groomingtrender i Borås. Tips från professionella barberare på Salong LaVie.",
    keywords: ["frisör tips borås", "herrfrisyrer 2024", "skäggvård tips", "barberare blogg", "grooming borås"],
    alternates: {
        canonical: 'https://salonglavie.se/blogg',
    },
    openGraph: {
        title: "Blogg | Salong LaVie Borås",
        description: "Experttips om herrfrisyrer och skäggvård från Borås bästa barberare.",
        url: 'https://salonglavie.se/blogg',
    },
};

export default function BlogPage() {
    return (
        <main className="bg-dark-900 min-h-screen text-white pt-24 md:pt-32 pb-20 px-6 selection:bg-gold-500 selection:text-white">
            <div className="container mx-auto">
                <header className="text-center mb-20">
                    <span className="text-gold-500 tracking-[0.3em] uppercase text-sm font-bold block mb-4">
                        Tips från Din Frisör i Borås
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl mb-6">
                        Journalen
                    </h1>
                    <p className="text-neutral-400 font-light max-w-xl mx-auto text-lg">
                        Din guide till modern manlig grooming, trender och livsstil. Experttips från professionella barberare.
                    </p>
                </header>

                <div className="grid md:grid-cols-3 gap-10">
                    {blogPosts.map((post) => (
                        <Link href={`/blogg/${post.slug}`} key={post.slug} className="group flex flex-col cursor-pointer">
                            <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-neutral-900 border border-white/5 group-hover:border-gold-500/30 transition-colors duration-500">
                                <Image
                                    src={post.image}
                                    alt={`${post.title} - Frisörtips från Borås`}
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 animate-slow-zoom"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-60" />
                            </div>

                            <div className="flex flex-col flex-grow space-y-3">
                                <div className="flex items-center justify-between text-xs tracking-widest uppercase font-medium">
                                    <span className="text-gold-500">{post.date}</span>
                                    <span className="text-neutral-600 group-hover:text-neutral-400 transition-colors">Läs mer</span>
                                </div>

                                <h2 className="font-serif text-2xl leading-tight group-hover:text-gold-500 transition-colors duration-300">
                                    {post.title}
                                </h2>

                                <p className="text-neutral-400 font-light text-sm line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
