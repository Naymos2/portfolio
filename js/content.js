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
    heroSub: {
      fr: "Créatif & communication. Photo, vidéo et réseaux sociaux : des contenus chaleureux qui racontent les gens et les métiers.",
      en: "Creative & communication. Photo, video and social media: warm content that tells the story of people and crafts."
    },
    hint: { fr: "Attrape-moi", en: "Grab me" },
    scroll: { fr: "Descends me déranger", en: "Scroll to interrupt me" },
    marquee2: { fr: ["Des gens", "Des métiers", "Des histoires", "Des idées"], en: ["People", "Crafts", "Stories", "Ideas"] },
    /* Intro : la bulle change à chaque photo (dans l'ordre du scroll) */
    intro: [
      { fr: "Chut, je monte.", en: "Shh, I'm editing." },
      { fr: "Hein ? Quelqu'un scrolle ?", en: "Wait, is someone scrolling?" },
      { fr: "Ah. Tu es là depuis longtemps ?", en: "Oh. Been there long?" },
      { fr: "Salut, moi c'est Charles. Fouille mon bureau !", en: "Hi, I'm Charles. Go on, poke around my desk!" }
    ],
    /* Bureau : x et y = position du point sur la photo, en % */
    desk: [
      { x: 10, y: 61, label: { fr: "Montage", en: "Editing" }, say: { fr: "Là où tout se joue : le montage.", en: "Where it all happens: the edit." } },
      { x: 41, y: 50, label: { fr: "Stabilisateur", en: "Gimbal" }, say: { fr: "Pour que l'image ne tremble pas, même quand moi si.", en: "So the shot stays steady, even when I don't." } },
      { x: 54, y: 53, label: { fr: "Micro", en: "Mic" }, say: { fr: "Une belle image avec un mauvais son, ça ne pardonne pas.", en: "A great shot with bad sound is never forgiven." } },
      { x: 47, y: 65, label: { fr: "Téléphone", en: "Phone" }, say: { fr: "La caméra que j'ai toujours sur moi.", en: "The camera that's always on me." } },
      { x: 57, y: 37, label: { fr: "Plante", en: "Plant" }, say: { fr: "La seule à ne jamais demander de modif.", en: "The only one who never asks for changes." } },
      { x: 9, y: 85, label: { fr: "Café", en: "Coffee" }, say: { fr: "Aucun montage ne se termine sans lui.", en: "No edit gets finished without it." } }
    ],
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
    /* Footer : phrases écrites puis raturées, à tour de rôle */
    contactLines: {
      fr: ["Un projet ?", "Un café ?", "Une idée ?", "Un montage ?"],
      en: ["Got a project?", "A coffee?", "An idea?", "An edit?"]
    },
    copy: { fr: "Copier", en: "Copy" },
    copied: { fr: "Copié !", en: "Copied!" },
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
      slug: "cosmetique", featured: true, cat: ["video", "photo", "social"], tone: "terracotta", year: "2026",
      cover: "assets/projets/cosmetique/cover.jpg",
      title: { fr: "Du chantier au flacon", en: "From site to bottle" },
      line: { fr: "L'histoire d'un atelier cosmétique, racontée de l'espace vide au premier flacon.", en: "The story of a cosmetics workshop, told from an empty space to the first bottle." },
      role: { fr: "Photo, vidéo, montage, déclinaisons réseaux", en: "Photo, video, editing, social media versions" },
      tools: "Premiere Pro, Remotion",
      story: {
        intro: {
          fr: ["Au départ, il n'y a qu'un grand espace vide dans le Hainaut. Quelques mois plus tard, des flacons avancent sur une ligne de remplissage.", "Entre les deux, l'Atelier Jean Regniers a créé une activité toute neuve : la production cosmétique. Mon travail a été de rendre cette histoire visible, en la suivant du chantier jusqu'aux personnes qui la font vivre."],
          en: ["It starts with a big empty space in Hainaut. A few months later, bottles are moving along a filling line.", "In between, Atelier Jean Regniers created a brand new activity: cosmetics production. My job was to make that story visible, following it from the construction site to the people who bring it to life."]
        },
        stats: [
          { value: "8 500+", label: { fr: "images de chantier", en: "construction images" } },
          { value: "3", label: { fr: "vidéos, un seul récit", en: "videos, one story" } },
          { value: "4", label: { fr: "réseaux sociaux", en: "social networks" } },
          { value: "3", label: { fr: "langues de sous-titres", en: "subtitle languages" } }
        ],
        chapters: [
          {
            kicker: { fr: "Le chantier", en: "The site" },
            title: { fr: "Rendre visible ce qui change lentement.", en: "Showing what changes slowly." },
            text: {
              fr: ["Un chantier se transforme trop lentement pour qu'on le voie à l'œil nu. Alors l'appareil a suivi les travaux, image après image.", "Plus de 8 500 images sont condensées en 1 min 14. Le film part d'une vue aérienne du site, puis avance par étapes titrées : préparation de l'espace, aménagement, stockage, jusqu'à la production. Tout l'enjeu était de garder le fil pour qu'on comprenne ce qu'on regarde."],
              en: ["A construction site changes too slowly to see with the naked eye. So the camera followed the works, frame after frame.", "More than 8,500 images are condensed into 1 min 14. The film opens on an aerial view of the site, then moves through titled stages: preparing the space, fitting it out, storage, all the way to production. The challenge was keeping a clear thread, so viewers understand what they are watching."]
            },
            video: "assets/projets/cosmetique/timelapse.mp4", poster: "assets/projets/cosmetique/poster-timelapse.jpg", format: "wide"
          },
          {
            kicker: { fr: "La production", en: "The production" },
            title: { fr: "Le jour où la ligne se met en route.", en: "The day the line starts up." },
            text: {
              fr: ["Une fois l'atelier terminé, l'histoire change de rythme. Ce ne sont plus des murs qui avancent, mais des flacons.", "Cette vidéo verticale de 1 min 17 entre dans la salle pour la première production. Les plans sont serrés sur les gestes, les tuyaux et la ligne de remplissage, pour donner la sensation d'être sur place, sur un écran de téléphone."],
              en: ["Once the workshop is finished, the story changes pace. It is no longer walls moving forward, but bottles.", "This 1 min 17 vertical video steps into the room for the first production. Tight shots stay on the hands, the pipes and the filling line, to give the feeling of being there, on a phone screen."]
            },
            video: "assets/projets/cosmetique/video.mp4", poster: "assets/projets/cosmetique/cover.jpg", format: "tall"
          },
          {
            kicker: { fr: "La voix", en: "The voice" },
            title: { fr: "Derrière les machines, il fallait un visage.", en: "Behind the machines, it needed a face." },
            text: {
              fr: ["Il manquait quelqu'un pour expliquer ce qu'on voyait. Élodie Clément, cosmétologue de l'Atelier et pharmacienne de formation, raconte son métier : la qualité, la sécurité, les tests et les étapes de fabrication.", "Une interview de 17 minutes devient un film de 2 min 20. Les sous-titres suivent sa voix mot à mot, et des repères visuels (pH, viscosité, stabilité, étapes de fabrication) rendent un sujet technique facile à suivre."],
              en: ["Someone had to explain what we were seeing. Élodie Clément, the Atelier's cosmetologist and a trained pharmacist, talks about her job: quality, safety, testing and the manufacturing steps.", "A 17-minute interview becomes a 2 min 20 film. Subtitles follow her voice word by word, and visual cues (pH, viscosity, stability, manufacturing steps) make a technical subject easy to follow."]
            },
            video: { fr: "assets/projets/cosmetique/interview-fr.mp4", en: "assets/projets/cosmetique/interview-en.mp4" }, poster: "assets/projets/cosmetique/poster-interview.jpg", format: "portrait",
            quote: { fr: "Le reflet d'un travail de qualité, d'un travail de précision.", en: "A reflection of quality work, of precision work." }
          },
          {
            kicker: { fr: "La diffusion", en: "The rollout" },
            title: { fr: "Une histoire, adaptée à chaque réseau.", en: "One story, adapted to each network." },
            text: {
              fr: ["On ne regarde pas LinkedIn comme TikTok. L'interview a donc été remontée pour chaque réseau : courte et directe en vertical pour TikTok et Instagram, plus posée en 4:5 pour Facebook et LinkedIn.", "Chaque version a aussi ses sous-titres en français, en anglais et en néerlandais."],
              en: ["Nobody watches LinkedIn the way they watch TikTok. So the interview was re-edited for each network: short and direct in vertical for TikTok and Instagram, calmer in 4:5 for Facebook and LinkedIn.", "Each version also has its own subtitles in French, English and Dutch."]
            },
            images: ["assets/projets/cosmetique/still-1.jpg", "assets/projets/cosmetique/still-2.jpg", "assets/projets/cosmetique/still-3.jpg"]
          }
        ],
        closing: { fr: "On a toutes les cartes en main pour réussir.", en: "We have every card in hand to succeed." },
        closingBy: { fr: "Élodie Clément, cosmétologue à l'Atelier Jean Regniers", en: "Élodie Clément, cosmetologist at Atelier Jean Regniers" }
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
      slug: "reseaux", featured: true, cat: ["social"], tone: "sage", year: "2026",
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
