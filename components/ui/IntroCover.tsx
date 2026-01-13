'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function IntroCover() {
    return (
        <div className="h-screen w-full bg-dark-900 z-40 relative flex flex-col items-center justify-center">
            {/* "Välkommen till" Text */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-[32vh] md:top-[35vh] text-center w-full z-40 pointer-events-none"
            >
                <span className="font-script text-2xl md:text-5xl text-gold-500/90 tracking-wide">Välkommen till</span>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { duration: 1, delay: 1.5 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-12 text-white/30 flex flex-col items-center gap-2 pointer-events-none"
            >
                <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
                <ChevronDown size={24} className="text-gold-500" />
            </motion.div>
        </div>
    );
}
