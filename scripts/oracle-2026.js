// Webflow-friendly JS: pas de dépendance SDK, pas de scroll container custom.

function revealOnScroll() {
  document.querySelectorAll(".scroll-reveal").forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const visible = 150;
    if (top < window.innerHeight - visible) el.classList.add("revealed");
  });
}

function updateProgressBar() {
  const doc = document.documentElement;
  const scrollTop = window.scrollY || doc.scrollTop;
  const scrollHeight = doc.scrollHeight - doc.clientHeight || 1;
  const progress = (scrollTop / scrollHeight) * 100;
  const fill = document.getElementById("progressFill");
  if (fill) fill.style.width = progress + "%";
}

function updateBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  if (window.scrollY > 500) btn.classList.add("visible");
  else btn.classList.remove("visible");
}

function updateActiveNav() {
  const sections = [
    "context",
    "oracle-intro",
    "epiphany",
    "losso",
    "year2026",
    "legend",
    "warnings",
    "heritage",
    "bienveillance",
    "conclusion",
  ];
  const dots = document.querySelectorAll(".nav-dot");

  let current = null;
  let minDistance = Infinity;

  for (const id of sections) {
    const el = document.getElementById(id);
    if (!el) continue;

    const r = el.getBoundingClientRect();
    const distance = Math.abs(r.top);

    if (r.top <= 200 && distance < minDistance) {
      minDistance = distance;
      current = id;
    }
  }

  // 🧠 EDGE CASE : fin du scroll → forcer la dernière section
  const isAtBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 2;

  if (isAtBottom) {
    current = sections[sections.length - 1];
  }

  dots.forEach((dot) => {
    dot.classList.toggle("active", dot.dataset.section === current);
  });
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 100;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function initNavigation() {
  // Dots
  document.querySelectorAll(".nav-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      scrollToSection(dot.dataset.section);
      document.getElementById("navMenu")?.classList.remove("mobile-open");
    });
  });

  // Back to top
  document.getElementById("backToTop")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Mobile menu
  document.getElementById("menuToggle")?.addEventListener("click", () => {
    document.getElementById("navMenu")?.classList.toggle("mobile-open");
  });

  // Scroll
  const onScroll = () => {
    revealOnScroll();
    updateProgressBar();
    updateBackToTop();
    updateActiveNav();
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  // Initial
  onScroll();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNavigation);
} else {
  initNavigation();
}
