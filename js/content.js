/* ==========================================================
   CONTENU DU PORTFOLIO — tout le texte se modifie ici.
   Chaque texte a une version FR et une version EN.
   Pour ajouter une image : renseigne `cover` et `gallery`
   dans un projet (ex. cover: "assets/projets/cosmetique/cover.jpg").
   ========================================================== */
window.C = {
  site: {
    name: "Charles Surleraux",
    email: "charlessurleraux@gmail.com",
    photo: "assets/charles.webp",
    links: {
      LinkedIn: "https://www.linkedin.com/in/charles-surleraux-68b23b241/",
      Instagram: "https://www.instagram.com/charles.surleraux/",
      Facebook: "https://www.facebook.com/charles.surleraux/"
    }
  },

  ui: {
    nav: {
      projects: { fr: "Projets", en: "Work" },
      about: { fr: "À propos", en: "About" },
      contact: { fr: "Contact", en: "Contact" }
    },
    avail: { fr: "Disponible · Freelance & opportunités", en: "Available · Freelance & opportunities" },
    heroSub: {
      fr: "Créatif & communication. Photo, vidéo et réseaux sociaux : des contenus chaleureux qui racontent les gens et les métiers.",
      en: "Creative & communication. Photo, video and social media: warm content that tells the story of people and crafts."
    },
    hint: { fr: "Attrape-moi", en: "Grab me" },
    scroll: { fr: "Défiler", en: "Scroll" },
    marquee: ["Photo", "Vidéo", "Réseaux sociaux", "Montage", "Print", "Stratégie", "IA"],
    statement: {
      fr: "Je transforme des idées, des savoir-faire et des visages en contenus qui donnent envie : photos, vidéos, posts et supports print.",
      en: "I turn ideas, know-how and faces into content people want to see: photos, videos, posts and print."
    },
    selected: { fr: "Sélection de projets", en: "Selected work" },
    selectedTitle: { fr: "Trois histoires à raconter.", en: "Three stories worth telling." },
    seeProject: { fr: "Voir le projet", en: "View project" },
    cursorView: { fr: "Voir", en: "View" },
    cursorDrag: { fr: "Drag", en: "Drag" },
    allProjects: { fr: "Tous les projets", en: "All projects" },
    allTitle: { fr: "Tous les projets", en: "All work" },
    allIntro: {
      fr: "Photo, vidéo, réseaux sociaux et print : un aperçu de ce que je fabrique.",
      en: "Photo, video, social media and print: a look at what I make."
    },
    filters: { all: { fr: "Tous", en: "All" }, video: { fr: "Vidéo", en: "Video" }, photo: { fr: "Photo", en: "Photo" }, social: { fr: "Social", en: "Social" }, print: { fr: "Print", en: "Print" } },
    placeholder: { fr: "Visuel à venir", en: "Visual coming soon" },
    draft: { fr: "Texte provisoire, à compléter.", en: "Draft text, to be completed." },
    meta: { client: { fr: "Client", en: "Client" }, role: { fr: "Rôle", en: "Role" }, year: { fr: "Année", en: "Year" }, tools: { fr: "Outils", en: "Tools" } },
    next: { fr: "Projet suivant", en: "Next project" },
    back: { fr: "← Tous les projets", en: "← All work" },
    teaserTitle: { fr: "Un peu de moi.", en: "A little about me." },
    teaserBtn: { fr: "Mon parcours", en: "My story" },
    contactEyebrow: { fr: "Contact", en: "Contact" },
    contactTitle: { fr: "Un projet ?", en: "Got a project?" },
    contactTitle2: { fr: "Parlons-en.", en: "Let's talk." },
    write: { fr: "Écrire", en: "Write" },
    top: { fr: "Haut ↑", en: "Top ↑" },
    rights: { fr: "© 2026 Charles Surleraux", en: "© 2026 Charles Surleraux" }
  },

  about: {
    title: { fr: "Créatif, curieux, toujours en train de tester.", en: "Creative, curious, always testing something." },
    bio: {
      fr: [
        "Je suis Charles, chargé de communication à l'Atelier Jean Regniers, en alternance avec l'UCL. Je m'occupe de tout le cycle d'un contenu : l'idée, le tournage ou la prise de vue, le montage, puis la mise en ligne.",
        "J'ai lancé les comptes Instagram et TikTok de l'Atelier, et je réfléchis sans cesse à de nouveaux formats pour montrer les métiers et les personnes qui font vivre l'entreprise.",
        "Je suis positif, curieux et ambitieux. J'apprends en testant les outils, surtout l'intelligence artificielle, et j'aime aller au bout de ce que j'entreprends."
      ],
      en: [
        "I'm Charles, communication officer at Atelier Jean Regniers, on a work-study programme with UCL. I handle the full life of a piece of content: the idea, the shoot, the edit, then publishing.",
        "I launched the Atelier's Instagram and TikTok accounts, and I'm always looking for new formats to show the crafts and the people who make the company tick.",
        "I'm positive, curious and ambitious. I learn by testing tools, especially AI, and I like to see things through."
      ]
    },
    valuesTitle: { fr: "Mes valeurs", en: "My values" },
    values: { fr: ["Honnêteté", "Positivisme", "Ambition", "Respect", "Entraide"], en: ["Honesty", "Positivity", "Ambition", "Respect", "Mutual aid"] },
    toolsTitle: { fr: "Ce que je maîtrise", en: "What I work with" },
    tools: ["Premiere Pro", "Photoshop", "Illustrator", "Lightroom", "Canva", "Suite Office", "Outils d'IA"],
    timelineTitle: { fr: "Parcours", en: "Path" },
    timeline: [
      { when: "2026", what: { fr: "Chargé de communication", en: "Communication officer" }, where: "Atelier Jean Regniers" },
      { when: "2026–2027", what: { fr: "Études en information & communication [à préciser]", en: "Studies in information & communication [to be specified]" }, where: "UCL" },
      { when: "[Année]", what: { fr: "Bachelier [à préciser]", en: "Bachelor's degree [to be specified]" }, where: "[Établissement]" }
    ],
    interestsTitle: { fr: "Hors écran", en: "Off screen" },
    interests: {
      fr: "Course à pied, jeux vidéo et compétitions e-sport, sorties entre proches, nouvelles technologies.",
      en: "Running, video games and esports, going out with friends, new technology."
    }
  },

  /* tone : terracotta | honey | sage | ink | cream  (couleur du placeholder) */
  projects: [
    {
      slug: "cosmetique", featured: true, cat: ["video", "social"], tone: "terracotta", year: "2026",
      title: { fr: "Première production cosmétique", en: "First cosmetics production" },
      line: { fr: "Un reel vertical autour d'Elodie et de la naissance d'une gamme.", en: "A vertical reel around Elodie and the birth of a product line." },
      role: { fr: "Tournage, montage, motion", en: "Shooting, editing, motion" },
      tools: "Premiere Pro, Photoshop",
      text: {
        fr: ["Réalisation d'une vidéo présentant la première production cosmétique de l'Atelier, avec l'interview d'Elodie au cœur du récit.", "Format vertical 9:16 pensé pour Instagram et TikTok, aux couleurs de la charte de l'Atelier."],
        en: ["A video presenting the Atelier's first cosmetics production, with an interview with Elodie at the heart of the story.", "Vertical 9:16 format designed for Instagram and TikTok, in the Atelier's brand colours."]
      }
    },
    {
      slug: "saint-nicolas", featured: true, cat: ["social", "print", "video"], tone: "honey", year: "2026",
      title: { fr: "Campagne Saint-Nicolas", en: "Saint Nicolas campaign" },
      line: { fr: "Vidéo, voix off, graphisme et emailing pour une opération de fin d'année.", en: "Video, voice-over, graphics and emailing for a year-end operation." },
      role: { fr: "Conception, graphisme, vidéo, emailing", en: "Concept, graphics, video, emailing" },
      tools: "Premiere Pro, Illustrator, Canva",
      text: {
        fr: ["Une campagne complète autour de la Saint-Nicolas : vidéo avec voix off, visuels, mailing et suivi des envois.", "Du concept jusqu'à la diffusion, avec une même identité visuelle sur tous les supports."],
        en: ["A complete Saint Nicolas campaign: video with voice-over, visuals, mailing and shipping follow-up.", "From concept to delivery, with one visual identity across all media."]
      }
    },
    {
      slug: "chantier", featured: true, cat: ["video", "photo"], tone: "sage", year: "2026",
      title: { fr: "Timelapse du chantier", en: "Construction timelapse" },
      line: { fr: "Plusieurs mois de chantier condensés en quelques secondes.", en: "Several months of construction condensed into a few seconds." },
      role: { fr: "Prise de vue, montage", en: "Photography, editing" },
      tools: "Premiere Pro, Lightroom",
      text: {
        fr: ["Suivi photo régulier d'un chantier de l'Atelier, de l'avant-travaux à la fin, assemblé en timelapse.", "Un exercice de patience et de régularité qui rend visible une transformation lente."],
        en: ["Regular photo tracking of an Atelier construction site, from before the works to the finish, assembled into a timelapse.", "An exercise in patience and consistency that makes a slow transformation visible."]
      }
    },
    {
      slug: "photos-produit", cat: ["photo"], tone: "cream", year: "2026",
      title: { fr: "Photos produit", en: "Product photography" },
      line: { fr: "Des produits mis en valeur, simplement et proprement.", en: "Products shown at their best, simply and cleanly." },
      role: { fr: "Prise de vue, retouche", en: "Photography, retouching" },
      tools: "Lightroom, Photoshop",
      text: {
        fr: ["Séries de photos produit réalisées en interne : cosmétiques, cartons, produits du quotidien de l'Atelier.", "Cadrage, lumière et retouche pour des visuels cohérents d'un produit à l'autre."],
        en: ["Product photo series shot in-house: cosmetics, boxes, everyday Atelier products.", "Framing, light and retouching for visuals that stay consistent from one product to the next."]
      }
    },
    {
      slug: "reseaux", cat: ["social"], tone: "terracotta", year: "2026",
      title: { fr: "Lancement Instagram & TikTok", en: "Instagram & TikTok launch" },
      line: { fr: "Deux nouveaux comptes, proposés puis lancés de zéro.", en: "Two new accounts, proposed then launched from scratch." },
      role: { fr: "Stratégie, contenus, publication", en: "Strategy, content, publishing" },
      tools: "Canva, Premiere Pro",
      text: {
        fr: ["Proposition et lancement des comptes Instagram et TikTok de l'Atelier, en complément de Facebook et LinkedIn.", "Recherche de formats pour montrer les métiers, les gens et les coulisses."],
        en: ["Proposal and launch of the Atelier's Instagram and TikTok accounts, alongside Facebook and LinkedIn.", "Looking for formats that show the crafts, the people and the behind-the-scenes."]
      }
    },
    {
      slug: "gazette", cat: ["print"], tone: "ink", year: "2026",
      title: { fr: "La Gazette d'automne", en: "The autumn Gazette" },
      line: { fr: "La newsletter de l'Atelier, mise en page et illustrée.", en: "The Atelier's newsletter, laid out and illustrated." },
      role: { fr: "Mise en page, visuels", en: "Layout, visuals" },
      tools: "Photoshop, Illustrator",
      text: {
        fr: ["Conception de la Gazette de l'automne 2026 : choix des sujets, mise en page et visuels.", "Un support pour garder le lien avec l'équipe et les partenaires."],
        en: ["Design of the autumn 2026 Gazette: choice of topics, layout and visuals.", "A way to stay connected with the team and partners."]
      }
    },
    {
      slug: "depliant", cat: ["print"], tone: "honey", year: "2026",
      title: { fr: "Dépliant de présentation", en: "Presentation leaflet" },
      line: { fr: "Une mini-plaquette pour présenter l'Atelier en un coup d'œil.", en: "A mini brochure to present the Atelier at a glance." },
      role: { fr: "Mise en page", en: "Layout" },
      tools: "InDesign, Illustrator",
      text: {
        fr: ["Refonte du dépliant de présentation de l'Atelier, dans le respect de la charte graphique."],
        en: ["Redesign of the Atelier's presentation leaflet, in line with the brand guidelines."]
      }
    },
    {
      slug: "celestetic", cat: ["print"], tone: "sage", year: "2026",
      title: { fr: "Celestetic", en: "Celestetic" },
      line: { fr: "Logo, panneau et drapeau : une signalétique de A à Z.", en: "Logo, sign and flag: signage from A to Z." },
      role: { fr: "Identité, signalétique", en: "Identity, signage" },
      tools: "Illustrator, Photoshop",
      text: {
        fr: ["Création et simulation de supports de signalétique : logo, panneau et drapeau."],
        en: ["Creation and mock-ups of signage: logo, sign and flag."]
      }
    },
    {
      slug: "baghu", cat: ["photo"], tone: "terracotta", year: "2026",
      title: { fr: "Baghu, couture", en: "Baghu, sewing" },
      line: { fr: "Un univers textile photographié de près.", en: "A textile world photographed up close." },
      role: { fr: "Photographie", en: "Photography" },
      tools: "Lightroom",
      text: {
        fr: ["Série photo autour des créations couture Baghu."],
        en: ["Photo series around Baghu's sewing creations."]
      }
    }
  ]
};
