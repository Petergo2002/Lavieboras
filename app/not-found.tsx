'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-dark-900 flex flex-col items-center justify-center px-6 selection:bg-gold-500 selection:text-white">
            <div className="text-center max-w-lg space-y-8">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-gold-500 tracking-[0.2em] text-xs uppercase block font-medium"
                >
                    404 — Sidan hittades inte
                </motion.span>
                
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-serif text-5xl md:text-7xl text-white leading-tight"
                >
                    Stilfullt <span className="text-gold-500 italic">borta</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-neutral-400 font-light text-base leading-relaxed"
                >
                    Sidan du letar efter verkar ha klippts bort eller flyttats till en annan adress. 
                    Låt oss guida dig tillbaka till salongen.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/"
                        className="px-8 py-3 bg-gold-600 text-white hover:bg-gold-500 transition-colors tracking-widest text-xs uppercase rounded-sm w-full sm:w-auto text-center font-medium"
                    >
                        Till Startsidan
                    </Link>
                    <Link
                        href="/tjanster"
                        className="px-8 py-3 border border-white/20 text-white hover:border-gold-500 hover:text-gold-500 transition-all tracking-widest text-xs uppercase rounded-sm w-full sm:w-auto text-center font-medium"
                    >
                        Våra Tjänster
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
