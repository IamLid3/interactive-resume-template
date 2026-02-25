// Copy resume-config.example.ts and customize it with your own information.
// See docs/CUSTOMIZATION.md for a detailed guide.
import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Alan Georges',
    // Auto-detected: just drop your photo or profile image in public/images/ (any .jpg, .png, .webp)
    // You can also set a specific path here to override auto-detection:
    photo: '/images/photo.jpg',
    photoBack: '/images/caricature.png', // Shown when clicking the photo (3D flip)
    title: {
      en: 'Software Engineer',
      fr: 'Ingénieur Chef de Projet',
    },
    subtitle: {
      en: '6 years of experience',
      fr: '6 ans d\'expérience',
    },
    location: 'Aubenas, France',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Alan Georges — Software Engineer',
    description: 'Interactive resume of Alan Georges, Software Engineer specializing in Development and Product Management.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'en',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: 'IamLid3', href: 'https://github.com/IamLid3' },
    { type: 'linkedin', label: 'Alan GEORGES', href: 'https://linkedin.com/in/jorjiboy' },
    { type: 'email', label: 'alan.georges@outlook.fr' },
    { type: 'phone', label: '+33 6 68 82 35 07' },
    { type: 'location', label: 'Aubenas, France' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: {}, details: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: {}, details: { en: 'Professional : C1', fr: 'Professionnel : C1' } },
        { name: { en: 'German', fr: 'Allemand' }, level: {}, details: { en: 'Basic : A2', fr: 'Basique : A2' } },
      ],
    },
    {
      title: { en: 'Frontend', fr: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'Angular' },
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Vue.js', color: '#42b883' },
      ],
    },
    {
      title: { en: 'Backend', fr: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Node.js' },
        { name: 'Python' },
        { name: 'Java' },
        { name: 'C#' }
      ],
    },
    {
      title: { en: 'Database', fr: 'Base de données' },
      type: 'badges',
      items: [
        { name: 'PostgreSQL' },
        { name: 'MongoDB' },
      ],
    },
    {
      title: { en: 'DevOps', fr: 'DevOps' },
      type: 'badges',
      items: [
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'AWS' },
        { name: 'GitHub Actions' },
      ],
    },
    {
      title: { en: 'Methodologies', fr: 'Méthodologies' },
      type: 'text',
      items: [
        { name: { en: 'Agile/Scrum, TDD, Code Review, CI/CD', fr: 'Agile/Scrum, TDD, Code Review, CI/CD' } },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 0,
      isHighlighted: false,
      company: { en: 'Australia ', fr: 'Autres activités professionnelles' },
      role: { en: '', fr: '' },
      type: { en: 'Australia', fr: 'Australie' },
      period: { en: '2022 - 2025', fr: '2022 - 2025' },
      description: {
        en: '',
        fr: '',
      },
      techs: ['React', 'Node.js', 'MongoDB', 'AI', 'Docker', 'AWS'],
      details: {
        context: {
          en: 'Seasonal work as a Project Manager/Glazier in the construction industry in Australia, with occasional web development assignments for clients. Enriching management experience.',
          fr: 'Travail saisonnier de Chef de Projet / Vitrier dans le Batiment en Australie, avec des missions ponctuelles de développement web pour des clients. Expérience enrichissante en management.',
        },
        tasks: {
          en: [
            'Developed the product catalog with advanced filtering and search',
            'Built the shopping cart with real-time inventory checking',
            'Integrated Stripe payment gateway with 3D Secure support',
            'Implemented user authentication with JWT and OAuth (Google, Facebook)',
            'Created an admin dashboard for order management and analytics',
            'Wrote API documentation with Swagger/OpenAPI',
          ],
          fr: [
            'Apprentissage continu et veille technologique (React, Node.js, Cloud, IA)',
            'Développement de projets personnels.',
            'Expérience internationale en Australie (adaptabilité, pratique de l\'anglais)',
          ],
        },
        env: {
          en: 'React / Node.js / MongoDB / GPT-4 / Claude.AI / Docker / AWS',
          fr: 'React / Node.js / MongoDB / GPT-4 / Claude.AI / Docker / AWS',
        },
      },
    },
    {
      id: 1,
      company: { en: 'LDLC Group', fr: 'Groupe LDLC' },
      role: { en: 'Technical Product Owner', fr: 'Chef de Produit Technique' },
      type: { en: 'Permanent', fr: 'CDI' },
      period: { en: '2021 - 2022', fr: '2021 - 2022' },
      description: {
        en: 'Responsible for the design and implementation, with my team, of the technical aspects of the “Solaari” and “Nemeio” brands in R&D.',
        fr: 'En charge de la conception et de la réalisation avec mon équipe de la partie technique de la marque "Solaari" et "Nemeio" en R&D.',
      },
      techs: ['Angular', 'Vue.js', 'Node.js', 'Ionic', 'Android', 'iOS'],
      isHighlighted: false,
      details: {
        context: {
          en: 'Managing a team of 4 developers within a 15-person R&D department to develop Solaari\'s embedded software and mobile application. Agile/Scrum methodology with two-week sprints, CI/CD pipeline with GitLab, code review on each PR.',
          fr: 'Gestion d\'une Équipe de 4 développeurs au sein d\'une R&D de 15 personnes pour développer le logiciel embarqué et l\'application mobile de Solaari. Méthodologie Agile/Scrum avec sprints de 2 semaines, pipeline CI/CD avec GitLab, code review sur chaque PR.',
        },
        tasks: {
          en: [
            'Responsible for defining and managing the product vision, ensuring strategic alignment between business objectives and technical capabilities.',
            'Managing the entire product lifecycle, from design and specification to production and iteration, while ensuring compliance with defined objectives.',
            'Working closely with technical teams to establish requirements and develop scalable solutions tailored to needs.',
            'Prioritizing features and delays based on return on investment, user needs, and technical constraints to optimize resources and timelines.',
            'Monitor and analyze KPIs (key performance indicators) and other relevant metrics to maximize product performance and user experience.',
            'Regularly communicate strategies and updates to internal and external stakeholders, ensuring optimal transparency and responsiveness.',
            'Collect and analyze user feedback to identify opportunities for continuous improvement and adjust products based on market needs.',
            'Manage resources, schedules, and risks related to multiple simultaneous projects, ensuring on-time delivery and required quality.',
          ],
          fr: [
            'Responsable de la définition et de la gestion de la vision produit, en garantissant l\'alignement stratégique entre les objectifs commerciaux et les capacités techniques.',
            'Pilotage du cycle de vie complet du produit, de la conception et la spécification à la mise en production et l\'itération, tout en assurant la conformité avec les objectifs définis.',
            'Collaboration étroite avec les équipes techniques pour l\'établissement des exigences et l\'élaboration de solutions évolutives et adaptées aux besoins.',
            'Priorisation des fonctionnalités et des retards en fonction du retour sur investissement, des besoins utilisateurs et des contraintes techniques, afin d\'optimiser les ressources et le calendrier.',
            'Suivi et analyse des KPI (indicateurs de performance clés) et autres métriques pertinentes pour maximiser la performance produit et l\'expérience utilisateur.',
            'Communication régulière des stratégies et des mises à jour aux parties prenantes internes et externes, en assurant une transparence et une réactivité optimales.',
            'Collecte et analyse des retours utilisateurs pour identifier des leviers d\'amélioration continue et ajuster les produits en fonction des besoins du marché.',
            'Gestion des ressources, des plannings et des risques liés à plusieurs projets simultanés, en garantissant la livraison dans les délais et la qualité requise.',
          ],
        },
        env: {
          en: 'Angular / TypeScript / Node.js / Ionic + Capacitor / Android (Java) / iOS / Bluetooth Low Energy / C / Jenkins / Gitlab CI',
          fr: 'Angular / TypeScript / Node.js / Ionic + Capacitor / Android (Java) / iOS / Bluetooth Low Energy / C / Jenkins / Gitlab CI',
        },
      },
    },
    {
      id: 2,
      company: { en: 'LDLC Group', fr: 'Groupe LDLC' },
      role: { en: 'Fullstack Developer / Tech-Lead', fr: 'Développeur Fullstack / Tech-Lead' },
      type: { en: 'Internship and Permanent', fr: 'Alternance et CDI' },
      period: { en: '2017 - 2021', fr: '2017 - 2021' },
      description: {
        en: 'Development of various applications for our brands. Specialized in Angular, Vue.JS, Node.js, and Typescript.',
        fr: 'Développement des diffèrentes applications pour nos projets. Spécialisé sur Ionic, utilisant Angular et Typescript, et sur Vue.JS.',
      },
      techs: ['Angular', 'Vue.js', 'Node.js', 'Ionic', '.NET Core', 'Entity Framework', 'Java Spring', 'Hibernate', 'Express.js'],
      details: {
        context: {
          en: 'Creation of the LDLC Group\'s Research & Development department, with the aim of developing innovative applications for the group\'s various brands. Team of three developers working on three projects simultaneously.',
          fr: 'Création de la section Recherche & Développement du groupe LDLC, avec pour objectif de développer des applications innovantes pour les différentes marques du groupe. Équipe de 3 développeurs, travaillant sur 3 projets simultanément.',
        },
        tasks: {
          en: [
            'Design and development of the mobile application using Angular 13 with NgRx, Ionic 5, and Capacitor',
            'Development of the Nemeio application using Electron, Vue.JS, and VueX',
            'API development with Node.JS and Express.JS, Java Spring and Hibernate, as well as .NET Core and Entity Framework as part of parallel projects',
            'Responsible for managing and testing embedded software deliveries provided by our service provider teams',
            'Creation of a compilation machine enabling the publication of different application versions on stores using Fastlane and Jenkins',
            'High level of proficiency in Visual Studio Code, Eclipse, Visual Studio, Postman, Android Studio, and X-Code',
            'Close collaboration with UX designers to translate Figma mockups into user interfaces',
          ],
          fr: [
            'Conception et développement de l\'application mobile à l\'aide d\'Angular 13 avec NgRx,Ionic 5 et Capacitor',
            'Développement de l\'application Nemeio à l\'aide d\'Electron, Vue.JS et VueX',
            'Développement d\'API avec Node.JS et Express.JS, Java Spring et Hibernate, ainsi que .NET Core et Entity Framework dans le cadre de projets parallèles.',
            'Responsable de la gestion et des tests des livraisons de logiciels embarqués fournis par nos équipes de prestataires de services.',
            'Création d\'une machine de compilation permettant de publier différentes versions d\'applications sur les boutiques à l\'aide de Fastlane et Jenkins.',
            'Grande maîtrise de Visual Studio Code, Eclipse, Visual Studio, Postman, Android Studio et X-Code.',
            'Collaboration étroite avec les designers UX pour traduire les maquettes Figma en interfaces utilisateurs',
          ],
        },
        training: {
          en: [
            'Internal Angular/Ionic training (5 days)',
            'Internal Vue.JS training (5 days)',
          ],
          fr: [
            'Formation interne Angular / Ionic (5 jours)',
            'Formation interne Vue.JS (5 jours)',
          ],
        },
        env: {
          en: 'Angular / TypeScript / Node.js / Ionic + Capacitor / Android (Java) / iOS / Bluetooth Low Energy / C / Jenkins / Gitlab CI / .NET Core / Entity Framework / Java Spring / Hibernate / Express.js',
          fr: 'Angular / TypeScript / Node.js / Ionic + Capacitor / Android (Java) / iOS / Bluetooth Low Energy / C / Jenkins / Gitlab CI / .NET Core / Entity Framework / Java Spring / Hibernate / Express.js',
        },
      },
    },
  ],

  // ===== PROJECTS (optional) =====
  projects: [
    {
      id: 'project-a',
      title: { en: 'Solaari', fr: 'Solaari' },
      description: {
        en: 'Solaari is a brand specializing in high-end custom lightsabers. The project involves developing replica lightsabers equipped with a mobile app, offering an immersive and innovative user experience.',
        fr: 'Solaari est une marque spécialisée dans les sabres laser personnalisés haut de gamme. Le projet consiste à développer des répliques de Sabres Lasers muni d\'une application mobile, offrant une expérience utilisateur immersive et innovante.',
      },
      techs: ['Angular', 'TypeScript', 'Ionic', 'Node.js', 'Bluetooth LE', 'Kotlin', 'Swift'],
      url: 'https://www.solaari.com/fr/',
    },
    {
      id: 'project-b',
      title: { en: 'Nemeio', fr: 'Nemeio' },
      description: {
        en: 'Nemeio is a startup developing a smart keyboard with customizable keys. Its unique feature: each key incorporates an e-ink (electronic ink) screen that allows the display to be dynamically modified (letters, symbols, shortcuts, macros).',
        fr: 'Nemeio est une startup qui développe un clavier intelligent à touches personnalisables. Sa particularité : chaque touche intègre un écran e-ink (encre électronique) permettant de modifier dynamiquement l\'affichage (lettres, symboles, raccourcis, macros).',
      },
      techs: ['Vue.js', 'TypeScript', 'Node.js', '.NET Core', 'Electron'],
      url: 'https://www.nemeio.com/fr/',
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'IPI Lyon', fr: 'IPI Lyon' },
      degree: { en: 'Master in Computer Science', fr: 'Master Informatique' },
      specialty: { en: 'IT Development and Management', fr: 'Développement et Management Informatique' },
      period: '2017 - 2020',
    },
    {
      school: { en: 'Astier High School', fr: 'Lycée Astier' },
      degree: { en: 'Advanced Diploma', fr: 'Brevet de Technicien Supérieur' },
      specialty: { en: 'Computer Systems and Networks', fr: 'Systèmes Numériques : Informatiques et Réseaux' },
      period: '2015 - 2017',
    },
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { en: 'Photography', fr: 'Photographie' },
      details: [
        { en: 'Travel photography', fr: 'Photo de Voyage' },
        { en: '3 years', fr: '3 ans' },
      ],
    },
    {
      title: { en: 'Handball', fr: 'Handball' },
      details: [
        { en: '15 years', fr: '15 ans' },
      ],
    },
    {
      title: { en: 'Open Source', fr: 'Open Source' },
    },
    {
      title: { en: 'Music/DJing', fr: 'Musique/DJing' },
      details: [
        { en: '12 years', fr: '12 ans' },
      ],
    },
  ],

  // ===== PDF (optional) =====
  // Auto-detected: just drop your PDF files in public/cv/fr/ and public/cv/en/
  // The download button will appear automatically — no config needed!
  // Uncomment below only if you need to override the auto-detection:
  // pdf: {
  //   label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
  //   path: { en: '/cv/en/resume-en.pdf', fr: '/cv/fr/resume-fr.pdf' },
  // },

  // ===== THEME =====
  theme: {
    preset: 'warm', // 'minimal' | 'warm' | 'ocean' | 'forest' | 'slate' | 'lilac'
    // You can override individual colors:
    // colors: {
    //   primary: '#8B5A2B',
    //   primaryLight: '#D4A574',
    // },
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
