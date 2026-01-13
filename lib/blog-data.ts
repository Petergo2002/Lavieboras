export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string; // HTML string
    image: string;
    keywords: string[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: "herrmode-boras-2026",
        title: "Herrfrisyrer 2026 i Borås: Trendguide från Din Barberare",
        date: "08 JAN 2026",
        image: "/blog-trends.png",
        excerpt: "Från klassiska fades till längre texturerade frisyrer. Här är den ultimata guiden till årets snyggaste herrfrisyrer i Borås från din lokala barberare.",
        keywords: ["herrfrisör borås", "frisör borås 2026", "fade borås", "barberare borås", "low taper fade", "herrfrisyrer trender", "bästa frisör borås"],
        content: `
            <p class="lead">Borås är en stad med en stark modetradition, och 2026 är inget undantag. Som frisör i Borås ser vi en spännande shift från de ultra-strikta stilarna till något mer levande och personligt. Här är trenderna som dominerar stadsbilden just nu.</p>
            
            <h3>1. The Textured Crop (Texturerad Lugg)</h3>
            <p>Detta är årets stora vinnare hos oss på Salong LaVie i Borås. En kort frisyr med mycket textur på toppen och en framåtriktad lugg. Det är den perfekta kombinationen av "business" och "casual". Den kräver minimal styling men ser alltid genomtänkt ut. Be din barberare om en "French Crop" med mycket texturering.</p>

            <h3>2. Modern Mullet & Wolf Cut</h3>
            <p>Ja, du läste rätt. Mulleten är tillbaka, men glöm 80-talets extrema varianter. Den moderna versionen är mjukare, sofistikerad och ofta kombinerad med en snygg <strong class="text-gold-500">Burst Fade</strong> runt öronen. Det handlar om att behålla längd i nacken för att skapa en siluett som sticker ut. En favorit bland våra kunder på Västerlånggatan.</p>

            <h3>3. Low Taper Fade</h3>
            <p>Om du vill ha en ren look men ändå behålla längd och volym, är en Low Taper Fade det självklara valet. Till skillnad från en hög skin-fade som exponerar mycket hud, ger en låg taper en mjukare övergång vid polisonger och nacke. Det är elegant, tidlöst och ser fantastiskt ut när det växer ut. En klassiker som vi utför dagligen som herrfrisör i Borås.</p>

            <h3>4. Buzz Cut med karaktär</h3>
            <p>För den som vill ha det ultimat lättskötta. Men 2026 handlar Buzz Cut inte bara om att raka av allt. Vi ser varianter med linjer, färgade inslag eller geometriska former i nacken. Det är ett statement.</p>

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
    }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}
