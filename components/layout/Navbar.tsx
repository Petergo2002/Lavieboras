'use client';

import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: 'HEM', href: '/' },
        { name: 'TJÄNSTER', href: '/tjanster' },
        { name: 'OM OSS', href: '/om-oss' },
        { name: 'BLOGG', href: '/blogg' },
    ];

    // Animation Variants
    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as any,
                when: "afterChildren" // Wait for children to animate out
            }
        },
        open: {
            opacity: 1,
            height: '100vh',
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as any,
                when: "beforeChildren", // Animate container first
                staggerChildren: 0.1
            }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, y: 20 },
        open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
    };

    // Determine background class
    // If menu is open -> always solid dark background
    // If scrolled -> solid dark background
    // Otherwise -> transparent
    const navBackgroundClass = mobileMenuOpen || isScrolled
        ? 'bg-dark-900/95 backdrop-blur-md border-b border-gold-500/10 shadow-lg py-4'
        : 'bg-transparent py-6';

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBackgroundClass}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 flex justify-between items-center relative">
                {/* Navigation Links Left */}
                <div className="hidden md:flex gap-8 text-sm tracking-widest text-neutral-200 font-medium">
                    {navLinks.slice(0, 2).map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`hover:text-gold-500 transition-colors relative ${pathname === link.href
                                ? 'text-gold-500 after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-gold-500'
                                : ''
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Logo - Perfectly Centered via Absolute Positioning on Desktop */}
                {!isHomePage && (
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                        <Link href="/" className="font-serif text-2xl text-gold-500 tracking-tighter hover:text-white transition-colors whitespace-nowrap">
                            Salong <span className="font-light italic">LaVie</span>
                        </Link>
                    </div>
                )}

                {/* Placeholder for homepage structure if needed, but absolute positioning removes need for flow spacer */}
                {isHomePage && (
                    <span className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none invisible">
                        {/* Placeholder to keep logic consistent if we ever revert to flow */}
                    </span>
                )}

                {/* Navigation Links Right */}
                <div className="hidden md:flex gap-8 items-center text-sm tracking-widest text-neutral-200 font-medium ml-auto">
                    {navLinks.slice(2).map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`hover:text-gold-500 transition-colors relative ${pathname === link.href
                                ? 'text-gold-500 after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-gold-500'
                                : ''
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/kontakt" className="px-6 py-2 border border-gold-600 text-gold-500 hover:bg-gold-600 hover:text-white transition-all duration-300 rounded-sm font-medium tracking-widest text-xs">
                        BOKA TID
                    </Link>
                </div>

                {/* Mobile Layout - Flex Between */}
                <div className="flex w-full md:hidden justify-between items-center z-50 relative">
                    {/* Mobile Logo - Visible only on non-home pages */}
                    {!isHomePage ? (
                        <Link href="/" className="font-serif text-xl text-gold-500 tracking-tighter">
                            Salong <span className="font-light italic">LaVie</span>
                        </Link>
                    ) : (
                        <span></span> /* Empty span to push menu button to right if logo is hidden */
                    )}

                    {/* Mobile Menu Button */}
                    <button
                        className="text-gold-500 p-2 -mr-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="md:hidden bg-dark-900 border-t border-white/5 absolute top-[60px] left-0 right-0 overflow-hidden" // top-[60px] aligns with navbar height
                        style={{ height: 'calc(100vh - 60px)' }} // Full height minus navbar
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
                            {navLinks.map((link) => (
                                <motion.div key={link.name} variants={linkVariants}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`text-2xl font-serif tracking-widest transition-colors ${pathname === link.href ? 'text-gold-500 italic' : 'text-white hover:text-gold-500'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div variants={linkVariants} className="mt-8">
                                <Link
                                    href="/kontakt"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-8 py-3 border border-gold-600 text-gold-500 hover:bg-gold-600 hover:text-white transition-all duration-300 rounded-sm font-medium tracking-widest text-sm"
                                >
                                    BOKA TID
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
