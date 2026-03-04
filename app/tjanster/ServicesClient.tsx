"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const services = [
    {
        category: "Herrklippning",
        description: "Professionell herrklippning i Borås anpassad efter din stil och hårtyp. Vi erbjuder behandlingar för både kort och långt hår med precision och omsorg.",
        image: "/IMG_8723.JPG",
        items: [
            { name: "Herrklippning", price: "250 kr", description: "Noggrann klippning med form, finish och professionell styling." },
            { name: "Långt hår", price: "400 kr", description: "Specialiserad klippning och vård för längre hår." },
            { name: "Hår & Skägg", price: "300 kr", description: "Komplett paket – klippning och formning av skägg." },
        ]
    },
    {
        category: "Färg & Slingor",
        description: "Kreativa färgbehandlingar som lyfter din look. Vi använder högkvalitativa produkter för glans och hållbarhet.",
        image: "/bilder2/dam.jpg",
        items: [
            { name: "Färgning", price: "från 800 kr", description: "Professionell färg med glans och hållbarhet. Konsultation ingår." },
            { name: "Slingor", price: "från 1000 kr", description: "Naturliga eller markanta slingor, anpassat efter önskemål." },
        ]
    },
    {
        category: "Barnklippning",
        description: "Trygg, snabb och lekfull upplevelse för de minsta med fokus på komfort. Vi är vana vid att klippa barn i alla åldrar.",
        image: "/IMG_8729.JPG",
        items: [
            { name: "Barnklippning", price: "180 kr", description: "Klippning för barn upp till 12 år." },
            { name: "Skonsam styling", price: "Ingår", description: "Enklare styling som barnet tycker om." },
        ]
    }
];

/**
 * Attaches a native IntersectionObserver to the container.
 * When a [data-animate] child enters the viewport, the 'is-visible'
 * class is added which triggers a CSS fade-in transition.
 * This is 100% reliable — no Framer Motion scroll-observer quirks.
 */
function useFadeInOnScroll() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        const targets = container.querySelectorAll<HTMLElement>("[data-animate]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const delay = (entry.target as HTMLElement).dataset.delay ?? "0";
                        setTimeout(() => {
                            entry.target.classList.add("is-visible");
                        }, parseInt(delay, 10));
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );

        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return ref;
}

export default function ServicesClient() {
    const containerRef = useFadeInOnScroll();

    return (
        <>
            <style>{`
                @keyframes heroFadeIn {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                [data-animate] {
                    opacity: 0;
                    transform: translateY(28px);
                    transition: opacity 0.75s ease, transform 0.75s ease;
                }
                [data-animate].is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>

            <main className="min-h-screen bg-dark-900 text-white selection:bg-gold-500 selection:text-white">

                {/* ── Hero ── */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/IMG_8725.JPG"
                            alt="Frisörverktyg på Salong LaVie i Borås"
                            fill
                            sizes="100vw"
                            className="object-cover opacity-40 scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                    </div>

                    {/* CSS keyframe animation — always fires on mount, no observer needed */}
                    <div
                        className="relative z-10 text-center max-w-4xl px-6"
                        style={{ animation: "heroFadeIn 1s ease 0.2s both" }}
                    >
                        <h1 className="font-serif text-4xl md:text-7xl text-gold-500 mb-6 drop-shadow-lg">
                            Priser &amp; Tjänster
                        </h1>
                        <p className="text-neutral-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
                            Upplev professionell frisörvård i Borås där stil möter elegans.
                            Vi skräddarsyr varje behandling för att passa just dig.
                        </p>
                    </div>
                </section>

                {/* ── Services List ── */}
                <section className="py-24 container mx-auto px-6">
                    <div ref={containerRef} className="space-y-32">
                        {services.map((category, index) => (
                            <div
                                key={category.category}
                                data-animate
                                data-delay={String(index * 150)}
                                className={`flex flex-col md:flex-row gap-12 lg:gap-24 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Image Side */}
                                <div className="w-full md:w-1/2 relative group">
                                    <div className="relative h-[500px] w-full overflow-hidden rounded-sm border border-neutral-800">
                                        <Image
                                            src={category.image}
                                            alt={`${category.category} hos frisör i Borås - Salong LaVie`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500" />
                                        <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold-500/30 z-10" />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-1/2 space-y-8">
                                    <div>
                                        <h2 className="font-serif text-4xl md:text-5xl text-gold-500 mb-4">{category.category}</h2>
                                        <p className="text-neutral-400 font-light text-lg">{category.description}</p>
                                    </div>

                                    <div className="grid gap-6">
                                        {category.items.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="group border-b border-neutral-800 pb-6 hover:border-gold-500/50 transition-colors duration-300"
                                            >
                                                <div className="flex justify-between items-baseline mb-2">
                                                    <h3 className="font-serif text-xl md:text-2xl text-white group-hover:text-gold-400 transition-colors">
                                                        {item.name}
                                                    </h3>
                                                    <span className="text-gold-500 font-medium text-lg whitespace-nowrap">{item.price}</span>
                                                </div>
                                                <p className="text-neutral-500 text-sm md:text-base font-light group-hover:text-neutral-400 transition-colors">
                                                    {item.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="py-24 bg-neutral-900/50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <h2 className="font-serif text-4xl text-white mb-8">Redo att boka din frisör i Borås?</h2>
                        <a
                            href="tel:0707678779"
                            className="inline-block px-12 py-4 bg-gold-600 hover:bg-gold-500 text-white font-medium tracking-wider transition-all duration-300 hover:scale-105 rounded-sm"
                        >
                            Ring &amp; Boka Tid: 070-767 87 79
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}
