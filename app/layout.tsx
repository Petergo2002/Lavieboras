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
    metadataBase: new URL('https://lavieboras.se'),
    title: {
        default: "Salong LaVie | Frisör & Barberare i Borås",
        template: "%s | Salong LaVie Borås"
    },
    description: "Salong LaVie är Borås bästa frisörsalong och barberare. Professionell herrklippning, skäggvård och styling i centrala Borås. Boka din tid idag!",
    keywords: [
        "frisör borås",
        "barberare borås",
        "salong lavie",
        "lavie borås",
        "herrfrisör borås",
        "frisörsalong borås",
        "klippning borås",
        "skäggvård borås",
        "bästa frisör borås",
        "herrklippning borås"
    ],
    authors: [{ name: "Salong LaVie" }],
    creator: "Salong LaVie",
    publisher: "Salong LaVie",
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
        url: 'https://lavieboras.se',
        siteName: 'Salong LaVie',
        title: 'Salong LaVie | Frisör & Barberare i Borås',
        description: 'Borås bästa frisörsalong och barberare. Professionell herrklippning, skäggvård och styling. Boka tid: 070-767 87 79',
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
        title: 'Salong LaVie | Frisör & Barberare i Borås',
        description: 'Borås bästa frisörsalong och barberare. Boka tid: 070-767 87 79',
        images: ['/IMG_8735.JPG'],
    },
    alternates: {
        canonical: 'https://lavieboras.se',
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
    url: 'https://lavieboras.se',
    telephone: '+46707678779',
    email: 'info@lavieboras.se',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Västerlånggatan 1',
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
    image: 'https://lavieboras.se/IMG_8735.JPG',
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
