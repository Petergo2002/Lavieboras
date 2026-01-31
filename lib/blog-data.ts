import { promises as fs } from 'fs';
import path from 'path';

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string; // HTML string
    image: string;
    keywords: string[];
    schema?: any;
}

const postsDirectory = path.join(process.cwd(), 'content/blog');

export async function getBlogPosts(): Promise<BlogPost[]> {
    try {
        // Check if directory exists
        try {
            await fs.access(postsDirectory);
        } catch {
            return [];
        }

        const slugs = await fs.readdir(postsDirectory);
        const posts = await Promise.all(slugs.map(slug => getPostBySlug(slug)));

        // Filter out undefineds
        const validPosts = posts.filter((p): p is BlogPost => p !== undefined);

<<<<<<< HEAD
            <blockquote>"En bra frisyr handlar inte om att blint följa en trend, utan om att hitta den version av trenden som förstärker dina bästa drag." - Salong LaVie, Borås</blockquote>

            <p>Oavsett om du vill göra en total förändring eller bara finjustera din nuvarande look, har vi expertisen som din frisör i Borås. På Salong LaVie stannar vi aldrig i utvecklingen – vi utbildar oss ständigt för att kunna leverera det senaste inom herrmode direkt till dig i stolen.</p>
        `
    },
    {
        slug: "varda-skagg-tips",
        title: "Skäggvård i Borås: Din Barberares Guide till Perfekt Skägg",
        date: "15 JAN 2026",
        image: "/blog-beard.png",
        excerpt: "Ett snyggt skägg är ingen slump. Det kräver kärlek, rutiner och rätt produkter. Lär dig hemligheterna bakom ett perfekt skägg från professionella barberare i Borås.",
        keywords: ["skäggvård borås", "barberare borås skägg", "skäggtrimning", "bästa frisör borås skägg", "skäggolja tips", "skäggschampo"],
        content: `
            <p class="lead">Att spara ut skägg är enkelt – det är bara att sluta raka sig. Men att <em>bära</em> ett skägg? Det är en helt annan femma. Många män ger upp när det börjar klia eller se ovårdat ut. Som barberare i Borås delar vi guiden som tar dig från "vildvuxen" till "välvårdad".</p>

            <h3>Steg 1: Rengöring (Sluta med hårschampot!)</h3>
            <p>Det vanligaste misstaget män gör är att använda vanligt hårschampo i skägget. Huden i ansiktet är mycket känsligare än hårbotten. Vanligt schampo torkar ut och leder till klåda och mjäll ("beardruff"). Använd ett dedikerat <strong>skäggschampo</strong> 2-3 gånger i veckan för att rengöra skonsamt.</p>

            <h3>Steg 2: Återfuktning är nyckeln</h3>
            <p>Skäggolja är din bästa vän. Den återfuktar huden <em>under</em> skägget, vilket är där problemen oftast börjar. Massera in oljan ända in mot huden varje morgon. För längre skägg rekommenderar vi även <strong>skäggbalm</strong> (beard balm) som ger både näring och stadga så att du kan forma skägget.</p>

            <h3>Steg 3: Borsta och Kamma</h3>
            <p>En bra skäggborste (gärna med svinborst) gör tre saker:
            <ol class="list-decimal pl-5 space-y-2 mt-2 mb-4">
                <li>Den fördelar oljan jämnt i hela skägget.</li>
                <li>Den exfolierar huden och tar bort döda hudceller.</li>
                <li>Den "tränar" hårstråna att växa i rätt riktning.</li>
            </ol>
            Gör detta till en daglig rutin.</p>

            <h3>Steg 4: Proffsets touch hos din barberare i Borås</h3>
            <p>Att trimma sitt eget skägg är svårt, särskilt halslinjen. En professionell skäggtrimning hos barberaren en gång i månaden gör underverk. På Salong LaVie lägger vi grunden och formen, så att du enkelt kan underhålla det hemma däremellan. Boka en <strong>Skäggtrimning Deluxe</strong> hos oss så ingår varma handdukar och knivrakning av linjerna för den där extra skarpa looken.</p>
        `
    },
    {
        slug: "lavie-upplevelsen",
        title: "Bästa Frisörsalongen i Borås: Lavie-upplevelsen",
        date: "22 JAN 2026",
        image: "/blog-experience.png",
        excerpt: "Varför nöja sig med en snabbklippning när du kan få en stunds avkoppling? Upptäck varför Salong LaVie är Borås mest exklusiva frisörsalong.",
        keywords: ["bästa frisör borås", "salong lavie", "premium barber shop borås", "lyx frisör borås", "frisörsalong centrum borås", "exklusiv frisör"],
        content: `
            <p class="lead">I en värld där allt ska gå snabbt, har vi på Salong LaVie valt en annan väg. Som frisör i Borås säljer vi inte bara en tjänst – vi erbjuder en upplevelse. En paus. En stund där du står i centrum.</p>

            <h3>En oas i centrala Borås</h3>
            <p>Redan när du kliver över tröskeln på Västerlånggatan 1 känner du skillnaden. Det doftar av sandelträ och läder. Ljuset är varmt och dämpat. Musiken är noga utvald för att skapa lugn. Vår inredning, inspirerad av klassiska brittiska barber shops men med en modern twist, är designad för att du ska vilja stanna kvar.</p>

            <h3>Hantverket i fokus hos din frisör i Borås</h3>
            <p>Våra stolar är inte löpande band. Vi avsätter generöst med tid för varje kund. Varför? För att perfektion tar tid.
            <ul>
                <li>Vi börjar alltid med en ordentlig konsultation. Vem är du? Vad jobbar du med? Hur mycket tid lägger du på styling?</li>
                <li>Själva klippningen utförs med precision, sax över kam, och maskin där det behövs.</li>
                <li>Avslutningen är vår signatur: Nackrakning med kniv, varma handdukar och styling med marknadens bästa produkter.</li>
            </ul>
            </p>

            <h3>Gemenskapen på Västerlånggatan</h3>
            <p>Historiskt sett har barberaren varit navet i det sociala livet för många män. En plats där man kan vara sig själv, diskutera allt från fotboll till livet, eller bara njuta av tystnaden. Vi förvaltar det arvet stolt som Borås premiärbarberare. Du är inte bara ett bokningsnummer hos oss – du är en del av Lavie-familjen.</p>

            <p>Är du redo att uppgradera din rutin? Välkommen till din nya frisör i Borås. Upplev skillnaden på riktigt.</p>
        `
    },
    {
        slug: "styling-guide-boras",
        title: "Hårvax, Pomada eller Clay? Barberarens Guide till Rätt Stylingprodukt",
        date: "29 JAN 2026",
        image: "/blog-styling.png",
        excerpt: "Får du inte till frisyren hemma? Problemet sitter ofta i burken. Vi guidar dig genom djungeln av vax, pomada och clay för att hitta rätt produkt för just din hårtyp.",
        keywords: ["hårvax tips", "pomada eller vax", "bästa hårstyling herr", "barberare borås tips", "saltvattenspray herr", "herrfrisyr styling"],
        content: `
            <p class="lead">Du har precis varit hos din frisör i Borås. Du känner dig som en miljon kronor. Men dagen efter, när du ska fixa håret själv, ser det inte alls likadant ut. Känner du igen dig? Lugn, det är oftast inte "handhavandefel" – det handlar om att välja rätt verktyg.</p>

            <h3>1. Pomada – För "The Gentleman Look"</h3>
            <p>Pomada är urfadern till stylingprodukter. Den ger hög glans och stark stadga, perfekt för klassiska frisyrer som Pompadour, Slick Back eller en stilig sidbena.
            <br><strong>Passar dig som:</strong> Vill ha en "våt" look, har tjockt hår eller vill att frisyren ska ligga perfekt stilla hela dagen.
            <br><strong>Undvik om:</strong> Du har tunt hår (kan se fett ut) eller vill ha en rufsisk "messy" look.</p>

            <h3>2. Hårvax – Allround-hjälten</h3>
            <p>När kunder frågar oss på Salong LaVie vad de ska välja, är vax ofta det säkra svaret. Det ger medium stadga och en naturlig glans (varken supermatt eller superblank).
            <br><strong>Passar dig som:</strong> Har kort till mellanlångt hår och vill kunna forma om frisyren under dagen.
            <br><strong>Tips:</strong> Värm alltid upp vaxet ordentligt mellan handflatorna innan du applicerar det!</p>

            <h3>3. Clay (Lera) – För Textur och Volym</h3>
            <p>Detta är vår mest sålda produkt just nu, mycket tack vare trenden med "Textured Crop" som vi skrev om tidigare. Clay är matt, ger grym volym och separerar hårstråna för den där snygga strukturen.
            <br><strong>Passar dig som:</strong> Har tunt hår (leran får håret att kännas tjockare!) eller vill ha en modern, matt look utan glans.
            <br><strong>Barberarens val:</strong> Perfekt för "messy" frisyrer som ska se naturliga ut.</p>

            <h3>4. Saltvattenspray – Det hemliga vapnet</h3>
            <p>Många män missar detta steg! Saltvattenspray är en "pre-styler". Du sprayar det i fuktigt hår <em>innan</em> du fönar det. Resultatet? Volym, strävhet och kontroll.
            <br><strong>Varför?</strong> Det ger en grundstadga som gör att du behöver mindre vax efteråt. Håret blir enklare att forma och frisyren håller längre. En game-changer för skandinaviskt glatt hår.</p>

            <h3>Hitta rätt hos din barberare i Borås</h3>
            <p>Det finns ingen "bästa produkt" – bara den produkt som är bäst för <em>dig</em>. Nästa gång du besöker oss på Salong LaVie, fråga oss! Vi visar gärna exakt hur mycket produkt du ska ta och hur du applicerar det för att få salongsresultat hemma varje dag.</p>
        `
=======
        // Sort by date (newest first)
        return validPosts.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
    } catch (e) {
        console.error("Error loading blog posts:", e);
        return [];
    }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const postDir = path.join(postsDirectory, slug);
    const metadataPath = path.join(postDir, 'metadata.json');
    const contentPath = path.join(postDir, 'index.md');

    try {
        const [metadataContent, content] = await Promise.all([
            fs.readFile(metadataPath, 'utf8'),
            fs.readFile(contentPath, 'utf8')
        ]);

        const metadata = JSON.parse(metadataContent);
        return {
            ...metadata,
            content,
            slug
        };
    } catch (e) {
        // If files don't exist or error parsing, return undefined
        return undefined;
>>>>>>> 9282705 (feat: add article 'Herrklippning Borås: Komplett Guide 2026' and refactor blog engine to file-based system)
    }
}
