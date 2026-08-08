/*
RAMSHA ART STUDIO — SINGLE-PAGE GITHUB VERSION

IMPORTANT:
1. Put painting photos inside the images folder.
2. Change only the paintings list below when you want to add/edit paintings.
3. Navigation is intentionally handled inside ONE index.html so About and Contact
   can never be accidentally swapped with Home on GitHub.
*/

const paintings = [
  {
    image: "through-the-silence.JPG",
    title: "Through the Silence",
    status: "Available",
    price: "450 USD (Shipping included)",
    size: "16 × 16 inches",
    medium: "Acrylic on canvas",
    description: ""
  },
   {
    image: "the-inevitable.JPG",
    title: "The Inevitable",
    status: "Sold",
    price: "600 USD (Shipping included)",
    size: "18 × 24 inches",
    medium: "Oil on canvas",
    description: ""
  },
   {
    image: "the-warmth-in-the-cold.jpg",
    title: "The Warmth in the Cold",
    status: "Sold",
    price: "350 USD (Shipping included)",
    size: "12 × 18 inches",
    medium: "Oil on canvas",
    description: ""
  },
   {
    image: "a-passing-memory.jpg",
    title: "A Passing Memory",
    status: "Sold",
    price: "600 USD (Shipping included)",
    size: "18 × 24 inches",
    medium: "Oil on canvas",
    description: ""
  },
   {
    image: "solace-in-the-storm.jpg",
    title: "Solace in the Storm",
    status: "Sold",
    price: "320 USD (Shipping included)",
    size: "12 × 18 inches",
    medium: "Oil on canvas",
    description: ""
  },
   {
    image: "ill-leave-the-lights-on.jpg",
    title: "I'll Leave The Lights On",
    status: "Sold",
    price: "600 USD (Shipping included)",
    size: "18 × 24 inches",
    medium: "Oil on canvas",
    description: ""
  },
   {
    image: "crimson-haze.JPG",
    title: "Crimson Haze",
    status: "Sold",
    price: "300 USD (Shipping included)",
    size: "12 × 18 inches",
    medium: "Oil on canvas",
    description: ""
  },
   {
    image: "the-last-train.JPG",
    title: "The Last Train",
    status: "Sold",
    price: "270 USD (Shipping included)",
    size: "12 × 12 inches",
    medium: "Oil on canvas",
    description: ""
  },
   {
    image: "blue-silence.JPG",
    title: "Blue Silence",
    status: "Sold",
    price: "300 USD (Shipping included)",
    size: "12 × 18 inches",
    medium: "Oil on canvas",
    description: ""
  },
   {
    image: "soft-radiance.jpg",
    title: "Soft Radiance",
    status: "Sold",
    price: "300 USD (Shipping included)",
    size: "12 × 18 inches",
    medium: "Oil on canvas",
    description: ""
  },
   {
    image: "arrive.JPG",
    title: "Arrive",
    status: "Sold",
    price: "270 USD (Shipping included)",
    size: "12 × 12 inches",
    medium: "Oil on canvas",
    description: ""
  },
    {
    image: "twilight-ride.JPG",
    title: "Twilight Ride",
    status: "Sold",
    price: "300 USD (Shipping included)",
    size: "12 × 18 inches",
    medium: "Oil on canvas",
    description: ""
  },
  {
    image: "forgotten-echoes.jpg",
    title: "Forgotten Echoes",
    status: "Sold",
    price: "300 USD (Shipping included)",
    size: "12 × 12 inches",
    medium: "Oil on canvas",
    description: ""
  },
   {
    image: "luminous-pause.JPG",
    title: "Luminous Pause",
    status: "Sold",
    price: "300 USD (Shipping included)",
    size: "12 × 12 inches",
    medium: "Oil on canvas",
    description: ""
  },
   {
    image: "ethereal-dawn.jpg",
    title: "Ethereal Dawn",
    status: "Sold",
    price: "300 USD (Shipping included)",
    size: "12 × 18 inches",
    medium: "Oil on canvas",
    description: ""
  }
];

const qs = (s) => document.querySelector(s);

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, c => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[c]));
}

function renderGallery() {
  const gallery = qs("#gallery");
  if (!gallery) return;

  gallery.innerHTML = paintings.map((p, i) => `
    <article class="art-card">
      <button class="art-image-button" type="button" data-painting="${i}" aria-label="View ${escapeHTML(p.title)}">
        <div class="art-image-wrap">
          <img src="${p.image}" alt="${escapeHTML(p.title)}" loading="lazy">
          <span class="view-art">View artwork</span>
        </div>
      </button>
      <div class="art-caption">
        <h2>${escapeHTML(p.title)}</h2>
        <p>${escapeHTML(p.size)} · ${escapeHTML(p.medium)}</p>
        <p class="art-status">${escapeHTML(p.status)}</p>
      </div>
    </article>
  `).join("");

  gallery.querySelectorAll(".art-image-button").forEach(button => {
    button.addEventListener("click", () => openPainting(Number(button.dataset.painting)));
  });
}

function openPainting(index) {
  const p = paintings[index];
  const modal = qs("#painting-modal");
  if (!p || !modal) return;

  qs("#modal-image").src = p.image;
  qs("#modal-image").alt = p.title;
  qs("#modal-title").textContent = p.title;
  qs("#modal-status").textContent = p.status;
  qs("#modal-price").textContent = p.price;
  qs("#modal-size").textContent = p.size;
  qs("#modal-medium").textContent = p.medium;
  qs("#modal-description").textContent = p.description || "";

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closePainting() {
  const modal = qs("#painting-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function setupModal() {
  const modal = qs("#painting-modal");
  if (!modal) return;
  qs("#modal-close").addEventListener("click", closePainting);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closePainting();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePainting();
  });
}

function showPage(page) {
  const valid = ["home", "about", "contact"];
  if (!valid.includes(page)) page = "home";

  document.querySelectorAll(".site-page").forEach(section => {
    section.hidden = section.id !== `page-${page}`;
  });

  document.querySelectorAll("[data-page]").forEach(link => {
    link.setAttribute("aria-current", link.dataset.page === page ? "page" : "false");
  });

  document.title = page === "home"
    ? "Ramsha Art Studio — Original Paintings"
    : `${page.charAt(0).toUpperCase() + page.slice(1)} — Ramsha Art Studio`;

  window.scrollTo({ top: 0, behavior: "auto" });
  closeMobileMenu();
}

function routeFromHash() {
  const page = (window.location.hash || "#home").slice(1).toLowerCase();
  showPage(page);
}

function closeMobileMenu() {
  const button = qs(".menu-button");
  const menu = qs(".mobile-menu");
  if (!button || !menu) return;
  menu.classList.remove("open");
  button.setAttribute("aria-expanded", "false");
}

function setupNavigation() {
  window.addEventListener("hashchange", routeFromHash);

  document.querySelectorAll("[data-page]").forEach(link => {
    link.addEventListener("click", () => {
      closePainting();
    });
  });

  const button = qs(".menu-button");
  const menu = qs(".mobile-menu");
  if (button && menu) {
    button.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  setupModal();
  setupNavigation();
  routeFromHash();
});
