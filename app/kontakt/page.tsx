import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: "Kontakt & Öppettider | Frisör Borås Centrum",
    description: "Besök Salong LaVie på Västerlånggatan 1 i Borås. Öppet mån-fre 09-19, lör 09-16. Ring och boka tid: 070-757 87 79. Din frisör i centrala Borås.",
    keywords: ["frisör borås kontakt", "salong lavie adress", "frisör västerlånggatan", "boka frisör borås", "öppettider frisör borås"],
    alternates: {
        canonical: 'https://lavieboras.se/kontakt',
    },
    openGraph: {
        title: "Kontakt Salong LaVie | Frisör Borås",
        description: "Västerlånggatan 1, Borås. Ring: 070-757 87 79. Öppet mån-fre 09-19.",
        url: 'https://lavieboras.se/kontakt',
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
