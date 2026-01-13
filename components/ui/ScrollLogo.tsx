'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollLogo() {
    const { scrollY } = useScroll();
    const [isMobile, setIsMobile] = useState(false);
    const [viewportHeight, setViewportHeight] = useState(800);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setViewportHeight(window.innerHeight);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculate EXACT pixel positions
    // Logo height at scale 1 is approximately 120px (text-9xl)
    const logoHeight = isMobile ? 60 : 120;
    const centerPosition = (viewportHeight / 2) - (logoHeight / 2); // True center
    const navPosition = 24; // Final position in navbar

    // Animation range: from scroll 0 to when we've scrolled past the cover
    const transitionEnd = viewportHeight;

    // Use NUMBER PIXELS, not strings with vh/calc
    const topPosition = useTransform(
        scrollY,
        [0, transitionEnd],
        [centerPosition, navPosition]
    );

    const scale = useTransform(
        scrollY,
        [0, transitionEnd],
        [isMobile ? 0.35 : 1, isMobile ? 0.15 : 0.22]
    );

    // Color transition
    const color = useTransform(scrollY, [0, transitionEnd], ["#ffffff", "#D4AF37"]);

    return (
        <motion.div
            style={{
                position: 'fixed',
                left: '50%',
                x: '-50%',
                top: topPosition,
                scale: scale,
                color: color,
                zIndex: 50,
                transformOrigin: "center top",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-serif font-medium whitespace-nowrap pointer-events-none select-none text-9xl tracking-tighter leading-none"
        >
            Salong <span className="font-light italic">LaVie</span>
        </motion.div>
    );
}
