(() => {
  // 1) Scroll Progress (window)
  const progressBar = document.querySelector("[data-progress-bar]");
  const updateProgress = () => {
    if (!progressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress.toFixed(2) + "%";
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  // 2) Countdown (duration from first load)
  const banner = document.querySelector("[data-countdown-banner]");
  const elDays = document.querySelector("[data-days]");
  const elHours = document.querySelector("[data-hours]");
  const elMinutes = document.querySelector("[data-minutes]");
  const elSeconds = document.querySelector("[data-seconds]");

  // 1️⃣ Date cible (15 février à 00:00)
  const targetTime = new Date("2026-02-15T00:00:00").getTime();
  console.log(new Date(targetTime).toLocaleString());

  const pad2 = (n) => String(n).padStart(2, "0");

  const tick = () => {
    if (!banner) return;
    const distance = targetTime - Date.now();
    if (distance <= 0) {
      banner.style.display = "none";
      return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (elDays) elDays.textContent = pad2(days);
    if (elHours) elHours.textContent = pad2(hours);
    if (elMinutes) elMinutes.textContent = pad2(minutes);
    if (elSeconds) elSeconds.textContent = pad2(seconds);
  };

  tick();
  setInterval(tick, 1000);

  // 3) FAQ Toggle (accessible)
  document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-question");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const isActive = item.classList.contains("is-active");
      document.querySelectorAll(".faq-item.is-active").forEach((openItem) => {
        openItem.classList.remove("is-active");
        const openBtn = openItem.querySelector(".faq-question");
        if (openBtn) openBtn.setAttribute("aria-expanded", "false");
      });

      if (!isActive) {
        item.classList.add("is-active");
        btn.setAttribute("aria-expanded", "true");
      } else {
        btn.setAttribute("aria-expanded", "false");
      }
    });

    btn.setAttribute("aria-expanded", "false");
  });

  // 4) Spots (optional)
  const spotsEl = document.querySelector("[data-spots]");
  let currentSpots = spotsEl ? parseInt(spotsEl.textContent, 10) : 0;
  if (spotsEl && Number.isFinite(currentSpots)) {
    setInterval(() => {
      if (currentSpots > 3 && Math.random() < 0.3) {
        currentSpots--;
        spotsEl.textContent = String(currentSpots);
      }
    }, 30000);
  }

  // 5) Particles (optional)
  const ENABLE_PARTICLES = true;
  if (ENABLE_PARTICLES) {
    const count = 10;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.top = Math.floor(Math.random() * 100) + "%";
      p.style.left = Math.floor(Math.random() * 100) + "%";
      p.style.animationDelay = (Math.random() * 6).toFixed(2) + "s";
      document.body.appendChild(p);
    }
  }
})();
