import type { TeamMember, WorkProcessStep, WorkProcessImage } from '@/types/siteConfig';

export const siteConfig = {
  locales: ['en', 'sv'],
  defaultLocale: 'en',
  translations: {
    en: {
      navLinks: {
        Home: 'Home',
        Services: 'Services',
        Pricing: 'Pricing',
        Contact: 'Contact',
        Projects: 'Projects',
      },
      about: {
        title: 'About Me',
        description:
          'I’m a developer and designer who loves crafting visually appealing, interactive, and accessible digital experiences. Let’s build something great together!',
        cta: {
          text: 'Learn more about Marcus',
          url: '#about',
        },
        moreInfo: 'More Info',
      },
      memories: {
        title: 'Memories',
        quote: 'Where design clarity meets dev mixtape energy.',
        cta: 'See all memories',
      },
      how: {
        title: 'How',
        steps: [
          {
            title: 'Share your idea.',
            description:
              'See your site come to life—fast. Bring your brand colors and a few images—let’s see the potential right away.',
            images: ['💡', '👨‍🍳'],
          },
          {
            title: 'Build together.',
            description:
              'We’ll shape your site or app idea using windsurf.ai, making updates and improvements as we go. You’ll see your vision take form in real time.',
            images: ['🛠️', '👩‍🍳'],
          },
          {
            title: 'Edit & Own.',
            description:
              'You’ll learn how to use git and windsurf.ai to keep improving your site yourself. My goal is to empower you to own and evolve your digital product.',
          },
          {
            title: 'Go live & scale.',
            description:
              'We’ll set up production-ready pipelines with AWS. You’ll have the option to add environments like development and staging, so your workflow can grow as your project does.',
          },
        ],
      },
      projectsSection: {
        title: 'Projects / Case Studies',
      },
      testimonials: {
        title: 'Testimonials',
        subtitle: 'What clients and collaborators say about working together',
      },
      buttons: {
        cta: "Let's chat",
        sendMessage: 'Send Message',
      },
      contact: {
        title: 'Contact',
        successMessage: 'Thank you for reaching out! I’ll get back to you soon.',
        name: 'Name',
        email: 'Email',
        message: 'Message',
      },
      hero: {
        subheading: 'Modern development',
        heading: 'design',
        highlight: 'and',
        description: 'automation',
        callToAction: 'Let’s improve your UX solutions together',
      },
      error: {
        noTeamMembers: 'No team members found. Check your siteConfig.ts!',
      },
      services: {
        title: 'Services',
        subtitle: 'Comprehensive solutions tailored to your business needs',
        cta: {
          text: 'See all services',
          url: '#services',
        },
      },
      pricing: {
        title: 'Pricing',
        sectionId: 'pricing',
        cta: {
          text: 'Choose your plan',
          url: '#pricing',
        },
      },
    },
    sv: {
      navLinks: {
        Home: 'Hem',
        Services: 'Tjänster',
        Pricing: 'Prissättning',
        Contact: 'Kontakt',
        Projects: 'Projekt',
      },
      about: {
        title: 'Om mig',
        description:
          'Jag är en utvecklare och designer som älskar att skapa visuellt tilltalande, interaktiva och tillgängliga digitala upplevelser. Låt oss bygga något fantastiskt tillsammans!',
        cta: {
          text: 'Läs mer om Marcus',
          url: '#about',
        },
        moreInfo: 'Mer info',
      },
      memories: {
        title: 'Minnen',
        quote: 'Där designklarhet möter dev-mixtape-energi.',
        cta: 'Se alla minnen',
      },
      how: {
        title: 'Så här',
        steps: [
          {
            title: 'Dela din idé.',
            description:
              'Se din webbplats ta form direkt. Ta med dina färger och några bilder—så ser vi potentialen direkt.',
          },
          {
            title: 'Bygg tillsammans.',
            description:
              'Vi formar din webbplats eller app med windsurf.ai och gör förbättringar längs vägen. Du ser din vision växa fram i realtid.',
          },
          {
            title: 'Ta kontroll över din kod.',
            description:
              'Du lär dig använda git och windsurf.ai för att själv kunna förbättra din webbplats. Målet är att du ska kunna äga och utveckla din digitala produkt.',
          },
          {
            title: 'Gå live & skala.',
            description:
              'Vi sätter upp produktionsklara pipelines med AWS. Du kan lägga till miljöer som utveckling och staging, så att ditt arbetsflöde kan växa med projektet.',
          },
        ],
      },
      projectsSection: {
        title: 'Projekt / Fallstudier',
      },
      testimonials: {
        title: 'Omdömen',
        subtitle: 'Vad kunder och samarbetspartners säger om samarbetet',
      },
      buttons: {
        cta: 'Nu surfar vi',
        sendMessage: 'Skicka meddelande',
      },
      contact: {
        title: 'Kontakt',
        successMessage: 'Tack för ditt meddelande! Jag återkommer snart.',
        name: 'Namn',
        email: 'E-post',
        message: 'Meddelande',
      },
      hero: {
        subheading: 'Bygger digitala produkter sedan 1997',
        heading: 'Där utveckling möter',
        highlight: 'design',
        description:
          "Blueberry tillämpar ett fokuserat kaizen-tänk i allt vi gör. 'Kai' betyder 'förändring' och 'zen' betyder 'till det bättre'.",
        callToAction: 'Låt oss förbättra dina UX-lösningar tillsammans.',
      },
      error: {
        noTeamMembers: 'Inga teammedlemmar hittades. Kontrollera din siteConfig.ts!',
      },
      services: {
        title: 'Tjänster',
        subtitle: 'Omfattande lösningar skräddarsydda för dina affärsbehov',
        cta: {
          text: 'Se alla tjänster',
          url: '#services',
        },
      },
      pricing: {
        title: 'Priser',
        sectionId: 'pricing',
        cta: {
          text: 'Välj din plan',
          url: '#pricing',
        },
      },
      caseStudies: {
        careerCounseling: {
          title: 'Karriärvägledningsplattform',
          summary: 'En modern karriärvägledningsplattform byggd med Next.js, där användare kan utforska olika vägledningspaket, läsa recensioner och boka sessioner.',
          description: 'En omfattande karriärvägledningsplattform utformad för att koppla samman användare med professionell karriärvägledning. Plattformen erbjuder olika vägledningspaket, kundrecensioner och ett användarvänligt kontaktformulär för förfrågningar.',
          features: [
            'Användarautentisering och profilanpassning',
            'Interaktiv paketvals- och bokningsfunktion',
            'Sektion för kundrecensioner och erfarenheter',
            'Kontaktformulär med validering av utbildningsnivå',
            'Responsiv design för alla enheter',
            'Säker betalningsintegration',
            'Adminpanel för sessionshantering'
          ]
        },
        uxHighBias: {
          title: 'UX HIGH BIAS',
          summary: 'Ett zine-inspirerat Vibe-portföljramverk, under utveckling, men mycket likt den här webbplatsen du tittar på just nu.',
          description: 'Ett modernt, anpassningsbart portföljramverk byggt med Next.js och Tailwind CSS. Designat för utvecklare och designers som vill visa upp sitt arbete. Grunden har en unik, zine-inspirerad estetik som enkelt kan anpassas med moderna utvecklingsverktyg som Windsurf.ai.',
          features: [
            'Responsiv design som fungerar på alla enheter',
            'Stöd för mörkt/ljust läge, kan inaktiveras',
            'Shadcn/ui-komponenter med TailwindCSS',
            'Nytt temaredigeringsverktyg kommer snart från Shadcn',
            'Flerspråksstöd, gör det superenkelt att lägga till hur många språk som helst',
            'Enkelt anpassningsbara färgscheman och flera teman om så önskas',
            'Stöd för Markdown för innehåll, t.ex. LinkedIn-mallar',
            'Inbyggd analysfunktionalitet',
            'Guide för att fylla i innehåll',
            'AAA+ tillgänglighet från start',
            'SEO-optimerad'
          ]
        },
        blueberryBanking: {
          title: 'Project Blueberry Banking',
          summary: 'En mobil affärsbankapp med tema för småföretagare, surfarvibbar, byggd med Framer för att visa upp interaktionsmöjligheter',
          description: 'En konceptuell mobilbankapp speciellt utformad för småföretagare med en passion för surfing. Detta projekt visar moderna UI/UX-mönster för finansiella applikationer med en unik och engagerande visuell stil.',
          features: [
            'Interaktiva prototyper med Framer',
            'Anpassat animationssystem',
            'Användarflöden för vanliga bankärenden',
            'Designsystem med mörkt/ljust läge',
            'Responsiva designmönster'
          ]
        },
        robWatkins: {
          title: 'Rob Watkins Fotografi',
          summary: 'En anpassad portföljwebbplats för fotografering som fokuserar på fantastisk visuell berättande och sömlös innehållshantering.',
          description: 'En anpassad portföljwebbplats för fotografering byggd med fokus på prestanda och visuell effekt. Webbplatsen har en ren, minimal design som fokuserar på Robs fantastiska fotografiska arbete, med ett anpassat innehållshanteringssystem som gör det enkelt för honom att uppdatera sin portfölj.',
          features: [
            'Anpassad bildoptimeringspipeline',
            'Dynamiskt galleri med filtrering',
            'System för kundgranskning',
            'SEO-optimerad för fotografer',
            'Mobil-först responsiv design',
            'Snabbladdande bildleverans'
          ]
        }
      },
    },
  },

  personal: {
    name: 'Marcus Björke',
    title: 'UX High Bias',
    avatar: '/images/avatar.jpg',
    bio: 'Developer & designer crafting digital mixtapes.',
    oneLiner: 'Where design clarity meets dev mixtape energy.',
    social: {
      linkedin: 'https://www.linkedin.com/in/mbjorke',
      github: 'https://github.com/mbjorke',
    },
    cta: {
      text: 'Connect with Marcus',
      url: '#contact',
    },
  },
  navLinks: [
    { label: 'About', url: '#about' },
    { label: 'Services', url: '#services' },
    { label: 'Pricing', url: '#pricing' },
    { label: 'Contact', url: '#contact' },
    { label: 'Projects', url: '#projects' },
  ],
  about: {
    title: 'About Me',
    description:
      'I’m a developer and designer who loves crafting visually appealing, interactive, and accessible digital experiences. Let’s build something great together!',
    cta: {
      text: 'Learn more about Marcus',
      url: '#about',
    },
  },
  memories: {
    title: 'Memories',
    quote: 'Where design clarity meets dev mixtape energy.',
    cta: 'See all memories',
  },
  how: {
    title: 'How',
  },
  projectsSection: {
    title: 'Projects / Case Studies',
  },
  testimonials: {
    title: 'Testimonials',
    subtitle: 'What clients and collaborators say about working together',
  },
  buttons: {
    letsChat: "Let's chat",
    sendMessage: 'Send Message',
  },
  pricing: {
    title: 'Pricing',
    sectionId: 'pricing',
    cta: {
      text: 'Choose your plan',
      url: '#pricing',
    },
  },
  // Ensure comma after pricing
  projects: [
    {
      title: 'Project Blueberry Banking',
      summary:
        'A mobile Business Banking App themed for a small business owner, surfer vibes, this is built with Framer just to showcase interaction examples',
      image: '/assets/alone-surfer.jpg',
      url: 'https://blueberry-bank.framer.website',
      cta: {
        text: 'Explore this project',
        url: 'https://blueberry-bank.framer.website',
      },
    },
    {
      title: 'Rob Watkins Photography',
      summary:
        'Rob had ideas—too many. He was stuck, unsure what to offer or how to show it. I helped him cut through the noise and focus on his story. In an hour, we had a solid draft. Now he runs his own site, fully in control and paying less than before.',
      image: '/assets/rob-watkins-offers.png',
      url: 'https://robw.framer.photos',
      cta: {
        text: "Visit Rob's site",
        url: 'https://robw.framer.photos',
      },
    },
  ],
  // Ensure comma after projects array
  projectsCta: {
    text: 'View projects',
    url: '#projects',
  },
  // Ensure comma after projectsCta
  callToAction: {
    text: 'Let’s build something meaningful together',
    url: '#contact',
  },
  // Ensure comma after callToAction
  socialProof: [
    {
      type: 'Mentor & Coach',
      name: 'Chris Nguyen',
      badge: 'backlog.design',
      badgeUrl: '/assets/backlog-logo.svg',
      url: 'https://www.linkedin.com/in/uxchrisnguyen',
      quote: 'Marcus is a creative force and a true community builder.',
      show: true,
    },
    {
      type: 'Client',
      name: 'Anna Svensson',
      badge: 'Svensson Consulting',
      badgeUrl: '/images/svensson-badge.svg',
      url: 'https://www.linkedin.com/in/annasvensson',
      quote: 'Working with Marcus was a game changer for our business.',
      show: true,
    },
    {
      type: 'Logo',
      name: 'NordicTech',
      badge: 'NordicTech',
      badgeUrl: '/images/nordictech-logo.svg',
      url: 'https://nordictech.se',
      quote: '',
      show: true,
    },
  ],
  caseStudies: [
    {
      title: 'Career Counseling Platform',
      summary: 'A modern career counseling platform built with Next.js, enabling users to explore counseling packages, read reviews, and book sessions.',
      image: '/assets/career-path-case.png',
      url: 'https://preeminent-heliotrope-7d4b20.netlify.app',
      openInNewTab: true,
      openInDialog: true,
      content: {
        description: 'A comprehensive career counseling platform designed to connect users with professional career guidance services. The platform offers various counseling packages, client testimonials, and an easy-to-use contact form for inquiries.',
        features: [
          'User authentication and profile management',
          'Interactive package selection and booking system',
          'Client review and testimonial section',
          'Contact form with education level validation',
          'Responsive design for all devices',
          'Secure payment integration',
          'Admin dashboard for session management'
        ],
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Stripe', 'Framer Motion'],
        links: [
          { text: 'Live Website', url: 'https://preeminent-heliotrope-7d4b20.netlify.app', target: '_blank' },
          { text: 'Live Prototype', url: 'https://preeminent-heliotrope-7d4b20.netlify.app', target: '_self' }
        ]
      },
      cta: {
        text: 'View Platform',
        url: 'https://preeminent-heliotrope-7d4b20.netlify.app',
        target: '_blank'
      },
    },
    {
      title: 'UX HIGH BIAS',
      summary: 'A zine-inspired Vibe portfolio framework, under development, but very much like this site you are watching now.',
      image: '/assets/ux-high-bias.png',
      url: 'https://ux-high-bias.framer.website',
      openInNewTab: false,
      openInDialog: true,
      content: {
        description: 'A modern, customizable portfolio framework built with Next.js and Tailwind CSS. Designed for developers and designers who want to showcase their work. The base will be with a unique, zine-inspired aesthetic, but that is easily customizable with Modern Vibe Coding Tools like Windsurf.ai.',
        features: [
          'Responsive design that works on all devices',
          'Dark/light mode support, disablable',
          'Shadcn/ui components with TailwindCSS',
          'New Theme Editor coming soon from Shadcn',
          'Multilanguage support, makes it super easy to add how many languages you want by just instructing Windsurf.ai what languages you want',
          'Easy Customizable color schemes, and even multiple themes if you want',
          'Markdown support for content, i.e. LinkedIn templates',
          'Built-in analytics',
          'Wizard to populate content',
          'AAA+ accessible from start',
          'SEO optimized'
        ],
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'MDX'],
        links: [
          { text: 'GitHub Repository', url: 'https://github.com/yourusername/ux-high-bias' },
          { text: 'Live Demo', url: 'https://ux-high-bias.framer.website' }
        ]
      },
      cta: {
        text: 'See the case',
        url: 'https://ux-high-bias.framer.website',
        target: '_blank'
      },
    },
    {
      title: 'Project Blueberry Banking',
      summary: 'A mobile Business Banking App themed for a small business owner, surfer vibes, built with Framer to showcase interaction examples',
      image: '/assets/blueberry-banking-case.png',
      url: 'https://blueberry-bank.framer.website',
      openInNewTab: false,
      openInDialog: true,
      content: {
        description: 'A concept mobile banking application designed specifically for small business owners with a passion for surfing. This project showcases modern UI/UX patterns for financial applications with a unique, engaging visual style.',
        features: [
          'Interactive prototypes with Framer',
          'Custom animation system',
          'User flows for common banking tasks',
          'Design system with dark/light modes',
          'Responsive design patterns'
        ],
        technologies: ['Framer'],
        links: [
          { text: 'Live Website', url: 'https://blueberry-bank.framer.website', target: '_blank' },
          { text: 'Live Prototype', url: 'https://blueberry-bank.framer.website', target: '_self' }
        ]
      },
      cta: {
        text: 'See the case',
        url: '#',
        target: '_self'
      },
    },
    {
      title: 'Rob Watkins Photography',
      summary: 'A custom photography portfolio website that puts the focus on stunning visual storytelling and seamless content management.',
      image: '/assets/rob-watkins-offers.png',
      url: 'https://robw.framer.photos',
      openInNewTab: false,
      openInDialog: true,
      content: {
        description: 'A custom photography portfolio website built with a focus on performance and visual impact. The site features a clean, minimal design that puts the focus on Rob\'s stunning photography work, with a custom content management system that allows him to easily update his portfolio.',
        features: [
          'Custom image optimization pipeline',
          'Dynamic gallery with filtering',
          'Client proofing system',
          'SEO optimized for photographers',
          'Mobile-first responsive design',
          'Fast-loading image delivery'
        ],
        technologies: ['Framer'],
        links: [
          { text: 'Visit Live Site', url: 'https://robw.framer.photos' }
        ]
      },
      cta: {
        text: "See the case",
        url: 'https://robw.framer.photos',
        target: '_blank'
      },
    },
  ],

  footer: {
    copyright: ' 2025 Marcus Björke. All rights reserved.',
    links: [
      { label: 'Contact', url: '#contact' },
      { label: 'Projects', url: '#projects' },
      { label: 'GitHub', url: 'https://github.com/mbjorke/ux-high-bias' },
    ],
    cta: {
      text: 'Get in touch',
      url: '#contact',
    },
  },
  teamMembers: [
    {
      name: 'Marcus Björke',
      title: 'Vibe Code Wizard',
      avatar: 'https://avatars.githubusercontent.com/u/2591380?v=4',
      bio: "When not wrangling TypeScript or arguing about semicolons, I'm probably talking to my Bonzai trees about responsive design.",
      skills: [
        'TypeScript',
        'React',
        'UI/UX Design',
        'TailwindCSS',
        'No-code tools, Windsurf.ai, Framer',
        'Bonzai tree Whispering',
      ],
      funFact: 'Once wrote a recursive function so beautiful it made a compiler cry.',
      favoriteSnack: 'Salta Grodor (a Scandinavian licorice candy)',
      social: {
        github: 'https://github.com/mbjorke',
      },
    },
    {
      name: 'Marcus Björke',
      title: 'SaaS Dreamer, CEO',
      avatar: '/assets/ux-high-bias.png',
      bio: 'Dreaming about a future where Blueberry can build the next big thing with AI',
      skills: ['Strategic Thinking', 'Growth Mindset', 'Customer Development'],
      funFact:
        'The name Blueberry Maybe comes from a cherished childhood memory. One day my uncle wasn’t sure which berries to use in a cake, so he just picked randomly from the freezer. We asked what flavour it was, he humorously coined the phrase: Blueberry Maybe.',
      favoriteSnack: 'Sour Patch Kids (the forbidden fruit of coding snacks)',
      social: {
        linkedin: 'https://linkedin.com/in/mbjorke',
      },
    },
    {
      name: 'Marcus Björke',
      title: 'Surfer, Rider, Skier',
      avatar: '/assets/alone-surfer.jpg',
      bio: "I have a passion for the sea, the wind, and the snow. I'm currently dreaming about making Åland a famous destination for eMTB riders from all over the world.",
      skills: [
        'Windsurf',
        'Kitesurf',
        'Wingfoiling',
        'eMTB',
        'Longdistance Ice Skating, Downhillskiing',
      ],
      funFact:
        'Twice I have windsurfed accross the sea of Åland. Windsurf carreer started when I was 17 years old. I transitioned to Kitesurfing and latest into Wingfoiling. Goal is to be able to fly in 2025.',
      favoriteSnack: "My wife's hemvetebröd or kanelbullar",
      social: {
        bluesky: 'https://instagram.com/mbjorke',
      },
    },
  ] as TeamMember[],
};
