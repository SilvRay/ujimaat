// ── Canvas Particle Field ─────────────────────────────────────────────────

class ParticleField {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.particles = [];
    this.mouse = { x: -9999, y: -9999 };
    this.resize();
    this.spawn();
    this.bindEvents();
    this.loop();
  }

  spawn() {
    const count = Math.min(
      170,
      Math.floor((this.canvas.width * this.canvas.height) / 7200),
    );
    this.particles = Array.from({ length: count }, () =>
      this.createParticle(true),
    );
  }

  createParticle(randomPos = false) {
    const gold = Math.random() < 0.38;
    return {
      x: randomPos
        ? Math.random() * this.canvas.width
        : this.canvas.width * Math.random(),
      y: randomPos ? Math.random() * this.canvas.height : -4,
      vx: (Math.random() - 0.5) * 0.38,
      vy: (Math.random() - 0.5) * 0.38,
      r: Math.random() * 1.7 + 0.35,
      a: Math.random() * 0.55 + 0.12,
      color: gold ? "252,211,77" : "255,255,255",
    };
  }

  resize() {
    this.canvas.width = this.canvas.offsetWidth || window.innerWidth;
    this.canvas.height = this.canvas.offsetHeight || window.innerHeight;
  }

  bindEvents() {
    window.addEventListener("mousemove", (e) => {
      const r = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - r.left;
      this.mouse.y = e.clientY - r.top;
    });
    window.addEventListener("resize", () => {
      this.resize();
      this.spawn();
    });
  }

  loop() {
    this.draw();
    requestAnimationFrame(() => this.loop());
  }

  draw() {
    const { ctx, canvas, particles, mouse } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const REPEL = 110;
    const CONNECT = 130;

    for (const p of particles) {
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < REPEL && dist > 0) {
        const f = ((REPEL - dist) / REPEL) * 0.55;
        p.vx += (dx / dist) * f;
        p.vy += (dy / dist) * f;
      }

      p.vx *= 0.978;
      p.vy *= 0.978;

      const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (spd > 1.4) {
        p.vx = (p.vx / spd) * 1.4;
        p.vy = (p.vy / spd) * 1.4;
      }

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.a})`;
      ctx.fill();
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i],
          b = particles[j];
        const dx = a.x - b.x,
          dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < CONNECT) {
          const alpha = (1 - d / CONNECT) * 0.16;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(252,211,77,${alpha})`;
          ctx.lineWidth = 0.55;
          ctx.stroke();
        }
      }
    }
  }
}

// ── Custom Cursor ─────────────────────────────────────────────────────────

function initCursor() {
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;

  let mx = -200,
    my = -200,
    rx = -200,
    ry = -200;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
  });
  document.addEventListener("mouseleave", () => {
    dot.style.opacity = "0";
    ring.style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    dot.style.opacity = "1";
    ring.style.opacity = "1";
  });

  (function tick() {
    dot.style.left = mx + "px";
    dot.style.top = my + "px";
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
    requestAnimationFrame(tick);
  })();
}

// ── Text Scramble / Decode ────────────────────────────────────────────────

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789Ø∆∑∏∫≠≈±";

function scrambleDecode(el, text, duration, onDone) {
  const frames = Math.ceil(duration / 38);
  let f = 0;
  el.textContent = "";

  const id = setInterval(() => {
    const revealed = Math.floor((f / frames) * text.length);
    let out = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " " || text[i] === "'" || text[i] === "'") {
        out += text[i];
      } else if (i < revealed) {
        out += text[i];
      } else {
        out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
    }
    el.textContent = out;
    f++;
    if (f > frames) {
      el.textContent = text;
      clearInterval(id);
      if (onDone) onDone();
    }
  }, 38);
}

function buildCharByChar(el, text, delay) {
  el.innerHTML = "";
  [...text].forEach((char, i) => {
    const s = document.createElement("span");
    s.className = "tc";
    s.textContent = char === " " ? " " : char;
    s.style.animationDelay = `${i * delay}ms`;
    el.appendChild(s);
  });
}

// ── GSAP Hero Timeline ────────────────────────────────────────────────────

function initHeroTimeline() {
  const canvas = document.getElementById("heroCanvas");
  new ParticleField(canvas);

  const eyebrow = document.getElementById("heroEyebrow");
  const tlIntro = document.getElementById("tl-intro");
  const tlWord1 = document.getElementById("tl-word1");
  const tlWord2 = document.getElementById("tl-word2");
  const tagline = document.getElementById("heroTagline");
  const cd = document.getElementById("heroCd");
  const actions = document.getElementById("heroActions");
  const scrollCue = document.getElementById("scrollCue");

  gsap.set([eyebrow, tagline, cd, actions, scrollCue], { opacity: 0, y: 20 });
  gsap.set([tlIntro, tlWord2], { opacity: 0 });

  const tl = gsap.timeline({ delay: 0.25 });

  // Canvas particles fade in
  tl.to(canvas, { opacity: 1, duration: 2.6, ease: "power2.out" }, 0);

  // Eyebrow badge slides up
  tl.to(
    eyebrow,
    { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" },
    0.45,
  );

  // "L'Art Complet de la" — scramble decode
  tl.add(() => {
    gsap.set(tlIntro, { opacity: 1 });
    scrambleDecode(tlIntro, "L'Art Complet de la", 1050);
  }, 0.8);

  // "Puissance" — clip-path sweep left → right
  tl.fromTo(
    tlWord1,
    { clipPath: "inset(0 100% 0 0)" },
    { clipPath: "inset(0 0% 0 0)", duration: 1.15, ease: "power3.inOut" },
    1.45,
  );

  // Shimmer starts after sweep completes
  tl.add(() => {
    tlWord1.classList.add("shimmer-active");
  }, 2.65);

  // "Civilisationnelle" — char by char
  tl.add(() => {
    gsap.set(tlWord2, { opacity: 1 });
    buildCharByChar(tlWord2, "Civilisationnelle", 44);
  }, 2.25);

  // Tagline
  tl.to(tagline, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 3.05);

  // Countdown
  tl.to(cd, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 3.3);

  // CTA buttons
  tl.to(actions, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 3.55);

  // Scroll cue
  tl.to(
    scrollCue,
    { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
    3.85,
  );
}

// ── Fallback (no GSAP) ────────────────────────────────────────────────────

function initFallback() {
  const canvas = document.getElementById("heroCanvas");
  if (canvas) new ParticleField(canvas);

  const LINES = [
    { id: "tl-intro", text: "L'Art Complet de la", delay: 300 },
    { id: "tl-word2", text: "Civilisationnelle", delay: 1600 },
  ];
  LINES.forEach(({ id, text, delay }) => {
    const el = document.getElementById(id);
    if (!el) return;
    [...text].forEach((char, i) => {
      const s = document.createElement("span");
      s.className = "tc";
      s.textContent = char === " " ? " " : char;
      s.style.animationDelay = `${delay + i * 42}ms`;
      el.appendChild(s);
    });
  });

  const w1 = document.getElementById("tl-word1");
  if (w1) w1.style.clipPath = "none";
}

// ── Countdown ─────────────────────────────────────────────────────────────

function startHeroCountdown() {
  const target = new Date("2026-07-25T10:00:00");

  function tick() {
    const diff = target - new Date();
    if (diff <= 0) {
      ["cd-d", "cd-h", "cd-m", "cd-s"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.textContent = "00";
      });
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById("cd-d").textContent = String(d).padStart(2, "0");
    document.getElementById("cd-h").textContent = String(h).padStart(2, "0");
    document.getElementById("cd-m").textContent = String(m).padStart(2, "0");
    document.getElementById("cd-s").textContent = String(s).padStart(2, "0");
  }

  tick();
  setInterval(tick, 1000);
}

// ── Scroll smooth ─────────────────────────────────────────────────────────

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── Progress bar ──────────────────────────────────────────────────────────

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  document.getElementById("progress").style.width = pct + "%";
}

// ── Tabs ──────────────────────────────────────────────────────────────────

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.day;
    document.querySelectorAll(".tab").forEach((t) => {
      t.classList.toggle("active", t === tab);
      t.setAttribute("aria-selected", t === tab ? "true" : "false");
    });
    document.querySelectorAll(".agenda-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.id === target);
    });
  });
});

// ── FAQ accordion ─────────────────────────────────────────────────────────

document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const isOpen = item.classList.contains("open");
    document
      .querySelectorAll(".faq-item")
      .forEach((el) => el.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});

// ── Scroll buttons ────────────────────────────────────────────────────────

document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => scrollToId(btn.dataset.scroll));
});

// ── Reveal on scroll ──────────────────────────────────────────────────────

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll(".reveal, .quote-card")
  .forEach((el) => revealObserver.observe(el));

// ── Init ──────────────────────────────────────────────────────────────────

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);

initCursor();
startHeroCountdown();
updateProgress();

if (typeof gsap !== "undefined") {
  initHeroTimeline();
} else {
  initFallback();
}

// ── BRIQUE 1 : Trail Canvas ───────────────────────────────────────────────
//
// Ce canvas remplit deux rôles :
//   1. Peindre un cercle blanc flou là où la souris se trouve
//   2. Effacer progressivement ce qui a été peint (effet traînée)
//
// Le résultat est une texture dynamique en niveaux de gris :
//   - Blanc là où la souris vient de passer
//   - Gris de plus en plus sombre au fil du temps
//   - Noir partout ailleurs
//
// Ce canvas ne sera PAS visible à l'utilisateur final.
// Il sera utilisé comme source de données à l'étape 3 (compositing).

// ── BRIQUE 2 : Canvas sculpturale (hors-écran) ───────────────────────────
//
// Cette fonction crée et retourne un canvas qui existe UNIQUEMENT en mémoire.
// Il ne sera jamais inséré dans le DOM ni affiché directement.
// Son seul rôle : contenir l'image/texture à révéler.
//
// Pourquoi hors-écran ?
// En Brique 3, on va lire les pixels de ce canvas pour les combiner
// avec la traînée. Le navigateur peut lire/écrire des canvas off-screen
// aussi vite que des canvas visibles — aucune pénalité de performance.
//
// Pour l'instant : contenu programmatique (formes géométriques + texte).
// Plus tard : on pourra le remplacer par ctx.drawImage(uneVraieImage).

function createSculptureCanvas(W, H, imgSphinx, imgPyramid) {
  const cv  = document.createElement("canvas");
  cv.width  = W;
  cv.height = H;
  const ctx = cv.getContext("2d");

  // ── Fond noir ────────────────────────────────────────────────────────
  // Avec multiply : noir × n'importe quoi = noir → invisible via screen.
  // Blanc × blanc = blanc → lumineux via screen. Le fond noir est donc
  // "transparent" fonctionnellement dans ce pipeline.
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, W, H);

  // ── Placement des images ─────────────────────────────────────────────
  // On calcule une taille qui permet à chaque image d'occuper les flancs
  // tout en restant proportionnelle. Les images peuvent légèrement empiéter
  // sur la zone centrale — avec multiply+screen, seul le sillage du curseur
  // les révèle, donc elles ne "couvrent" pas la vidéo visuellement.
  const imgH = Math.min(H * 0.78, W * 0.32); // hauteur max : 78% de la section

  // Sphinx — flanc gauche, ancré en bas à gauche
  const sphinxRatio = imgSphinx.naturalWidth / imgSphinx.naturalHeight;
  const sphinxW = imgH * sphinxRatio;
  const sphinxX = W * 0.01;                   // légèrement décalé du bord gauche
  const sphinxY = (H - imgH) * 0.42;          // centré légèrement au-dessus du milieu

  ctx.drawImage(imgSphinx, sphinxX, sphinxY, sphinxW, imgH);

  // Pyramide aztèque — flanc droit, miroir du sphinx
  const pyramidRatio = imgPyramid.naturalWidth / imgPyramid.naturalHeight;
  const pyramidW = imgH * pyramidRatio;
  const pyramidX = W - pyramidW - W * 0.01;   // symétrique du sphinx
  const pyramidY = (H - imgH) * 0.42;

  ctx.drawImage(imgPyramid, pyramidX, pyramidY, pyramidW, imgH);

  return cv;
}

// ── BRIQUE 3 : Compositing final ─────────────────────────────────────────
//
// On assemble Brique 1 (traînée) + Brique 2 (sculpture) pour l'effet final :
//
//   trailDataCV : canvas hors-écran — données de traînée (noir → blanc)
//   sculptureCV : canvas hors-écran — la géométrie à révéler (Brique 2)
//   tempCV      : canvas hors-écran — étape intermédiaire du masquage
//   #trailCanvas : canvas VISIBLE   — fond transparent, mix-blend-mode:screen
//
// Chaque frame :
//   1. Met à jour trailDataCV (estompage + cercle blanc à la souris)
//   2. Copie sculptureCV sur tempCV
//   3. Applique 'destination-in' avec trailDataCV sur tempCV
//      → la sculpture n'est visible QUE là où la traînée est lumineuse
//   4. Efface #trailCanvas (fond transparent)
//   5. Dessine tempCV sur #trailCanvas
//   6. CSS mix-blend-mode:screen fusionne cela avec le fond sombre
//      → la sculpture apparaît comme une lumière sculptée dans l'obscurité

async function initTrailCanvas() {
  const canvas = document.getElementById("trailCanvas");
  if (!canvas) return;

  // ── Chargement des images ─────────────────────────────────────────────
  // On charge les deux gravures avant de démarrer la boucle.
  // new Image() + onload encapsulé dans une Promise → await parallèle.
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload  = () => resolve(img);
      img.onerror = () => reject(new Error(`Impossible de charger : ${src}`));
      img.src = src;
    });
  }

  let imgSphinx, imgPyramid;
  try {
    [imgSphinx, imgPyramid] = await Promise.all([
      loadImg("assets/_images/puissance-civilisationnelle/sphynx.jpg"),
      loadImg("assets/_images/puissance-civilisationnelle/aztec-pyramid.jpg"),
    ]);
  } catch (e) {
    console.warn("Trail canvas : images non chargées, effet désactivé.", e);
    return;
  }

  const ctx = canvas.getContext("2d");

  let W = canvas.offsetWidth;
  let H = canvas.offsetHeight;
  canvas.width  = W;
  canvas.height = H;

  let mouseX     = -999;
  let mouseY     = -999;
  let isHovering = false;

  // ── Canvas de traînée (hors-écran, fond NOIR) ─────────────────────────
  // Pour l'opération multiply, on travaille en luminosité (noir=0, blanc=1),
  // pas en alpha. Fond noir = "éteint", blanc peint au curseur = "allumé".
  // multiply(sculpture_blanc, trail_blanc) = blanc → visible via screen.
  // multiply(sculpture_blanc, trail_noir)  = noir  → invisible via screen.
  const trailDataCV  = document.createElement("canvas");
  trailDataCV.width  = W;
  trailDataCV.height = H;
  const trailCtx     = trailDataCV.getContext("2d");
  trailCtx.fillStyle = "#000";
  trailCtx.fillRect(0, 0, W, H);

  // ── Canvas sculpturale avec les vraies images ─────────────────────────
  let sculptureCV = createSculptureCanvas(W, H, imgSphinx, imgPyramid);

  // ── Canvas temporaire pour le compositing ────────────────────────────
  const tempCV  = document.createElement("canvas");
  tempCV.width  = W;
  tempCV.height = H;
  const tempCtx = tempCV.getContext("2d");

  // ── Suivi de la souris ───────────────────────────────────────────────
  const teaserSection = document.getElementById("teaser");
  if (teaserSection) {
    teaserSection.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isHovering = true;
    });
    teaserSection.addEventListener("mouseleave", () => {
      isHovering = false;
    });
  }

  // ── Redimensionnement ────────────────────────────────────────────────
  window.addEventListener("resize", () => {
    W = canvas.offsetWidth;
    H = canvas.offsetHeight;
    canvas.width       = W;
    canvas.height      = H;
    trailDataCV.width  = W;
    trailDataCV.height = H;
    tempCV.width       = W;
    tempCV.height      = H;
    trailCtx.fillStyle = "#000";
    trailCtx.fillRect(0, 0, W, H);
    // Les images sont déjà en mémoire — pas besoin de les recharger
    sculptureCV = createSculptureCanvas(W, H, imgSphinx, imgPyramid);
  });

  // ── Boucle de rendu ──────────────────────────────────────────────────
  function draw() {
    requestAnimationFrame(draw);

    // ── ÉTAPE 1 : fade de la traînée ─────────────────────────────────────
    // On recouvre d'un noir semi-transparent : les valeurs RGB se rapprochent
    // de 0 (noir) à chaque frame. ~35 frames pour disparaître complètement.
    trailCtx.fillStyle = "rgba(0,0,0,0.055)";
    trailCtx.fillRect(0, 0, W, H);

    // Halo blanc au curseur — rayon 200px, centre quasi pur blanc (alpha 1.0)
    // pour que multiply donne le maximum de luminosité sur la sculpture.
    if (isHovering) {
      const g = trailCtx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 200);
      g.addColorStop(0,    "rgba(255,255,255,1.0)"); // centre  : blanc pur
      g.addColorStop(0.35, "rgba(255,255,255,0.4)"); // mi-zone : gris
      g.addColorStop(1,    "rgba(255,255,255,0)");   // bord    : noir
      trailCtx.fillStyle = g;
      trailCtx.fillRect(mouseX - 200, mouseY - 200, 400, 400);
    }

    // ── ÉTAPE 2 : multiply — sculpture × traînée ─────────────────────────
    // On dessine la sculpture sur tempCV, puis on la multiplie par la traînée.
    // multiply(A, B) = A*B/255 pixel par pixel.
    // blanc(255)×blanc(255) = blanc(255) → glow via screen  ✓
    // blanc(255)×noir(0)    = noir(0)    → invisible via screen ✓
    // noir(0)×n'importe quoi = noir(0)   → invisible ✓
    if (tempCV.width !== W || tempCV.height !== H) {
      tempCV.width  = W;
      tempCV.height = H;
    }
    tempCtx.clearRect(0, 0, W, H);
    tempCtx.drawImage(sculptureCV, 0, 0, W, H);
    tempCtx.globalCompositeOperation = "multiply";
    tempCtx.drawImage(trailDataCV, 0, 0, W, H);
    tempCtx.globalCompositeOperation = "source-over"; // reset

    // ── ÉTAPE 3 : affichage final ────────────────────────────────────────
    // Le canvas visible a un fond noir (tempCV a un fond noir après multiply).
    // mix-blend-mode:screen en CSS : screen(noir, fond_sombre) ≈ noir = invisible.
    // screen(blanc, fond_sombre) = lumineux. Le fond noir "disparaît" visuellement.
    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(tempCV, 0, 0, W, H);
  }

  draw();
}

initTrailCanvas();

// ── Canvas Card Generation ────────────────────────────────────────────────

function rRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function spaced(ctx, text, x, y, gap) {
  for (const ch of text) {
    ctx.fillText(ch, x, y);
    x += ctx.measureText(ch).width + gap;
  }
}

function wrapText(ctx, text, maxW) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const w of words) {
    const t = line ? line + " " + w : w;
    if (ctx.measureText(t).width > maxW && line) {
      lines.push(line);
      line = w;
    } else line = t;
  }
  if (line) lines.push(line);
  return lines;
}

function generateCardImage(arch) {
  const DPR = Math.min(window.devicePixelRatio || 2, 3);
  const W = 600,
    H = 840,
    PAD = 52;
  const cv = document.createElement("canvas");
  cv.width = W * DPR;
  cv.height = H * DPR;
  const ctx = cv.getContext("2d");
  ctx.scale(DPR, DPR);

  const T = {
    endormi: {
      bg0: "#1c2232",
      bg1: "#0d1120",
      accent: "#94a3b8",
      glow: "rgba(100,116,139,0.22)",
      roman: "I",
    },
    eveille: {
      bg0: "#081c38",
      bg1: "#040e1e",
      accent: "#38bdf8",
      glow: "rgba(56,189,248,0.2)",
      roman: "II",
    },
    batisseur: {
      bg0: "#221408",
      bg1: "#120a03",
      accent: "#fbbf24",
      glow: "rgba(251,191,36,0.24)",
      roman: "III",
    },
    souverain: {
      bg0: "#1e0e16",
      bg1: "#0e060c",
      accent: "#fcd34d",
      glow: "rgba(252,211,77,0.28)",
      roman: "IV",
    },
  }[arch.color];

  const levelFilled = { endormi: 1, eveille: 2, batisseur: 3, souverain: 4 }[
    arch.color
  ];

  // Clip to rounded rect
  rRect(ctx, 0, 0, W, H, 44);
  ctx.clip();

  // Background
  const bgG = ctx.createLinearGradient(0, 0, W * 0.75, H);
  bgG.addColorStop(0, T.bg0);
  bgG.addColorStop(1, T.bg1);
  ctx.fillStyle = bgG;
  ctx.fillRect(0, 0, W, H);

  // Bottom glow
  const glowG = ctx.createRadialGradient(
    W / 2,
    H * 0.88,
    0,
    W / 2,
    H * 0.88,
    W * 0.95,
  );
  glowG.addColorStop(0, T.glow);
  glowG.addColorStop(1, "transparent");
  ctx.fillStyle = glowG;
  ctx.fillRect(0, 0, W, H);

  // Shine sweep
  const shineG = ctx.createLinearGradient(W, 0, 0, H);
  shineG.addColorStop(0, "transparent");
  shineG.addColorStop(0.5, "rgba(255,255,255,0.055)");
  shineG.addColorStop(1, "transparent");
  ctx.fillStyle = shineG;
  ctx.fillRect(0, 0, W, H);

  // Top accent line
  const lineG = ctx.createLinearGradient(PAD, 0, W - PAD, 0);
  lineG.addColorStop(0, "transparent");
  lineG.addColorStop(0.3, T.accent);
  lineG.addColorStop(0.7, T.accent);
  lineG.addColorStop(1, "transparent");
  ctx.fillStyle = lineG;
  ctx.globalAlpha = 0.48;
  ctx.fillRect(PAD, 0, W - PAD * 2, 1.5);
  ctx.globalAlpha = 1;

  // Border
  rRect(ctx, 0.5, 0.5, W - 1, H - 1, 44);
  ctx.strokeStyle = "rgba(255,255,255,0.09)";
  ctx.lineWidth = 1;
  ctx.stroke();

  // ── Top bar ──

  // Tier label
  ctx.font = "500 12px ui-monospace, SFMono-Regular, monospace";
  ctx.fillStyle = T.accent;
  ctx.globalAlpha = 0.58;
  spaced(ctx, arch.tier.toUpperCase(), PAD, 58, 3.5);
  ctx.globalAlpha = 1;

  // Level dots
  const DR = 5,
    DG = 12;
  const dotsW = 4 * DR * 2 + 3 * DG;
  let dx = W - PAD - dotsW + DR;
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.arc(dx, 53, DR, 0, Math.PI * 2);
    ctx.fillStyle = i < levelFilled ? T.accent : "rgba(255,255,255,0.16)";
    ctx.fill();
    dx += DR * 2 + DG;
  }

  // ── Center decorative Roman numeral ──
  ctx.font = `500 220px Georgia, "Times New Roman", serif`;
  ctx.fillStyle = T.accent;
  ctx.globalAlpha = 0.055;
  ctx.textAlign = "center";
  ctx.fillText(T.roman, W / 2, H * 0.46 + 80);
  ctx.globalAlpha = 1;
  ctx.textAlign = "left";

  // ── Archetype name ──
  let fs = 92;
  ctx.font = `500 ${fs}px Georgia, "Times New Roman", serif`;
  while (ctx.measureText(arch.name).width > W - PAD * 2 && fs > 52) {
    fs -= 4;
    ctx.font = `500 ${fs}px Georgia, "Times New Roman", serif`;
  }
  const nameLines = wrapText(ctx, arch.name, W - PAD * 2);
  const nameLH = fs * 1.05;
  const nameY = 560;
  ctx.fillStyle = "white";
  nameLines.forEach((l, i) => ctx.fillText(l, PAD, nameY + i * nameLH));

  // ── Tagline ──
  ctx.font = `italic 22px Georgia, "Times New Roman", serif`;
  ctx.fillStyle = T.accent;
  ctx.globalAlpha = 0.62;
  const tagY = nameY + nameLines.length * nameLH + 26;
  const tagLines = wrapText(ctx, arch.tagline, W - PAD * 2);
  tagLines.forEach((l, i) => ctx.fillText(l, PAD, tagY + i * 32));
  ctx.globalAlpha = 1;

  // ── Branding ──
  ctx.font = "400 13px ui-sans-serif, system-ui, sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.2)";
  ctx.fillText("ujimaat.com · Puissance Civilisationnelle", PAD, H - 30);

  return cv;
}

async function shareCard(arch, btn) {
  const saved = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `<span style="opacity:.55;font-size:13px">Génération…</span>`;

  const cv = generateCardImage(arch);

  cv.toBlob(async (blob) => {
    btn.innerHTML = saved;
    btn.disabled = false;

    const file = new File([blob], `archetypes-${arch.color}.png`, {
      type: "image/png",
    });
    const text = `Mon archétype de Puissance Civilisationnelle : ${arch.name} — « ${arch.tagline} »`;
    const url = window.location.href;

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: arch.name, text });
        return;
      } catch (e) {
        if (e.name === "AbortError") return;
      }
    }

    if (navigator.share) {
      try {
        await navigator.share({ title: arch.name, text, url });
        return;
      } catch {}
    }

    // Fallback : téléchargement direct
    const a = document.createElement("a");
    a.href = cv.toDataURL("image/png");
    a.download = `archetypes-${arch.color}.png`;
    a.click();
  }, "image/png");
}

// ── Test interactif ──────────────────────────────────────────────────────

const TEST_QUESTIONS = [
  {
    n: "01",
    text: "Quand tu regardes une grande ville, qu'est-ce qui te frappe en premier ?",
    options: [
      { l: "A", text: "L'architecture — ce que les hommes ont réussi à bâtir" },
      { l: "B", text: "Les flux d'argent et les échanges invisibles" },
      { l: "C", text: "Les familles, les liens, la vie collective" },
      { l: "D", text: "Qui contrôle quoi — les structures de pouvoir réelles" },
    ],
  },
  {
    n: "02",
    text: "Face à un projet que tu ne maîtrises pas encore, ton réflexe naturel ?",
    options: [
      { l: "A", text: "Plonger dedans et apprendre en construisant" },
      { l: "B", text: "Cartographier le terrain avant de bouger" },
      { l: "C", text: "Identifier les personnes clés à embarquer" },
      { l: "D", text: "Penser l'impact sur les dix prochaines années" },
    ],
  },
  {
    n: "03",
    text: "Sur quelle échelle de temps penses-tu naturellement ?",
    options: [
      { l: "A", text: "La semaine — l'action concrète prime toujours" },
      { l: "B", text: "Les 3 à 5 ans — vision et exécution" },
      { l: "C", text: "La prochaine génération — je pense à transmettre" },
      { l: "D", text: "Des siècles — je me pense dans l'Histoire" },
    ],
  },
  {
    n: "04",
    text: "Ce qui te retient encore de ton niveau suivant ?",
    options: [
      { l: "A", text: "La discipline au quotidien" },
      { l: "B", text: "Le capital et les ressources" },
      { l: "C", text: "Les alliances et les bonnes connexions" },
      { l: "D", text: "Une vision plus nette de là où aller" },
    ],
  },
  {
    n: "05",
    text: "Si tu bâtissais quelque chose qui survive à ta mort, ce serait ?",
    options: [
      { l: "A", text: "Une école, une institution ou une méthode" },
      { l: "B", text: "Un empire économique ou une entreprise" },
      { l: "C", text: "Une lignée familiale exemplaire et enracinée" },
      { l: "D", text: "Une œuvre ou une idée qui transforme le monde" },
    ],
  },
];

const ARCHETYPES = {
  A: {
    name: "L'Endormi",
    tagline: "Tu ne dors pas. Tu hibernes.",
    desc: "Tu n'as pas encore fait le lien entre ce que tu vis et ce que tu pourrais bâtir. Ce documentaire est fait pour toi — pour te réveiller.",
    tier: "Niveau I",
    color: "endormi",
  },
  B: {
    name: "L'Éveillé",
    tagline: "Tu as les yeux ouverts. C'est bien, il faut maintenant se lever.",
    desc: "Tu as la conscience. Tu comprends les enjeux. Mais l'éveil sans action reste une illusion de puissance. Le prochain pas est le premier vrai.",
    tier: "Niveau II",
    color: "eveille",
  },
  C: {
    name: "Le Bâtisseur",
    tagline: "Tu construis. Tu transmets. Tu dures.",
    desc: "Tu as compris que la puissance se mesure à ce qu'elle laisse derrière elle. Tu bâtis pour les tiens et pour après toi. Continue.",
    tier: "Niveau III",
    color: "batisseur",
  },
  D: {
    name: "L'Architecte Souverain",
    tagline: "Tu penses en civilisations. Peu en sont capables.",
    desc: "Tu opères à l'échelle où les décisions comptent pour des générations. Ce niveau de vision est rare — et il impose une responsabilité totale.",
    tier: "Niveau IV",
    color: "souverain",
  },
};

function initTest() {
  const stage = document.getElementById("testStage");
  const resultEl = document.getElementById("testResult");
  const fill = document.getElementById("testFill");
  if (!stage) return;

  let current = 0;
  const answers = [];

  function renderQuestion(idx) {
    const q = TEST_QUESTIONS[idx];
    const div = document.createElement("div");
    div.innerHTML = `
      <p class="test-q-step">${q.n} / 05</p>
      <h2 class="test-q-text">${q.text}</h2>
      <div class="test-options">
        ${q.options
          .map(
            (o) => `
          <button class="test-opt" data-letter="${o.l}">
            <span class="test-opt-letter">${o.l}</span>
            <span>${o.text}</span>
          </button>
        `,
          )
          .join("")}
      </div>
    `;

    div.querySelectorAll(".test-opt").forEach((btn) => {
      btn.addEventListener("click", () => onAnswer(btn.dataset.letter, div));
    });

    stage.appendChild(div);

    if (typeof gsap !== "undefined") {
      gsap.fromTo(
        div,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
      );
    }
  }

  function onAnswer(letter, div) {
    answers.push(letter);

    div.querySelector(`[data-letter="${letter}"]`).classList.add("selected");

    const progress = (answers.length / TEST_QUESTIONS.length) * 100;
    fill.style.width = progress + "%";

    const next = () => {
      div.remove();
      if (current < TEST_QUESTIONS.length - 1) {
        current++;
        renderQuestion(current);
      } else {
        showResult();
      }
    };

    if (typeof gsap !== "undefined") {
      gsap.to(div, {
        opacity: 0,
        y: -22,
        duration: 0.38,
        ease: "power2.in",
        delay: 0.28,
        onComplete: next,
      });
    } else {
      setTimeout(next, 560);
    }
  }

  function showResult() {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach((l) => counts[l]++);
    const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    const arch = ARCHETYPES[winner];

    const levelFilled = { endormi: 1, eveille: 2, batisseur: 3, souverain: 4 }[
      arch.color
    ];
    const dots = [1, 2, 3, 4]
      .map(
        (i) =>
          `<span class="card-level-dot${i <= levelFilled ? " on" : ""}"></span>`,
      )
      .join("");

    resultEl.innerHTML = `
      <div class="card-reveal">
        <p class="card-reveal-prompt">Clique sur la carte pour révéler ton archétype</p>

        <div class="card-scene" id="cardScene">
          <div class="card-3d" id="card3d">

            <div class="card-face card-back">
              <div class="card-back-grid"></div>
              <div class="card-back-emblem">
                <svg class="icon" style="width:30px;height:30px"><use href="#i-sparkles"></use></svg>
              </div>
              <span class="card-back-label">Puissance<br>Civilisationnelle</span>
            </div>

            <div class="card-face card-front card-front--${arch.color}">
              <div class="card-front-top">
                <span class="card-tier">${arch.tier}</span>
                <div class="card-level-dots">${dots}</div>
              </div>
              <div class="card-front-body">
                <h3 class="card-archetype-name">${arch.name}</h3>
                <p class="card-archetype-tagline">${arch.tagline}</p>
                <p class="card-archetype-desc">${arch.desc}</p>
              </div>
            </div>

          </div>
        </div>

        <div class="card-actions" id="cardActions">
          <button class="card-share-btn" id="cardShareBtn">
            <svg class="icon" style="width:15px;height:15px"><use href="#i-move-up-right"></use></svg>
            Partager mon résultat
          </button>
          <button class="card-restart" id="cardRestart">Recommencer le test</button>
        </div>
      </div>
    `;

    const revealCard = () => {
      stage.style.display = "none";
      resultEl.classList.add("visible");

      const card3d = document.getElementById("card3d");
      const cardScene = document.getElementById("cardScene");
      const cardActions = document.getElementById("cardActions");
      let flipped = false;

      if (typeof gsap !== "undefined") {
        gsap.fromTo(
          resultEl.querySelector(".card-reveal-prompt"),
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.15 },
        );
        gsap.fromTo(
          cardScene,
          { opacity: 0, scale: 0.78, y: 48, rotationX: -12 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotationX: 0,
            duration: 1.1,
            ease: "power3.out",
            delay: 0.35,
          },
        );
      }

      cardScene.addEventListener("mousemove", (e) => {
        const r = cardScene.getBoundingClientRect();
        const rx = ((e.clientY - r.top) / r.height - 0.5) * -18;
        const ry = ((e.clientX - r.left) / r.width - 0.5) * 22;
        card3d.style.transition = "transform 0.08s ease";
        card3d.style.transform = flipped
          ? `rotateX(${rx}deg) rotateY(${180 - ry}deg)`
          : `rotateX(${rx}deg) rotateY(${ry}deg)`;
      });

      cardScene.addEventListener("mouseleave", () => {
        card3d.style.transition = "transform 0.7s cubic-bezier(0.22,1,0.36,1)";
        card3d.style.transform = flipped
          ? "rotateY(180deg)"
          : "rotateX(0deg) rotateY(0deg)";
      });

      card3d.addEventListener("click", () => {
        if (flipped) return;
        flipped = true;
        card3d.style.transition = "transform 1s cubic-bezier(0.22,1,0.36,1)";
        card3d.style.transform = "rotateY(180deg)";
        setTimeout(() => {
          cardActions.classList.add("visible");
        }, 950);
      });

      const shareBtn = document.getElementById("cardShareBtn");
      shareBtn.addEventListener("click", () => shareCard(arch, shareBtn));

      document.getElementById("cardRestart").addEventListener("click", () => {
        const wipe = () => {
          resultEl.innerHTML = "";
          resultEl.classList.remove("visible");
          stage.style.display = "";
          if (typeof gsap !== "undefined")
            gsap.set(stage, { clearProps: "opacity,y" });
          answers.length = 0;
          current = 0;
          fill.style.width = "0%";
          renderQuestion(0);
        };
        if (typeof gsap !== "undefined") {
          gsap.to(resultEl, {
            opacity: 0,
            y: -20,
            duration: 0.38,
            ease: "power2.in",
            onComplete: () => {
              gsap.set(resultEl, { clearProps: "all" });
              wipe();
            },
          });
        } else {
          wipe();
        }
      });
    };

    if (typeof gsap !== "undefined") {
      gsap.to(stage, {
        opacity: 0,
        y: -14,
        duration: 0.32,
        ease: "power2.in",
        onComplete: revealCard,
      });
    } else {
      revealCard();
    }
  }

  renderQuestion(0);
}

initTest();
