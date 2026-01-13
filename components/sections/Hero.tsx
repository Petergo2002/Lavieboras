'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-dark-900">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/IMG_8737.JPG"
                    alt="Barber Shop Interior"
                    fill
                    className="object-cover opacity-70"
                    priority
                />
                {/* Premium Gradient Overlay - Mobile: darker overall, Desktop: left-weighted */}
                <div className="absolute inset-0 bg-dark-900/60 lg:bg-transparent" />
                <div className="hidden lg:block absolute inset-0 bg-gradient-to-l from-dark-900/10 via-dark-900/50 to-dark-900/95" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent" />
            </div>

            {/* Vertical Decorative Text - Only on Desktop */}
            <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-8 text-white/20">
                <div className="w-[1px] h-40 bg-gradient-to-b from-transparent via-gold-500/50 to-transparent" />
                <span className="writing-vertical-rl text-xs tracking-[0.5em] font-light uppercase mix-blend-overlay">
                    Est. 2024 • Borås
                </span>
                <div className="w-[1px] h-40 bg-gradient-to-b from-transparent via-gold-500/50 to-transparent" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 h-full w-full flex items-center md:items-center">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Text Content - Centered on Mobile, Left on Desktop */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl lg:max-w-3xl mx-auto lg:mx-0 pt-8 md:pt-0"
                    >
                        {/* Script Intro */}
                        <span className="font-script text-gold-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl mb-4 lg:mb-5">
                            Välkommen till
                        </span>

                        {/* Main Slogan - Stacked & Bold - LARGER on Mobile */}
                        <h1 className="text-white font-sans font-bold text-5xl sm:text-6xl md:text-6xl lg:text-[5rem] leading-[0.9] tracking-tighter mb-10 lg:mb-8">
                            <span className="block text-white drop-shadow-2xl">
                                PRECISION.
                            </span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-200">
                                STIL.
                            </span>
                            <span className="block text-white drop-shadow-2xl">
                                TRADITION.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-200 text-sm sm:text-base lg:text-lg font-light tracking-wide max-w-md lg:max-w-lg mb-12 lg:mb-10 leading-relaxed">
                            Upplev en modern barbershop <span className="text-gold-500 font-medium">i Borås</span> där klassiskt hantverk möter nutida stil. Vi skapar mer än bara frisyrer – vi bygger din image.
                        </p>

                        {/* Single CTA Button - Links to Phone - Pushed lower on mobile */}
                        <a
                            href="tel:0707578779"
                            className="bg-gold-500 text-dark-900 px-10 py-4 lg:px-12 lg:py-5 font-sans font-medium tracking-wider text-xs sm:text-sm lg:text-base uppercase hover:bg-white hover:text-dark-900 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 rounded-full transform hover:scale-105"
                        >
                            Boka Tid Nu
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
