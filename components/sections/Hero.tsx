'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-dark-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/IMG_8737.JPG"
                    alt="Barber Shop Interior"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                {/* Premium Gradient Overlay - Mobile: darker overall, Desktop: left-weighted */}
                <div className="absolute inset-0 bg-dark-900/40 lg:bg-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-900/60 to-transparent" />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Semantic H1 for SEO (Hidden) */}
            <h1 className="sr-only">Salong LaVie – Herrfrisör & Barberare i Borås</h1>

            {/* Main Content Container */}
            <div className="relative z-10 h-full w-full container mx-auto px-6 md:px-12 pb-12 md:pb-20 flex flex-col justify-end">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">

                    {/* Visual Headline - Bottom Left - Massive Serif */}
                    <div className="md:col-span-8 lg:col-span-9 relative">
                        {/* Decorative Line */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 100 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="h-[1px] bg-gold-500 mb-6 md:mb-8"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-serif font-black text-white leading-[0.9] tracking-tighter"
                        >
                            <span className="block text-[10vw] md:text-[4rem] lg:text-[5.5rem] xl:text-[6.5rem]">
                                PRECISION.
                            </span>
                            <span className="block text-[10vw] md:text-[4rem] lg:text-[5.5rem] xl:text-[6.5rem] text-gold-500 italic relative z-10 mix-blend-screen">
                                STIL.
                            </span>
                            <span className="block text-[10vw] md:text-[4rem] lg:text-[5.5rem] xl:text-[6.5rem]">
                                TRADITION.
                            </span>
                        </motion.div>
                    </div>

                    {/* Snippet & CTA - Bottom Right */}
                    <div className="md:col-span-4 lg:col-span-3 flex flex-col items-start md:items-end md:text-right gap-8 md:gap-12 pb-2">
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-neutral-200 font-light text-sm md:text-base leading-relaxed max-w-[280px]"
                        >
                            <span className="text-gold-500 font-medium block mb-2 uppercase tracking-widest text-xs">Salong LaVie</span>
                            Din destination för modern grooming i centrala Borås. Upplev skillnaden av äkta hantverk.
                        </motion.p>

                        <motion.a
                            href="tel:0707678779"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
                            className="group relative w-28 h-28 md:w-32 md:h-32 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-gold-500 hover:border-gold-500 transition-all duration-500"
                        >
                            <div className="absolute inset-0 rounded-full border border-white/10 scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700" />
                            <span className="relative z-10 text-white font-sans font-medium text-xs tracking-widest uppercase group-hover:text-dark-900 transition-colors">
                                Ring<br />Oss
                            </span>
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}
