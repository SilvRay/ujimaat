// ============================================
// STRIPE CONFIG
// ============================================

const STRIPE_PUBLISHABLE_KEY =
  "pk_live_51Mc4A5AGOTTzQZaBCEaTlIaWNIQg5StZtZEWYndovUDoCzH6lqnR44T1f2VkwhpDVpjpNUD77yVhW2KhsgAYGujF00BFfkiuLx"; // Remplacer par ta clé publique Stripe

// ============================================
// DATA
// ============================================

const seriesData = [
  {
    id: 0,
    title: "Maât Continuum",
    category: "Formations",
    categoryIcon: "🎓",
    description:
      "Une formation complète et transformatrice explorant les sciences de l'existence, la relation et la nutrition. De l'orientation aux principes fondamentaux, apprenez à vous comprendre et à transformer votre vie.",
    level: "Débutant → Avancé",
    totalDuration: "120h+",
    match: 99,
    year: 2024,
    isNew: true,
    isPopular: true,
    gradient: "from-indigo-600 to-purple-700",
    image: "../assets/_images/_maat-continuum/maat-continuum.avif",
    seasons: [
      {
        title: "01 - Orientation",
        episodes: [
          {
            title: "Orientation Video",
            duration: "31:21",
            progress: 0,
            resources: "PDF 16 pages",
          },
        ],
      },
      {
        title: "02 - Apprentissage",
        episodes: [
          {
            title: "Apprendre à penser",
            duration: "50:39",
            progress: 0,
            resources: "PDF 23 pages",
          },
          {
            title: "Apprendre à apprendre",
            duration: "57:59",
            progress: 0,
            resources: "PDF 20 pages",
          },
          {
            title: "Monitoring application AMAP",
            duration: "01:17:57",
            progress: 0,
            resources: "PDF 6 pages",
          },
          {
            title: "Approfondissement : Thot l'Apprenti-sage",
            duration: "02:44:17",
            progress: 0,
            resources: "PDF 21 pages",
          },
        ],
      },
      {
        title: "03 - Le Juste Accord",
        episodes: [
          {
            title: "Accords 1 et 2",
            duration: "01:24:57",
            progress: 0,
            resources: "PDF 17 pages",
          },
          {
            title: "Accords 3, 4 et 5",
            duration: "28:51",
            progress: 0,
            resources: "PDF 8 pages",
          },
        ],
      },
      {
        title: "04 - Science de l'Existence",
        episodes: [
          {
            title: "Le But de l'Existence - Leçon",
            duration: "56:18",
            progress: 0,
            resources: "PDF 20 pages",
          },
          {
            title: "Le But de l'Existence - Q/R",
            duration: "21:58",
            progress: 0,
          },
          {
            title: "Le But de l'Existence - WebQuest",
            duration: "01:42:53",
            progress: 0,
          },
          {
            title: "Mentalisme & Correspondance - Leçon",
            duration: "01:01:29",
            progress: 0,
            resources: "PDF 14 pages",
          },
          {
            title: "Mentalisme & Correspondance - Q/R",
            duration: "44:51",
            progress: 0,
          },
          {
            title: "Mentalisme & Correspondance - WebQuest",
            duration: "01:51:32",
            progress: 0,
          },
          {
            title: "Vibration & Polarité - Leçon",
            duration: "53:41",
            progress: 0,
            resources: "PDF 8 pages",
          },
          {
            title: "Vibration & Polarité - Q/R",
            duration: "30:10",
            progress: 0,
          },
          {
            title: "Vibration & Polarité - WebQuest",
            duration: "01:59:04",
            progress: 0,
          },
          {
            title: "Rythme & Causalité - Leçon",
            duration: "49:53",
            progress: 0,
            resources: "PDF 9 pages",
          },
          {
            title: "Rythme & Causalité - Q/R",
            duration: "01:04:20",
            progress: 0,
          },
          {
            title: "Rythme & Causalité - WebQuest",
            duration: "01:52:41",
            progress: 0,
          },
          {
            title: "Genre & Générativité - Leçon",
            duration: "01:46:19",
            progress: 0,
            resources: "PDF 12 pages",
          },
          {
            title: "Genre & Générativité - WebQuest",
            duration: "01:56:09",
            progress: 0,
          },
        ],
      },
      {
        title: "05 - Monitoring Intégration Existence",
        episodes: [
          {
            title: "Activez le mode survie - Leçon",
            duration: "01:32:08",
            progress: 0,
            resources: "PDF 16 pages",
          },
          {
            title: "Activez le mode survie - WebQuest",
            duration: "01:37:48",
            progress: 0,
          },
          {
            title: "Les Emotions - Leçon",
            duration: "01:19:24",
            progress: 0,
            resources: "PDF 7 pages",
          },
          { title: "En quête de sens - Leçon", duration: "48:49", progress: 0 },
          {
            title: "Le pouvoir de l'intention - Leçon",
            duration: "01:24:28",
            progress: 0,
          },
          {
            title: "La magie de l'intention - Leçon",
            duration: "01:14:04",
            progress: 0,
          },
          {
            title: "La science des perceptions - Leçon",
            duration: "01:38:48",
            progress: 0,
            resources: "PDF 17 pages",
          },
        ],
      },
      {
        title: "06 - Science de la Relation",
        episodes: [
          {
            title: "Introduction au Zola",
            duration: "01:28:16",
            progress: 0,
            resources: "PDF 18 pages",
          },
          {
            title: "Zola introduction et clarification - Leçon",
            duration: "01:06:57",
            progress: 0,
            resources: "PDF 19 pages",
          },
          {
            title: "Zola introduction et clarification - Q/R",
            duration: "19:26",
            progress: 0,
          },
          {
            title: "Zola introduction et clarification - WebQuest",
            duration: "01:07:25",
            progress: 0,
          },
          {
            title: "Protocoles de la relation - Leçon",
            duration: "55:28",
            progress: 0,
            resources: "PDF 20 pages",
          },
          {
            title: "Protocoles de la relation - Q/R",
            duration: "23:51",
            progress: 0,
          },
          {
            title: "Protocoles de la relation - WebQuest Triangle d'Or",
            duration: "01:16:46",
            progress: 0,
            resources: "PDF 9 pages",
          },
          {
            title: "Konzo - Leçon",
            duration: "01:52:52",
            progress: 0,
            resources: "PDF 10 pages",
          },
          {
            title: "Konzo - WebQuest",
            duration: "01:59:10",
            progress: 0,
            resources: "PDF 12 pages",
          },
          {
            title: "Mapenzi - Leçon",
            duration: "01:45:14",
            progress: 0,
            resources: "PDF 12 pages",
          },
          {
            title: "Mapenzi - WebQuest",
            duration: "01:49:50",
            progress: 0,
            resources: "PDF 10 pages",
          },
        ],
      },
      {
        title: "07 - Monitoring d'Intégration Relation",
        episodes: [
          { title: "Révision SR", duration: "01:34:14", progress: 0 },
          {
            title: "Les bases de la SR - Atelier",
            duration: "02:07:56",
            progress: 0,
          },
          {
            title: "Comprendre la communication",
            duration: "02:09:06",
            progress: 0,
          },
          { title: "Konzo 1", duration: "02:23:20", progress: 0 },
          { title: "Konzo 2", duration: "02:07:17", progress: 0 },
          { title: "Konzo 3", duration: "02:16:43", progress: 0 },
          { title: "Mapenzi 1", duration: "02:40:51", progress: 0 },
          { title: "Mapenzi 2", duration: "01:44:41", progress: 0 },
          {
            title: "Mapenzi 3 Féminisme",
            duration: "02:15:45",
            progress: 0,
            resources: "PDF 28 pages",
          },
          {
            title: "Actes manqués et non-dits - Leçon",
            duration: "01:58:52",
            progress: 0,
            resources: "PDF 9 pages",
          },
        ],
      },
      {
        title: "08 - Science de la Reproduction",
        episodes: [
          {
            title: "Introduction reproduction",
            duration: "02:30:55",
            progress: 0,
            resources: "PDF 36 pages",
          },
          {
            title: "La malédiction de la dimension - Leçon",
            duration: "02:30:01",
            progress: 0,
            resources: "PDF 32 pages",
          },
          {
            title: "La malédiction de la dimension - WebQuest",
            duration: "02:34:02",
            progress: 0,
            resources: "PDF 12 pages",
          },
          {
            title: "Les parasites psychiques - Leçon",
            duration: "02:23:54",
            progress: 0,
            resources: "PDF 16 pages",
          },
          {
            title: "Les parasites psychiques - WebQuest",
            duration: "02:16:18",
            progress: 0,
          },
          {
            title: "La stratégie du choc - Leçon",
            duration: "02:06:00",
            progress: 0,
            resources: "PDF 22 pages",
          },
          {
            title: "La stratégie du choc - WebQuest",
            duration: "02:11:04",
            progress: 0,
          },
          {
            title: "Sortir de la malédiction / conditionnement",
            duration: "02:22:27",
            progress: 0,
            resources: "PDF 39 pages",
          },
          {
            title: "La guérison spirituelle",
            duration: "01:26:14",
            progress: 0,
            resources: "PDF 24 pages",
          },
        ],
      },
      {
        title: "09 - Science de la Nutrition",
        episodes: [
          {
            title: "L'incroyable technologie du corps humain",
            duration: "01:55:17",
            progress: 0,
            resources: "PDF 40 pages",
          },
          {
            title: "Vision holistique de l'alimentation",
            duration: "02:02:51",
            progress: 0,
            resources: "PDF 27 pages",
          },
          {
            title: "Alimentation sensorielle",
            duration: "02:03:17",
            progress: 0,
            resources: "PDF 36 pages",
          },
          {
            title: "Alimaâtation",
            duration: "02:24:09",
            progress: 0,
            resources: "PDF 39 pages",
          },
          {
            title: "Alimentation vivante",
            duration: "02:23:34",
            progress: 0,
            resources: "PDF 49 pages",
          },
          {
            title: "Les liquides",
            duration: "02:23:34",
            progress: 0,
            resources: "PDF 40 pages",
          },
          {
            title: "Naturel vs hybride",
            duration: "02:23:34",
            progress: 0,
            resources: "PDF 34 pages",
          },
          {
            title: "La société toxique",
            duration: "02:01:03",
            progress: 0,
            resources: "PDF 24 pages",
          },
          {
            title: "Additifs alimentaires, danger !",
            duration: "02:03:06",
            progress: 0,
            resources: "PDF 23 pages",
          },
          {
            title: "Système de protection et de défense",
            duration: "01:48:47",
            progress: 0,
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "Au Coeur des Mystères",
    category: "Spiritualité & Mystères",
    categoryIcon: "🔮",
    description:
      "Une émission qui a pour but de répondre aux questionnements de toutes celles et ceux qui font face à des incompréhension sur leur chemin spirituel. Explorez les mystères sacrés, les ordres spirituels et la spiritualité de nos ancêtres.",
    level: "Tous niveaux",
    totalDuration: "100h+",
    match: 95,
    year: 2024,
    isNew: true,
    isPopular: true,
    gradient: "from-amber-600 to-red-700",
    image:
      "../assets/_images/_au-coeur-des-mysteres/au-coeur-des-mysteres.avif",
    seasons: [
      {
        title: "01 - Enseignements des Mystères",
        episodes: [
          {
            title: "L'organisation des Ordres Spirituels",
            duration: "43:28",
            progress: 0,
          },
          {
            title: "L'en Haut d'en Bas, les deux mondes",
            duration: "46:46",
            progress: 0,
          },
          {
            title: "Spiritualité et Renaissance Africaine",
            duration: "01:03:54",
            progress: 0,
          },
          {
            title: "La vraie Spiritualité de nos Ancêtres",
            duration: "49:55",
            progress: 0,
          },
          {
            title: "Enfer et Paradis le choc des Visions",
            duration: "51:58",
            progress: 0,
          },
          {
            title: "Le Mystère des Égrégores",
            duration: "01:06:24",
            progress: 0,
          },
          { title: "La guerre Des Égrégores", duration: "55:19", progress: 0 },
        ],
      },
      {
        title: "02 - Les Noces Mystiques",
        episodes: [
          { title: "La Dualité Sacrée", duration: "01:05:41", progress: 0 },
          { title: "L'Âme d'Isis", duration: "01:01:42", progress: 0 },
          {
            title: "La Femme et le Péché Originel",
            duration: "01:32:51",
            progress: 0,
          },
          { title: "Isis Dévoilée", duration: "01:01:01", progress: 0 },
          { title: "L'Esprit d'Osiris", duration: "01:22:36", progress: 0 },
          { title: "La Mort d'Osiris", duration: "01:17:34", progress: 0 },
          {
            title: "La Résurrection d'Osiris",
            duration: "01:03:49",
            progress: 0,
          },
          { title: "L'Union Sacrée", duration: "01:52:01", progress: 0 },
        ],
      },
      {
        title: "03 - Le Périple des Ancêtres",
        episodes: [
          {
            title: "A l'Aube des Ancêtre, Zénith et Nadir",
            duration: "01:20:18",
            progress: 0,
          },
          { title: "Le Cycle des Ancêtres", duration: "01:26:42", progress: 0 },
          { title: "Les types d'Ancêtres", duration: "01:30:40", progress: 0 },
          {
            title: "Qu'est-ce qu'un Culte ?",
            duration: "01:11:30",
            progress: 0,
          },
          {
            title: "Les Différents Types de Culte",
            duration: "01:29:00",
            progress: 0,
          },
          {
            title: "Culte des Morts ou Culte de Râ",
            duration: "01:09:14",
            progress: 0,
          },
          {
            title: "Le Rituel de la Libération",
            duration: "01:44:27",
            progress: 0,
          },
        ],
      },
      {
        title: "04 - Les Mystères du Jugement",
        episodes: [
          { title: "Le tribunal d'Osiris", duration: "01:02:16", progress: 0 },
          {
            title: "Anubis le passage des Âmes",
            duration: "01:17:13",
            progress: 0,
          },
          {
            title: "Les Confessions Négatives",
            duration: "01:21:25",
            progress: 0,
          },
          { title: "Maât, la Pesée du Cœur", duration: "59:47", progress: 0 },
          { title: "La Plume de Nephtys", duration: "01:44:25", progress: 0 },
          { title: "Horus l'Intègre", duration: "01:32:04", progress: 0 },
          { title: "Thot le Notaire", duration: "01:04:09", progress: 0 },
          { title: "Le Jugement Dernier", duration: "01:14:49", progress: 0 },
        ],
      },
      {
        title: "05 - Le Livre de Mâat",
        episodes: [
          {
            title: "L'offrande à Maât - Réflexion",
            duration: "01:46:56",
            progress: 0,
          },
          {
            title: "Introduction – Partie 1",
            duration: "01:01:18",
            progress: 0,
          },
          {
            title: "Introduction – Partie 2",
            duration: "01:07:42",
            progress: 0,
          },
          { title: "La plume d'Isis", duration: "01:17:41", progress: 0 },
          {
            title: "Livre de Maât épisode 5",
            duration: "01:33:37",
            progress: 0,
          },
          {
            title: "Livre de Maât épisode 6",
            duration: "01:12:08",
            progress: 0,
          },
          {
            title: "Livre de Maât épisode 7",
            duration: "01:24:24",
            progress: 0,
          },
          {
            title: "Livre de Maât épisode 8",
            duration: "01:25:45",
            progress: 0,
          },
          {
            title: "Livre de Maât épisode 9",
            duration: "01:01:10",
            progress: 0,
          },
          {
            title: "Livre de Maât épisode 10",
            duration: "01:20:43",
            progress: 0,
          },
        ],
      },
      {
        title: "06 - Hors-série",
        episodes: [
          {
            title: "Le sens caché du Notre Père",
            duration: "01:30:13",
            progress: 0,
          },
          {
            title: "Sexe, un magia d'incantation",
            duration: "01:38:17",
            progress: 0,
          },
          {
            title: "Suprématie blanche ou racisme",
            duration: "01:34:51",
            progress: 0,
          },
          {
            title: "Alimaâtation qu'est-ce que c'est ?",
            duration: "01:18:47",
            progress: 0,
          },
          {
            title: "La malédiction des non-blancs",
            duration: "01:19:55",
            progress: 0,
          },
          { title: "La fin de l'impunité", duration: "01:33:31", progress: 0 },
          {
            title: "Films d'horreur & Malédiction",
            duration: "02:05:49",
            progress: 0,
          },
          {
            title: "Le pouvoir des chants ancestraux",
            duration: "02:19:41",
            progress: 0,
          },
          {
            title: "L'amour inconditionnel",
            duration: "01:41:24",
            progress: 0,
          },
          {
            title: "Le mystère des concessions",
            duration: "01:55:22",
            progress: 0,
          },
          { title: "L'enfer du pardon", duration: "01:13:08", progress: 0 },
          {
            title: "Les mystères de la voie lactée",
            duration: "01:02:39",
            progress: 0,
          },
          {
            title: "Le mystère des invocations",
            duration: "01:30:08",
            progress: 0,
          },
          { title: "Sortir de la pauvreté", duration: "01:03:36", progress: 0 },
          {
            title: "L'endogamie, la seule issue",
            duration: "02:56:38",
            progress: 0,
          },
          { title: "Le kidnapping", duration: "01:24:00", progress: 0 },
          { title: "La divinité dévoilée", duration: "01:51:22", progress: 0 },
          { title: "La conquête de la vie", duration: "01:05:32", progress: 0 },
          {
            title: "Le mystère des intentions justes",
            duration: "03:47:33",
            progress: 0,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Complément de Quête",
    category: "Développement Personnel & Réflexion",
    categoryIcon: "🌟",
    description:
      "Cette série vous permet d'aborder de nombreuses thématiques sous un angle inédit. Chacune d'entre elle vous invite à réfléchir autrement et vous donne l'opportunité d'élargir votre vision du monde.",
    level: "Tous niveaux",
    totalDuration: "130h+",
    match: 92,
    year: 2024,
    isNew: true,
    isPopular: true,
    gradient: "from-cyan-600 to-blue-700",
    image: "../assets/_images/_complement-quete/complement-de-quete.avif",
    seasons: [
      {
        title: "01 - Questionnements Contemporains",
        episodes: [
          {
            title: "Actualités, All Lives Matter",
            duration: "02:41:33",
            progress: 0,
          },
          { title: "Amour & Pardon", duration: "02:08:48", progress: 0 },
          {
            title: "Comprendre le VIH/SIDA",
            duration: "02:05:07",
            progress: 0,
            resources: "PDF 16 pages",
          },
          {
            title: "Etat d'urgence compensatoire sanitaire",
            duration: "49:26",
            progress: 0,
          },
        ],
      },
      {
        title: "02 - Crises & Pandémies",
        episodes: [
          {
            title: "Corona - Preservez votre VIE",
            duration: "02:31:24",
            progress: 0,
          },
          { title: "Corona - Confinement", duration: "01:31:57", progress: 0 },
          {
            title: "Corona - Etat urgence sanitaire, pour QUI ?",
            duration: "01:51:33",
            progress: 0,
          },
          {
            title: "La responsabilité en période de pandémie",
            duration: "01:08:54",
            progress: 0,
          },
        ],
      },
      {
        title: "03 - Afrique & Opportunités",
        episodes: [
          {
            title: "Fenêtre ouverte sur l'Afrique - L'Afrique face à elle-même",
            duration: "02:25:03",
            progress: 0,
          },
          {
            title: "Les opportunités d'affaire et de réseau en Afrique",
            duration: "02:09:56",
            progress: 0,
          },
        ],
      },
      {
        title: "04 - Existence & Transformation",
        episodes: [
          { title: "Ils ont gagné", duration: "01:41:34", progress: 0 },
          {
            title: "Intégrité mémorielle et dynamiques de l'existence",
            duration: "01:22:07",
            progress: 0,
          },
          {
            title: "L'État d'urgence compensatoire",
            duration: "01:01:22",
            progress: 0,
          },
          {
            title: "L'humain en devenir",
            duration: "01:41:31",
            progress: 0,
            resources: "PDF 12 pages",
          },
          {
            title: "La beauté de la douleur et la magnificence du plaisir",
            duration: "47:54",
            progress: 0,
          },
        ],
      },
      {
        title: "05 - Lois Universelles & Pouvoir",
        episodes: [
          { title: "La loi de la traction", duration: "01:21:50", progress: 0 },
          {
            title: "La magie de la fermentation",
            duration: "02:33:36",
            progress: 0,
          },
          {
            title: "Tout est Energie - Le Pouvoir du Mental",
            duration: "02:01:21",
            progress: 0,
          },
          {
            title: "La portée spirituelle des accords 1",
            duration: "44:50",
            progress: 0,
          },
          {
            title: "La portée spirituelle des accords 2",
            duration: "30:21",
            progress: 0,
          },
        ],
      },
      {
        title: "06 - Nutrition & Santé",
        episodes: [
          {
            title: "La puissance cachée de l'allaitement - La voie lactée",
            duration: "01:15:17",
            progress: 0,
          },
          {
            title: "La puissance cachée de l'allaitement - Ressources",
            duration: "01:02:17",
            progress: 0,
            resources: "PDF 36 pages",
          },
          {
            title: "Le lait maternel comme liquide amniotique",
            duration: "01:02:17",
            progress: 0,
          },
          { title: "La Société Toxique 1", duration: "01:46:48", progress: 0 },
          { title: "La Société Toxique 2", duration: "02:10:46", progress: 0 },
          { title: "La Société Toxique 3", duration: "01:13:33", progress: 0 },
        ],
      },
      {
        title: "07 - Spiritualité & Valeurs",
        episodes: [
          { title: "La reconnaissance", duration: "01:57:29", progress: 0 },
          {
            title: "Pourquoi nous ne fêtons pas...",
            duration: "01:19:07",
            progress: 0,
          },
          {
            title: "L'amour inconditionnel",
            duration: "01:41:24",
            progress: 0,
          },
          { title: "L'enfer du pardon", duration: "01:13:08", progress: 0 },
          {
            title: "Le mystère des intentions justes",
            duration: "03:47:33",
            progress: 0,
          },
        ],
      },
      {
        title: "08 - Droits & Justice",
        episodes: [
          {
            title: "Le droit la meilleure arme contre les puissants",
            duration: "01:49:23",
            progress: 0,
          },
          {
            title: "Port du masque obligatoire, que dit la loi ?",
            duration: "01:22:39",
            progress: 0,
            resources: "PDF 13 pages",
          },
          { title: "Passeport vaccinal", duration: "01:47:41", progress: 0 },
          {
            title: "Les 50 vraies questions",
            duration: "01:56:26",
            progress: 0,
          },
        ],
      },
      {
        title: "09 - Textes Sacrés Revisités",
        episodes: [
          {
            title: "Apocalypse Now - Les messages cachés de la Genèse",
            duration: "01:57:36",
            progress: 0,
          },
          {
            title: "Apocalypse Now - Le révélation de l'Eden",
            duration: "01:33:19",
            progress: 0,
          },
          { title: "Moïse l'Africain 1", duration: "01:49:12", progress: 0 },
          { title: "Moïse l'Africain 2", duration: "01:25:26", progress: 0 },
          {
            title: "Le sens caché du Notre Père",
            duration: "01:30:13",
            progress: 0,
          },
          {
            title: "Le pouvoir du oui, la puissance du non",
            duration: "30:23",
            progress: 0,
          },
        ],
      },
      {
        title: "10 - Réalités Sociales",
        episodes: [
          {
            title: "Racisme - De l'existence des races",
            duration: "50:16",
            progress: 0,
          },
          { title: "Racisme - TCC", duration: "37:41", progress: 0 },
          {
            title: "Suprématie blanche ou racisme",
            duration: "01:34:51",
            progress: 0,
          },
          {
            title: "La malédiction des non-blancs",
            duration: "01:19:55",
            progress: 0,
          },
          {
            title: "Polygamie : definitions, enjeux et perspectives",
            duration: "01:38:34",
            progress: 0,
          },
          {
            title: "L'endogamie, la seule issue",
            duration: "02:56:38",
            progress: 0,
          },
        ],
      },
      {
        title: "11 - Thématiques Variées",
        episodes: [
          {
            title: "Sexe, un magia d'incantation",
            duration: "01:38:17",
            progress: 0,
          },
          {
            title: "Alimaâtation qu'est-ce que c'est ?",
            duration: "01:18:47",
            progress: 0,
          },
          { title: "La fin de l'impunité", duration: "01:33:31", progress: 0 },
          {
            title: "Films d'horreur & Malédiction",
            duration: "02:05:49",
            progress: 0,
          },
          {
            title: "Le pouvoir des chants ancestraux",
            duration: "02:19:41",
            progress: 0,
          },
          {
            title: "Le mystère des concessions",
            duration: "01:55:22",
            progress: 0,
          },
          {
            title: "Les mystères de la voie lactée",
            duration: "01:02:39",
            progress: 0,
          },
          {
            title: "Le mystère des invocations",
            duration: "01:30:08",
            progress: 0,
          },
          { title: "Sortir de la pauvreté", duration: "01:03:36", progress: 0 },
          { title: "Le kidnapping", duration: "01:24:00", progress: 0 },
          { title: "La divinité dévoilée", duration: "01:51:22", progress: 0 },
          { title: "La conquête de la vie", duration: "01:05:32", progress: 0 },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Watchmen",
    category: "Développement Personnel & Réflexion",
    categoryIcon: "🌟",
    description:
      "Analyse épurée de l'actualité afin de maintenir votre esprit en éveil et devenir plus conscient du monde dans lequel vous vivez.",
    level: "Tous niveaux",
    totalDuration: "25h+",
    match: 88,
    year: 2024,
    isNew: false,
    isPopular: true,
    gradient: "from-slate-700 to-zinc-900",
    image: "../assets/_images/_watchmen/watchmen.avif",
    seasons: [
      {
        title: "01 - Géopolitique mondiale",
        episodes: [
          {
            title: "L'Ukraine un accélérateur du Grand Reset",
            duration: "01:05:18",
            progress: 0,
          },
          {
            title: "Grand Reset et esclavage monétaire",
            duration: "02:12:26",
            progress: 0,
          },
          {
            title: "Crise majeure en approche, comment se protéger",
            duration: "01:51:45",
            progress: 0,
          },
          {
            title: "Géopolitique du Moustique",
            duration: "01:15:05",
            progress: 0,
          },
          {
            title: "Vers la fin de l'abondance",
            duration: "01:36:34",
            progress: 0,
          },
          {
            title: "Se préparer à l'effondrement, le cas des Antilles",
            duration: "01:14:03",
            progress: 0,
          },
          {
            title: "Savoir débattre et argumenter pour s'en sortir",
            duration: "01:46:57",
            progress: 0,
          },
          {
            title: "Élites mondiales et verrouillage permanent",
            duration: "00:00",
            progress: 0,
          },
          {
            title: "Suprématie blanche ou racisme : qu'est-ce que c'est ?",
            duration: "01:34:51",
            progress: 0,
          },
          { title: "La tempête gronde", duration: "01:27:48", progress: 0 },
        ],
      },
      {
        title: "02 - Georgia Guidestones",
        episodes: [
          {
            title: "Georgia Guidestones : L'extinction",
            duration: "01:04:00",
            progress: 0,
          },
          {
            title: "Georgia Guidestones : Contrôle de la population mondiale",
            duration: "01:07:42",
            progress: 0,
          },
          {
            title: "Georgia Guidestones : Une langue mondiale...",
            duration: "01:37:03",
            progress: 0,
          },
          {
            title: "Georgia Guidestones : Novlangue et dépopulation mondiale",
            duration: "01:20:20",
            progress: 0,
          },
          {
            title: "Georgia Guidestones : 4ème commandement",
            duration: "01:23:17",
            progress: 0,
          },
          {
            title: "Georgia Guidestones : 5ème commandement",
            duration: "01:00:44",
            progress: 0,
          },
          {
            title: "Georgia Guidestones : La destruction d'un monument",
            duration: "02:06:19",
            progress: 0,
          },
          {
            title: "Georgia Guidestones : Tribunal mondial",
            duration: "01:36:16",
            progress: 0,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Autonomie en soin de santé",
    category: "Formations",
    categoryIcon: "🎓",
    description:
      "Découvrez les attitudes à cultiver pour atteindre une santé intégrale, permanente et endogène.",
    level: "Tous niveaux",
    totalDuration: "6h+",
    match: 90,
    year: 2024,
    isNew: false,
    isPopular: false,
    gradient: "from-green-700 to-emerald-900",
    image: "../assets/_images/_autonomie-sante/autonomie-en-soin-de-sante.avif",
    seasons: [
      {
        title: "01 - Attitudes pour la santé intégrale",
        episodes: [
          {
            title: "Les lois de la santé permanente",
            duration: "37:55",
            progress: 0,
            resources: "PDF 22 pages",
          },
          {
            title: "2ème attitude : fluidifier",
            duration: "01:10:26",
            progress: 0,
            resources: "PDF 21 pages",
          },
          {
            title: "3ème attitude : s'effacer",
            duration: "49:46",
            progress: 0,
            resources: "PDF 10 pages",
          },
          {
            title: "4ème attitude : protéger",
            duration: "38:43",
            progress: 0,
            resources: "PDF 12 pages",
          },
          {
            title: "5ème attitude : nourrir",
            duration: "45:00",
            progress: 0,
            resources: "PDF 9 pages",
          },
          {
            title: "6ème attitude : éliminer",
            duration: "35:15",
            progress: 0,
            resources: "PDF 14 pages",
          },
          {
            title: "7ème attitude : régénérer",
            duration: "01:13:11",
            progress: 0,
            resources: "PDF 41 pages",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Alchimie 101",
    category: "Formations",
    categoryIcon: "🎓",
    description:
      "Découvrez les fondements de l'alchimie, qui réside au cœur de l'essence humaine. Exercez-vous aux mystères de cette pratique ancestrale qui ouvre les portes à l'accomplissement de véritables miracles.",
    level: "Tous niveaux",
    totalDuration: "6h+",
    match: 85,
    year: 2024,
    isNew: false,
    isPopular: false,
    gradient: "from-amber-700 to-yellow-900",
    image: "../assets/_images/_alchimie/alchimie-101.avif",
    seasons: [
      {
        title: "00 - Introduction",
        episodes: [
          {
            title: "J0 : Étape 0 - Introduction",
            duration: "En direct",
            progress: 0,
          },
          {
            title: "J1 : Étape 0 - Alchimie, Tao & Hermétisme",
            duration: "En direct",
            progress: 0,
          },
          {
            title: "J2 : Étape 1 - Magie de HEKA et brisez le plomb",
            duration: "01:07:26",
            progress: 0,
          },
        ],
      },
      {
        title: "01 - Les étapes 1 à 6",
        episodes: [
          { title: "J3 à 5 : Exercice n°1", duration: "~12min", progress: 0 },
          {
            title: "J6 : Étape 2 - Faites fondre le plomb",
            duration: "01:21:06",
            progress: 0,
          },
          { title: "J7 et 8 : Exercice n°2", duration: "~19min", progress: 0 },
          {
            title: "J10 et 11 : Exercice n°3",
            duration: "~25min",
            progress: 0,
          },
          {
            title: "J12 : Étape 4 - Recombinez les éléments",
            duration: "44:42",
            progress: 0,
          },
          {
            title: "J13 et 14 : Exercice n°4",
            duration: "~12min",
            progress: 0,
          },
          {
            title: "J15 : Étape 5 - Introduisez le précieux",
            duration: "01:10:10",
            progress: 0,
          },
          {
            title: "J16 et 17 : Exercice n°5",
            duration: "~12min",
            progress: 0,
          },
          {
            title: "J18 : Étape 5 - Nouvelle table de Heka",
            duration: "53:15",
            progress: 0,
          },
          { title: "J19 : Étape 6 - Purifiez", duration: "18:42", progress: 0 },
        ],
      },
      {
        title: "02 - Approfondissement",
        episodes: [
          { title: "J20 à 23 : Exercice n°6", duration: "~19min", progress: 0 },
        ],
      },
      {
        title: "03 - Le Grand Œuvre",
        episodes: [
          {
            title: "J24 : Étape 7 - Achevez le Grand Œuvre",
            duration: "47:01",
            progress: 0,
          },
          { title: "J25 à 27 : Exercice n°7", duration: "~14min", progress: 0 },
          {
            title: "J28 : Approfondissements",
            duration: "En direct",
            progress: 0,
          },
          { title: "J29 à 31 : Exercice n°8", duration: "~9min", progress: 0 },
          {
            title: "J32 : Retours et Échanges",
            duration: "En direct",
            progress: 0,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Bibliothèque Kaxoka",
    category: "Spiritualité & Mystères",
    categoryIcon: "🔮",
    description:
      "Une collection complète d'ebooks pour démystifier les grandes questions de l'existence : santé, société, spiritualité, mental et énergie vitale. Chaque livre révèle la vérité cachée derrière les sujets qui façonnent nos vies.",
    level: "Tous niveaux",
    totalDuration: "44 livres",
    match: 96,
    year: 2024,
    isNew: true,
    isPopular: false,
    gradient: "from-amber-800 to-yellow-900",
    image: "../assets/_images/_bibliotheque/bibliotheque-kaxoka.avif",
    type: "library",
    seasons: [
      {
        title: "01 - Structures sociales & guerre invisible",
        episodes: [
          {
            title:
              "Démystifier l'intelligence : La vérité sur la réhabilitation d'une notion dénaturée",
            progress: 0,
          },
          {
            title:
              "Démystifier l'économie : La vérité sur l'entreprenariat selon le paradigme africain.",
            progress: 0,
          },
          {
            title:
              "Démystifier l'éducation : La vérité sur les relations Parents-Enfants-Société",
            progress: 0,
          },
          {
            title:
              "Démystifier la monnaie : La vérité sur le plan (pas très secret) pour contrôler ta vie",
            progress: 0,
          },
          {
            title:
              "Démystifier le SIDA : La vérité sur un syndrome d'ignorance",
            progress: 0,
          },
          {
            title:
              "Démystifier la femme : La vérité sur la matrice du monde et gardienne des équilibres",
            progress: 0,
          },
          {
            title:
              "Démystifier les 17 ODD : la vérité sur le sortilège planétaire 17 objectifs",
            progress: 0,
          },
          {
            title:
              "Démystifier l'agenda 2030 : la vérité sur la métaphysique du nouvel ordre mondial",
            progress: 0,
          },
          {
            title:
              "Démystifier esthétismes et la cosmétique : la vérité sur les armes magiques d'un envoûtement moderne",
            progress: 0,
          },
          {
            title:
              "Demystifier le CRISPR Cas : la vérité sur l'arme ultime contre le vivant",
            progress: 0,
          },
          {
            title:
              "Demystifier la 6G : la vérité sur la promesse d'un futur sans fil",
            progress: 0,
          },
          {
            title:
              "Demystifier le vampirisme : la vérité sur la récolte de l'énergie humaine",
            progress: 0,
          },
        ],
      },
      {
        title: "02 - Médecine du corps & purification biologique",
        episodes: [
          {
            title: "Démystifier la détox : La vérité sur la détox",
            duration: "~1h30",
            progress: 0,
          },
          {
            title:
              "Démystifier la lumière : La vérité sur le meilleur allié de la mélanine",
            progress: 0,
          },
          {
            title:
              "Démystifier les menstrues : La vérité sur ce signe d'intoxication",
            progress: 0,
          },
          {
            title:
              "Démystifier le jeûne : La vérité sur cet outil de régénération entre lumière et illusion",
            duration: "~30-45min",
            progress: 0,
          },
          {
            title:
              "Démystifier l'argile : La vérité sur le pouvoir oublié des silicates d'alumine",
            progress: 0,
          },
          {
            title:
              "Démystifier l'hygiène : La vérité sur la science du vivant pour retrouver la voie de la santé vraie",
            duration: "~30min",
            progress: 0,
          },
          {
            title:
              "Démystifier le sommeil : La vérité sur la lumière, le stress, les cycles et les lois naturelles du repos profond",
            duration: "~35-45min",
            progress: 0,
          },
          {
            title:
              "Démystifier le soleil : La vérité biologique, métabolique et politique derrière l'ombre de la crème solaire",
            duration: "~30min",
            progress: 0,
          },
          {
            title:
              "Démystifier l'eau structurée : La vérité sur le quatrième état de l'eau",
            duration: "~35-45min",
            progress: 0,
          },
          {
            title:
              "Démystifier le porc : La vérité sur un interdit alimentaire et spirituel global",
            progress: 0,
          },
          {
            title:
              "Démystifier le charbon : La vérité sur la matière noire qui soigne",
            progress: 0,
          },
          {
            title:
              "Démystifier le lait : La vérité sur la caséine et la biologie des mammifères",
            progress: 0,
          },
          {
            title:
              "Démystifier le bio : La vérité sur l'alimentation des ancêtres",
            progress: 0,
          },
        ],
      },
      {
        title: "03 - Énergie vitale et puissance",
        episodes: [
          {
            title: "Démystifier la leptine : La vérité sur la leptine",
            duration: "~30-45min",
            progress: 0,
          },
          {
            title:
              "Démystifier la virilité : La vérité sur l'énergie masculine",
            progress: 0,
          },
          {
            title:
              "Démystifier la volonté féminine : La vérité sur le dicton ce que femme veut Dieu veut",
            progress: 0,
          },
          {
            title:
              "Démystifier la testostérone : La vérité sur l'hormone de puissance",
            progress: 0,
          },
          {
            title:
              "Démystifier la force : La vérité sur l'équilibre entre potentiel, savoir et pouvoir",
            progress: 0,
          },
        ],
      },
      {
        title: "04 - Pensée, mental & estime de soi",
        episodes: [
          {
            title:
              "Démystifier l'estime de soi : La vérité sur la restauration des femmes et des hommes noirs",
            duration: "~30min",
            progress: 0,
          },
          {
            title:
              "Démystifier la pureté : L'importance de l'ordre dans la vie spirituelle",
            progress: 0,
          },
          {
            title:
              "Démystifier le leadership : La vérité sur ce qu'ils ne nous disent pas",
            progress: 0,
          },
          {
            title:
              "Démystifier le potentiel : La vérité sur le prix à payer pour maîtriser son potentiel",
            progress: 0,
          },
          {
            title:
              "Démystifier la pensée : La vérité sur la reprogrammation de la matière",
            progress: 0,
          },
          {
            title:
              "Démystifier l'échec : La vérité sur l'éveil, la compréhension et la reconstruction",
            progress: 0,
          },
          {
            title:
              "Démystifier l'échelle de conscience : La vérité sur les différents états de l'Homme",
            progress: 0,
          },
        ],
      },
      {
        title: "05 - Spiritualité & traditions africaines",
        episodes: [
          {
            title:
              "Démystifier la spiritualité : La vérité sur la métascience africaine",
            progress: 0,
          },
          {
            title:
              "Démystifier l'oeil d'Horus : La vérité sur la capacité à voir les sons et à entendre les images",
            progress: 0,
          },
          {
            title:
              "Démystifier le pouvoir noir : La vérité sur l'histoire Secrète des Villes Souveraines Afro-Américaines",
            duration: "~1h30",
            progress: 0,
          },
          {
            title:
              "Démystifier le retour aux sources : La vérité sur le chemin rigoureux vers l'élévation",
            progress: 0,
          },
          {
            title: "Démystifier la parole : la vérité sur le pouvoir du verbe",
            progress: 0,
          },
          {
            title:
              "Démystifier le cycle de la vie : La vérité sur la naissance, la mort et le retour",
            progress: 0,
          },
          {
            title:
              "Démystifier le retour à l'envoyeur : La vérité sur la protection contre les forces du mal",
            progress: 0,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Conscience Critique",
    category: "Développement Personnel & Réflexion",
    categoryIcon: "🌟",
    description:
      "Décryptage d’œuvres cinématographiques cultes qui regorgent d’enseignements secrets.",
    level: "Tous niveaux",
    totalDuration: "16h+",
    match: 95,
    year: 2024,
    isNew: false,
    isPopular: true,
    gradient: "from-slate-700 to-gray-900",
    image: "../assets/_images/_conscience-critique/conscience-critique.avif",
    seasons: [
      {
        title: "01 - Get Out",
        episodes: [
          { title: "Get Out Partie 1", duration: "9:39", progress: 0 },
          { title: "Get Out Partie 2", duration: "8:46", progress: 0 },
          { title: "Get Out Partie 3", duration: "15:14", progress: 0 },
          { title: "Get Out Partie 4", duration: "3:57", progress: 0 },
          { title: "Get Out Partie 5", duration: "15:38", progress: 0 },
          { title: "Get Out Partie 6", duration: "28:56", progress: 0 },
        ],
      },
      {
        title: "02 - Matrix",
        episodes: [
          { title: "Matrix 1", duration: "2:25:27", progress: 0 },
          { title: "Matrix 2", duration: "1:40:05", progress: 0 },
          { title: "Matrix 3 - Le Code Neo", duration: "1:09:48", progress: 0 },
          {
            title: "Matrix 4 - Le Grand Architecte",
            duration: "1:05:27",
            progress: 0,
          },
        ],
      },
      {
        title: "03 - Parasite",
        episodes: [
          {
            title: "Parasite - L'Instinct de Survie",
            duration: "1:42:46",
            progress: 0,
          },
        ],
      },
      {
        title: "04 - Le Seigneur des Anneaux Partie 1",
        episodes: [
          {
            title: "UBUNTU, la société initiatique",
            duration: "3:28:11",
            progress: 0,
          },
          { title: "Les deux consciences", duration: "1:44:40", progress: 0 },
          {
            title: "Le triomphe du Destin partie 1",
            duration: "1:44:40",
            progress: 0,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "La Logique des Dieux",
    category: "Formations",
    categoryIcon: "🎓",
    description:
      "Le mental est l’arme la plus puissante qu’il ait été donné à l’Homme de posséder, à condition que tu saches l’utiliser !",
    level: "Tous niveaux",
    totalDuration: "10h+",
    match: 97,
    year: 2025,
    isNew: true,
    isPopular: false,
    gradient: "from-violet-800 to-indigo-900",
    image: "../assets/_images/_logique-dieux/la-logique-des-dieux.avif",
    seasons: [
      {
        title: "01 - La Logique des Dieux 1",
        episodes: [
          {
            title: "Introduction à la psychologie compensatoire",
            duration: "1:43:29",
            progress: 0,
            resources: "PDF 23 pages",
          },
        ],
      },
      {
        title: "02 - La Logique des Dieux 2",
        episodes: [
          {
            title: "Le triptyque divin",
            duration: "1:48:19",
            progress: 0,
            resources: "PDF 17 pages",
          },
        ],
      },
      {
        title: "03 - La Logique des Dieux 3",
        episodes: [
          {
            title: "Logiques & Axiomes",
            duration: "2:36:00",
            progress: 0,
            resources: "PDF 28 pages",
          },
        ],
      },
      {
        title: "04 - La Logique des Dieux 4",
        episodes: [
          {
            title: "Les 9 domaines et 9 vertus 1/2",
            duration: "2:07:44",
            progress: 0,
            resources: "PDF 16 pages",
          },
        ],
      },
      {
        title: "05 - La Logique des Dieux 5",
        episodes: [
          {
            title: "Les 9 domaines et 9 vertus 2/2",
            duration: "1:55:48",
            progress: 0,
            resources: "PDF 16 pages",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Lives",
    category: "Développement Personnel & Réflexion",
    categoryIcon: "🌟",
    description:
      "Retrouvez les replays des lives Instagram, des enseignements enrichissants qui traitent de sujets divers et variés.",
    level: "Tous niveaux",
    totalDuration: "120h+",
    match: 94,
    year: 2025,
    isNew: false,
    isPopular: true,
    gradient: "from-rose-700 to-red-900",
    image: "../assets/_images/_lives/lives2.avif",
    seasons: [
      {
        title: "01 - Santé & souveraineté corporelle",
        episodes: [
          { title: "Santé holistique", duration: "1:54:29", progress: 0 },
          {
            title: "Vaccins, virus et système immunitaire",
            duration: "54:11",
            progress: 0,
          },
          {
            title: "La vérité sur le végétalisme",
            duration: "1:19:18",
            progress: 0,
          },
          {
            title: "La nourriture des Dieux",
            duration: "1:29:41",
            progress: 0,
          },
          { title: "La vérité sur le lait", duration: "1:04:12", progress: 0 },
          { title: "Le droit à la maladie", duration: "1:08:50", progress: 0 },
          {
            title: "La cause réelle de la maladie",
            duration: "1:11:07",
            progress: 0,
          },
          { title: "L'anatomie du stress", duration: "1:10:22", progress: 0 },
          { title: "La vaccination", duration: "1:12:09", progress: 0 },
          {
            title: "L'échelle vibratoire de l'alimentation et des relations",
            duration: "1:00:06",
            progress: 0,
          },
          { title: "La science du jeûne", duration: "1:09:41", progress: 0 },
          { title: "5 jours du jeûne sec", duration: "54:26", progress: 0 },
          {
            title: "Les mystères de l'infertilité",
            duration: "2:12:14",
            progress: 0,
          },
          {
            title: "Femme noire et cancer du sein",
            duration: "1:25:49",
            progress: 0,
          },
          {
            title: "Alimentation, vaccination et OGM",
            duration: "1:31:34",
            progress: 0,
          },
        ],
      },
      {
        title: "02 - Spiritualité & science sacrée",
        episodes: [
          {
            title: "Introduction à la prière kami(t)",
            duration: "1:03:50",
            progress: 0,
          },
          { title: "La science de l'E.F.A", duration: "2:14:19", progress: 0 },
          { title: "Rituel de protection", duration: "2:14:09", progress: 0 },
          { title: "Purifier l'ego", duration: "1:20:21", progress: 0 },
          {
            title: "L'éveil des consciences",
            duration: "1:20:17",
            progress: 0,
          },
          {
            title: "La symbolique du cadeau",
            duration: "1:02:02",
            progress: 0,
          },
          { title: "La métaphysique du coq", duration: "1:07:21", progress: 0 },
          {
            title: "Le but de la réincarnation",
            duration: "1:05:05",
            progress: 0,
          },
          { title: "Retour à l'origine", duration: "1:20:37", progress: 0 },
          {
            title: "Le pouvoir mystique du cheveu afro",
            duration: "1:28:06",
            progress: 0,
          },
          { title: "La profanation", duration: "1:37:24", progress: 0 },
          {
            title: "Ancêtres, mémoire et ADN",
            duration: "1:15:12",
            progress: 0,
          },
          { title: "L'écologie", duration: "1:40:31", progress: 0 },
          {
            title: "Les mystères de la noix de coco",
            duration: "1:09:12",
            progress: 0,
          },
          { title: "Comprendre la propreté", duration: "1:08:07", progress: 0 },
          {
            title: "Les enjeux de la purification",
            duration: "1:36:32",
            progress: 0,
          },
          {
            title: "Le mystère des vampires",
            duration: "1:30:02",
            progress: 0,
          },
          { title: "Religion vs spiritualité", duration: "49:05", progress: 0 },
        ],
      },
      {
        title: "03 - Psychologie de la libération",
        episodes: [
          {
            title: "Maîtrise de soi et auto-determination",
            duration: "1:28:27",
            progress: 0,
          },
          { title: "La puissance de la foi", duration: "1:33:21", progress: 0 },
          { title: "L'amour conditionnel", duration: "1:00:43", progress: 0 },
          { title: "La jalousie", duration: "1:09:05", progress: 0 },
          {
            title: "Comprendre la méestime de soi",
            duration: "45:12",
            progress: 0,
          },
          {
            title: "Le sortilège du développement personnel",
            duration: "1:42:01",
            progress: 0,
          },
          { title: "La vie de merde", duration: "1:06:09", progress: 0 },
          {
            title: "Comprendre la voix / voie passive ou active",
            duration: "2:04:24",
            progress: 0,
          },
          { title: "Limitless", duration: "1:06:46", progress: 0 },
          { title: "L'esprit de l'esclavage", duration: "39:07", progress: 0 },
          { title: "La dignité", duration: "1:37:33", progress: 0 },
          { title: "Comme UN ou RIEN", duration: "52:25", progress: 0 },
          { title: "Conscience critique", duration: "44:26", progress: 0 },
          {
            title: "Comprendre le génocide voilée de la pensée",
            duration: "27:42",
            progress: 0,
          },
        ],
      },
      {
        title: "04 - Économie politique & autonomie matérielle",
        episodes: [
          { title: "L'illusion de l'argent", duration: "1:55:44", progress: 0 },
          {
            title: "Comprendre la dématérialisation",
            duration: "48:05",
            progress: 0,
          },
          {
            title: "Comprendre la délocalisation",
            duration: "21:48",
            progress: 0,
          },
          {
            title: "Comprendre le véritable développement",
            duration: "36:38",
            progress: 0,
          },
          { title: "L'auto-suffisance", duration: "1:06:48", progress: 0 },
          {
            title: "La solution à la vie chère - La Diète des Cœurs braves",
            duration: "54:50",
            progress: 0,
          },
        ],
      },
      {
        title: "05 - Souveraineté africaine & Mégapolitique",
        episodes: [
          { title: "Comprendre le racisme", duration: "24:55", progress: 0 },
          { title: "La terre convoitée", duration: "1:34:13", progress: 0 },
          { title: "Blackout vs whiteout", duration: "1:04:46", progress: 0 },
          { title: "Back to Africa", duration: "1:45:40", progress: 0 },
          {
            title: "Les portes du retour se ferment !",
            duration: "1:20:48",
            progress: 0,
          },
          {
            title: "La communauté notre seule issue",
            duration: "1:19:47",
            progress: 0,
          },
          { title: "Dzesi dokui wo", duration: "1:03:14", progress: 0 },
          {
            title: "Les marchands du temple",
            duration: "1:52:21",
            progress: 0,
          },
          { title: "Kemi Seba", duration: "1:34:58", progress: 0 },
          {
            title: "Les dérives de Safia Enjoylife",
            duration: "2:30:16",
            progress: 0,
          },
          {
            title: "Les dangers du métissage",
            duration: "2:05:23",
            progress: 0,
          },
          {
            title: "Esclavage, réincarnation et réparation",
            duration: "1:13:49",
            progress: 0,
          },
          {
            title: "Boycotte la suprématie blanche",
            duration: "1:50:27",
            progress: 0,
          },
          { title: "Franc-maçonnerie", duration: "45:23", progress: 0 },
          {
            title: "Un agenda pas si caché que ça",
            duration: "50:40",
            progress: 0,
          },
          {
            title: "Les criminels insoupçonnés",
            duration: "1:52:55",
            progress: 0,
          },
          { title: "Conscience Actu'", duration: "1:42:48", progress: 0 },
          {
            title: "Le vrai sens de l'actualité",
            duration: "1:04:28",
            progress: 0,
          },
          { title: "S.E.X.E et combat", duration: "1:00:00", progress: 0 },
          {
            title: "Enfants et écrans, attention danger !",
            duration: "1:31:20",
            progress: 0,
          },
          {
            title: "Détournement de mineurs",
            duration: "1:05:58",
            progress: 0,
          },
          { title: "Le transgénisme", duration: "1:18:25", progress: 0 },
          { title: "L'homosexualité", duration: "1:26:36", progress: 0 },
          {
            title: "Les funérailles des funérailles des tabous",
            duration: "1:31:16",
            progress: 0,
          },
          { title: "Les dangers de l'IA", duration: "1:31:39", progress: 0 },
          {
            title: "Comprendre la géocentricité",
            duration: "1:01:10",
            progress: 0,
          },
        ],
      },
      {
        title: "06 - Lives récents",
        episodes: [
          { title: "La cité de la paix", duration: "1:07:42", progress: 0 },
          { title: "Les rituels éronés", duration: "1:45:07", progress: 0 },
          {
            title: "Le cassage de la femme noire",
            duration: "1:13:29",
            progress: 0,
          },
          {
            title: "Le Notre Père, une prière scientifico-mystique",
            duration: "59:42",
            progress: 0,
          },
          {
            title: "La géopolitique profonde",
            duration: "1:35:28",
            progress: 0,
          },
          { title: "Le cure-dent", duration: "1:15:14", progress: 0 },
          {
            title: "CSAM EVRAS CSAR — 3 entités au service de la pédophilie",
            duration: "50:47",
            progress: 0,
          },
          { title: "Les 3 types d'amour", duration: "1:00:17", progress: 0 },
          {
            title: "Parler de sexe aux enfants",
            duration: "1:16:23",
            progress: 0,
          },
          {
            title: "La ruse du diable (partie 1)",
            duration: "11:37",
            progress: 0,
          },
          {
            title: "La ruse du diable (partie 2)",
            duration: "2:30:23",
            progress: 0,
          },
          {
            title:
              "Le danger des concepts importés en Afrique par les entrepreneurs afro + Tentative de coup d'état au Bénin",
            duration: "1:08:23",
            progress: 0,
          },
          { title: "L'aliénation oculaire", duration: "1:11:33", progress: 0 },
          {
            title: "Spiritualité, renaissance africaine et foi en Dieu",
            duration: "56:58",
            progress: 0,
          },
        ],
      },
      {
        title: "07 - Masterclass",
        episodes: [
          { title: "Parentalité", duration: "4:43:54", progress: 0 },
          { title: "La beauté naturelle", duration: "1:36:33", progress: 0 },
        ],
      },
    ],
  },
];

let myList = [];
let currentView = "home";

// ============================================
// CONFIG & SDK
// ============================================

const defaultConfig = {
  platform_name: "FUNSCHOOLING",
  hero_title: "MAÂT CONTINUUM",
  hero_description:
    "Une formation complète et transformatrice explorant les sciences de l'existence, la relation et la nutrition. De l'orientation aux principes fondamentaux, apprenez à vous comprendre et à transformer votre vie.",
  background_color: "#000000",
  surface_color: "#181818",
  text_color: "#ffffff",
  primary_action_color: "#e50914",
  secondary_action_color: "#71717a",
  font_family: "Inter",
  font_size: 16,
};

let config = { ...defaultConfig };

async function onConfigChange(cfg) {
  const platformName = cfg.platform_name || defaultConfig.platform_name;
  const heroTitle = cfg.hero_title || defaultConfig.hero_title;
  const heroDescription =
    cfg.hero_description || defaultConfig.hero_description;
  const bgColor = cfg.background_color || defaultConfig.background_color;
  const surfaceColor = cfg.surface_color || defaultConfig.surface_color;
  const textColor = cfg.text_color || defaultConfig.text_color;
  const primaryColor =
    cfg.primary_action_color || defaultConfig.primary_action_color;
  const secondaryColor =
    cfg.secondary_action_color || defaultConfig.secondary_action_color;
  const fontFamily = cfg.font_family || defaultConfig.font_family;
  const fontSize = cfg.font_size || defaultConfig.font_size;

  // Apply colors
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = textColor;

  // Apply font
  document.body.style.fontFamily = `${fontFamily}, Inter, sans-serif`;

  // Update text content
  const logo = document.getElementById("logo");
  if (logo) logo.textContent = platformName;

  const heroTitleEl = document.getElementById("heroTitle");
  if (heroTitleEl) heroTitleEl.textContent = heroTitle;

  const heroDescEl = document.getElementById("heroDescription");
  if (heroDescEl) heroDescEl.textContent = heroDescription;

  const footerText = document.getElementById("footerText");
  if (footerText)
    footerText.textContent = `© 2024 ${platformName}. Tous droits réservés.`;

  // Update primary action buttons
  document.querySelectorAll(".netflix-red").forEach((el) => {
    el.style.color = primaryColor;
  });
  document.querySelectorAll(".netflix-red-bg").forEach((el) => {
    el.style.backgroundColor = primaryColor;
  });

  // Update progress bars
  document.querySelectorAll(".progress-bar").forEach((el) => {
    el.style.background = `linear-gradient(90deg, ${primaryColor} 0%, ${primaryColor}aa 100%)`;
  });

  // Update cards surface color
  document.querySelectorAll(".series-card-info").forEach((el) => {
    el.style.backgroundColor = surfaceColor;
  });
}

function mapToCapabilities(cfg) {
  return {
    recolorables: [
      {
        get: () => cfg.background_color || defaultConfig.background_color,
        set: (v) => {
          cfg.background_color = v;
          if (window.elementSdk)
            window.elementSdk.setConfig({ background_color: v });
        },
      },
      {
        get: () => cfg.surface_color || defaultConfig.surface_color,
        set: (v) => {
          cfg.surface_color = v;
          if (window.elementSdk)
            window.elementSdk.setConfig({ surface_color: v });
        },
      },
      {
        get: () => cfg.text_color || defaultConfig.text_color,
        set: (v) => {
          cfg.text_color = v;
          if (window.elementSdk) window.elementSdk.setConfig({ text_color: v });
        },
      },
      {
        get: () =>
          cfg.primary_action_color || defaultConfig.primary_action_color,
        set: (v) => {
          cfg.primary_action_color = v;
          if (window.elementSdk)
            window.elementSdk.setConfig({ primary_action_color: v });
        },
      },
      {
        get: () =>
          cfg.secondary_action_color || defaultConfig.secondary_action_color,
        set: (v) => {
          cfg.secondary_action_color = v;
          if (window.elementSdk)
            window.elementSdk.setConfig({ secondary_action_color: v });
        },
      },
    ],
    borderables: [],
    fontEditable: {
      get: () => cfg.font_family || defaultConfig.font_family,
      set: (v) => {
        cfg.font_family = v;
        if (window.elementSdk) window.elementSdk.setConfig({ font_family: v });
      },
    },
    fontSizeable: {
      get: () => cfg.font_size || defaultConfig.font_size,
      set: (v) => {
        cfg.font_size = v;
        if (window.elementSdk) window.elementSdk.setConfig({ font_size: v });
      },
    },
  };
}

function mapToEditPanelValues(cfg) {
  return new Map([
    ["platform_name", cfg.platform_name || defaultConfig.platform_name],
    ["hero_title", cfg.hero_title || defaultConfig.hero_title],
    [
      "hero_description",
      cfg.hero_description || defaultConfig.hero_description,
    ],
  ]);
}

// Initialize SDK
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues,
  });
  config = window.elementSdk.config;
}

// ============================================
// RENDERING FUNCTIONS
// ============================================

function createSeriesCard(series, showProgress = false) {
  const totalEpisodes = series.seasons.reduce(
    (acc, s) => acc + s.episodes.length,
    0,
  );
  const watchedEpisodes = series.seasons.reduce(
    (acc, s) => acc + s.episodes.filter((e) => e.progress === 100).length,
    0,
  );
  const currentEpisode = series.seasons
    .flatMap((s) => s.episodes)
    .find((e) => e.progress > 0 && e.progress < 100);
  const overallProgress =
    (series.seasons.reduce(
      (acc, s) => acc + s.episodes.reduce((a, e) => a + e.progress, 0),
      0,
    ) /
      (totalEpisodes * 100)) *
    100;

  const card = document.createElement("div");
  card.className = "flex-shrink-0 w-56 md:w-64 card-hover cursor-pointer group";
  card.onclick = () => openSeriesModal(series.id);

  card.innerHTML = `
        <div class="relative aspect-video rounded-t-lg overflow-hidden ${series.image ? "" : "bg-gradient-to-br " + series.gradient}">
          ${
            series.image
              ? `<img src="${series.image}" alt="${series.title}" class="w-full h-full object-cover">`
              : `<div class="absolute inset-0 flex items-center justify-center"><span class="text-6xl opacity-30">${series.categoryIcon}</span></div>`
          }
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div class="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center play-button-pulse">
              ${
                series.type === "library"
                  ? `<svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`
                  : `<svg class="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`
              }
            </div>
          </div>
          ${series.isNew ? '<span class="absolute top-2 left-2 px-2 py-0.5 bg-red-600 text-xs font-bold rounded">NOUVEAU</span>' : ""}
          ${
            showProgress && overallProgress > 0
              ? `
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800">
              <div class="progress-bar h-full" style="width: ${overallProgress}%"></div>
            </div>
          `
              : ""
          }
        </div>
        <div class="series-card-info bg-zinc-900 p-3 rounded-b-lg">
          <h4 class="font-semibold text-sm mb-1 truncate">${series.title}</h4>
          <div class="flex items-center gap-2 text-xs text-gray-400">
            <span class="text-green-500">${series.match}%</span>
            <span>${series.totalDuration}</span>
            <span class="px-1.5 py-0.5 bg-zinc-800 rounded text-[10px]">${series.level.split(" ")[0]}</span>
          </div>
          ${
            showProgress && currentEpisode
              ? `
            <p class="text-xs text-gray-500 mt-2 truncate">▶ ${currentEpisode.title}</p>
          `
              : ""
          }
        </div>
      `;

  return card;
}

function renderContinueLearning() {
  const container = document.querySelector("#continueSection .flex");
  container.innerHTML = "";

  const inProgress = seriesData.filter(
    (s) =>
      s.seasons.some((season) =>
        season.episodes.some((e) => e.progress > 0 && e.progress < 100),
      ) ||
      s.seasons.some((season) =>
        season.episodes.some((e) => e.progress === 100),
      ),
  );

  if (inProgress.length === 0) {
    document.getElementById("continueSection").style.display = "none";
    return;
  }

  document.getElementById("continueSection").style.display = "block";
  inProgress.forEach((series) => {
    container.appendChild(createSeriesCard(series, true));
  });
}

function renderCategories() {
  const container = document.getElementById("categories");
  container.innerHTML = "";

  const categories = [...new Set(seriesData.map((s) => s.category))];

  categories.forEach((category) => {
    const categorySeries = seriesData.filter((s) => s.category === category);
    const icon = categorySeries[0]?.categoryIcon || "📚";

    const section = document.createElement("div");
    section.className = "mb-8";
    section.innerHTML = `
          <h3 class="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-2">
            ${icon} ${category}
          </h3>
          <div class="flex gap-3 overflow-x-auto hide-scrollbar pb-4 gradient-mask category-row"></div>
        `;

    const row = section.querySelector(".category-row");
    categorySeries.forEach((series) => {
      row.appendChild(createSeriesCard(series));
    });

    container.appendChild(section);
  });
}

function renderPopular() {
  const container = document.getElementById("popularRow");
  container.innerHTML = "";

  const popular = seriesData
    .filter((s) => s.isPopular)
    .sort((a, b) => b.match - a.match);
  popular.forEach((series, index) => {
    const card = document.createElement("div");
    card.className =
      "flex-shrink-0 flex items-center gap-4 card-hover cursor-pointer";
    card.onclick = () => openSeriesModal(series.id);

    card.innerHTML = `
          <span class="text-6xl md:text-8xl font-bold text-zinc-800" style="font-family: 'Bebas Neue', sans-serif; -webkit-text-stroke: 2px #333;">${index + 1}</span>
          <div class="relative w-32 md:w-40 aspect-[2/3] rounded-lg overflow-hidden ${series.image ? "" : "bg-gradient-to-br " + series.gradient}">
            ${
              series.image
                ? `<img src="${series.image}" alt="${series.title}" class="w-full h-full object-cover">`
                : `<div class="absolute inset-0 flex items-center justify-center"><span class="text-4xl opacity-40">${series.categoryIcon}</span></div>`
            }
            <div class="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80">
              <p class="text-xs font-medium truncate">${series.title}</p>
            </div>
          </div>
        `;

    container.appendChild(card);
  });
}

function renderNew() {
  const container = document.getElementById("newRow");
  container.innerHTML = "";

  const newSeries = seriesData.filter((s) => s.isNew);
  newSeries.forEach((series) => {
    container.appendChild(createSeriesCard(series));
  });
}

// ============================================
// MODAL FUNCTIONS
// ============================================

function openSeriesModal(seriesId) {
  const series = seriesData.find((s) => s.id === seriesId);
  if (!series) return;

  const modal = document.getElementById("seriesModal");
  const content = document.getElementById("modalContent");

  const totalEpisodes = series.seasons.reduce(
    (acc, s) => acc + s.episodes.length,
    0,
  );
  const isLibrary = series.type === "library";

  content.innerHTML = `
        <!-- Close Button -->
        <button onclick="closeSeriesModal()" class="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Header Banner -->
        <div class="relative h-56 sm:h-72 md:h-96 ${series.image ? "" : "bg-gradient-to-br " + series.gradient}">
          ${
            series.image
              ? `<img src="${series.image}" alt="${series.title}" class="absolute inset-0 w-full h-full object-cover"><div class="absolute inset-0 bg-black/50"></div>`
              : `<div class="absolute inset-0 flex items-center justify-center"><span class="text-[100px] sm:text-[150px] opacity-20">${series.categoryIcon}</span></div>`
          }
          <div class="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
            <span class="category-pill px-3 py-1 rounded-full text-xs font-medium text-red-400 mb-2 inline-block">
              ${series.categoryIcon} ${series.category}
            </span>
            <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 leading-tight" style="font-family: 'Bebas Neue', sans-serif;">${series.title}</h2>
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <span class="text-green-500 font-semibold text-sm">${series.match}% Match</span>
              <span class="text-gray-400 text-sm">${series.year}</span>
              ${!isLibrary ? '<span class="px-2 py-0.5 border border-gray-500 text-xs">HD</span>' : ""}
              <span class="text-gray-400 text-sm">${series.seasons.length} ${isLibrary ? "Section" : "Saison"}${series.seasons.length > 1 ? "s" : ""}</span>
              <span class="text-gray-400 text-sm">${totalEpisodes} ${isLibrary ? "livres" : "épisodes"}</span>
              <span class="px-2 py-0.5 bg-zinc-700 rounded text-xs hidden sm:inline">${series.level}</span>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <button onclick="playEpisode(${series.id}, 0, 0)" class="flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-white text-black font-semibold rounded hover:bg-gray-200 transition text-sm">
                ${
                  isLibrary
                    ? '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>'
                    : '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>'
                }
                ${isLibrary ? "Lire" : "Lecture"}
              </button>
              <button onclick="addToList(${series.id})" id="modalListBtn-${series.id}" class="flex items-center gap-2 px-4 py-2.5 bg-zinc-700/80 rounded hover:bg-zinc-600 transition text-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${myList.includes(series.id) ? "M5 13l4 4L19 7" : "M12 4v16m8-8H4"}"/>
                </svg>
                ${myList.includes(series.id) ? "Dans ma liste" : "Ma Liste"}
              </button>
              <button class="p-2.5 bg-zinc-700/50 rounded-full border border-zinc-600 hover:border-white transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="p-4 sm:p-6 md:p-8">
          <!-- Description -->
          <div class="mb-5 sm:mb-8">
            <p class="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">${series.description}</p>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-2 sm:gap-4 mb-5 sm:mb-8">
            <div class="bg-zinc-800/50 rounded-lg p-3 sm:p-4 text-center">
              <p class="text-lg sm:text-2xl font-bold text-red-500">${series.totalDuration}</p>
              <p class="text-xs text-gray-400">Durée totale</p>
            </div>
            <div class="bg-zinc-800/50 rounded-lg p-3 sm:p-4 text-center">
              <p class="text-lg sm:text-2xl font-bold">${totalEpisodes}</p>
              <p class="text-xs text-gray-400">${isLibrary ? "Livres" : "Épisodes"}</p>
            </div>
            <div class="bg-zinc-800/50 rounded-lg p-3 sm:p-4 text-center">
              <p class="text-lg sm:text-2xl font-bold">${series.seasons.length}</p>
              <p class="text-xs text-gray-400">${isLibrary ? "Sections" : "Saisons"}</p>
            </div>
          </div>

          <!-- Season Selector -->
          <div class="flex items-center justify-between mb-3 sm:mb-4">
            <h3 class="text-base sm:text-xl font-semibold">${isLibrary ? "Livres" : "Épisodes"}</h3>
            <div class="relative">
              <select id="seasonSelector-${series.id}" onchange="renderEpisodes(${series.id}, this.value)" class="season-selector appearance-none pl-3 pr-8 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-600 max-w-[160px] sm:max-w-none">
                ${series.seasons.map((s, i) => `<option value="${i}">${s.title}</option>`).join("")}
              </select>
              <svg class="w-3 h-3 sm:w-4 sm:h-4 absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </div>

          <!-- Episodes List -->
          <div id="episodesList-${series.id}" class="space-y-1.5 sm:space-y-2">
            ${renderEpisodesHTML(series, 0)}
          </div>
        </div>
      `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function renderEpisodesHTML(series, seasonIndex) {
  const season = series.seasons[seasonIndex];
  if (!season) return "";

  if (series.type === "library") {
    return season.episodes
      .map(
        (ep, i) => `
        <div class="episode-item flex items-center gap-2 sm:gap-4 p-2.5 sm:p-4 rounded-lg cursor-pointer" onclick="playEpisode(${series.id}, ${seasonIndex}, ${i})">
          <span class="text-base font-bold text-zinc-600 w-5 sm:w-6 text-center flex-shrink-0">${i + 1}</span>
          <div class="relative w-12 sm:w-16 h-18 sm:h-24 rounded-md overflow-hidden bg-gradient-to-b from-amber-800 to-yellow-900 flex-shrink-0 shadow-md" style="height:4.5rem;box-shadow: 3px 3px 8px rgba(0,0,0,0.5), inset -3px 0 6px rgba(0,0,0,0.25)">
            <div class="absolute left-0 top-0 bottom-0 w-1.5 sm:w-2 bg-black/20"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-lg sm:text-xl">📖</span>
            </div>
            ${ep.progress > 0 ? `<div class="absolute bottom-0 left-0 right-0 h-1 bg-black/30"><div class="progress-bar h-full" style="width: ${ep.progress}%"></div></div>` : ""}
          </div>
          <div class="flex-1 min-w-0">
            <h4 class="font-medium text-sm leading-snug mb-1">${ep.title}</h4>
            <p class="text-xs text-amber-500 flex items-center gap-1">
              📄 Ebook PDF${ep.duration ? ` · Lecture ${ep.duration}` : ""}
            </p>
          </div>
          ${ep.progress === 100 ? `<span class="text-green-500 flex-shrink-0"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></span>` : ""}
        </div>
      `,
      )
      .join("");
  }

  return season.episodes
    .map(
      (ep, i) => `
        <div class="episode-item flex items-center gap-2 sm:gap-4 p-2.5 sm:p-4 rounded-lg cursor-pointer" onclick="playEpisode(${series.id}, ${seasonIndex}, ${i})">
          <span class="text-base sm:text-2xl font-bold text-zinc-600 w-5 sm:w-8 text-center flex-shrink-0">${i + 1}</span>
          <div class="relative w-20 sm:w-28 md:w-36 aspect-video rounded-lg overflow-hidden bg-gradient-to-br ${series.gradient} flex-shrink-0">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 flex items-center justify-center">
                <svg class="w-3 h-3 sm:w-4 sm:h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            ${
              ep.progress > 0
                ? `
              <div class="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800">
                <div class="progress-bar h-full" style="width: ${ep.progress}%"></div>
              </div>
            `
                : ""
            }
          </div>
          <div class="flex-1 min-w-0">
            <h4 class="font-medium text-sm sm:text-base mb-0.5 sm:mb-1 leading-snug">${ep.title}</h4>
            <p class="text-xs sm:text-sm text-gray-400 mb-0.5 sm:mb-1">${ep.duration}</p>
            ${ep.resources ? `<p class="text-xs text-gray-500 hidden sm:flex items-center gap-1">📄 ${ep.resources}</p>` : ""}
          </div>
          ${
            ep.progress === 100
              ? `
            <span class="text-green-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </span>
          `
              : ""
          }
        </div>
      `,
    )
    .join("");
}

function renderEpisodes(seriesId, seasonIndex) {
  const series = seriesData.find((s) => s.id === seriesId);
  if (!series) return;

  const container = document.getElementById(`episodesList-${seriesId}`);
  container.innerHTML = renderEpisodesHTML(series, parseInt(seasonIndex));
}

function closeSeriesModal() {
  document.getElementById("seriesModal").classList.add("hidden");
  document.body.style.overflow = "";
}

// ============================================
// VIDEO PLAYER
// ============================================

function playEpisode(seriesId, seasonIndex, episodeIndex) {
  const series = seriesData.find((s) => s.id === seriesId);
  if (!series) return;

  const season = series.seasons[seasonIndex];
  const episode = season.episodes[episodeIndex];

  openPaymentPage({ series, episode });
  return;

  const playerModal = document.getElementById("playerModal");
  const playerContent = document.getElementById("playerContent");

  if (series.type === "library") {
    const prevEp =
      episodeIndex > 0
        ? {
            season: seasonIndex,
            episode: episodeIndex - 1,
            data: season.episodes[episodeIndex - 1],
          }
        : seasonIndex > 0
          ? {
              season: seasonIndex - 1,
              episode: series.seasons[seasonIndex - 1].episodes.length - 1,
              data: series.seasons[seasonIndex - 1].episodes[
                series.seasons[seasonIndex - 1].episodes.length - 1
              ],
            }
          : null;
    const nextEp =
      episodeIndex + 1 < season.episodes.length
        ? {
            season: seasonIndex,
            episode: episodeIndex + 1,
            data: season.episodes[episodeIndex + 1],
          }
        : series.seasons[seasonIndex + 1]
          ? {
              season: seasonIndex + 1,
              episode: 0,
              data: series.seasons[seasonIndex + 1].episodes[0],
            }
          : null;

    playerContent.innerHTML = `
      <div class="relative h-full flex flex-col bg-amber-950">
        <!-- Header -->
        <div class="flex items-center justify-between px-6 py-4 bg-amber-900/80 backdrop-blur border-b border-amber-800/50">
          <button onclick="closePlayerModal()" class="flex items-center gap-2 text-amber-200 hover:text-white transition text-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Bibliothèque
          </button>
          <span class="text-amber-300 text-xs">${season.title}</span>
          <div class="flex items-center gap-3">
            ${prevEp ? `<button onclick="playEpisode(${series.id}, ${prevEp.season}, ${prevEp.episode})" class="text-amber-300 hover:text-white transition"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg></button>` : '<span class="w-5"></span>'}
            ${nextEp ? `<button onclick="playEpisode(${series.id}, ${nextEp.season}, ${nextEp.episode})" class="text-amber-300 hover:text-white transition"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></button>` : '<span class="w-5"></span>'}
          </div>
        </div>

        <!-- Book display -->
        <div class="flex-1 flex flex-col items-center justify-center p-8 gap-8">
          <div class="w-40 h-56 rounded-md bg-gradient-to-b from-amber-700 to-yellow-800 shadow-2xl flex items-center justify-center relative" style="box-shadow: 6px 6px 20px rgba(0,0,0,0.6), inset -4px 0 8px rgba(0,0,0,0.3)">
            <div class="absolute left-0 top-0 bottom-0 w-3 rounded-l-md bg-black/20"></div>
            <span class="text-5xl">📖</span>
          </div>
          <div class="text-center max-w-lg">
            <p class="text-amber-400 text-xs font-medium uppercase tracking-widest mb-3">Ebook PDF · ${episodeIndex + 1} / ${season.episodes.length}</p>
            <h2 class="text-white text-xl md:text-2xl font-semibold leading-snug mb-4">${episode.title}</h2>
            ${episode.duration ? `<p class="text-amber-300 text-sm">⏱ Temps de lecture ${episode.duration}</p>` : ""}
          </div>
          <p class="text-amber-500/70 text-sm text-center">Ce livre est disponible sur la plateforme Learnworlds.<br>Connectez-vous pour accéder au PDF complet.</p>
        </div>

        <!-- Bottom nav -->
        <div class="flex items-center justify-between px-8 py-5 bg-amber-900/50 border-t border-amber-800/50">
          ${
            prevEp
              ? `<button onclick="playEpisode(${series.id}, ${prevEp.season}, ${prevEp.episode})" class="flex items-center gap-2 text-amber-300 hover:text-white transition text-sm"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>${prevEp.data.title.split(":")[0]}</button>`
              : "<span></span>"
          }
          ${
            nextEp
              ? `<button onclick="playEpisode(${series.id}, ${nextEp.season}, ${nextEp.episode})" class="flex items-center gap-2 text-amber-300 hover:text-white transition text-sm">${nextEp.data.title.split(":")[0]}<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></button>`
              : "<span></span>"
          }
        </div>
      </div>
    `;
    playerModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    return;
  }

  // Find next episode
  let nextEp = null;
  let nextSeason = seasonIndex;
  let nextEpIndex = episodeIndex + 1;

  if (nextEpIndex >= season.episodes.length) {
    nextSeason = seasonIndex + 1;
    nextEpIndex = 0;
  }

  if (
    series.seasons[nextSeason] &&
    series.seasons[nextSeason].episodes[nextEpIndex]
  ) {
    nextEp = {
      season: nextSeason,
      episode: nextEpIndex,
      data: series.seasons[nextSeason].episodes[nextEpIndex],
    };
  }

  playerContent.innerHTML = `
        <div class="relative h-full flex flex-col">
          <!-- Video Area -->
          <div class="flex-1 bg-gradient-to-br ${series.gradient} relative">
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-[200px] opacity-10">${series.categoryIcon}</span>
            </div>
            
            <!-- Center Play Button -->
            <div class="absolute inset-0 flex items-center justify-center">
              <button id="mainPlayBtn" onclick="togglePlay()" class="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition">
                <svg id="playIcon" class="w-10 h-10 ml-1" fill="white" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
            
            <!-- Top Bar -->
            <div class="absolute top-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
              <button onclick="closePlayer()" class="p-2 hover:bg-white/10 rounded-full transition">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
              </button>
              <div class="text-center">
                <p class="text-sm text-gray-300">${series.title}</p>
                <p class="text-xs text-gray-500">${season.title} • Épisode ${episodeIndex + 1}</p>
              </div>
              <div class="w-10"></div>
            </div>
            
            <!-- Episode Info Overlay -->
            <div class="absolute bottom-28 left-0 right-0 px-6">
              <h2 class="text-2xl md:text-3xl font-bold mb-2">${episode.title}</h2>
              <p class="text-gray-300">${episode.duration}</p>
            </div>
          </div>
          
          <!-- Controls -->
          <div class="bg-black p-4">
            <!-- Progress Bar -->
            <div class="mb-4">
              <div class="flex items-center gap-3">
                <span class="text-xs text-gray-400" id="currentTime">0:00</span>
                <div class="flex-1 h-1 bg-zinc-800 rounded-full cursor-pointer group" onclick="seekVideo(event)">
                  <div id="progressFill" class="progress-bar h-full rounded-full relative" style="width: ${episode.progress}%">
                    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition"></div>
                  </div>
                </div>
                <span class="text-xs text-gray-400">${episode.duration}</span>
              </div>
            </div>
            
            <!-- Control Buttons -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <button onclick="skipBack()" class="p-2 hover:bg-white/10 rounded-full transition">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"/>
                  </svg>
                </button>
                <button onclick="togglePlay()" class="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition">
                  <svg id="playIconSmall" class="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
                <button onclick="skipForward()" class="p-2 hover:bg-white/10 rounded-full transition">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"/>
                  </svg>
                </button>
                <button class="p-2 hover:bg-white/10 rounded-full transition">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                  </svg>
                </button>
              </div>
              
              <div class="flex items-center gap-3">
                ${
                  nextEp
                    ? `
                  <button onclick="playEpisode(${seriesId}, ${nextEp.season}, ${nextEp.episode})" class="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700 transition text-sm">
                    <span>Suivant</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                `
                    : ""
                }
                <button class="p-2 hover:bg-white/10 rounded-full transition">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

  closeSeriesModal();
  playerModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  // Store current episode info
  window.currentEpisode = { seriesId, seasonIndex, episodeIndex };
  window.isPlaying = false;
}

function closePlayer() {
  document.getElementById("playerModal").classList.add("hidden");
  document.body.style.overflow = "";
  window.currentEpisode = null;
}

let isPlaying = false;
function togglePlay() {
  isPlaying = !isPlaying;
  const playIcon = document.getElementById("playIcon");
  const playIconSmall = document.getElementById("playIconSmall");

  if (isPlaying) {
    playIcon.innerHTML =
      '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
    playIconSmall.innerHTML =
      '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
  } else {
    playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
    playIconSmall.innerHTML = '<path d="M8 5v14l11-7z"/>';
  }
}

function skipBack() {
  // Simulation
}

function skipForward() {
  // Simulation
}

function seekVideo(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const percent = ((e.clientX - rect.left) / rect.width) * 100;
  document.getElementById("progressFill").style.width = `${percent}%`;
}

// ============================================
// MY LIST
// ============================================

function addToList(seriesId) {
  const index = myList.indexOf(seriesId);
  if (index > -1) {
    myList.splice(index, 1);
  } else {
    myList.push(seriesId);
  }

  updateListButtons(seriesId);
}

function updateListButtons(seriesId) {
  const inList = myList.includes(seriesId);

  // Update hero button if it's the featured series
  const heroBtn = document.getElementById("heroListBtn");
  if (heroBtn && seriesId === 0) {
    heroBtn.innerHTML = `
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${inList ? "M5 13l4 4L19 7" : "M12 4v16m8-8H4"}"/>
          </svg>
          ${inList ? "Dans ma liste" : "Ma Liste"}
        `;
  }

  // Update modal button
  const modalBtn = document.getElementById(`modalListBtn-${seriesId}`);
  if (modalBtn) {
    modalBtn.innerHTML = `
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${inList ? "M5 13l4 4L19 7" : "M12 4v16m8-8H4"}"/>
          </svg>
          ${inList ? "Dans ma liste" : "Ma Liste"}
        `;
  }
}

function showMyList() {
  const container = document.getElementById("categories");

  if (myList.length === 0) {
    container.innerHTML = `
          <div class="text-center py-20">
            <span class="text-6xl mb-4 block">📚</span>
            <h3 class="text-2xl font-semibold mb-2">Votre liste est vide</h3>
            <p class="text-gray-400 mb-6">Ajoutez des formations pour les retrouver facilement</p>
            <button onclick="showHome()" class="px-6 py-3 bg-red-600 rounded font-semibold hover:bg-red-700 transition">
              Découvrir les formations
            </button>
          </div>
        `;
    return;
  }

  container.innerHTML = `
        <h2 class="text-2xl font-bold mb-6">Ma Liste</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" id="myListGrid"></div>
      `;

  const grid = document.getElementById("myListGrid");
  myList.forEach((id) => {
    const series = seriesData.find((s) => s.id === id);
    if (series) {
      const card = createSeriesCard(series);
      card.classList.remove("w-56", "md:w-64", "flex-shrink-0");
      card.classList.add("w-full");
      grid.appendChild(card);
    }
  });

  currentView = "myList";
}

function showHome() {
  renderCategories();
  currentView = "home";
}

// ============================================
// SEARCH
// ============================================

function toggleSearch() {
  const searchBar = document.getElementById("searchBar");
  searchBar.classList.toggle("hidden");
  if (!searchBar.classList.contains("hidden")) {
    document.getElementById("searchInput").focus();
  }
}

function handleSearch(query) {
  if (!query.trim()) {
    showHome();
    return;
  }

  const results = seriesData.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.category.toLowerCase().includes(query.toLowerCase()) ||
      s.description.toLowerCase().includes(query.toLowerCase()),
  );

  const container = document.getElementById("categories");

  if (results.length === 0) {
    container.innerHTML = `
          <div class="text-center py-20">
            <span class="text-6xl mb-4 block">🔍</span>
            <h3 class="text-2xl font-semibold mb-2">Aucun résultat</h3>
            <p class="text-gray-400">Essayez avec d'autres mots-clés</p>
          </div>
        `;
    return;
  }

  container.innerHTML = `
        <h2 class="text-2xl font-bold mb-6">Résultats pour "${query}"</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" id="searchResults"></div>
      `;

  const grid = document.getElementById("searchResults");
  results.forEach((series) => {
    const card = createSeriesCard(series);
    card.classList.remove("w-56", "md:w-64", "flex-shrink-0");
    card.classList.add("w-full");
    grid.appendChild(card);
  });
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

const navbar = document.getElementById("navbar");
const app = document.getElementById("app");

app.addEventListener("scroll", () => {
  if (app.scrollTop > 50) {
    navbar.style.background = "rgba(0,0,0,0.95)";
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.background = "transparent";
    navbar.style.backdropFilter = "none";
  }
});

// ============================================
// INIT
// ============================================

// ============================================
// OFFER POPUP
// ============================================

function openOfferPopup() {
  document.getElementById("offerPopup").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeOfferPopup() {
  document.getElementById("offerPopup").classList.add("hidden");
  document.body.style.overflow = "";
}

// ============================================
// PAYMENT PAGE
// ============================================

function openPaymentPage(context) {
  const modal = document.getElementById("paymentModal");
  const content = document.getElementById("paymentContent");

  const series = context.series || null;
  const episode = context.episode || null;

  const heroSection = series
    ? `
      ${series.image ? `<img src="${series.image}" class="absolute inset-0 w-full h-full object-cover opacity-15 blur-sm scale-110 pointer-events-none">` : `<div class="absolute inset-0 bg-gradient-to-br ${series.gradient} opacity-20"></div>`}
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>
      <div class="relative px-4 sm:px-8 pt-12 pb-8 text-center max-w-2xl mx-auto">
        <div class="w-16 h-16 mx-auto mb-5 rounded-full bg-red-600/20 border border-red-600/40 flex items-center justify-center">
          <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
        </div>
        <span class="px-3 py-1 bg-red-600/20 border border-red-600/40 rounded-full text-red-400 text-xs font-medium uppercase tracking-wider">Contenu Premium</span>
        <h1 class="text-2xl sm:text-4xl font-bold mt-4 mb-1 leading-tight" style="font-family:'Bebas Neue',sans-serif">${series.title}</h1>
        ${episode ? `<p class="text-gray-400 text-sm mt-1">${episode.title}</p>` : ""}
        <p class="text-gray-400 text-sm mt-3 leading-relaxed max-w-md mx-auto">Rejoins l'univers Funflex pour accéder à l'intégralité du contenu — formations, ebooks et lives.</p>
      </div>`
    : `
      <div class="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black"></div>
      <div class="relative px-4 sm:px-8 pt-12 pb-8 text-center max-w-2xl mx-auto">
        <div class="w-16 h-16 mx-auto mb-5 rounded-full bg-red-600/20 border border-red-600/40 flex items-center justify-center">
          <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
        </div>
        <span class="px-3 py-1 bg-red-600/20 border border-red-600/40 rounded-full text-red-400 text-xs font-medium uppercase tracking-wider">Accès Complet</span>
        <h1 class="text-2xl sm:text-4xl font-bold mt-4 mb-3 leading-tight" style="font-family:'Bebas Neue',sans-serif">Rejoins l'Univers Funflex</h1>
        <p class="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">Accède à l'intégralité du contenu — formations, ebooks et lives.</p>
      </div>`;

  content.innerHTML = `
    <div class="min-h-full bg-black text-white flex flex-col">

      <!-- Top bar -->
      <div class="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur sticky top-0 z-10">
        <button onclick="closePaymentPage()" class="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Retour
        </button>
        <span class="text-xl font-bold tracking-wider text-red-500" style="font-family:'Bebas Neue',sans-serif">FUNSCHOOLING</span>
        <div class="w-16"></div>
      </div>

      <!-- Hero -->
      <div class="relative overflow-hidden">${heroSection}</div>

      <!-- Offer card -->
      <div class="flex-1 px-4 sm:px-8 pb-12 max-w-2xl mx-auto w-full">

        <div class="bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden mb-5">
          <div class="h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600"></div>
          <div class="p-6 sm:p-8">

            <!-- Price -->
            <div class="flex items-end gap-3 mb-1">
              <span class="text-5xl sm:text-6xl font-black">360€</span>
            </div>
            <p class="text-amber-400 text-sm font-medium mb-6">🌍 Offre Nouvel An africain — jusqu'au 20 mars 2026</p>

            <!-- Features -->
            <ul class="space-y-3 mb-8">
              ${[
                "+400 heures de vidéos de formation",
                "44 ebooks PDF téléchargeables",
                "95 replays de lives",
                "Accès à vie à tout le contenu",
                "Communauté d'apprentissage Kaxoka",
              ]
                .map(
                  (f) => `
              <li class="flex items-center gap-3 text-gray-300 text-sm">
                <span class="w-5 h-5 rounded-full bg-green-600/20 border border-green-600/40 flex items-center justify-center flex-shrink-0">
                  <svg class="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                </span>
                ${f}
              </li>`,
                )
                .join("")}
            </ul>

            <!-- Formulaire Stripe -->
            <div class="border-t border-zinc-700 pt-6 mt-2">
              <p class="text-sm font-medium text-gray-300 mb-4">Informations de paiement</p>
              <div class="space-y-4 mb-4">
                <div>
                  <label class="block text-xs text-gray-400 mb-1.5">Nom complet</label>
                  <input type="text" id="payment-name" placeholder="Prénom Nom"
                    class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition">
                </div>
                <div>
                  <label class="block text-xs text-gray-400 mb-1.5">Email</label>
                  <input type="email" id="payment-email" placeholder="nom@exemple.com"
                    class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition">
                </div>
                <div>
                  <label class="block text-xs text-gray-400 mb-1.5">Carte bancaire</label>
                  <div id="stripe-payment-element" class="bg-zinc-800 border border-zinc-700 rounded-lg p-3">
                    <div class="flex items-center justify-center py-4">
                      <div class="w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                      <span class="ml-3 text-sm text-gray-500">Chargement...</span>
                    </div>
                  </div>
                </div>
              </div>
              <div id="stripe-error" class="hidden mb-4 p-3 bg-red-900/30 border border-red-800 rounded-lg text-red-400 text-sm"></div>
              <div class="flex justify-center">
                <stripe-buy-button
                  buy-button-id="buy_btn_1T9RjKAGOTTzQZaBgV3jdIat"
                  publishable-key="pk_live_51Mc4A5AGOTTzQZaBCEaTlIaWNIQg5StZtZEWYndovUDoCzH6lqnR44T1f2VkwhpDVpjpNUD77yVhW2KhsgAYGujF00BFfkiuLx"
                ></stripe-buy-button>
              </div>
              <p class="text-center text-xs text-gray-500 mt-4">Paiement possible en plusieurs fois avec Klarna • Sécurisé par Stripe 🔒</p>
            </div>
          </div>
        </div>

        <!-- Warning -->
        <div class="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-xs text-gray-500 space-y-1.5">
          <p class="text-gray-400 font-medium">⚠️ Important</p>
          <p>Cette offre prend fin le <span class="text-amber-400">20 mars 2026 à 23h59</span>.</p>
          <p>Tout le contenu sera supprimé début décembre 2026. Pensez à télécharger vos contenus avant cette date.</p>
        </div>

      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closePaymentPage() {
  document.getElementById("paymentModal").classList.add("hidden");
  document.body.style.overflow = "";
  stripeElements = null;
}

// ─── Stripe Elements ────────────────────────────────────────────────────────

let stripeElements = null;

async function initStripePayment() {
  if (!window.Stripe) {
    console.error("Stripe.js non chargé");
    return;
  }

  const stripe = window.Stripe(STRIPE_PUBLISHABLE_KEY);

  // Récupère le clientSecret depuis le backend
  let clientSecret;
  try {
    const name = document.getElementById("payment-name")?.value || "";
    const email = document.getElementById("payment-email")?.value || "";
    const res = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    const data = await res.json();
    clientSecret = data.clientSecret;
    if (!clientSecret) throw new Error(data.error || "clientSecret manquant");
  } catch (err) {
    document.getElementById("stripe-payment-element").innerHTML =
      `<p class="text-red-400 text-sm py-3 text-center">Impossible de charger le formulaire : ${err.message}</p>`;
    return;
  }

  // Apparence dark Funflex
  const appearance = {
    theme: "night",
    variables: {
      colorPrimary: "#e50914",
      colorBackground: "#27272a",
      colorText: "#ffffff",
      colorTextSecondary: "#9ca3af",
      colorDanger: "#ef4444",
      fontFamily: "Inter, system-ui, sans-serif",
      borderRadius: "8px",
    },
    rules: {
      ".Input": { border: "1px solid #3f3f46", backgroundColor: "#18181b" },
      ".Input:focus": { border: "1px solid #e50914", boxShadow: "none" },
    },
  };

  stripeElements = stripe.elements({ clientSecret, appearance });
  const paymentElement = stripeElements.create("payment", { layout: "tabs" });
  document.getElementById("stripe-payment-element").innerHTML = "";
  paymentElement.mount("#stripe-payment-element");

  // On re-crée le PaymentIntent si nom/email changent (pour les metadata)
  document.getElementById("stripe-submit").dataset.stripe = JSON.stringify({
    stripe: true,
  });
  document.getElementById("stripe-submit").dataset.clientSecret = clientSecret;
  window._stripeInstance = stripe;
}

async function submitStripePayment() {
  const stripe = window._stripeInstance;
  if (!stripe || !stripeElements) return;

  const submitBtn = document.getElementById("stripe-submit");
  const spinner = document.getElementById("stripe-spinner");
  const submitText = document.getElementById("stripe-submit-text");
  const errorDiv = document.getElementById("stripe-error");

  // Validation basique
  const name = document.getElementById("payment-name").value.trim();
  const email = document.getElementById("payment-email").value.trim();
  if (!name || !email) {
    errorDiv.textContent = "Merci de renseigner ton nom et ton email.";
    errorDiv.classList.remove("hidden");
    return;
  }

  submitBtn.disabled = true;
  spinner.classList.remove("hidden");
  submitText.textContent = "Traitement en cours...";
  errorDiv.classList.add("hidden");

  const { error } = await stripe.confirmPayment({
    elements: stripeElements,
    confirmParams: {
      return_url: window.location.origin + "/success.html",
      payment_method_data: {
        billing_details: { name, email },
      },
    },
  });

  if (error) {
    errorDiv.textContent = error.message;
    errorDiv.classList.remove("hidden");
    submitBtn.disabled = false;
    spinner.classList.add("hidden");
    submitText.textContent = "💳 Payer 360€";
  }
  // En cas de succès, Stripe redirige vers /success.html automatiquement
}

function initHeroBgGrid() {
  const container = document.getElementById("heroBgGrid");
  if (!container) return;

  const images = [
    "../assets/_images/_au-coeur-des-mysteres/au-coeur-des-mysteres.avif",
    "../assets/_images/_au-coeur-des-mysteres/au-coeur-des-mysteres2.avif",
    "../assets/_images/_watchmen/watchmen.avif",
    "../assets/_images/_complement-quete/complement-de-quete.avif",
    "../assets/_images/_autonomie-sante/autonomie-en-soin-de-sante.avif",
    "../assets/_images/_alchimie/alchimie-101.avif",
    "../assets/_images/_maat-continuum/maat-continuum.avif",
    "../assets/_images/_conscience-critique/conscience-critique.avif",
    "../assets/_images/_conscience-critique/conscience-critique2.avif",
    "../assets/_images/_conscience-critique/conscience-critique3.avif",
    "../assets/_images/_conscience-critique/conscience-critique4.avif",
    "../assets/_images/_conscience-critique/conscience-critique5.avif",
    "../assets/_images/_logique-dieux/la-logique-des-dieux.avif",
    "../assets/_images/_logique-dieux/la-logique-des-dieux2.avif",
    "../assets/_images/_bibliotheque/bibliotheque-kaxoka.avif",
    "../assets/_images/_bibliotheque/bibliotheque-kaxoka2.avif",
    "../assets/_images/_bibliotheque/bibliotheque-kaxoka3.avif",
    "../assets/_images/_bibliotheque/bibliotheque-kaxoka4.avif",
    "../assets/_images/_bibliotheque/bibliotheque-kaxoka5.avif",
    "../assets/_images/_bibliotheque/bibliotheque-kaxoka6.avif",
    "../assets/_images/_bibliotheque/bibliotheque-kaxoka7.avif",
    "../assets/_images/_lives/lives.avif",
    "../assets/_images/_lives/lives2.avif",
  ];

  function getBreakpoint() {
    const w = window.innerWidth;
    if (w < 640) return "mobile";
    if (w < 1024) return "tablet";
    return "desktop";
  }

  const breakpointConfig = {
    mobile: {
      cols: 6,
      rows: 9,
      inset: "0% -30%",
      transform: "perspective(900px) rotateY(-25deg) rotateX(28deg) scale(1)",
      origin: "center top",
    },
    tablet: {
      cols: 6,
      rows: 8,
      inset: "-25% -8%",
      transform:
        "perspective(800px) rotateY(-12deg) rotateX(22deg) scale(0.85)",
      origin: "center top",
    },
    desktop: {
      cols: 8,
      rows: 7,
      inset: "-30% -10%",
      transform:
        "perspective(1000px) rotateY(-22deg) rotateX(20deg) scale(0.7)",
      origin: "center top",
    },
  };

  function build() {
    container.innerHTML = "";
    const bp = getBreakpoint();
    const { cols, rows, inset, transform, origin } = breakpointConfig[bp];
    const total = cols * rows;

    const wrapper = document.createElement("div");
    wrapper.style.cssText =
      "position:absolute;inset:" +
      inset +
      ";transform:" +
      transform +
      ";transform-origin:" +
      origin +
      ";";

    const grid = document.createElement("div");
    grid.style.cssText =
      "display:grid;grid-template-columns:repeat(" +
      cols +
      ",1fr);gap:6px;width:100%;height:100%;";

    for (let i = 0; i < total; i++) {
      const cell = document.createElement("div");
      cell.style.cssText = "overflow:hidden;border-radius:4px;";
      const img = document.createElement("img");
      img.src = images[i % images.length];
      img.alt = "";
      img.style.cssText =
        "width:100%;height:100%;object-fit:cover;display:block;opacity:0.55;pointer-events:none;";
      cell.appendChild(img);
      grid.appendChild(cell);
    }

    wrapper.appendChild(grid);
    container.appendChild(wrapper);
  }

  build();

  let resizeTimer;
  let lastBp = getBreakpoint();
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const newBp = getBreakpoint();
      if (newBp !== lastBp) {
        lastBp = newBp;
        build();
      }
    }, 150);
  });
}

function init() {
  initHeroBgGrid();
  renderContinueLearning();
  renderCategories();
  renderPopular();
  renderNew();
  onConfigChange(config);
  // Show popup automatically on first visit
  openOfferPopup();
}

init();
