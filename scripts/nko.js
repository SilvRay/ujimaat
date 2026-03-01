const defaultConfig = {
  main_title: "ߒߞߏ | RENAISSANCE AFRICAINE",
  tagline: "« La langue est la première frontière de la liberté. »",
  cta_button_text: "REJOINDRE LE MOUVEMENT",
  cycle_1_price: "180 €",
};

let config = { ...defaultConfig };

const element = {
  defaultConfig,
  onConfigChange: async (newConfig) => {
    config = newConfig;

    const titleEl = document.getElementById("mainTitle");
    if (titleEl) {
      titleEl.textContent = config.main_title || defaultConfig.main_title;
    }

    const taglineEl = document.getElementById("taglineText");
    if (taglineEl) {
      taglineEl.textContent = config.tagline || defaultConfig.tagline;
    }

    const ctaBtn = document.getElementById("ctaButton");
    if (ctaBtn) {
      ctaBtn.textContent =
        config.cta_button_text || defaultConfig.cta_button_text;
    }

    const priceEl = document.getElementById("cyclePrice");
    if (priceEl) {
      priceEl.textContent = config.cycle_1_price || defaultConfig.cycle_1_price;
    }
  },

  mapToCapabilities: (cfg) => ({
    recolorables: [],
    borderables: [],
    fontEditable: undefined,
    fontSizeable: undefined,
  }),

  mapToEditPanelValues: (cfg) =>
    new Map([
      ["main_title", cfg.main_title || defaultConfig.main_title],
      ["tagline", cfg.tagline || defaultConfig.tagline],
      ["cta_button_text", cfg.cta_button_text || defaultConfig.cta_button_text],
      ["cycle_1_price", cfg.cycle_1_price || defaultConfig.cycle_1_price],
    ]),
};

if (window.elementSdk) {
  window.elementSdk.init(element);
}

function updateCountdown() {
  const targetDate = new Date(2026, 2, 3, 20, 0, 0).getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
  } else {
    if (daysEl) daysEl.textContent = "00";
    if (hoursEl) hoursEl.textContent = "00";
    if (minutesEl) minutesEl.textContent = "00";
    if (secondsEl) secondsEl.textContent = "00";
    const urgency = document.querySelector(".countdown-urgency");
    if (urgency)
      urgency.textContent =
        "🎉 Le cycle a commencé ! Rejoignez-nous maintenant.";
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });
} else {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("open");
    question.classList.toggle("faq-question--active");
  });
});

class MatrixEffect {
  constructor() {
    this.canvas = document.getElementById("effectCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.resize();
    window.addEventListener("resize", () => this.resize());

    this.nkoChars = "ߊߋߌߍߎߏߐߒߓߔߕߖߗߘߙߚߛߜߝߞߟߡߢߣߤߥߦ߀߁߂߃߄߅߆߇߈߉";
    this.fontSize = 16;
    this.columns = Math.floor(this.canvas.width / this.fontSize);
    this.drops = Array(this.columns).fill(1);

    this.running = true;
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  animate() {
    if (!this.running) return;

    this.ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = "#00ff00";
    this.ctx.font = `${this.fontSize}px monospace`;

    for (let i = 0; i < this.drops.length; i++) {
      const char =
        this.nkoChars[Math.floor(Math.random() * this.nkoChars.length)];
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;

      this.ctx.fillText(char, x, y);

      if (y > this.canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }

    setTimeout(() => requestAnimationFrame(() => this.animate()), 50);
  }

  stop() {
    this.running = false;
  }
}

new MatrixEffect();

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
