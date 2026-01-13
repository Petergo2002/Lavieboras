'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export default function ContactClient() {
    return (
        <main className="min-h-screen bg-dark-900 text-white selection:bg-gold-500 selection:text-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/IMG_8726.JPG"
                        alt="Salong LaVie interiör - Frisörsalong i centrala Borås"
                        fill
                        sizes="100vw"
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-transparent to-dark-900" />
                </div>

                <div className="relative z-10 text-center max-w-4xl px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-gold-500 tracking-[0.3em] uppercase text-sm font-medium block mb-6"
                    >
                        Frisör i Borås Centrum
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif text-4xl md:text-7xl leading-none mb-8"
                    >
                        Kontakta <span className="text-gold-500 italic">Oss</span>
                    </motion.h1>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="py-24 px-6">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

                        {/* Left: Contact Details */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="space-y-12"
                        >
                            <div>
                                <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium border-l-2 border-gold-500 pl-4 block mb-6">
                                    Besök Din Frisör i Borås
                                </span>
                                <h2 className="font-serif text-3xl md:text-4xl mb-8">
                                    Vi ser fram emot att <span className="text-gold-500 italic">träffa dig</span>
                                </h2>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-6">
                                {/* Address */}
                                <div className="group flex items-start gap-6 p-6 border border-white/5 hover:border-gold-500/30 transition-colors duration-500">
                                    <div className="p-3 bg-gold-500/10 rounded-sm">
                                        <MapPin className="text-gold-500" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl text-white group-hover:text-gold-500 transition-colors mb-2">Adress</h3>
                                        <p className="text-neutral-400 font-light">
                                            Västerlånggatan 1<br />
                                            503 30 Borås
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="group flex items-start gap-6 p-6 border border-white/5 hover:border-gold-500/30 transition-colors duration-500">
                                    <div className="p-3 bg-gold-500/10 rounded-sm">
                                        <Phone className="text-gold-500" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl text-white group-hover:text-gold-500 transition-colors mb-2">Boka Tid</h3>
                                        <a
                                            href="tel:0707578779"
                                            className="text-neutral-400 font-light hover:text-gold-500 transition-colors"
                                        >
                                            070-757 87 79
                                        </a>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="group flex items-start gap-6 p-6 border border-white/5 hover:border-gold-500/30 transition-colors duration-500">
                                    <div className="p-3 bg-gold-500/10 rounded-sm">
                                        <Clock className="text-gold-500" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl text-white group-hover:text-gold-500 transition-colors mb-2">Öppettider</h3>
                                        <div className="text-neutral-400 font-light space-y-1">
                                            <p>Mån–Fre: 09:00 – 19:00</p>
                                            <p>Lör: 09:00 – 16:00</p>
                                            <p>Sön: Stängt</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-4">
                                <p className="text-neutral-500 text-sm tracking-widest uppercase mb-4">Följ oss</p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://instagram.com/lavieboras"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 border border-white/10 hover:border-gold-500/50 hover:text-gold-500 transition-all duration-300 rounded-sm"
                                    >
                                        <Instagram size={20} />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/SalongLaVieBoras/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 border border-white/10 hover:border-gold-500/50 hover:text-gold-500 transition-all duration-300 rounded-sm"
                                    >
                                        <Facebook size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Image + CTA */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative"
                        >
                            <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
                                <Image
                                    src="/IMG_8735.JPG"
                                    alt="Salong LaVie - Bästa frisören i Borås"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />

                                {/* Decorative Frame */}
                                <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold-500/20" />
                            </div>

                            {/* CTA Card */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-dark-900/95 backdrop-blur-sm border-t border-gold-500/20">
                                <h3 className="font-serif text-lg md:text-2xl mb-2 md:mb-4">Boka din frisör i Borås</h3>
                                <p className="text-neutral-400 font-light text-sm md:text-base mb-4 md:mb-6">
                                    Ring oss för att boka din tid hos Borås bästa barberare.
                                </p>
                                <a
                                    href="tel:0707578779"
                                    className="block w-full text-center px-6 md:px-8 py-3 md:py-4 bg-gold-600 hover:bg-gold-500 text-white font-medium tracking-widest transition-all duration-300 rounded-sm uppercase text-xs md:text-sm"
                                >
                                    Ring & Boka Nu
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section (Visual only) */}
            <section className="relative h-[40vh] bg-neutral-950">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <MapPin className="text-gold-500 mx-auto mb-4" size={48} />
                        <p className="text-neutral-400 font-light">
                            Västerlånggatan 1, 503 30 Borås
                        </p>
                        <a
                            href="https://maps.google.com/?q=Västerlånggatan+1+503+30+Borås+Sweden"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-gold-500 text-sm tracking-widest uppercase hover:text-white transition-colors"
                        >
                            Hitta till din frisör i Borås →
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
