import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-neutral-900">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

                {/* Brand */}
                <div>
                    <h3 className="font-serif text-2xl text-gold-500 mb-6 tracking-tighter">Salong <span className="font-light italic">LaVie</span></h3>
                    <p className="font-light text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                        En exklusiv upplevelse för den moderna mannen. Vi kombinerar klassiskt hantverk med modern stil.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-4 text-sm font-light tracking-wider">
                    <h4 className="text-white font-medium mb-2">MENY</h4>
                    <Link href="/tjanster" className="hover:text-gold-500 transition-colors">TJÄNSTER</Link>
                    <Link href="/om-oss" className="hover:text-gold-500 transition-colors">OM OSS</Link>
                    <Link href="/blogg" className="hover:text-gold-500 transition-colors">BLOGG</Link>
                    <Link href="/kontakt" className="hover:text-gold-500 transition-colors">KONTAKT</Link>
                </div>

                {/* Social / Contact */}
                <div>
                    <h4 className="text-white font-medium mb-6 text-sm tracking-wider">FÖLJ OSS</h4>
                    <div className="flex justify-center md:justify-start gap-6 mb-8">
                        <Link href="https://instagram.com/lavieboras" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors"><Instagram size={20} /></Link>
                        <Link href="https://www.facebook.com/SalongLaVieBoras/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors"><Facebook size={20} /></Link>
                    </div>
                    <p className="text-sm">Västerlånggatan 1</p>
                    <p className="text-sm">503 30 Borås</p>
                    <p className="text-sm mt-2">070-767 87 79</p>
                </div>
            </div>

            <div className="border-t border-neutral-900 mt-16 pt-8 text-center text-xs text-neutral-600">
                © {new Date().getFullYear()} Salong LaVie. Alla rättigheter förbehållna.
            </div>
        </footer>
    );
}
