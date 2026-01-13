'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Star } from 'lucide-react';
import Link from 'next/link';

interface Review {
    id: number;
    name: string;
    text: string;
    role: string;
}

const reviews: Review[] = [
    {
        id: 1,
        name: "Antonios Kawoogh",
        text: "Bästa frisör salongen! Alltid lika nöjd Rekommenderas starkt 🤝",
        role: "Omdöme"
    },
    {
        id: 2,
        name: "Johanna Lindahl",
        text: "Jättenöjd efter mitt besök och nya frisyr! Trevligt bemötande och med en söt hund!",
        role: "Omdöme"
    },
    {
        id: 3,
        name: "Katerina Stefouli",
        text: "Very cozy and clean salon! 100% recommend it ❤️",
        role: "Omdöme"
    }
];

export default function ReviewsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="flex justify-center mb-6">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} className="text-gold-500 fill-gold-500" />
                            ))}
                        </div>
                    </div>

                    <h3 className="font-serif text-3xl md:text-5xl text-white italic leading-relaxed mb-8 selection:bg-gold-500">
                        "{reviews[currentIndex].text}"
                    </h3>

                    <div className="flex items-center justify-center gap-4 text-sm tracking-widest">
                        <div className="h-[1px] w-12 bg-gold-500" />
                        <span className="text-white font-medium uppercase">{reviews[currentIndex].name}</span>
                        <span className="text-gold-500">•</span>
                        <span className="text-neutral-400 uppercase">{reviews[currentIndex].role}</span>
                        <div className="h-[1px] w-12 bg-gold-500" />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-8 mt-12">
                <button
                    onClick={prevReview}
                    className="p-2 border border-white/10 rounded-full hover:border-gold-500 text-neutral-400 hover:text-gold-500 transition-all duration-300 group"
                    aria-label="Föregående omdöme"
                >
                    <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>

                <Link
                    href="https://www.google.com/search?q=salong+lavie+bor%C3%A5s+recensioner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.2em] text-gold-500 hover:text-white transition-colors border-b border-transparent hover:border-gold-500 pb-1"
                >
                    Läs fler på Google
                </Link>

                <button
                    onClick={nextReview}
                    className="p-2 border border-white/10 rounded-full hover:border-gold-500 text-neutral-400 hover:text-gold-500 transition-all duration-300 group"
                    aria-label="Nästa omdöme"
                >
                    <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
            </div>
        </div>
    );
}
