import type { TeamMember, WorkProcessStep, WorkProcessImage } from "@/types/siteConfig";


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
              description: "See your site come to life—fast. Bring your brand colors and a few images—let’s see the potential right away.",
              images: ['💡', '👨‍🍳'],
            },
            {
              title: 'Build together.',
              description:
                "We’ll shape your site or app idea using windsurf.ai, making updates and improvements as we go. You’ll see your vision take form in real time.",
              images: ['🛠️', '👩‍🍳'],
            },
            {
              title: 'Edit & Own.',
              description:
                "You’ll learn how to use git and windsurf.ai to keep improving your site yourself. My goal is to empower you to own and evolve your digital product."
            },
            {
              title: 'Go live & scale.',
              description:
                "We’ll set up production-ready pipelines with AWS. You’ll have the option to add environments like development and staging, so your workflow can grow as your project does."
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
          description:
            "automation",
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
        title: 'UX HIGH BIAS',
        summary: 'A zine-inspired Vibe portfolio framework for vibe coders and visual tinkers.',
        image: '/images/high-bias.png',
        url: 'https://ux-high-bias.framer.website',
        cta: {
          text: 'See the case',
          url: 'https://ux-high-bias.framer.website',
        },
      },
      {
        title: 'Project Blueberry Banking',
        summary:
          'A mobile Business Banking App themed for a small business owner, surfer vibes, this is built with Framer just to showcase interaction examples',
        image: '/images/blueberry-case.png',
        url: 'https://blueberry-bank.framer.website',
        cta: {
          text: 'Explore this project',
          url: 'https://blueberry-bank.framer.website',
        },
      },
      {
        title: 'Rob Watkins Photography',
        summary:
          'Rob had too many ideas about his business, basically stuck from what to offer and when.  instead of trying to fit into a template, I made Rob realise to which picture to choose. I helped him realize that he first needed to focus on his own storytelling. In 1 hour I drafted the first version. Rob is now in control of the code for lower price than he used to pay to his old website service he is now in full controll of all the creative aspects of having his website.',
        image: '/assets/rob-watkins-offers.png',
        url: 'https://robw.framer.photos',
        cta: {
          text: "Visit Rob's site",
          url: 'https://robw.framer.photos',
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
        avatar: '/assets/no-clients-yet.png',
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
        avatar: '/assets/surfer-playing-speed.png',
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
  