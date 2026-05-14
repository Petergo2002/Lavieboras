import type { Metadata } from "next";
import { Inter, Playfair_Display, Pinyon_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrolling from "@/components/smooth-scrolling";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair-display" });
const pinyon = Pinyon_Script({ weight: "400", subsets: ["latin"], variable: "--font-pinyon-script" });

export const metadata: Metadata = {
    // Canonical base URL — all relative paths in metadata resolve against this.
    // MUST match the domain Google sees, which is www.lavieboras.se.
    metadataBase: new URL('https://www.lavieboras.se'),
    title: {
        default: "Frisör i Borås | Salong LaVie – Herrklippning & Barberare",
        template: "%s | Salong LaVie – Frisör Borås"
    },
    description: "Salong LaVie – din frisör i Borås centrum. Vi erbjuder herrklippning, skäggtrimning och rakning med kniv på Västerbrogatan. Boka din tid hos Borås bästa barberare idag!",
    keywords: [
        "frisör borås",
        "frisör i borås",
        "herrfrisör borås",
        "barberare borås",
        "frisörsalong borås",
        "bästa frisör borås",
        "frisör borås centrum",
        "salong lavie",
        "klippning borås",
        "skäggtrimning borås",
        "rakning med kniv borås",
        "frisör västerbrogatan borås"
    ],
    authors: [{ name: "Salong LaVie" }],
    creator: "Salong LaVie",
    publisher: "Salong LaVie",
    // Root canonical — inherited by all pages unless they override it.
    alternates: {
        canonical: 'https://www.lavieboras.se',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'sv_SE',
        url: 'https://www.lavieboras.se',
        siteName: 'Salong LaVie',
        title: 'Salong LaVie | Frisör i Borås – Herrklippning & Barberare',
        description: 'Salong LaVie – bästa frisören i Borås. Professionell herrklippning, skäggvård och styling på Västerbrogatan. Boka tid: 070-767 87 79',
        images: [
            {
                url: '/IMG_8735.JPG',
                width: 1200,
                height: 630,
                alt: 'Salong LaVie - Frisörsalong i Borås',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Salong LaVie | Frisör i Borås – Herrklippning & Barberare',
        description: 'Salong LaVie – bästa frisören i Borås centrum. Boka tid: 070-767 87 79',
        images: ['/IMG_8735.JPG'],
    },
    category: 'Frisör',
    icons: {
        icon: '/favicon.jpg',
        shortcut: '/favicon.jpg',
        apple: '/favicon.jpg',
    },
};

// JSON-LD Structured Data for LocalBusiness
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BarberShop',
    name: 'Salong LaVie',
    alternateName: 'LaVie Borås',
    description: 'Premium frisörsalong och barberare i centrala Borås. Specialister på herrklippning, skäggvård och styling.',
    url: 'https://www.lavieboras.se',
    telephone: '+46707678779',
    email: 'info@lavieboras.se',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Västerbrogatan 1',
        addressLocality: 'Borås',
        postalCode: '503 30',
        addressCountry: 'SE',
        addressRegion: 'Västra Götaland'
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 57.7210,
        longitude: 12.9401
    },
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '19:00'
        },
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00',
            closes: '16:00'
        }
    ],
    priceRange: '$$',
    image: 'https://www.lavieboras.se/IMG_8735.JPG',
    sameAs: [
        'https://instagram.com/lavieboras',
        'https://www.facebook.com/SalongLaVieBoras/'
    ],
    areaServed: {
        '@type': 'City',
        name: 'Borås'
    },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Frisörtjänster',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Herrklippning',
                    description: 'Professionell herrklippning med styling'
                },
                price: '250',
                priceCurrency: 'SEK'
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Skäggvård',
                    description: 'Skäggtrimning och formning'
                },
                price: '200',
                priceCurrency: 'SEK'
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Hår & Skägg',
                    description: 'Komplett paket med klippning och skäggvård'
                },
                price: '300',
                priceCurrency: 'SEK'
            }
        ]
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="sv">
            <head>
                <link rel="icon" type="image/jpeg" href="/favicon.jpg" />
                <link rel="shortcut icon" type="image/jpeg" href="/favicon.jpg" />
                <link rel="apple-touch-icon" href="/favicon.jpg" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${inter.variable} ${playfair.variable} ${pinyon.variable} bg-dark-900 text-white antialiased`}>
                <SmoothScrolling>
                    <div className="overflow-x-hidden relative w-full">
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                </SmoothScrolling>
            </body>
        </html>
    );
}
