const defaultConfig = {
  hero_title: "UJIMA",
  hero_subtitle: "Un État Fédéral Africain",
  constitution_title: "Constitution de l'Association UJIMA",
  footer_text:
    "État Fédéral Africain - Organisation panafricaine d'émancipation collective et de souveraineté",
  background_color: "#f5f1e8",
  surface_color: "#ebe5d9",
  text_color: "#2d2d2d",
  primary_color: "#b8860b",
  accent_color: "#8b1538",
  font_family: "Crimson Text",
  font_size: 16,
};

let config = { ...defaultConfig };

async function onConfigChange(cfg) {
  config = { ...defaultConfig, ...cfg };

  const heroTitle = document.getElementById("hero-title");
  if (heroTitle) {
    heroTitle.textContent = config.hero_title || defaultConfig.hero_title;
  }

  const heroSubtitle = document.getElementById("hero-subtitle");
  if (heroSubtitle) {
    heroSubtitle.textContent =
      config.hero_subtitle || defaultConfig.hero_subtitle;
  }

  const constitutionTitle = document.getElementById("constitution-title");
  if (constitutionTitle) {
    constitutionTitle.textContent =
      config.constitution_title || defaultConfig.constitution_title;
  }

  const footerText = document.getElementById("footer-text");
  if (footerText) {
    footerText.textContent = config.footer_text || defaultConfig.footer_text;
  }

  // Apply colors
  document.body.style.backgroundColor =
    config.background_color || defaultConfig.background_color;
  document.body.style.color = config.text_color || defaultConfig.text_color;

  // Apply font
  const customFont = config.font_family || defaultConfig.font_family;
  document.querySelectorAll(".font-display").forEach((el) => {
    el.style.fontFamily = `${customFont}, serif`;
  });

  // Apply font size scaling
  const baseSize = config.font_size || defaultConfig.font_size;
  document.querySelectorAll("h1").forEach((el) => {
    el.style.fontSize = `${baseSize * 5}px`;
  });
  document.querySelectorAll("h2").forEach((el) => {
    el.style.fontSize = `${baseSize * 3}px`;
  });
  document.querySelectorAll("h3").forEach((el) => {
    el.style.fontSize = `${baseSize * 2}px`;
  });
  document.querySelectorAll("p").forEach((el) => {
    el.style.fontSize = `${baseSize}px`;
  });
}

function mapToCapabilities(cfg) {
  return {
    recolorables: [
      {
        get: () => cfg.background_color || defaultConfig.background_color,
        set: (value) => {
          cfg.background_color = value;
          if (window.elementSdk)
            window.elementSdk.setConfig({ background_color: value });
        },
      },
      {
        get: () => cfg.surface_color || defaultConfig.surface_color,
        set: (value) => {
          cfg.surface_color = value;
          if (window.elementSdk)
            window.elementSdk.setConfig({ surface_color: value });
        },
      },
      {
        get: () => cfg.text_color || defaultConfig.text_color,
        set: (value) => {
          cfg.text_color = value;
          if (window.elementSdk)
            window.elementSdk.setConfig({ text_color: value });
        },
      },
      {
        get: () => cfg.primary_color || defaultConfig.primary_color,
        set: (value) => {
          cfg.primary_color = value;
          if (window.elementSdk)
            window.elementSdk.setConfig({ primary_color: value });
        },
      },
      {
        get: () => cfg.accent_color || defaultConfig.accent_color,
        set: (value) => {
          cfg.accent_color = value;
          if (window.elementSdk)
            window.elementSdk.setConfig({ accent_color: value });
        },
      },
    ],
    borderables: [],
    fontEditable: {
      get: () => cfg.font_family || defaultConfig.font_family,
      set: (value) => {
        cfg.font_family = value;
        if (window.elementSdk)
          window.elementSdk.setConfig({ font_family: value });
      },
    },
    fontSizeable: {
      get: () => cfg.font_size || defaultConfig.font_size,
      set: (value) => {
        cfg.font_size = value;
        if (window.elementSdk)
          window.elementSdk.setConfig({ font_size: value });
      },
    },
  };
}

function mapToEditPanelValues(cfg) {
  return new Map([
    ["hero_title", cfg.hero_title || defaultConfig.hero_title],
    ["hero_subtitle", cfg.hero_subtitle || defaultConfig.hero_subtitle],
    [
      "constitution_title",
      cfg.constitution_title || defaultConfig.constitution_title,
    ],
    ["footer_text", cfg.footer_text || defaultConfig.footer_text],
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

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Progress Bar
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = `${progress}%`;
});

// Back to Top Button
const backToTop = document.getElementById("back-to-top");

if (app && backToTop) {
  app.addEventListener("scroll", () => {
    if (app.scrollTop > 500) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  backToTop.addEventListener("click", () => {
    app.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Active Section Detection
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const sections = document.querySelectorAll("section[id]");

if (app && navLinks.length > 0 && sections.length > 0) {
  app.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (app.scrollTop >= sectionTop - 100) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active-section");
      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active-section");
      }
    });
  });
}

// Search Functionality
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

if (searchInput && searchResults) {
  // Build search index
  const searchableContent = [];
  document.querySelectorAll(".constitutional-article").forEach((article) => {
    const titleElement = article.querySelector("h3");
    const title = titleElement ? titleElement.textContent : "";
    const id = article.getAttribute("id");

    article.querySelectorAll("h4").forEach((articleHeader) => {
      const articleTitle = articleHeader.textContent;
      const articleContent = articleHeader.nextElementSibling
        ? articleHeader.nextElementSibling.textContent
        : "";

      searchableContent.push({
        title: title,
        articleTitle: articleTitle,
        content: articleContent,
        id: id,
        element: article,
      });
    });
  });

  let searchTimeout;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(searchTimeout);
    const query = e.target.value.toLowerCase().trim();

    if (query.length < 2) {
      searchResults.classList.remove("active");
      return;
    }

    searchTimeout = setTimeout(() => {
      const results = searchableContent
        .filter((item) => {
          return (
            item.title.toLowerCase().includes(query) ||
            item.articleTitle.toLowerCase().includes(query) ||
            item.content.toLowerCase().includes(query)
          );
        })
        .slice(0, 5);

      if (results.length > 0) {
        searchResults.innerHTML = results
          .map((result) => {
            const highlightText = (text, query) => {
              const regex = new RegExp(`(${query})`, "gi");
              return text.replace(
                regex,
                '<span class="search-highlight">$1</span>',
              );
            };

            return `
                <div class="search-result-item" data-target="${result.id}">
                  <div class="font-semibold text-[#daa520] mb-1">${highlightText(result.title, query)}</div>
                  <div class="text-sm text-[#e8dcc4]">${highlightText(result.articleTitle, query)}</div>
                  <div class="text-xs text-[#8b7355] mt-1">${result.content.substring(0, 100)}...</div>
                </div>
              `;
          })
          .join("");

        searchResults.classList.add("active");

        // Add click handlers
        searchResults
          .querySelectorAll(".search-result-item")
          .forEach((item) => {
            item.addEventListener("click", () => {
              const targetId = item.getAttribute("data-target");
              const targetElement = document.getElementById(targetId);
              if (targetElement) {
                window.scrollTo({
                  top: targetElement.offsetTop - 100,
                  behavior: "smooth",
                });
                searchResults.classList.remove("active");
                searchInput.value = "";
              }
            });
          });
      } else {
        searchResults.innerHTML =
          '<div class="search-result-item text-center text-[#8b7355]">Aucun résultat trouvé</div>';
        searchResults.classList.add("active");
      }
    }, 300);
  });

  // Close search on click outside
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.remove("active");
    }
  });
}

// Intersection Observer for article animations
const articles = document.querySelectorAll(".constitutional-article");
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px",
};

const articleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("article-visible");
    }
  });
}, observerOptions);

articles.forEach((article) => {
  articleObserver.observe(article);
});

// Sidebar Navigation
const sidebarNav = document.getElementById("sidebar-nav");
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebarItems = document.getElementById("sidebar-items");
const sidebarProgress = document.getElementById("sidebar-progress");

// Build sidebar navigation from constitutional articles
const buildSidebarNav = () => {
  const titles = [
    { id: "preambule", num: "•", title: "Préambule" },
    { id: "principes", num: "•", title: "Principes" },
    { id: "titre1", num: "I", title: "Identité et Principes" },
    { id: "titre2", num: "II", title: "Principes Fondamentaux" },
    { id: "titre3", num: "III", title: "Organisation" },
    { id: "titre4", num: "IV", title: "Adhésion et Nationalité" },
    { id: "titre5", num: "V", title: "Souveraineté" },
    { id: "titre6", num: "VI", title: "Assemblée" },
    { id: "titre7", num: "VII", title: "Conseil Suprême" },
    { id: "titre8", num: "VIII", title: "Gouvernement" },
    { id: "titre9", num: "IX", title: "Justice" },
    { id: "titre10", num: "X", title: "Administration" },
    { id: "titre11", num: "XI", title: "Validation des Élus" },
    { id: "titre12", num: "XII", title: "Comité d'Éthique" },
    { id: "titre13", num: "XIII", title: "Congrès Panafricain" },
    { id: "titre14", num: "XIV", title: "Ressources" },
    { id: "titre15", num: "XV", title: "Discipline" },
    { id: "titre16", num: "XVI", title: "Révisions" },
    { id: "titre17", num: "XVII", title: "Dispositions Finales" },
    { id: "vision", num: "•", title: "Vision et Avenir" },
  ];

  if (sidebarItems) {
    sidebarItems.innerHTML = titles
      .map(
        (item) => `
          <div class="sidebar-nav-item" data-target="${item.id}">
            <span class="item-number">${item.num}</span>
            <span class="item-title">${item.title}</span>
          </div>
        `,
      )
      .join("");

    // Add click handlers
    sidebarItems.querySelectorAll(".sidebar-nav-item").forEach((item) => {
      item.addEventListener("click", () => {
        const targetId = item.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);
        if (targetElement && app) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: "smooth",
          });

          // Close sidebar on mobile after navigation
          if (window.innerWidth <= 768) {
            sidebarNav.classList.add("hidden-sidebar");
            sidebarToggle.classList.remove("sidebar-open");
          }
        }
      });
    });
  }
};

buildSidebarNav();

// Toggle sidebar
if (sidebarToggle && sidebarNav) {
  sidebarToggle.addEventListener("click", () => {
    sidebarNav.classList.toggle("hidden-sidebar");
    sidebarToggle.classList.toggle("sidebar-open");

    // Update icon
    const icon = sidebarToggle.querySelector("svg path");
    if (icon) {
      if (sidebarNav.classList.contains("hidden-sidebar")) {
        icon.setAttribute("d", "M9 5l7 7-7 7");
      } else {
        icon.setAttribute("d", "M15 19l-7-7 7-7");
      }
    }
  });
}

// Update active sidebar item on scroll
if (app && sidebarItems) {
  app.addEventListener("scroll", () => {
    const scrollPosition = app.scrollTop + 150;

    // Update sidebar progress
    if (sidebarProgress) {
      const maxScroll = app.scrollHeight - app.clientHeight;
      const progress = (app.scrollTop / maxScroll) * 100;
      sidebarProgress.style.height = progress + "%";
    }

    // Find current section
    let currentSection = null;
    const sections = document.querySelectorAll(
      "section[id], .constitutional-article[id]",
    );

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollPosition >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    // Update active state
    sidebarItems.querySelectorAll(".sidebar-nav-item").forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("data-target") === currentSection) {
        item.classList.add("active");

        // Scroll sidebar to show active item
        if (sidebarNav) {
          const itemTop = item.offsetTop;
          const sidebarHeight = sidebarNav.clientHeight;
          const itemHeight = item.clientHeight;

          if (
            itemTop < sidebarNav.scrollTop ||
            itemTop > sidebarNav.scrollTop + sidebarHeight - itemHeight
          ) {
            sidebarNav.scrollTo({
              top: itemTop - sidebarHeight / 2 + itemHeight / 2,
              behavior: "smooth",
            });
          }
        }
      }
    });
  });
}
