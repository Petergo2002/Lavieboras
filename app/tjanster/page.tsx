import { motion } from "framer-motion";
import Image from "next/image";
import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
    title: "Priser & Tjänster | Frisör Borås",
    description: "Se våra priser för herrklippning, skäggvård, färgning och barnklippning. Salong LaVie - din professionella frisör och barberare i centrala Borås.",
    keywords: ["frisör priser borås", "herrklippning pris", "skäggvård borås", "barnklippning borås", "frisörsalong borås priser"],
    alternates: {
        canonical: 'https://salonglavie.se/tjanster',
    },
    openGraph: {
        title: "Priser & Tjänster | Salong LaVie Borås",
        description: "Herrklippning från 250 kr, Skäggvård från 200 kr. Boka tid hos Borås bästa frisör!",
        url: 'https://salonglavie.se/tjanster',
    },
};

export default function ServicesPage() {
    return <ServicesClient />;
}
