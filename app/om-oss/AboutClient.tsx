'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutClient() {
    return (
        <main className="bg-dark-900 min-h-screen text-white selection:bg-gold-500 selection:text-white">

            {/* Hero Section */}
            <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/IMG_8735.JPG"
                        alt="Salong LaVie interiör - Premium barberare i Borås"
                        fill
                        className="object-cover opacity-60 animate-slow-zoom"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-transparent to-dark-900" />
                </div>

                <div className="relative z-10 text-center max-w-4xl px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-gold-500 tracking-[0.4em] uppercase text-sm font-medium block mb-6"
                    >
                        Barberare i Borås sedan 2024
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif text-4xl md:text-8xl leading-none mb-8"
                    >
                        MER ÄN EN <br /> <span className="text-gold-500 italic">FRISÖRSALONG</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-neutral-300 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Vi skapade Salong LaVie med en enkel vision: Att erbjuda Borås män en plats där hantverk, stil och avkoppling möts.
                    </motion.p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 md:py-32 px-6 container mx-auto">
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
                    <div className="md:w-1/2 space-y-8">
                        <span className="text-gold-500 text-xs tracking-[0.2em] uppercase font-bold border-l-2 border-gold-500 pl-4">
                            Din Barberare i Borås
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                            Detaljerna gör <br /> <span className="text-neutral-500 italic">helheten.</span>
                        </h2>
                        <div className="space-y-6 text-neutral-400 font-light text-lg leading-relaxed">
                            <p>
                                För oss handlar barbering inte bara om att klippa hår. Det är en ritual. En stund att stanna upp, bli omhändertagen och lämna med förnyat självförtroende.
                            </p>
                            <p>
                                Som frisör i Borås kombinerar vi klassiska tekniker med modern precision. Oavsett om du är ute efter en tidlös frisyr eller en modern fade, så lägger vi ner samma passion och noggrannhet i varje klipptag.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 relative h-[400px] md:h-[600px] w-full group">
                        <div className="absolute inset-0 border border-gold-500/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                        <div className="relative h-full w-full overflow-hidden">
                            <Image
                                src="/IMG_8737.JPG"
                                alt="Barberare arbetar med precision på Salong LaVie Borås"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Parallax / Mood Break */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/IMG_8735.JPG"
                        alt="Salong LaVie atmosfär - frisörsalong i centrala Borås"
                        fill
                        className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <h3 className="font-serif text-3xl md:text-6xl text-white leading-tight mb-8">
                        "Kvalitet är aldrig en slump. Det är alltid resultatet av en intelligent ansträngning."
                    </h3>
                    <div className="h-1 w-24 bg-gold-500 mx-auto" />
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-32 bg-neutral-950 px-6">
                <div className="container mx-auto grid md:grid-cols-3 gap-12 text-center">
                    <div className="space-y-4 group p-8 border border-white/5 hover:border-gold-500/30 transition-colors duration-500">
                        <h4 className="font-serif text-2xl text-white group-hover:text-gold-500 transition-colors">Atmosfär</h4>
                        <p className="text-neutral-500 font-light leading-relaxed">
                            En frisörsalong där du kan slappna av. Lugn musik, doften av premiumprodukter och en kaffe i handen.
                        </p>
                    </div>
                    <div className="space-y-4 group p-8 border border-white/5 hover:border-gold-500/30 transition-colors duration-500">
                        <h4 className="font-serif text-2xl text-white group-hover:text-gold-500 transition-colors">Hantverk</h4>
                        <p className="text-neutral-500 font-light leading-relaxed">
                            Våra barberare är mästare på sitt yrke. Vi utbildar oss ständigt för att ligga i framkant som frisör i Borås.
                        </p>
                    </div>
                    <div className="space-y-4 group p-8 border border-white/5 hover:border-gold-500/30 transition-colors duration-500">
                        <h4 className="font-serif text-2xl text-white group-hover:text-gold-500 transition-colors">Gemenskap</h4>
                        <p className="text-neutral-500 font-light leading-relaxed">
                            Salong LaVie är mer än en frisörsalong. Det är en mötesplats. En del av Borås hjärta på Västerlånggatan.
                        </p>
                    </div>
                </div>
            </section>

        </main>
    );
}
