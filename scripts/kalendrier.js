"use strict";

const defaultConfig = {
  main_title: "Calendrier luni-solaire équinoxial",
  subtitle: "Kalendrier africain de l'an 110018",
  year_study: "Année civile grégorienne : 20 mars 2026 → 20 mars 2027",
  new_year_label: "Jour de l'An solaire",
  month_start_label: "Début des mois lunaires",
  background_color: "#667eea",
  surface_color: "#ffffff",
  text_color: "#1f2937",
  primary_action_color: "#7c3aed",
  secondary_action_color: "#3b82f6",
};

const zodiacIcons = {
  Bélier:
    '<img class="w-6 h-6" src="assets/_icons/_global/aries.png" alt="signe du bélier">',
  Taureau:
    '<img class="w-6 h-6" src="assets/_icons/_global/taurus.png" alt="signe du taureau">',
  Gémeaux:
    '<img class="w-6 h-6" src="assets/_icons/_global/gemini.png" alt="signe des gémeaux">',
  Cancer:
    '<img class="w-6 h-6" src="assets/_icons/_global/cancer.png" alt="signe du cancer">',
  Lion: '<img class="w-6 h-6" src="assets/_icons/_global/leo.png" alt="signe du lion">',
  Vierge:
    '<img class="w-6 h-6" src="assets/_icons/_global/virgo.png" alt="signe de la vierge">',
  Balance:
    '<img class="w-6 h-6" src="assets/_icons/_global/libra.png" alt="signe de la balance">',
  Scorpion:
    '<img class="w-6 h-6" src="assets/_icons/_global/scorpio.png" alt="signe du scorpion">',
  Sagittaire:
    '<img class="w-6 h-6" src="assets/_icons/_global/sagittarius.png" alt="signe du sagittaire">',
  Capricorne:
    '<img class="w-6 h-6" src="assets/_icons/_global/capricorn.png" alt="signe du capricorne">',
  Verseau:
    '<img class="w-6 h-6" src="assets/_icons/_global/aquarius.png" alt="signe du verseau">',
  Poissons:
    '<img class="w-6 h-6" src="assets/_icons/_global/pisces.png" alt="signe du poisson">',
  "Intercycle (hors signe)":
    '<img class="w-6 h-6" src="assets/_icons/_global/stars.png" alt="icône étoiles">',
};

const festivals = [
  {
    date: "2026-03-20",
    name: "Ƒe yeye (Nouvel An)",
    description: "Nouvel An - Équinoxe de printemps",
    icon: "🎉",
    isEquinox: true,
    equinoxInfo: {
      title: "Équinoxe de printemps 🌞",
      details:
        "Autour du 20 mars, le Soleil est exactement au-dessus de l'équateur, le jour et la nuit sont égaux, c'est le redémarrage du cycle solaire.",
      cultural:
        "Dans toutes les grandes civilisations agraires (Égypte, Mésoamérique, Afrique nilotique, Inde, Perse), le Nouvel An solaire est lié à l'équinoxe.",
    },
  },
  {
    date: "2026-05-08",
    name: "Ƒeakè (Germination)",
    description: "Fête de la germination",
    icon: "🌱",
    hasDetails: true,
    detailsInfo: {
      title: "Ƒeakè - Fête de la germination 🌱",
      timing: "~49 jours après le Nouvel An solaire",
      astronomical: "Soleil à ~18° Taureau",
      seasonal: "Montée de sève, pluies, semences",
    },
  },
  {
    date: "2026-07-02",
    name: "Kɛ̀kɛlì Zã (Fête des Lumières)",
    description: "Fête des Lumières",
    icon: "✨",
    hasDetails: true,
    detailsInfo: {
      title: "Kɛ̀kɛlì Zã - Fête des lumières ✨",
      timing: "~104 jours après le Nouvel An solaire",
      astronomical: "Soleil à ~10° Cancer",
      seasonal: "Pic d'ensoleillement tropical",
    },
  },
  {
    date: "2026-08-26",
    name: "Nuŋe zã (Moissons)",
    description: "Fête des moissons",
    icon: "🌾",
    hasDetails: true,
    detailsInfo: {
      title: "Nuŋe zã - Fête des moissons 🌾",
      timing: "~159 jours après le Nouvel An solaire",
      astronomical: "Soleil à ~3° Vierge",
      seasonal: "Maturité des récoltes",
    },
  },
];

const moonPhases = {
  newMoons: {
    "2026-03-19": "01:23",
    "2026-04-17": "11:51",
    "2026-05-16": "20:01",
    "2026-06-15": "02:54",
    "2026-07-14": "09:43",
    "2026-08-12": "17:36",
    "2026-09-11": "03:26",
    "2026-10-10": "15:50",
    "2026-11-09": "07:02",
    "2026-12-09": "00:51",
    "2027-01-07": "20:24",
    "2027-02-06": "15:56",
    "2027-03-08": "09:29",
  },
  fullMoons: {
    "2026-04-02": "02:11",
    "2026-05-01": "17:23",
    "2026-05-31": "08:45",
    "2026-06-29": "23:56",
    "2026-07-29": "14:35",
    "2026-08-28": "04:18",
    "2026-09-26": "16:49",
    "2026-10-26": "04:11",
    "2026-11-24": "14:53",
    "2026-12-24": "01:28",
    "2027-01-22": "12:17",
    "2027-02-20": "23:24",
  },
};

const months = [
  {
    num: 1,
    start: "2026-03-19",
    end: "2026-04-16",
    name: "Bélier",
    monthName: "Dzòvè (Mars)",
    element: "Feu",
    newMoon: "2026-03-19",
    fullMoon: "2026-04-02",
  },
  {
    num: 2,
    start: "2026-04-17",
    end: "2026-05-15",
    name: "Taureau",
    monthName: "Dzòdzè (Avril)",
    element: "Terre",
    newMoon: "2026-04-17",
    fullMoon: "2026-05-01",
  },
  {
    num: 3,
    start: "2026-05-16",
    end: "2026-06-14",
    name: "Gémeaux",
    monthName: "Tedoxè (Mai)",
    element: "Air",
    newMoon: "2026-05-16",
    fullMoon: "2026-05-31",
  },
  {
    num: 4,
    start: "2026-06-15",
    end: "2026-07-13",
    name: "Cancer",
    monthName: "Afɔfiè (Juin)",
    element: "Eau",
    newMoon: "2026-06-15",
    fullMoon: "2026-06-29",
  },
  {
    num: 5,
    start: "2026-07-14",
    end: "2026-08-11",
    name: "Lion",
    monthName: "Damè (Juillet)",
    element: "Feu",
    newMoon: "2026-07-14",
    fullMoon: "2026-07-29",
  },
  {
    num: 6,
    start: "2026-08-12",
    end: "2026-09-10",
    name: "Vierge",
    monthName: "Masɛ (Août)",
    element: "Terre",
    newMoon: "2026-08-12",
    fullMoon: "2026-08-28",
  },
  {
    num: 7,
    start: "2026-09-11",
    end: "2026-10-09",
    name: "Balance",
    monthName: "Siam Lɔm (Sept.)",
    element: "Air",
    newMoon: "2026-09-11",
    fullMoon: "2026-09-26",
  },
  {
    num: 8,
    start: "2026-10-10",
    end: "2026-11-08",
    name: "Scorpion",
    monthName: "Dàsiàmìme (Oct.)",
    element: "Eau",
    newMoon: "2026-10-10",
    fullMoon: "2026-10-26",
  },
  {
    num: 9,
    start: "2026-11-09",
    end: "2026-12-08",
    name: "Sagittaire",
    monthName: "Àñɔ̀ñɔ̀ (Nov.)",
    element: "Feu",
    newMoon: "2026-11-09",
    fullMoon: "2026-11-24",
  },
  {
    num: 10,
    start: "2026-12-09",
    end: "2027-01-06",
    name: "Capricorne",
    monthName: "Kɔ̀lè (Déc.)",
    element: "Terre",
    newMoon: "2026-12-09",
    fullMoon: "2026-12-24",
  },
  {
    num: 11,
    start: "2027-01-07",
    end: "2027-02-05",
    name: "Verseau",
    monthName: "Àdɛ̀mɛ̀kpɔ̀xè (Jan.)",
    element: "Air",
    newMoon: "2027-01-07",
    fullMoon: "2027-01-22",
  },
  {
    num: 12,
    start: "2027-02-06",
    end: "2027-03-07",
    name: "Poissons",
    monthName: "Dzòmè (Fév.)",
    element: "Eau",
    newMoon: "2027-02-06",
    fullMoon: "2027-02-20",
  },
  {
    num: 13,
    start: "2027-03-08",
    end: "2027-03-20",
    name: "Intercycle (hors signe)",
    monthName: "Fòàvè (Épag.)",
    element: "Transition",
    newMoon: "2027-03-08",
    fullMoon: null,
  },
];

let currentMonthIndex = 0;
let currentView = "search";
let currentWeekStart = null;
let focusedDayIndex = -1;
let allCalendarDays = [];

function parseDate(str) {
  const parts = str.split("-");
  return new Date(
    parseInt(parts[0], 10),
    parseInt(parts[1], 10) - 1,
    parseInt(parts[2], 10),
  );
}

function formatDate(d) {
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return day + "/" + month + "/" + year;
}

function daysBetween(d1, d2) {
  return Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));
}

function findMonthForDate(date) {
  for (let i = 0; i < months.length; i++) {
    const m = months[i];
    const start = parseDate(m.start);
    const end = parseDate(m.end);
    if (date >= start && date <= end) {
      return m;
    }
  }
  return null;
}

function getMoonPhaseIcon(date, m) {
  if (!m || !m.newMoon) return "";
  const newMoonDate = parseDate(m.newMoon);
  if (date.getTime() === newMoonDate.getTime()) {
    return "🌑";
  }
  if (m.fullMoon) {
    const fullMoonDate = parseDate(m.fullMoon);
    if (date.getTime() === fullMoonDate.getTime()) {
      return "🌕";
    }
  }
  return "";
}

function getFestivalForDate(date) {
  const dateStr =
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0");
  return festivals.find(function (f) {
    return f.date === dateStr;
  });
}

function getSunPosition(date, month) {
  if (!month) return null;

  const start = parseDate(month.start);
  const end = parseDate(month.end);
  const totalDays = daysBetween(start, end) + 1;
  const dayInMonth = daysBetween(start, date) + 1;

  const degreesPerSign = 30;
  const degreeInSign = Math.floor((dayInMonth / totalDays) * degreesPerSign);

  return {
    sign: month.name,
    degree: degreeInSign,
    icon: zodiacIcons[month.name],
  };
}

function isToday(date) {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function switchView(view) {
  currentView = view;

  const searchSection = document.getElementById("searchSection");
  const monthSection = document.getElementById("monthSection");
  const yearSection = document.getElementById("yearSection");

  const allSections = [searchSection, monthSection, yearSection];
  const visibleSections = allSections.filter(function (section) {
    return section && !section.classList.contains("hidden");
  });

  // Animation de sortie pour les sections visibles
  visibleSections.forEach(function (section) {
    section.classList.add("view-exit");
  });

  // Attendre la fin de l'animation de sortie
  setTimeout(function () {
    // Cacher toutes les sections et retirer les classes d'animation
    allSections.forEach(function (section) {
      if (section) {
        section.classList.add("hidden");
        section.classList.remove("view-exit", "view-enter");
      }
    });

    // Afficher la nouvelle section
    let targetSection = null;
    if (view === "search") targetSection = searchSection;
    else if (view === "month") targetSection = monthSection;
    else if (view === "year") targetSection = yearSection;

    if (targetSection) {
      targetSection.classList.remove("hidden");
      // Petit délai pour assurer le repaint du navigateur
      setTimeout(function () {
        targetSection.classList.add("view-enter");
      }, 10);
    }

    // Mettre à jour les boutons actifs
    const viewBtns = document.querySelectorAll(".view-btn");
    viewBtns.forEach(function (btn) {
      btn.classList.remove("active");
    });

    if (view === "search") {
      const viewSearchBtn = document.getElementById("viewSearchBtn");
      if (viewSearchBtn) viewSearchBtn.classList.add("active");
    } else if (view === "month") {
      const viewMonthBtn = document.getElementById("viewMonthBtn");
      if (viewMonthBtn) viewMonthBtn.classList.add("active");
      setTimeout(function () {
        renderMonth(currentMonthIndex);
      }, 100);
    } else if (view === "year") {
      const viewYearBtn = document.getElementById("viewYearBtn");
      if (viewYearBtn) viewYearBtn.classList.add("active");
      setTimeout(function () {
        renderYearView();
      }, 100);
    }
  }, 350); // Durée synchronisée avec l'animation view-exit (0.35s)
}

function renderYearView() {
  const yearGrid = document.getElementById("yearGrid");
  if (!yearGrid) return;

  yearGrid.innerHTML = "";

  months.forEach(function (m, index) {
    const start = parseDate(m.start);
    const end = parseDate(m.end);
    const totalDays = daysBetween(start, end) + 1;

    const card = document.createElement("div");
    card.className = "year-month-card element-" + m.element.toLowerCase();
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", "Voir le calendrier de " + m.monthName);

    let daysHtml = '<div class="grid grid-cols-7 gap-1 mt-3 mb-3">';

    const dayNames = ["D", "L", "M", "M", "J", "V", "S"];
    dayNames.forEach(function (day) {
      daysHtml +=
        '<div class="text-center text-xs font-semibold text-white">' +
        escapeHtml(day) +
        "</div>";
    });

    const firstDayOfWeek = start.getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
      daysHtml += "<div></div>";
    }

    for (let i = 0; i < totalDays; i++) {
      const currentDate = new Date(start);
      currentDate.setDate(start.getDate() + i);
      const dayNum = currentDate.getDate();
      const moonIcon = getMoonPhaseIcon(currentDate, m);

      daysHtml +=
        '<div class="text-center text-xs p-1 bg-white bg-opacity-50 rounded" title="Jour ' +
        (i + 1) +
        '">' +
        dayNum +
        (moonIcon ? "<br>" + moonIcon : "") +
        "</div>";
    }

    daysHtml += "</div>";

    card.innerHTML =
      '<div class="text-center mb-4">' +
      '<div class="flex items-center justify-center gap-2 mb-2">' +
      '<div class="zodiac-icon text-white">' +
      zodiacIcons[m.name] +
      "</div>" +
      '<div class="text-3xl font-bold text-white font-display">' +
      escapeHtml(m.monthName) +
      "</div>" +
      "</div>" +
      '<div class="text-xl font-semibold text-white mt-1 font-body">' +
      escapeHtml(m.name) +
      "</div>" +
      "</div>" +
      '<div class="text-center mb-4">' +
      '<span class="badge-element badge-' +
      m.element.toLowerCase() +
      '">' +
      escapeHtml(m.element) +
      "</span>" +
      "</div>" +
      daysHtml +
      '<div class="text-center text-sm text-white mt-4">' +
      '<div class="font-semibold text-base">' +
      formatDate(start) +
      " → " +
      formatDate(end) +
      "</div>" +
      '<div class="mt-2 font-medium">' +
      totalDays +
      " jours lunaires</div>" +
      "</div>";

    card.addEventListener("click", function () {
      currentMonthIndex = index;
      switchView("month");
    });

    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        currentMonthIndex = index;
        switchView("month");
      }
    });

    yearGrid.appendChild(card);
  });
}

function renderMonth(monthIndex) {
  if (monthIndex < 0 || monthIndex >= months.length) return;

  const m = months[monthIndex];
  const start = parseDate(m.start);
  const end = parseDate(m.end);
  const totalDays = daysBetween(start, end) + 1;

  const calTitle = document.getElementById("calTitle");
  if (calTitle) {
    calTitle.innerHTML =
      '<div class="flex flex-col md:flex-row items-center justify-center gap-4 mb-2">' +
      '<div class="flex items-center gap-3">' +
      '<div class="zodiac-icon">' +
      zodiacIcons[m.name] +
      "</div>" +
      '<div class="text-4xl font-bold font-display bg-gradient-to-r from-[#ffdb8d] to-[#c58700] bg-clip-text text-transparent">' +
      escapeHtml(m.monthName) +
      "</div>" +
      "</div>" +
      '<div class="flex items-center gap-3">' +
      '<div class="w-1 h-12 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full hidden md:block"></div>' +
      '<div class="text-3xl font-semibold text-white font-body">' +
      escapeHtml(m.name) +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="text-sm text-[#eaeaeac7] font-medium mt-2">' +
      formatDate(start) +
      " → " +
      formatDate(end) +
      "</div>";
  }

  const elementIcons = {
    Feu: "🔥",
    Terre: "🌍",
    Air: "💨",
    Eau: "💧",
    Transition: "✨",
  };

  const monthMeta = document.getElementById("monthMeta");
  if (monthMeta) {
    monthMeta.innerHTML =
      '<div class="flex items-center justify-center gap-3">' +
      '<div class="element-icon-wrapper">' +
      '<div class="text-4xl">' +
      (elementIcons[m.element] || "") +
      "</div>" +
      "</div>" +
      '<div class="badge-element badge-' +
      m.element.toLowerCase() +
      '">' +
      escapeHtml(m.element) +
      "</div>" +
      "</div>" +
      '<div class="mt-3 text-sm text-[#eaeaeac7]">Du ' +
      formatDate(start) +
      " au " +
      formatDate(end) +
      "</div>";
  }

  const daysContainer = document.getElementById("calendarDays");
  if (!daysContainer) return;

  daysContainer.innerHTML = "";
  allCalendarDays = [];
  focusedDayIndex = -1;

  const firstDayOfWeek = start.getDay();

  if (firstDayOfWeek > 0 && monthIndex > 0) {
    const prevMonth = months[monthIndex - 1];
    const prevEnd = parseDate(prevMonth.end);
    const prevStart = parseDate(prevMonth.start);
    const prevTotalDays = daysBetween(prevStart, prevEnd) + 1;

    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const prevDate = new Date(prevEnd);
      prevDate.setDate(prevEnd.getDate() - i);
      const prevLunarDay = prevTotalDays - i;
      const monthNames = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Sept.",
        "Oct.",
        "Nov.",
        "Déc.",
      ];
      const gregorianMonth = monthNames[prevDate.getMonth()];

      const dayDiv = document.createElement("div");
      dayDiv.className =
        "calendar-day prev-month element-" + prevMonth.element.toLowerCase();
      dayDiv.innerHTML =
        '<div class="day-number">' +
        prevDate.getDate() +
        "</div>" +
        '<div class="day-gregorian-month">' +
        escapeHtml(gregorianMonth) +
        "</div>" +
        '<div class="day-lunar">Jour ' +
        prevLunarDay +
        "</div>";
      daysContainer.appendChild(dayDiv);
    }
  } else if (firstDayOfWeek > 0) {
    for (let i = 0; i < firstDayOfWeek; i++) {
      const emptyDay = document.createElement("div");
      emptyDay.className = "calendar-day empty";
      daysContainer.appendChild(emptyDay);
    }
  }

  for (let i = 0; i < totalDays; i++) {
    const currentDate = new Date(start);
    currentDate.setDate(start.getDate() + i);
    const lunarDay = i + 1;
    const moonIcon = getMoonPhaseIcon(currentDate, m);
    const festival = getFestivalForDate(currentDate);
    const monthNames = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Sept.",
      "Oct.",
      "Nov.",
      "Déc.",
    ];
    const gregorianMonth = monthNames[currentDate.getMonth()];

    const sunPos = getSunPosition(currentDate, m);
    const isTodayDate = isToday(currentDate);

    const dayDiv = document.createElement("div");
    dayDiv.className =
      "calendar-day element-" +
      m.element.toLowerCase() +
      (festival ? " has-festival" : "") +
      (isTodayDate ? " is-today" : "");
    dayDiv.setAttribute("role", "button");
    dayDiv.setAttribute("tabindex", "0");
    dayDiv.setAttribute(
      "aria-label",
      "Voir les détails du " + formatDate(currentDate),
    );
    dayDiv.dataset.dayIndex = allCalendarDays.length;

    let moonPhaseLabel = "";
    if (moonIcon === "🌑") {
      moonPhaseLabel = '<div class="day-moon-label">Nouvelle Lune</div>';
    } else if (moonIcon === "🌕") {
      moonPhaseLabel = '<div class="day-moon-label" >Pleine Lune</div>';
    }

    const tooltipText = sunPos
      ? escapeHtml(sunPos.sign) +
        " " +
        sunPos.degree +
        "° • " +
        escapeHtml(m.element)
      : "";

    dayDiv.innerHTML =
      (isTodayDate ? '<div class="today-badge">AUJOURD\'HUI</div>' : "") +
      '<div class="tooltip">' +
      tooltipText +
      "</div>" +
      '<div class="day-number">' +
      currentDate.getDate() +
      "</div>" +
      '<div class="day-gregorian-month">' +
      escapeHtml(gregorianMonth) +
      "</div>" +
      '<div class="day-lunar">Jour ' +
      lunarDay +
      "</div>" +
      (moonIcon
        ? '<div class="day-moon" title="' +
          (moonIcon === "🌑" ? "Nouvelle Lune" : "Pleine Lune") +
          '">' +
          moonIcon +
          "</div>"
        : "") +
      moonPhaseLabel +
      (festival
        ? '<div class="day-festival">' + escapeHtml(festival.name) + "</div>"
        : "");

    (function (date, month, lunar, moon, fest) {
      dayDiv.addEventListener("click", function () {
        openDayModal(date, month, lunar, moon, fest);
      });
      dayDiv.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openDayModal(date, month, lunar, moon, fest);
        }
      });
    })(new Date(currentDate), m, lunarDay, moonIcon, festival);

    allCalendarDays.push(dayDiv);
    daysContainer.appendChild(dayDiv);
  }
}

function updateMonthSelect() {
  const select = document.getElementById("monthSelect");
  if (!select) return;

  select.innerHTML = "";
  months.forEach(function (m, i) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = m.monthName + " - " + m.name;
    if (i === currentMonthIndex) opt.selected = true;
    select.appendChild(opt);
  });
}

function updateNextFestivalCountdown() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let nextFestival = null;
  let minDays = Infinity;

  festivals.forEach(function (festival) {
    const festivalDate = parseDate(festival.date);
    festivalDate.setHours(0, 0, 0, 0);
    const daysUntil = daysBetween(today, festivalDate);

    if (daysUntil >= 0 && daysUntil < minDays) {
      minDays = daysUntil;
      nextFestival = festival;
    }
  });

  const nextFestivalIcon = document.getElementById("nextFestivalIcon");
  const nextFestivalName = document.getElementById("nextFestivalName");
  const daysUntilFestival = document.getElementById("daysUntilFestival");
  const daysUntilLabel = document.getElementById("daysUntilLabel");
  const nextFestivalDate = document.getElementById("nextFestivalDate");
  const countdownContainer = document.getElementById("nextFestivalCountdown");

  if (
    nextFestival &&
    nextFestivalIcon &&
    nextFestivalName &&
    daysUntilFestival &&
    daysUntilLabel &&
    nextFestivalDate
  ) {
    nextFestivalIcon.textContent = nextFestival.icon;
    nextFestivalName.textContent = nextFestival.name;

    if (minDays === 0) {
      daysUntilFestival.textContent = "AUJOURD'HUI !";
      daysUntilLabel.textContent = "C'est aujourd'hui !";
      if (countdownContainer) {
        countdownContainer.style.background =
          "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)";
        countdownContainer.style.borderColor = "#f59e0b";
      }
    } else if (minDays === 1) {
      daysUntilFestival.textContent = "1";
      daysUntilLabel.textContent = "jour restant";
    } else {
      daysUntilFestival.textContent = minDays;
      daysUntilLabel.textContent = "jours restants";
    }

    const festivalDate = parseDate(nextFestival.date);
    nextFestivalDate.innerHTML = `<img id='nextFestivalIcon' class='w-5 h-5' src='assets/_icons/_global/calendar.gif' alt='icône calendrier'/> ${formatDate(festivalDate)}`;

    if (countdownContainer) {
      countdownContainer.style.cursor = "pointer";
      countdownContainer.setAttribute("role", "button");
      countdownContainer.setAttribute("tabindex", "0");
      countdownContainer.setAttribute(
        "aria-label",
        "Voir " + nextFestival.name + " dans le calendrier",
      );

      countdownContainer.onclick = function () {
        const selectedDate = parseDate(nextFestival.date);
        const m = findMonthForDate(selectedDate);

        if (m) {
          const monthIndex = months.indexOf(m);
          if (monthIndex >= 0) {
            currentMonthIndex = monthIndex;
            updateMonthSelect();
            renderMonth(currentMonthIndex);
            switchView("month");

            setTimeout(function () {
              const calendarContainer =
                document.getElementById("calendarContainer");
              if (calendarContainer) {
                calendarContainer.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }
            }, 300);
          }
        }
      };

      countdownContainer.onkeydown = function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          countdownContainer.click();
        }
      };
    }
  } else if (countdownContainer) {
    countdownContainer.style.display = "none";
  }
}

function openDayModal(currentDate, m, lunarDay, moonIcon, festival) {
  const modal = document.getElementById("dayModal");
  const modalDate = document.getElementById("modalDate");
  const modalBody = document.getElementById("modalBody");

  if (!modal || !modalDate || !modalBody) return;

  modalDate.textContent = formatDate(currentDate);

  const elementIcons = {
    Feu: "🔥",
    Terre: "🌍",
    Air: "💨",
    Eau: "💧",
    Transition: "✨",
  };

  let bodyHTML =
    '<div class="modal-info-card">' +
    '<div class="modal-info-title">' +
    zodiacIcons[m.name] +
    " Signe zodiacal" +
    "</div>" +
    '<div class="flex items-center justify-center gap-3">' +
    '<span class="badge-element badge-' +
    m.element.toLowerCase() +
    '">' +
    escapeHtml(m.name) +
    "</span>" +
    "</div>" +
    "</div>" +
    '<div class="modal-info-card">' +
    '<div class="modal-info-title">' +
    '<div class="element-icon-wrapper">' +
    (elementIcons[m.element] || "") +
    "</div>" +
    " Élément" +
    "</div>" +
    '<div class="flex items-center justify-center gap-3">' +
    '<span class="badge-element badge-' +
    m.element.toLowerCase() +
    '">' +
    escapeHtml(m.element) +
    "</span>" +
    "</div>" +
    "</div>" +
    '<div class="modal-info-card">' +
    '<div class="modal-info-title">' +
    "<img class='w-6 h-6' src='assets/_icons/_global/calendar.gif'> Information lunaire" +
    "</div>" +
    '<div class="text-center text-white">' +
    '<div class="text-xl font-bold">Jour lunaire ' +
    lunarDay +
    "</div>" +
    '<div class="text-sm mt-2">Mois ' +
    m.num +
    " - " +
    escapeHtml(m.monthName) +
    "</div>" +
    "</div>" +
    "</div>";

  if (moonIcon) {
    const dateStr =
      currentDate.getFullYear() +
      "-" +
      String(currentDate.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(currentDate.getDate()).padStart(2, "0");

    let timeUTC = "";
    if (moonIcon === "🌑" && moonPhases.newMoons[dateStr]) {
      timeUTC = moonPhases.newMoons[dateStr];
    } else if (moonIcon === "🌕" && moonPhases.fullMoons[dateStr]) {
      timeUTC = moonPhases.fullMoons[dateStr];
    }

    bodyHTML +=
      '<div class="modal-moon-phase">' +
      '<div class="text-6xl mb-3">' +
      moonIcon +
      "</div>" +
      '<div class="text-xl font-bold text-white">' +
      (moonIcon === "🌑" ? "Nouvelle Lune" : "Pleine Lune") +
      "</div>" +
      '<div class="text-sm text-white mt-2">' +
      (moonIcon === "🌑"
        ? "Début du cycle lunaire"
        : "Pleine illumination lunaire") +
      "</div>" +
      (timeUTC
        ? '<div class="text-base font-bold text-black mt-3 bg-white px-4 py-2 rounded-md">🕐 Heure UTC : ' +
          escapeHtml(timeUTC) +
          "</div>"
        : "") +
      "</div>";
  }

  const sunPos = getSunPosition(currentDate, m);
  if (sunPos) {
    const anglePerDegree = 12;
    const angle = sunPos.degree * anglePerDegree;
    const radius = 90;
    const x = Math.cos(((angle - 90) * Math.PI) / 180) * radius;
    const y = Math.sin(((angle - 90) * Math.PI) / 180) * radius;

    bodyHTML +=
      '<div class="modal-sky-chart">' +
      '<div class="modal-info-title text-center text-blue-900 mb-4">🌌 Carte du ciel - Position du Soleil</div>' +
      '<div class="zodiac-wheel">' +
      '<div class="zodiac-wheel-center">☀🔆</div>' +
      '<div class="zodiac-position-marker" style="left: calc(50% + ' +
      x +
      "px); top: calc(50% + " +
      y +
      'px); transform: translate(-50%, -50%);">' +
      sunPos.icon +
      "</div>" +
      "</div>" +
      '<div class="text-center mt-4">' +
      '<div class="text-xl font-bold text-blue-900">☀️ Soleil à ' +
      sunPos.degree +
      "° " +
      escapeHtml(sunPos.sign) +
      "</div>" +
      '<div class="text-sm text-blue-700 mt-2">Position astronomique dans le zodiaque</div>' +
      "</div>" +
      "</div>";
  }

  if (festival) {
    bodyHTML +=
      '<div class="modal-festival-card">' +
      '<div class="text-6xl mb-4">' +
      festival.icon +
      "</div>" +
      '<div class="text-2xl font-bold text-white mb-2">' +
      escapeHtml(festival.name) +
      "</div>" +
      '<div class="text-base text-white font-medium">' +
      escapeHtml(festival.description) +
      "</div>" +
      "</div>";

    if (festival.isEquinox && festival.equinoxInfo) {
      bodyHTML +=
        '<div class="modal-info-card" style="background: #000; border: 1px solid #c9a24d;">' +
        '<div class="modal-info-title" style="color: #fff;">' +
        escapeHtml(festival.equinoxInfo.title) +
        "</div>" +
        '<div class="text-sm text-white leading-relaxed space-y-3">' +
        '<p class="font-medium">' +
        escapeHtml(festival.equinoxInfo.details) +
        "</p>" +
        '<p class="italic border-t-2 border-white pt-3 mt-3">' +
        escapeHtml(festival.equinoxInfo.cultural) +
        "</p>" +
        "</div>" +
        "</div>";
    }

    if (festival.hasDetails && festival.detailsInfo) {
      bodyHTML +=
        '<div class="modal-info-card" style="background: #000; border: 1px solid #c9a24d;">' +
        '<div class="modal-info-title" style="color: #fff;">' +
        escapeHtml(festival.detailsInfo.title) +
        "</div>" +
        '<div class="text-sm text-white leading-relaxed space-y-2">' +
        "<p><strong>⏰ Calendrier :</strong> " +
        escapeHtml(festival.detailsInfo.timing) +
        "</p>" +
        "<p><strong> Position astronomique :</strong> " +
        escapeHtml(festival.detailsInfo.astronomical) +
        "</p>" +
        "<p><strong>🌿 Saison :</strong> " +
        escapeHtml(festival.detailsInfo.seasonal) +
        "</p>" +
        "</div>" +
        "</div>";
    }
  }

  modalBody.innerHTML = bodyHTML;

  modal.classList.add("show");
}

function closeDayModal() {
  const modal = document.getElementById("dayModal");
  if (!modal) return;

  modal.classList.remove("show");
}

function init() {
  updateMonthSelect();
  updateNextFestivalCountdown();

  const viewSearchBtn = document.getElementById("viewSearchBtn");
  const viewMonthBtn = document.getElementById("viewMonthBtn");
  const viewYearBtn = document.getElementById("viewYearBtn");

  if (viewSearchBtn) {
    viewSearchBtn.addEventListener("click", function () {
      switchView("search");
    });
  }
  if (viewMonthBtn) {
    viewMonthBtn.addEventListener("click", function () {
      switchView("month");
    });
  }
  if (viewYearBtn) {
    viewYearBtn.addEventListener("click", function () {
      switchView("year");
    });
  }

  const prevMonth = document.getElementById("prevMonth");
  const nextMonth = document.getElementById("nextMonth");
  const goToTodayMonth = document.getElementById("goToTodayMonth");
  const exportMonthBtn = document.getElementById("exportMonthBtn");

  if (prevMonth) {
    prevMonth.addEventListener("click", function () {
      if (currentMonthIndex > 0) {
        currentMonthIndex--;
        updateMonthSelect();
        renderMonth(currentMonthIndex);
      }
    });
  }

  if (nextMonth) {
    nextMonth.addEventListener("click", function () {
      if (currentMonthIndex < months.length - 1) {
        currentMonthIndex++;
        updateMonthSelect();
        renderMonth(currentMonthIndex);
      }
    });
  }

  if (goToTodayMonth) {
    goToTodayMonth.addEventListener("click", function () {
      const today = new Date();
      const m = findMonthForDate(today);

      if (m) {
        const monthIndex = months.indexOf(m);
        if (monthIndex >= 0) {
          currentMonthIndex = monthIndex;
          updateMonthSelect();
          renderMonth(currentMonthIndex);

          setTimeout(function () {
            const todayElement = document.querySelector(
              ".calendar-day.is-today",
            );
            if (todayElement) {
              todayElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
              todayElement.classList.add("keyboard-focused");
              setTimeout(function () {
                todayElement.classList.remove("keyboard-focused");
              }, 2000);
            }
          }, 300);
        }
      }
    });
  }

  if (exportMonthBtn) {
    exportMonthBtn.addEventListener("click", async () => {
      const m = months[currentMonthIndex];
      if (!m) return;

      const calendarContainer = document.getElementById("calendarContainer");
      if (!calendarContainer) return;

      // 1️⃣ Message de chargement
      const loadingMsg = document.createElement("div");
      loadingMsg.textContent = "📸 Capture en cours...";
      Object.assign(loadingMsg.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#111",
        color: "#fff",
        padding: "16px 24px",
        borderRadius: "12px",
        fontWeight: "bold",
        zIndex: "9999",
      });
      document.body.appendChild(loadingMsg);

      try {
        // 2️⃣ Capture HTML → Canvas
        const canvas = await html2canvas(calendarContainer, {
          scale: 2, // image nette (retina)
          backgroundColor: "#fff", // fond blanc
          useCORS: true, // images externes
        });

        // 3️⃣ Export image
        const link = document.createElement("a");
        link.download =
          "calendrier-" +
          m.monthName.toLowerCase().replace(/\s+/g, "-") +
          ".png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      } catch (err) {
        console.error("Erreur export calendrier :", err);
      } finally {
        document.body.removeChild(loadingMsg);
      }
    });
  }

  const monthSelect = document.getElementById("monthSelect");
  if (monthSelect) {
    monthSelect.addEventListener("change", function (e) {
      currentMonthIndex = parseInt(e.target.value, 10);
      renderMonth(currentMonthIndex);
    });
  }

  const dateInput = document.getElementById("dateInput");
  if (dateInput) {
    dateInput.addEventListener("change", function (e) {
      if (!e.target.value) return;
      const selectedDate = parseDate(e.target.value);
      const m = findMonthForDate(selectedDate);

      const resultDiv = document.getElementById("result");
      if (!resultDiv) return;

      if (m) {
        const start = parseDate(m.start);
        const lunarDay = daysBetween(start, selectedDate) + 1;
        const festival = getFestivalForDate(selectedDate);

        resultDiv.innerHTML =
          '<div class="bg-[#3b3b3b] rounded-md p-4 inline-block fade-in">' +
          '<div class="text-xl font-bold text-white">' +
          formatDate(selectedDate) +
          "</div>" +
          '<div class="mt-2">' +
          '<span class="badge-element badge-' +
          m.element.toLowerCase() +
          '">' +
          escapeHtml(m.name) +
          "</span>" +
          '<span class="badge-element badge-' +
          m.element.toLowerCase() +
          '">' +
          escapeHtml(m.element) +
          "</span>" +
          "</div>" +
          '<div class="mt-2 text-[#FFF]">Jour lunaire : <strong>' +
          lunarDay +
          "</strong> / Mois <strong>" +
          m.num +
          "</strong></div>" +
          (festival
            ? '<div class="mt-3 p-3 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg border-2 border-amber-400"><div class="text-3xl mb-1">' +
              festival.icon +
              '</div><div class="font-bold text-amber-900">' +
              escapeHtml(festival.name) +
              '</div><div class="text-sm text-amber-700">' +
              escapeHtml(festival.description) +
              "</div></div>"
            : "") +
          "</div>";
      } else {
        resultDiv.innerHTML =
          '<div class="text-red-600 font-medium fade-in">Date hors période couverte</div>';
      }
    });
  }

  const todayBtn = document.getElementById("todayBtn");
  if (todayBtn) {
    todayBtn.addEventListener("click", function () {
      const today = new Date();
      const formatted =
        today.getFullYear() +
        "-" +
        String(today.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(today.getDate()).padStart(2, "0");
      if (dateInput) {
        dateInput.value = formatted;
        dateInput.dispatchEvent(new Event("change"));
      }
    });
  }

  const clearBtn = document.getElementById("clearBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      if (dateInput) dateInput.value = "";
      const resultDiv = document.getElementById("result");
      if (resultDiv) resultDiv.innerHTML = "";
    });
  }

  const festivalCards = document.querySelectorAll(".festival-card");
  festivalCards.forEach(function (card) {
    card.addEventListener("click", function () {
      const dateStr = card.getAttribute("data-date");
      if (!dateStr) return;

      const selectedDate = parseDate(dateStr);
      const m = findMonthForDate(selectedDate);

      if (m) {
        const monthIndex = months.indexOf(m);
        if (monthIndex >= 0) {
          currentMonthIndex = monthIndex;
          updateMonthSelect();
          renderMonth(currentMonthIndex);
          switchView("month");

          setTimeout(function () {
            const calendarContainer =
              document.getElementById("calendarContainer");
            if (calendarContainer) {
              calendarContainer.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }, 300);
        }
      }
    });

    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.click();
      }
    });
  });

  const closeModal = document.getElementById("closeModal");
  if (closeModal) {
    closeModal.addEventListener("click", closeDayModal);
  }

  const dayModal = document.getElementById("dayModal");
  if (dayModal) {
    dayModal.addEventListener("click", function (e) {
      if (e.target.id === "dayModal") {
        closeDayModal();
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeDayModal();
    }

    if (currentView === "month" && allCalendarDays.length > 0) {
      if (
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === "ArrowUp" ||
        e.key === "ArrowDown"
      ) {
        e.preventDefault();

        if (focusedDayIndex === -1) {
          focusedDayIndex = 0;
        }

        const currentDay = allCalendarDays[focusedDayIndex];
        if (currentDay) {
          currentDay.classList.remove("keyboard-focused");
        }

        if (e.key === "ArrowLeft" && focusedDayIndex > 0) {
          focusedDayIndex--;
        } else if (
          e.key === "ArrowRight" &&
          focusedDayIndex < allCalendarDays.length - 1
        ) {
          focusedDayIndex++;
        } else if (e.key === "ArrowUp" && focusedDayIndex >= 7) {
          focusedDayIndex -= 7;
        } else if (
          e.key === "ArrowDown" &&
          focusedDayIndex < allCalendarDays.length - 7
        ) {
          focusedDayIndex += 7;
        }

        const newDay = allCalendarDays[focusedDayIndex];
        if (newDay) {
          newDay.classList.add("keyboard-focused");
          newDay.scrollIntoView({ behavior: "smooth", block: "nearest" });
          newDay.focus();
        }
      }
    }
  });

  setTimeout(function () {
    const loadingScreen = document.getElementById("loadingScreen");
    const mainContent = document.getElementById("mainContent");

    if (loadingScreen) loadingScreen.classList.add("loaded");
    if (mainContent) mainContent.classList.add("visible");
  }, 300);
}

function onConfigChange(config) {
  const mainTitle = document.getElementById("mainTitle");
  const subtitle = document.getElementById("subtitle");
  const yearStudy = document.getElementById("yearStudy");
  const newYearLabel = document.getElementById("newYearLabel");
  const monthStartLabel = document.getElementById("monthStartLabel");

  if (mainTitle)
    mainTitle.textContent = config.main_title || defaultConfig.main_title;
  if (subtitle)
    subtitle.textContent = config.subtitle || defaultConfig.subtitle;
  if (yearStudy)
    yearStudy.textContent = config.year_study || defaultConfig.year_study;
  if (newYearLabel)
    newYearLabel.textContent =
      config.new_year_label || defaultConfig.new_year_label;
  if (monthStartLabel)
    monthStartLabel.textContent =
      config.month_start_label || defaultConfig.month_start_label;

  const bgColor = config.background_color || defaultConfig.background_color;
  const pageWrapper = document.querySelector(".page-wrapper");
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig: defaultConfig,
    onConfigChange: onConfigChange,
    mapToCapabilities: function (config) {
      return {
        recolorables: [
          {
            get: function () {
              return config.background_color || defaultConfig.background_color;
            },
            set: function (value) {
              config.background_color = value;
              window.elementSdk.setConfig({ background_color: value });
            },
          },
          {
            get: function () {
              return (
                config.primary_action_color ||
                defaultConfig.primary_action_color
              );
            },
            set: function (value) {
              config.primary_action_color = value;
              window.elementSdk.setConfig({ primary_action_color: value });
            },
          },
        ],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined,
      };
    },
    mapToEditPanelValues: function (config) {
      return new Map([
        ["main_title", config.main_title || defaultConfig.main_title],
        ["subtitle", config.subtitle || defaultConfig.subtitle],
        ["year_study", config.year_study || defaultConfig.year_study],
        [
          "new_year_label",
          config.new_year_label || defaultConfig.new_year_label,
        ],
        [
          "month_start_label",
          config.month_start_label || defaultConfig.month_start_label,
        ],
      ]);
    },
  });
}

// Particles (optional)
const ENABLE_PARTICLES = true;
if (ENABLE_PARTICLES) {
  const count = 15;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.top = Math.floor(Math.random() * 100) + "%";
    p.style.left = Math.floor(Math.random() * 100) + "%";
    p.style.animationDelay = (Math.random() * 6).toFixed(2) + "s";
    document.body.appendChild(p);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
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
