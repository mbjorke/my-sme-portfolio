---
marp: true
theme: gaia
class: invert
style: |
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  :root {
    --font-sans: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  section {
    background: #1a1a1a;
    color: white;
    font-family: var(--font-sans);
    padding: 4rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    background: linear-gradient(90deg, #ccfbf1, #2dd4bf, #0ea5e9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    letter-spacing: -0.02em;
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1.2rem;
    color: #2dd4bf;
    letter-spacing: -0.01em;
  }

  h4 {
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 1.2rem;
    color: #7dd3fc;
    letter-spacing: -0.01em;
  }

  p, li {
    font-size: 0.5rem;
    line-height: 1.6;
    margin-bottom: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.01em;
  }

  strong, blockquote {
    font-weight: 600; line-height: 1.2;
  }

  a {
    color: #7dd3fc;
    text-decoration: underline;
    transition: opacity 0.2s ease;
  }

  a:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
---

# AI-Assisterad Utveckling

## En praktisk demonstration av modern kodning

Definitionen av [Vibe Coding](https://en.wikipedia.org/wiki/Vibe_coding)

![bg right:40% w:400](marcus-bjorke.jpeg)

Marcus Björke  
Grundare, Blueberry AI

---

### Varför detta ämne nu?

- AI förändrar utvecklingslandskapet snabbt
- Många utvecklare är osäkra på sin roll
- Vi behöver en balans mellan mänsklig expertis och AI

> Den bästa tiden att plantera ett träd var för 20 år sedan. Den näst bästa tiden är nu.
> — Kinesiskt ordspråk

![bg right:40% w:400](tree-planting.png)

---

## Enligt Karpathy (OpenAI CTO)

### 1. Software 3.0 är här

Stora språkmodeller (LLM:er) gör det möjligt att programmera med naturligt språk (t.ex. svenska) istället för traditionell kod – vilket gör programmering mer intuitivt och tillgängligt för alla.

![bg right:40% w:400](andrej-karpathy.png)

> "Den hetaste nya programmeringsspråket är engelska"
> — Andrej Karpathy

---

### 2. Människa och AI samarbetar

Framtidens mest effektiva system kommer att _förstärka_ människor (som Iron Mans dräkt), inte ersätta dem – genom delvis autonomi och samarbete.

![bg right:40% w:400](iron-man-jarvis.png)

> The
> — Andrej Karpathy

---

### 3. Demokratiserad innovation

LLM:er gör att vem som helst kan bli programmerare, vilket öppnar för enorm innovation och förändrar den digitala infrastrukturen för AI-agenter.

_Bonus:_ Tidigt skede av denna förändring – enorma möjligheter väntar!

![bg right:40% w:400](goofy-coding.png)

> "Vi är i det tidiga huvuddatorstadiet av denna transformation"
>
> — Andrej Karpathy

---

### The Way of Code (Grammy-vinnande producent)

- Kodning som [konstform](https://www.thewayofcode.com/)
- Fokus på känsla och flöde
- Processen är lika viktig som resultatet

![bg right:40% w:400](rick-rubin.png)

> Knowing how it works isn't what makes it work. The magic isn't how it works, the magic is the magic.
> — Rick Rubin (https://youtu.be/SfWs4d2-pH0?t=19)

---

## AI-kodning: Zhu Liangs klassificering

### 1. 5 nivåer av AI-kodningsautomation

- **L1**: Grundläggande kodkomplettering
- **L2**: Kontextmedvetna förslag
- **L3**: Helfilsgenerering
- **L4**: Projektnivåimplementering
- **L5**: Autonoma AI-team

![bg right:40% w:400](ai-coding-landscape.png)

---

### 2. Människans roll vs. AI-autonomi

- **L1-L3**: Människan har kontrollen
  - AI hjälper till med implementation
  - Människan designar och validerar
- **L4-L5**: Ökad AI-autonomi
  - AI hanterar arkitektur och driftsättning
  - Människan validerar resultat

![bg right:40% w:400](ai-coding-landscape.png)

---

### 3. Effektivt AI-kodningsflöde

1. **Tydliga mål**

   - Bryt ner komplexa uppgifter
   - Ange tydlig kontext

2. **Iterativ utveckling**

   - Granska och förfina AI:ns utdata
   - Behåll mänsklig översyn

3. **Optimerat samarbete**
   - AI som produktivitetsverktyg
   - Fokusera på värdeskapande uppgifter

![bg right:40% w:400](ai-coding-landscape.png)

---

## Lovable.dev & Bolt.new

### Vad vi ska göra:

1. Några exempel på Lovable, precis innan du är på väg in till Tandläkaren testa en liknande prompt: "A redesigned website for a local dentist positioning them as the choice with highest customer satisfaction. The current site is www.nyhfahlers.ax"

Or "A site for career counceling that

- Users can see my packages
- User see my reviews
- User can easily contact med via a contact form, mandatory fields, subject, high level education
- Users can login to get different types of councelling, chat, live chat, phone, video
- User can book an appointment
- User can cancel an appointment
- User can reschedule an appointment
- User can rate an appointment
- User can review an appointment
- User can rate a counselor
- User can review a counselor
- User can rate a package
- User can review a package

2. Några exempel på Bolt

En jämförelse du kan se på Youtube: [Bolt vs Lovable: which one creates the best designs?](https://www.youtube.com/watch?v=DMYgrv1mbUY)

![bg right:40% w:400](ai-coding-landscape.png)

---

## Windsurf.ai-demo

### Vad vi ska göra:

1. Analysera nuvarande kodbas för blueberry.surf
2. Utöka kontaktformuläret med en multi choice field
3. Implementera validering
4. Testa och iterera

---

## Nyckellärdomar

1. AI är ett verktyg, inte en ersättning
2. Mänsklig expertis är fortfarande avgörande
3. Bästa resultat uppnås i samarbete

---

# Frågor?

Tack för er uppmärksamhet!

![bg right:40% w:400](./public/assets/blueberry-logo.png)

Marcus Björke

- E-post:[mbjorke@gmail.com](mailto:mbjorke@gmail.com)
- Hemsida: [blueberry.surf](https://blueberry.surf)
- LinkedIn: [mbjorke](https://linkedin.com/in/mbjorke)
