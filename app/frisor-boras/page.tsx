import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

/**
 * Premium landing page for "frisör borås" keyword.
 * Built with conversion-focused copywriting and cinematic design.
 * Structure: Hero → Trust signals → Services → Social proof → Story → FAQ → Final CTA
 */

export const metadata: Metadata = {
    title: "Frisör i Borås Centrum | Herrklippning, Fade & Skägg | LaVie",
    description:
        "Söker du en frisör i Borås? LaVie på Västerlånggatan erbjuder herrklippning, fade och skäggvård från 250 kr. Boka tid hos frisör i Borås centrum.",
    keywords: [
        "frisör borås",
        "frisör i borås",
        "bästa frisör borås",
        "frisör borås centrum",
        "herrfrisör borås",
        "barberare borås centrum",
        "klippning borås",
        "salong borås",
        "boka frisör borås",
    ],
    alternates: {
        canonical: "https://www.lavieboras.se/frisor-boras",
    },
    openGraph: {
        title: "Frisör i Borås | Salong LaVie",
        description:
            "Borås bästa frisör på Västerlånggatan. Professionell herrklippning från 250 kr. Boka idag!",
        url: "https://www.lavieboras.se/frisor-boras",
        images: [
            {
                url: "/IMG_8735.JPG",
                width: 1200,
                height: 630,
                alt: "Frisör i Borås – Salong LaVie",
            },
        ],
    },
};

/* ─── DATA ──────────────────────────────────────────────────────────────── */

const services = [
    {
        number: "01",
        name: "Herrklippning",
        tagline: "Precision som sitter.",
        price: "Från 250 kr",
        time: "30–45 min",
        desc: "Ingen cookie-cutter mall. Vi läser din hårtyp, ansiktsform och livsstil – och klipper efter det. Alltid inkl. tvätt och styling.",
    },
    {
        number: "02",
        name: "Skäggvård",
        tagline: "Rak linje. Mjuk känsla.",
        price: "Från 200 kr",
        time: "20–30 min",
        desc: "Varm handduk, knivrakning eller maskin – du väljer. Vi fixar konturerna, du sköter resten. Lugnande aftershave ingår alltid.",
    },
    {
        number: "03",
        name: "Hår & Skägg",
        tagline: "Komplett från topp till krage.",
        price: "Från 300 kr",
        time: "60–75 min",
        desc: "Vårt mest bokade paket. Du lämnar salongen redo för vad som helst – jobb, dejt eller fest. Borås bästa deal.",
    },
    {
        number: "04",
        name: "Fade & Undercut",
        tagline: "Skarp. Modern. Distinkt.",
        price: "Från 270 kr",
        time: "35–50 min",
        desc: "Skin fade, high fade, scissor fade – vi kör allt. Håller du dig uppdaterad med trenderna? Det gör vi. Du behöver bara sitta ner.",
    },
];

const reasons = [
    {
        icon: "✦",
        title: "Inga onödiga frågor",
        body: "Du beskriver vad du vill. Vi levererar. Utan att ifrågasätta din smak eller pusha på produkter du inte bett om.",
    },
    {
        icon: "✦",
        title: "Centralt i Borås",
        body: "Västerlånggatan 1 – 2 minuter från Stora Torget. Du kan svänga förbi på lunchrasten och komma tillbaka en annan människa.",
    },
    {
        icon: "✦",
        title: "Hantverk, inte löpandeband",
        body: "Vi tar inte fler kunder än vi hinner göra rätt. Hellre en nöjd kund än tre halvbra klippningar.",
    },
    {
        icon: "✦",
        title: "Priser du kan stå för",
        body: "Från 250 kr. Du betalar för faktiskt kunnande och tid – inte för hyllorna med märkesprodukter eller neonskylten utanför.",
    },
];

const localAreas = [
    "Borås centrum",
    "Norrby",
    "Sjöbo",
    "Trandared",
    "Knalleland",
    "Göta",
];

const reviews = [
    {
        name: "Mikael P.",
        stars: 5,
        text: "Bästa klippningen jag haft i Borås på år och dag. Barberaren förstod exakt vad jag ville och levererade utan att jag behövde visa tre olika bilder.",
    },
    {
        name: "Jonas K.",
        stars: 5,
        text: "Snygg salong, skicklig hand och schysta priser. Hittar inte ett bättre alternativ i Borås centrum.",
    },
    {
        name: "Ahmad R.",
        stars: 5,
        text: "Har provat flera frisörer i Borås men stannar kvar här. Perfekt fade varje gång och aldrig sitter jag och väntar i en halvtimme.",
    },
];

const faqs = [
    {
        q: "Vad kostar en klippning?",
        a: "Herrklippning från 250 kr. Hår & Skägg-paketet från 300 kr. Inga dolda avgifter – priset du ser är priset du betalar.",
    },
    {
        q: "Var finns ni?",
        a: "Västerlånggatan 1, Borås centrum – ett stenkast från Stora Torget. Enkelt med kollektivtrafik och parkering nära.",
    },
    {
        q: "Behöver jag boka i förväg?",
        a: "Vi rekommenderar det – ring 070-767 87 79 så garanterar vi din tid. Drop-in välkomnas när det finns plats.",
    },
    {
        q: "Hur lång tid tar ett besök?",
        a: "Herrklippning: 30–45 min. Hår & Skägg: 60–75 min. Vi skyndar inte på – och gör heller inte dig det.",
    },
    {
        q: "Kan ni fixa fades och avancerade klippningar?",
        a: "Absolut. Skin fade, high fade, taper, undercut, scissors only – vi kör hela registret med precision.",
    },
    {
        q: "Har ni kunder från områden utanför centrum?",
        a: "Ja. Många kommer till oss från Norrby, Sjöbo, Trandared, Göta och Knalleland för herrklippning, fade och skäggvård i Borås.",
    },
];

/** FAQPage + LocalBusiness structured data for Google rich results */
const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
        },
        {
            "@type": "BarberShop",
            "@id": "https://www.lavieboras.se/#barbershop",
            name: "Salong LaVie",
            description: "Professionell frisör och barberare i Borås centrum.",
            url: "https://www.lavieboras.se",
            telephone: "+46707678779",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Västerlånggatan 1",
                addressLocality: "Borås",
                postalCode: "503 30",
                addressCountry: "SE",
            },
            priceRange: "250–500 SEK",
            areaServed: localAreas.map((area) => ({
                "@type": "Place",
                name: area,
            })),
        },
    ],
};

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

export default function FrisorBorasPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
            />

            <main className="min-h-screen bg-dark-900 selection:bg-gold-500 selection:text-white overflow-x-hidden">

                {/* ════════════════════════════════════════════
                    HERO — Full viewport, cinematic
                ════════════════════════════════════════════ */}
                <section className="relative min-h-screen flex flex-col justify-end">
                    {/* Background image */}
                    <Image
                        src="/IMG_8735.JPG"
                        alt="Frisör i Borås – Salong LaVie på Västerlånggatan"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/70 to-dark-900/20" />

                    {/* Hero content */}
                    <div className="relative container mx-auto px-6 pb-20 md:pb-32 pt-48">
                        {/* Eyebrow */}
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-8 h-px bg-gold-500" />
                            <span className="text-gold-500 tracking-[0.3em] text-xs font-medium uppercase">
                                Salong LaVie · Borås Centrum
                            </span>
                        </div>

                        {/* H1 — exact match keyword for SEO + emotional hook */}
                        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-8 max-w-5xl">
                            Din <span className="text-gold-500 italic">frisör</span>
                            <br />i Borås.
                        </h1>

                        {/* Subheading — the promise */}
                        <p className="text-xl md:text-2xl text-neutral-300 font-light max-w-xl leading-relaxed mb-12">
                            Inte snabb. Inte billig. Riktigt bra.
                            <br />
                            <span className="text-neutral-500">Klippning som faktiskt sitter, för dig som söker en frisör i Borås som levererar varje gång.</span>
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="tel:+46707678779"
                                className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-gold-600 hover:bg-gold-500 text-white transition-all duration-300 tracking-widest text-sm uppercase font-medium rounded-sm"
                            >
                                <span>Boka tid nu</span>
                                <span className="text-gold-200 font-light text-xs">070-767 87 79</span>
                            </a>
                            <a
                                href="#tjanster"
                                className="inline-flex items-center justify-center gap-2 px-8 py-5 border border-white/20 hover:border-gold-500 text-white hover:text-gold-500 transition-all duration-300 tracking-widest text-sm uppercase rounded-sm"
                            >
                                Se tjänster & priser
                            </a>
                        </div>

                        {/* Quick trust bar */}
                        <div className="flex flex-wrap gap-8 mt-16 pt-10 border-t border-white/10">
                            {[
                                { value: "5.0", label: "Google-betyg" },
                                { value: "250 kr", label: "Från" },
                                { value: "Västerlånggatan 1", label: "Borås centrum" },
                                { value: "Fade & herrklippning", label: "Specialitet" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-white font-serif text-2xl">{stat.value}</p>
                                    <p className="text-neutral-500 text-xs tracking-widest uppercase mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════════════════════════════════
                    STATEMENT — The Differentiator
                ════════════════════════════════════════════ */}
                <section className="py-32 px-6 border-t border-white/5">
                    <div className="container mx-auto max-w-5xl">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="text-gold-500 tracking-[0.3em] text-xs uppercase mb-6 block">Varför LaVie</span>
                                <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                                    Borås har många frisörer.
                                    <br />
                                    <span className="text-gold-400 italic">Bra</span> barberare är sällsynt.
                                </h2>
                            </div>
                            <div className="space-y-6">
                                <p className="text-neutral-300 font-light text-lg leading-relaxed">
                                    Vi är inte en fabrik. Vi tar inte fler kunder än vi hinner göra rätt. Hos oss sitter du ner, vi lyssnar – och sedan gör vi jobbet med den precision som din tid och dina pengar förtjänar.
                                </p>
                                <p className="text-neutral-500 font-light leading-relaxed">
                                    Salong LaVie grundades för att fylla ett gap: en salong i Borås centrum som tar herrklippning på allvar – utan att ladda upp priset med onödiga tillägg eller låta dig vänta i 40 minuter.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ════════════════════════════════════════════
                    4 REASONS — Icon grid
                ════════════════════════════════════════════ */}
                <section className="py-20 px-6 bg-neutral-950 border-y border-white/5">
                    <div className="container mx-auto max-w-5xl">
                        <div className="grid sm:grid-cols-2 gap-px bg-white/5">
                            {reasons.map((r) => (
                                <div key={r.title} className="bg-neutral-950 p-10 group hover:bg-neutral-900 transition-colors duration-500">
                                    <span className="text-gold-500 text-xs mb-6 block">{r.icon}</span>
                                    <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-gold-400 transition-colors">
                                        {r.title}
                                    </h3>
                                    <p className="text-neutral-400 font-light leading-relaxed text-sm">{r.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════════════════════════════════
                    SERVICES — Numbered editorial list
                ════════════════════════════════════════════ */}
                <section id="tjanster" className="py-32 px-6 scroll-mt-24">
                    <div className="container mx-auto max-w-5xl">
                        <div className="mb-20">
                            <span className="text-gold-500 tracking-[0.3em] text-xs uppercase mb-6 block">Tjänster & Priser</span>
                            <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight">
                                Vad vi gör —<br />
                                <span className="text-neutral-500">och vad det kostar.</span>
                            </h2>
                        </div>

                        <div className="space-y-0">
                            {services.map((s, i) => (
                                <div
                                    key={s.name}
                                    className="group grid md:grid-cols-[80px_1fr_auto] gap-6 md:gap-12 items-start py-10 border-t border-white/10 hover:border-gold-500/30 transition-colors duration-500"
                                >
                                    {/* Number */}
                                    <span className="font-serif text-5xl text-white/10 group-hover:text-gold-500/20 transition-colors leading-none">
                                        {s.number}
                                    </span>

                                    {/* Content */}
                                    <div>
                                        <div className="flex flex-wrap items-baseline gap-3 mb-2">
                                            <h3 className="font-serif text-2xl md:text-3xl text-white group-hover:text-gold-400 transition-colors">
                                                {s.name}
                                            </h3>
                                            <span className="text-gold-500/60 font-light text-sm italic">{s.tagline}</span>
                                        </div>
                                        <p className="text-neutral-400 font-light text-sm leading-relaxed max-w-md">
                                            {s.desc}
                                        </p>
                                        <span className="text-neutral-600 text-xs tracking-widest uppercase mt-3 block">
                                            ⏱ {s.time}
                                        </span>
                                    </div>

                                    {/* Price */}
                                    <div className="text-right">
                                        <span className="text-white font-serif text-xl">{s.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-10 border-t border-white/5">
                            <Link
                                href="/tjanster"
                                className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors text-sm tracking-widest uppercase border-b border-gold-500/30 pb-1 hover:border-gold-400"
                            >
                                Fullständig prislista →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ════════════════════════════════════════════
                    SPLIT IMAGE — Visual break + social proof
                ════════════════════════════════════════════ */}
                <section className="grid md:grid-cols-2 min-h-[70vh]">
                    {/* Image */}
                    <div className="relative min-h-[400px] md:min-h-full">
                        <Image
                            src="/hårfrisyr.JPG"
                            alt="Herrklippning hos Salong LaVie – frisör i Borås"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-dark-900/20" />
                    </div>

                    {/* Reviews */}
                    <div className="bg-neutral-950 flex flex-col justify-center px-10 md:px-16 py-16 gap-10">
                        <div>
                            <span className="text-gold-500 tracking-[0.3em] text-xs uppercase mb-4 block">Vad kunderna säger</span>
                            <h2 className="font-serif text-3xl md:text-4xl text-white">
                                Ord vi är stolta över.
                            </h2>
                        </div>

                        <div className="space-y-8">
                            {reviews.map((r) => (
                                <div key={r.name} className="border-l-2 border-gold-500/30 pl-6">
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-3">
                                        {Array.from({ length: r.stars }).map((_, i) => (
                                            <span key={i} className="text-gold-500 text-xs">★</span>
                                        ))}
                                    </div>
                                    <p className="text-neutral-300 font-light text-sm leading-relaxed italic mb-3">
                                        &ldquo;{r.text}&rdquo;
                                    </p>
                                    <span className="text-neutral-600 text-xs tracking-widest uppercase">{r.name} · Google</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="tel:+46707678779"
                            className="self-start px-8 py-4 bg-gold-600 hover:bg-gold-500 text-white transition-colors tracking-widest text-xs uppercase font-medium rounded-sm"
                        >
                            Boka din tid — 070-767 87 79
                        </a>
                    </div>
                </section>

                {/* ════════════════════════════════════════════
                    STORY SECTION — Long-form SEO content
                ════════════════════════════════════════════ */}
                <section className="py-32 px-6 border-t border-white/5">
                    <div className="container mx-auto max-w-4xl">
                        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
                            {/* Sticky label */}
                            <div className="md:sticky md:top-32 self-start">
                                <span className="text-gold-500 tracking-[0.3em] text-xs uppercase mb-4 block">Vår historia</span>
                                <h2 className="font-serif text-3xl text-white leading-tight">
                                    En salong som bryr sig om resultatet.
                                </h2>
                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <p className="text-neutral-500 text-xs tracking-widest uppercase mb-1">Adress</p>
                                    <p className="text-white font-light text-sm">Västerlånggatan 1<br />503 30 Borås</p>
                                </div>
                                <div className="mt-6">
                                    <p className="text-neutral-500 text-xs tracking-widest uppercase mb-1">Öppet</p>
                                    <p className="text-white font-light text-sm">Mån–Fre: 09–19<br />Lördag: 09–16</p>
                                </div>
                                <div className="mt-6">
                                    <p className="text-neutral-500 text-xs tracking-widest uppercase mb-1">Telefon</p>
                                    <a href="tel:+46707678779" className="text-gold-400 hover:text-gold-300 font-light text-sm transition-colors">
                                        070-767 87 79
                                    </a>
                                </div>
                            </div>

                            {/* Long-form copy — rich with SEO keywords */}
                            <div className="space-y-8 text-neutral-400 font-light leading-[1.9] text-base">
                                <p className="text-neutral-200 text-xl font-light leading-relaxed">
                                    Det finns hur många <strong className="text-white font-normal">frisörer i Borås</strong> som helst. Men hur många av dem lyssnar på vad du faktiskt vill ha?
                                </p>

                                <p>
                                    Salong LaVie öppnade på Västerlånggatan med en enkel tanke: herrar i Borås förtjänar en salong som tar klippning på allvar. Inte en salong som rusar igenom kunderna, pushar sina produkter eller lämnar dig med en halvfärdig fade som sitter snett tre dagar senare.
                                </p>

                                <p>
                                    Vi är specialister på herrfrisyrer. Det betyder att vi kan fade, taper, skin fade, scissors only, klassisk herrklippning och allt däremellan – och vi gör det med den precision som din tid och dina pengar förtjänar.
                                </p>

                                <hr className="border-white/10 my-10" />

                                <p>
                                    Vi befinner oss mitt i <strong className="text-white font-normal">Borås centrum</strong> på Västerlånggatan 1 – precis intill Stora Torget. Du behöver inte planera ett halvdagsprojekt för att komma hit. Sväng in på lunchrasten, eller boka direkt efter jobbet.
                                </p>

                                <p>
                                    Oavsett om du söker en <strong className="text-white font-normal">herrklippning i Borås</strong>, vill ha skäggvård gjord rätt eller ska prova en ny fade – vi tar oss tid att förstå vad du vill, och vi levererar ett resultat du faktiskt är nöjd med.
                                </p>

                                <p>
                                    Det är vad som skiljer en riktigt <strong className="text-white font-normal">bra frisör i Borås</strong> från resten. Och det är vad vi strävar efter varje dag på LaVie.
                                </p>

                                <p>
                                    Vi har också många återkommande kunder från områden som <strong className="text-white font-normal">Norrby</strong>, <strong className="text-white font-normal">Sjöbo</strong>, <strong className="text-white font-normal">Trandared</strong> och <strong className="text-white font-normal">Knalleland</strong>. För många är målet enkelt: hitta en <strong className="text-white font-normal">frisör i Borås centrum</strong> där resultatet blir rätt direkt.
                                </p>

                                <p>
                                    Om du vill jämföra behandlingar och priser innan du bokar kan du se hela vår <Link href="/tjanster" className="text-gold-400 hover:text-gold-300 transition-colors">prislista för herrklippning, skäggvård och fade</Link>. Vill du läsa mer om hur vi arbetar kan du också ta del av vår guide om <Link href="/blogg/frisor-boras-centrum" className="text-gold-400 hover:text-gold-300 transition-colors">vad som kännetecknar en bra frisör i Borås centrum</Link>.
                                </p>

                                <div className="pt-4">
                                    <a
                                        href="tel:+46707678779"
                                        className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors text-sm font-light tracking-widest uppercase border-b border-gold-500/30 pb-1"
                                    >
                                        Ring och boka →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 px-6 border-t border-white/5 bg-dark-900">
                    <div className="container mx-auto max-w-5xl">
                        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
                            <div>
                                <span className="text-gold-500 tracking-[0.3em] text-xs uppercase mb-6 block">För dig i Borås</span>
                                <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6">
                                    Därför väljer kunder i Borås centrum LaVie.
                                </h2>
                                <div className="space-y-5 text-neutral-400 font-light leading-relaxed">
                                    <p>
                                        När någon söker efter en <strong className="text-white font-normal">frisör i Borås</strong> letar de sällan bara efter en stol och en sax. De letar efter någon som förstår stil, ansiktsform, hårtyp och hur resultatet ska fungera i vardagen.
                                    </p>
                                    <p>
                                        Hos oss börjar varje besök med en kort konsultation. Vi går igenom hur du brukar styla håret, hur ofta du vill klippa dig och om du vill ha en klassisk herrklippning, taper eller en skarp fade. Det gör att du får ett resultat som håller längre och känns rätt även veckan efter besöket.
                                    </p>
                                    <p>
                                        LaVie ligger centralt på Västerlånggatan 1, vilket gör oss till ett enkelt val för dig som vill boka en <strong className="text-white font-normal">frisör i Borås centrum</strong> nära jobb, shopping eller kollektivtrafik.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-neutral-950 border border-white/5 p-8 rounded-sm">
                                <p className="text-neutral-500 text-xs tracking-[0.3em] uppercase mb-5">Områden vi ofta har kunder från</p>
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {localAreas.map((area) => (
                                        <span key={area} className="border border-gold-500/20 px-4 py-2 text-sm text-neutral-300">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6">
                                    Söker du efter herrklippning, fade eller skäggvård i Borås är målet enkelt: boka en barberare som tar tid på detaljerna och håller jämn nivå över tid.
                                </p>
                                <Link
                                    href="/kontakt"
                                    className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors text-sm tracking-widest uppercase border-b border-gold-500/30 pb-1"
                                >
                                    Hitta hit och boka →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ════════════════════════════════════════════
                    FAQ — Minimal, clean accordion look
                ════════════════════════════════════════════ */}
                <section className="py-24 px-6 bg-neutral-950 border-t border-white/5">
                    <div className="container mx-auto max-w-3xl">
                        <div className="mb-16">
                            <span className="text-gold-500 tracking-[0.3em] text-xs uppercase mb-6 block">FAQ</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-white">
                                Vanliga frågor.
                            </h2>
                        </div>

                        <div className="divide-y divide-white/10">
                            {faqs.map((faq, i) => (
                                <div key={faq.q} className="group py-8 grid md:grid-cols-[auto_1fr] gap-6 md:gap-12">
                                    <span className="font-serif text-gold-500/40 text-lg leading-none pt-1">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <h3 className="font-serif text-xl text-white mb-4 group-hover:text-gold-400 transition-colors">
                                            {faq.q}
                                        </h3>
                                        <p className="text-neutral-400 font-light leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ════════════════════════════════════════════
                    FINAL CTA — Dark, cinematic, high-pressure
                ════════════════════════════════════════════ */}
                <section className="relative py-40 px-6 overflow-hidden">
                    {/* Background image */}
                    <Image
                        src="/IMG_8726.JPG"
                        alt="Salong LaVie – frisör i Borås centrum"
                        fill
                        className="object-cover opacity-20 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-transparent to-dark-900/80" />

                    <div className="relative container mx-auto max-w-3xl text-center">
                        <span className="text-gold-500 tracking-[0.3em] text-xs uppercase mb-6 block">Dags att agera</span>
                        <h2 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-8">
                            Du har hittat
                            <br />
                            din frisör i{" "}
                            <span className="text-gold-500 italic">Borås.</span>
                        </h2>
                        <p className="text-neutral-300 font-light text-lg leading-relaxed mb-12 max-w-xl mx-auto">
                            Ring oss, sväng förbi eller boka tid nu. Vi finns på Västerlånggatan 1 i Borås centrum och vi ser fram emot att välkomna dig.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+46707678779"
                                className="px-12 py-5 bg-gold-600 hover:bg-gold-500 text-white transition-all duration-300 tracking-widest text-sm uppercase font-medium rounded-sm text-center"
                            >
                                Ring & Boka — 070-767 87 79
                            </a>
                            <Link
                                href="/kontakt"
                                className="px-12 py-5 border border-white/20 hover:border-gold-500 text-white hover:text-gold-500 transition-all duration-300 tracking-widest text-sm uppercase rounded-sm text-center"
                            >
                                Hitta oss på kartan
                            </Link>
                        </div>

                        {/* Bottom micro-trust */}
                        <p className="text-neutral-600 font-light text-xs tracking-widest uppercase mt-12">
                            Mån–Fre 09–19 &nbsp;·&nbsp; Lördag 09–16 &nbsp;·&nbsp; Drop-in välkommen
                        </p>
                    </div>
                </section>

            </main>
        </>
    );
}
