import Hero from "@/components/sections/Hero";
import ScrollLogo from "@/components/ui/ScrollLogo";
import IntroCover from "@/components/ui/IntroCover";
import ReviewsCarousel from "@/components/ui/ReviewsCarousel";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Frisör & Barberare i Borås | Salong LaVie",
    description: "Salong LaVie är Borås ledande frisörsalong och barberare. Professionell herrklippning, skäggvård och styling i centrala Borås. Boka tid: 070-757 87 79",
    keywords: ["frisör borås", "barberare borås", "salong lavie", "herrfrisör borås", "klippning borås"],
    alternates: {
        canonical: 'https://lavieboras.se',
    },
};

export default function Home() {
    return (
        <main className="min-h-screen bg-dark-900 selection:bg-gold-500 selection:text-white">
            <ScrollLogo />

            <IntroCover />

            <Hero />

            {/* Intro Section - "The Hook" */}
            <section className="py-20 md:py-32 px-6 container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    <div className="md:w-1/2 space-y-8">
                        <span className="text-gold-500 tracking-widest text-sm font-medium uppercase border-l-2 border-gold-500 pl-4">
                            Din Frisör i Borås
                        </span>
                        <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">
                            Där tradition möter <span className="text-gold-500 italic">modern</span> precision.
                        </h2>
                        <p className="text-neutral-400 font-light text-lg leading-relaxed max-w-xl">
                            Vi är mer än bara en frisörsalong i Borås. Som erfarna barberare skapar vi en destination för den moderna gentlemannen som värdesätter kvalitet,
                            detaljer och en stund av avkoppling. Stig in i en värld av exklusivitet på Västerlånggatan.
                        </p>
                        <div className="pt-4">
                            <Link href="/om-oss" className="text-white border-b border-gold-500 pb-1 hover:text-gold-500 transition-colors uppercase tracking-widest text-xs">
                                Läs vår historia
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 relative h-[400px] md:h-[600px] w-full">
                        <Image
                            src="/IMG_8723.JPG"
                            alt="Professionell barberare klipper kund på Salong LaVie i Borås"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                        />
                        <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-gold-500/30 hidden md:block" />
                        <div className="absolute -top-8 -right-8 w-48 h-48 border border-white/10 hidden md:block" />
                    </div>
                </div>
            </section>

            {/* Services Preview - "The Evidence" */}
            <section className="py-32 bg-neutral-950 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-gold-600 tracking-[0.2em] text-xs uppercase mb-4 block">Våra Expertområden</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-white">Frisörtjänster i Borås</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {/* Service 1 */}
                        <div className="group cursor-pointer">
                            <div className="relative h-96 w-full overflow-hidden mb-8">
                                <Image
                                    src="/hårfrisyr.JPG"
                                    alt="Herrklippning och styling hos frisör i Borås"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                            <div className="flex justify-between items-center border-b border-neutral-800 pb-4 mb-4">
                                <h3 className="font-serif text-3xl text-white group-hover:text-gold-500 transition-colors">Herrklippning</h3>
                                <span className="text-neutral-500 font-light">Från 250 kr</span>
                            </div>
                            <p className="text-neutral-400 font-light text-sm max-w-sm">
                                Skräddarsydd klippning anpassad efter din ansiktsform och hårtyp. Inkluderar tvätt och professionell styling.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="group cursor-pointer mt-16 md:mt-0">
                            <div className="relative h-96 w-full overflow-hidden mb-8">
                                <Image
                                    src="/bilder2/skagg.jpg"
                                    alt="Skäggvård och trimning hos barberare i Borås"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                            <div className="flex justify-between items-center border-b border-neutral-800 pb-4 mb-4">
                                <h3 className="font-serif text-3xl text-white group-hover:text-gold-500 transition-colors">Skäggvård</h3>
                                <span className="text-neutral-500 font-light">Från 200 kr</span>
                            </div>
                            <p className="text-neutral-400 font-light text-sm max-w-sm">
                                Traditionell rakning med kniv eller trimning med maskin. Alltid med varma handdukar för ultimat avkoppling.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-20">
                        <Link href="/tjanster" className="px-10 py-4 bg-gold-600 text-white hover:bg-gold-500 transition-colors tracking-widest text-sm uppercase rounded-sm">
                            Se Alla Tjänster & Priser
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quote / Reviews Section - "The Proof" */}
            <section className="py-40 px-6 relative overflow-hidden bg-dark-900 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/Hero bild eller något sådant.JPG"
                        alt="Salong LaVie frisörsalong interiör i Borås"
                        fill
                        className="object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-dark-900/40" />
                </div>

                <ReviewsCarousel />
            </section>

        </main>
    );
}
