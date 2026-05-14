import Image from 'next/image';
import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: "Om Oss | Barberare & Frisör Borås",
    description: "Lär känna Salong LaVie - Borås mest exklusiva frisörsalong och barberare. Vi kombinerar klassiskt hantverk med modern precision på Västerbrogatan.",
    keywords: ["barberare borås", "om salong lavie", "frisör borås centrum", "bästa barberare borås", "frisörsalong västerbrogatan"],
    alternates: {
        canonical: 'https://www.lavieboras.se/om-oss',
    },
    openGraph: {
        title: "Om Salong LaVie | Barberare i Borås",
        description: "Mer än en salong - en upplevelse. Lär känna Borås mest exklusiva barberare.",
        url: 'https://www.lavieboras.se/om-oss',
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
