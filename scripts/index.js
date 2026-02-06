const defaultConfig = {
  background_color: "#0f172a",
  surface_color: "#1e293b",
  text_color: "#f1f5f9",
  accent_color: "#3b82f6",
  card_surface_color: "rgba(255,255,255,.06)",
  brand_name: "UJIMA",
  hero_title: "Bienvenue sur UJIMA",
  hero_subtitle:
    "Association panafricaine œuvrant pour l'émancipation, la justice et la souveraineté des peuples africains et afro-descendants",
  card1_title: "Constitution",
  card1_description:
    "Le texte fondamental qui définit les principes et valeurs de notre communauté panafricaine",
  card2_title: "Oracle 2026",
  card2_description:
    "Découvrez les prédictions et visions pour l'avenir de l'Afrique en 2026",
  card3_title: "New E.R.A",
  card3_description:
    "École de la Révolution Africaine : formation de CADRES par cycles progressifs",
  card4_title: "Kalendrier Africain",
  card4_description:
    "Explorez le calendrier traditionnel africain et ses événements culturels",
  card5_title: "Dictionnaire Panafricain",
  card5_description:
    "Un dictionnaire complet des langues, cultures et traditions africaines",
  card6_title: "Cadre stratégique",
  card6_description:
    "Le plan directeur pour coordonner nos actions et maximiser notre impact collectif",
  section1_title: "Constitution",
  section1_content:
    "La Constitution panafricaine établit les fondements d'une Afrique unie et prospère. Elle définit nos valeurs communes, nos droits fondamentaux et notre vision d'un continent fort, indépendant et respecté sur la scène internationale.",
  section2_title: "Oracle 2026",
  section2_content:
    "L'Oracle 2026 présente une vision stratégique pour l'Afrique de demain. À travers des analyses approfondies et des prévisions éclairées, nous explorons les opportunités et défis qui façonneront notre continent dans les années à venir.",
  section3_title: "New E.R.A",
  section3_content:
    "New E.R.A (École de la Révolution Africaine) est un programme de formation structuré en plusieurs cycles pour créer des CADRES de la révolution africaine. Cette école forme les leaders, penseurs et acteurs du changement qui transformeront l'Afrique et porteront la vision panafricaine vers sa réalisation concrète.",
  section4_title: "Kalendrier Africain",
  section4_content:
    "Le Kalendrier Africain célèbre notre riche patrimoine culturel et historique. Il met en lumière les événements importants, les festivités traditionnelles et les dates commémoratives qui rythment la vie de nos communautés à travers tout le continent.",
  section5_title: "Dictionnaire Panafricain",
  section5_content:
    "Le Dictionnaire Panafricain est une ressource exhaustive qui préserve et valorise la diversité linguistique et culturelle de l'Afrique. Il rassemble les langues, expressions, traditions et savoirs ancestraux de nos peuples pour les générations futures.",
  section6_title: "Cadre stratégique",
  section6_content:
    "Le Cadre stratégique définit notre feuille de route commune pour le développement du continent. Il établit les priorités, coordonne les initiatives panafricaines et crée des synergies entre tous les acteurs du changement. Un outil essentiel pour transformer notre vision en actions concrètes et mesurables.",
  nav_link1: "À propos",
  nav_link3: "Contact",
  cta_button: "Commencer",
  font_family: "Inter",
  font_size: 16,
};

async function onConfigChange(config) {
  const bgStart = config.background_color || defaultConfig.background_color;
  const bgEnd = config.surface_color || defaultConfig.surface_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const accentColor = config.accent_color || defaultConfig.accent_color;
  const cardSurface =
    config.card_surface_color || defaultConfig.card_surface_color;
  const customFont = config.font_family || defaultConfig.font_family;
  const baseSize = config.font_size || defaultConfig.font_size;

  document.body.style.background = `linear-gradient(135deg, ${bgStart} 0%, ${bgEnd} 100%)`;
  document.body.style.color = textColor;

  document.documentElement.style.setProperty("--bg-gradient-start", bgStart);
  document.documentElement.style.setProperty("--bg-gradient-end", bgEnd);
  document.documentElement.style.setProperty("--text-primary", textColor);
  document.documentElement.style.setProperty("--accent", accentColor);

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.background = cardSurface;
    card.style.color = textColor;
  });

  const btnPrimary = document.querySelector(".btn-primary");
  if (btnPrimary) {
    btnPrimary.style.background = accentColor;
  }

  const icons = document.querySelectorAll(".icon");
  icons.forEach((icon) => {
    icon.style.color = accentColor;
    icon.style.borderColor = `${accentColor}80`;
    icon.style.background = `linear-gradient(135deg, ${accentColor}26 0%, ${accentColor}40 100%)`;
  });

  const baseFontStack =
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
  document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;

  const heroTitle = document.getElementById("hero-title");
  if (heroTitle) {
    heroTitle.style.fontSize = `clamp(${baseSize * 2}px, 5vw, ${baseSize * 3.5}px)`;
  }

  const heroSubtitle = document.getElementById("hero-subtitle");
  if (heroSubtitle) {
    heroSubtitle.style.fontSize = `${baseSize * 1.125}px`;
  }

  const cardTitles = document.querySelectorAll(".card h3");
  cardTitles.forEach((title) => {
    title.style.fontSize = `${baseSize * 1.375}px`;
  });

  const cardDescriptions = document.querySelectorAll(".card p");
  cardDescriptions.forEach((desc) => {
    desc.style.fontSize = `${baseSize * 0.9375}px`;
  });

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.style.fontSize = `${baseSize * 0.9375}px`;
  });

  document.getElementById("brand-name").textContent =
    config.brand_name || defaultConfig.brand_name;
  document.getElementById("hero-title").textContent =
    config.hero_title || defaultConfig.hero_title;
  document.getElementById("hero-subtitle").textContent =
    config.hero_subtitle || defaultConfig.hero_subtitle;
  document.getElementById("card1-title").textContent =
    config.card1_title || defaultConfig.card1_title;
  document.getElementById("card1-description").textContent =
    config.card1_description || defaultConfig.card1_description;
  document.getElementById("card2-title").textContent =
    config.card2_title || defaultConfig.card2_title;
  document.getElementById("card2-description").textContent =
    config.card2_description || defaultConfig.card2_description;
  document.getElementById("card3-title").textContent =
    config.card3_title || defaultConfig.card3_title;
  document.getElementById("card3-description").textContent =
    config.card3_description || defaultConfig.card3_description;
  document.getElementById("card4-title").textContent =
    config.card4_title || defaultConfig.card4_title;
  document.getElementById("card4-description").textContent =
    config.card4_description || defaultConfig.card4_description;
  document.getElementById("card5-title").textContent =
    config.card5_title || defaultConfig.card5_title;
  document.getElementById("card5-description").textContent =
    config.card5_description || defaultConfig.card5_description;
  document.getElementById("card6-title").textContent =
    config.card6_title || defaultConfig.card6_title;
  document.getElementById("card6-description").textContent =
    config.card6_description || defaultConfig.card6_description;

  document.getElementById("section1-title").textContent =
    config.section1_title || defaultConfig.section1_title;
  document.getElementById("section1-content").textContent =
    config.section1_content || defaultConfig.section1_content;
  document.getElementById("section2-title").textContent =
    config.section2_title || defaultConfig.section2_title;
  document.getElementById("section2-content").textContent =
    config.section2_content || defaultConfig.section2_content;
  document.getElementById("section3-title").textContent =
    config.section3_title || defaultConfig.section3_title;
  document.getElementById("section3-content").textContent =
    config.section3_content || defaultConfig.section3_content;
  document.getElementById("section4-title").textContent =
    config.section4_title || defaultConfig.section4_title;
  document.getElementById("section4-content").textContent =
    config.section4_content || defaultConfig.section4_content;
  document.getElementById("section5-title").textContent =
    config.section5_title || defaultConfig.section5_title;
  document.getElementById("section5-content").textContent =
    config.section5_content || defaultConfig.section5_content;
  document.getElementById("section6-title").textContent =
    config.section6_title || defaultConfig.section6_title;
  document.getElementById("section6-content").textContent =
    config.section6_content || defaultConfig.section6_content;

  document.getElementById("nav-link-1").textContent =
    config.nav_link1 || defaultConfig.nav_link1;
  document.getElementById("nav-link-3").textContent =
    config.nav_link3 || defaultConfig.nav_link3;
  document.getElementById("cta-button").textContent =
    config.cta_button || defaultConfig.cta_button;

  document.getElementById("dropdown-item1").textContent =
    config.card1_title || defaultConfig.card1_title;
  document.getElementById("dropdown-item2").textContent =
    config.card2_title || defaultConfig.card2_title;
  document.getElementById("dropdown-item3").textContent =
    config.card3_title || defaultConfig.card3_title;
  document.getElementById("dropdown-item4").textContent =
    config.card4_title || defaultConfig.card4_title;
  document.getElementById("dropdown-item5").textContent =
    config.card5_title || defaultConfig.card5_title;
  document.getElementById("dropdown-item6").textContent =
    config.card6_title || defaultConfig.card6_title;
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
          config.background_color = value;
          if (window.elementSdk)
            window.elementSdk.setConfig({ background_color: value });
        },
      },
      {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: (value) => {
          config.surface_color = value;
          if (window.elementSdk)
            window.elementSdk.setConfig({ surface_color: value });
        },
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
          config.text_color = value;
          if (window.elementSdk)
            window.elementSdk.setConfig({ text_color: value });
        },
      },
      {
        get: () => config.accent_color || defaultConfig.accent_color,
        set: (value) => {
          config.accent_color = value;
          if (window.elementSdk)
            window.elementSdk.setConfig({ accent_color: value });
        },
      },
      {
        get: () =>
          config.card_surface_color || defaultConfig.card_surface_color,
        set: (value) => {
          config.card_surface_color = value;
          if (window.elementSdk)
            window.elementSdk.setConfig({ card_surface_color: value });
        },
      },
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (value) => {
        config.font_family = value;
        if (window.elementSdk)
          window.elementSdk.setConfig({ font_family: value });
      },
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (value) => {
        config.font_size = value;
        if (window.elementSdk)
          window.elementSdk.setConfig({ font_size: value });
      },
    },
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["brand_name", config.brand_name || defaultConfig.brand_name],
    ["hero_title", config.hero_title || defaultConfig.hero_title],
    ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
    ["card1_title", config.card1_title || defaultConfig.card1_title],
    [
      "card1_description",
      config.card1_description || defaultConfig.card1_description,
    ],
    ["card2_title", config.card2_title || defaultConfig.card2_title],
    [
      "card2_description",
      config.card2_description || defaultConfig.card2_description,
    ],
    ["card3_title", config.card3_title || defaultConfig.card3_title],
    [
      "card3_description",
      config.card3_description || defaultConfig.card3_description,
    ],
    ["card4_title", config.card4_title || defaultConfig.card4_title],
    [
      "card4_description",
      config.card4_description || defaultConfig.card4_description,
    ],
    ["card5_title", config.card5_title || defaultConfig.card5_title],
    [
      "card5_description",
      config.card5_description || defaultConfig.card5_description,
    ],
    ["card6_title", config.card6_title || defaultConfig.card6_title],
    [
      "card6_description",
      config.card6_description || defaultConfig.card6_description,
    ],
    ["section1_title", config.section1_title || defaultConfig.section1_title],
    [
      "section1_content",
      config.section1_content || defaultConfig.section1_content,
    ],
    ["section2_title", config.section2_title || defaultConfig.section2_title],
    [
      "section2_content",
      config.section2_content || defaultConfig.section2_content,
    ],
    ["section3_title", config.section3_title || defaultConfig.section3_title],
    [
      "section3_content",
      config.section3_content || defaultConfig.section3_content,
    ],
    ["section4_title", config.section4_title || defaultConfig.section4_title],
    [
      "section4_content",
      config.section4_content || defaultConfig.section4_content,
    ],
    ["section5_title", config.section5_title || defaultConfig.section5_title],
    [
      "section5_content",
      config.section5_content || defaultConfig.section5_content,
    ],
    ["section6_title", config.section6_title || defaultConfig.section6_title],
    [
      "section6_content",
      config.section6_content || defaultConfig.section6_content,
    ],
    ["nav_link1", config.nav_link1 || defaultConfig.nav_link1],
    ["nav_link3", config.nav_link3 || defaultConfig.nav_link3],
    ["cta_button", config.cta_button || defaultConfig.cta_button],
  ]);
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues,
  });
}

// Mobile menu
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// 2) Countdown (duration from first load)
const banner = document.querySelector("[data-countdown-banner]");
const elDays = document.querySelector("[data-days]");
const elHours = document.querySelector("[data-hours]");
const elMinutes = document.querySelector("[data-minutes]");
const elSeconds = document.querySelector("[data-seconds]");

// 2️⃣ Initialise tous les compteurs
function initCountdowns() {
  const cards = document.querySelectorAll("[data-target-date]");

  cards.forEach((card) => {
    const targetAttr = card.dataset.targetDate;
    const timer = card.querySelector(".countdown-timer");

    if (!timer) return;

    // 3️⃣ Détermine la date cible
    let targetDate;

    targetDate = new Date(targetAttr);

    // 4️⃣ Met à jour le compteur toutes les secondes
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        updateTimer(timer, 0);
        return;
      }

      updateTimer(timer, diff);
    }, 1000);
  });
}

// 5️⃣ Met à jour les valeurs HTML
function updateTimer(timer, diff) {
  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  timer.querySelector("[data-days]").textContent = String(days).padStart(
    2,
    "0",
  );
  timer.querySelector("[data-hours]").textContent = String(hours).padStart(
    2,
    "0",
  );
  timer.querySelector("[data-minutes]").textContent = String(minutes).padStart(
    2,
    "0",
  );
  timer.querySelector("[data-seconds]").textContent = String(seconds).padStart(
    2,
    "0",
  );
}

// 6️⃣ Lancement
initCountdowns();
