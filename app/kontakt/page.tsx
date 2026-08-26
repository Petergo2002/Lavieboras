import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: "Kontakt & Öppettider | Frisör Borås Centrum",
    description: "Besök Salong LaVie på Västerbrogatan 1 i Borås. Öppet mån-fre 10-18, lör 10-15. Ring och boka tid: 070-767 87 79. Din frisör i centrala Borås.",
    keywords: ["frisör borås kontakt", "salong lavie adress", "frisör västerbrogatan", "boka frisör borås", "öppettider frisör borås"],
    alternates: {
        canonical: 'https://www.lavieboras.se/kontakt',
    },
    openGraph: {
        title: "Kontakt Salong LaVie | Frisör Borås",
        description: "Västerbrogatan 1, Borås. Ring: 070-767 87 79. Öppet mån-fre 10-18.",
        url: 'https://www.lavieboras.se/kontakt',
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
