const state = {
  quantity: 1,
  unitPrice: 180,
  maxQuantity: 10,
  minQuantity: 1,
};

function calculateTicketTotal(quantity, unitPrice) {
  return quantity * unitPrice;
}

function runSelfTests() {
  console.assert(
    document.querySelectorAll(".agenda-panel").length === 2,
    "Le programme doit contenir deux jours.",
  );
  console.assert(
    document.body.textContent.includes("Buffet vegan de prestige"),
    "Le buffet doit apparaître dans la page.",
  );
  console.assert(
    document.body.textContent.includes("L’Être"),
    "Le terme L’Être doit remplacer le terme Soi dans les axes principaux.",
  );
  console.assert(
    calculateTicketTotal(1, 180) === 180,
    "Le total pour 1 billet à 180€ doit être 180€.",
  );
  console.assert(
    calculateTicketTotal(3, 180) === 540,
    "Le total pour 3 billets à 180€ doit être 540€.",
  );
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
  document.getElementById("progress").style.width = progress + "%";
}

function updateTicket() {
  document.getElementById("quantity").textContent = state.quantity;
  document.getElementById("total").textContent =
    calculateTicketTotal(state.quantity, state.unitPrice) + "€";
}

document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => scrollToId(button.dataset.scroll));
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.day;
    document.querySelectorAll(".tab").forEach((item) => {
      item.classList.toggle("active", item === tab);
      item.setAttribute("aria-selected", item === tab ? "true" : "false");
    });
    document.querySelectorAll(".agenda-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.id === target);
    });
  });
});

document.getElementById("minus").addEventListener("click", () => {
  state.quantity = Math.max(state.minQuantity, state.quantity - 1);
  updateTicket();
});

document.getElementById("plus").addEventListener("click", () => {
  state.quantity = Math.min(state.maxQuantity, state.quantity + 1);
  updateTicket();
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const isOpen = item.classList.contains("open");
    document
      .querySelectorAll(".faq-item")
      .forEach((el) => el.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 },
);

document
  .querySelectorAll(".reveal, .quote-card")
  .forEach((el) => revealObserver.observe(el));

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);

updateTicket();
updateProgress();
runSelfTests();
