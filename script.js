const appData = {
  featured: {
    id: "wallx-ai",
    name: "Wallx AI Studio",
    tagline: "4K Android wallpapers with adaptive AMOLED packs",
    developer: "Wallx Labs",
    size: "58 MB",
    rating: "4.8",
    version: "3.4.1",
    icon: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=200&q=70",
    banner: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92eee?auto=format&fit=crop&w=1300&q=70",
    downloadLink: "https://example.com/download/wallx-ai",
    description:
      "Wallx AI Studio is an Android-first wallpaper platform focused on premium quality, low battery impact, and smooth categorization. Discover minimal, material, AMOLED, abstract, and nature packs curated for modern Android devices.",
    features: [
      "Adaptive categories for Android phones",
      "Offline favorites cache",
      "Daily wallpaper drops",
      "Material You palette support"
    ],
    ratings: "4.8 average rating from 120K+ users (display-only)",
    versions: ["3.4.1 - New wallpaper engine optimization", "3.3.8 - Improved download handling"],
    screenshots: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=70",
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=500&q=70",
      "https://images.unsplash.com/photo-1520912188895-41d3ec891a27?auto=format&fit=crop&w=500&q=70"
    ]
  },
  categories: ["Productivity", "Customization", "Photography", "Music", "Utilities", "Education", "Fitness"],
  apps: [
    { id: "notepadx", name: "NotePad X", developer: "Alpha Droid", rating: "4.6", downloads: "5M+", icon: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=180&q=70", downloadLink: "https://example.com/download/notepadx" },
    { id: "fitpulse", name: "FitPulse", developer: "Zenbyte", rating: "4.7", downloads: "10M+", icon: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=180&q=70", downloadLink: "https://example.com/download/fitpulse" },
    { id: "snapedit", name: "SnapEdit Pro", developer: "PixelForge", rating: "4.5", downloads: "8M+", icon: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=180&q=70", downloadLink: "https://example.com/download/snapedit" },
    { id: "taskgrid", name: "TaskGrid", developer: "Mobinest", rating: "4.4", downloads: "3M+", icon: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=180&q=70", downloadLink: "https://example.com/download/taskgrid" }
  ],
  games: [
    { id: "driftrush", name: "Drift Rush", developer: "NitroPixel", rating: "4.6", downloads: "20M+", icon: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=180&q=70", downloadLink: "https://example.com/download/driftrush" },
    { id: "skyarena", name: "Sky Arena", developer: "RogueArc", rating: "4.7", downloads: "14M+", icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=180&q=70", downloadLink: "https://example.com/download/skyarena" },
    { id: "blockverse", name: "BlockVerse", developer: "LoopLab", rating: "4.3", downloads: "9M+", icon: "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=180&q=70", downloadLink: "https://example.com/download/blockverse" }
  ],
  collections: [
    { title: "Top Productivity Apps", image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=900&q=70" },
    { title: "Editor's Choice", image: "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?auto=format&fit=crop&w=900&q=70" },
    { title: "Best AMOLED Packs", image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=900&q=70" }
  ]
};

const heroBanner = document.getElementById("heroBanner");
const categoryChips = document.getElementById("categoryChips");
const appsGrid = document.getElementById("appsGrid");
const gamesGrid = document.getElementById("gamesGrid");
const collectionRow = document.getElementById("collectionRow");
const chartList = document.getElementById("chartList");
const detailHead = document.getElementById("detailHead");
const detailDescription = document.getElementById("detailDescription");
const detailFeatures = document.getElementById("detailFeatures");
const detailRatings = document.getElementById("detailRatings");
const detailVersions = document.getElementById("detailVersions");
const shotTrack = document.getElementById("shotTrack");
const toggleDesc = document.getElementById("toggleDesc");
const searchInput = document.getElementById("searchInput");

function createSkeletons() {
  appsGrid.innerHTML = "";
  for (let i = 0; i < 4; i += 1) {
    const sk = document.createElement("div");
    sk.className = "skeleton";
    sk.style.height = "140px";
    appsGrid.appendChild(sk);
  }
}

function mountHero() {
  const f = appData.featured;
  heroBanner.style.backgroundImage = `linear-gradient(120deg, rgba(8,9,12,.72), rgba(8,9,12,.35)), url(${f.banner})`;
  heroBanner.style.backgroundSize = "cover";
  heroBanner.style.backgroundPosition = "center";
  heroBanner.innerHTML = `
    <div style="padding:20px;display:grid;gap:12px;max-width:680px;">
      <div style="display:grid;grid-template-columns:72px 1fr;gap:12px;align-items:center;">
        <img loading="lazy" src="${f.icon}" alt="${f.name} icon" style="width:72px;height:72px;border-radius:18px;border:1px solid rgba(255,255,255,.22);box-shadow:0 8px 20px rgba(0,0,0,.35);object-fit:cover;"/>
        <div>
          <h1 style="margin:0;font-size:clamp(1.2rem,4vw,2rem);">${f.name}</h1>
          <p style="margin:2px 0 0;color:#d2d8e2;">${f.tagline}</p>
        </div>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <button class="btn" id="heroDownload">Download</button>
        <button class="ghost-btn" id="heroLearn">Learn More</button>
      </div>
      <div style="display:flex;gap:14px;flex-wrap:wrap;color:#c6ceda;font-size:.85rem;">
        <span>Size: ${f.size}</span>
        <span>Rating: ${f.rating}</span>
        <span>Version: ${f.version}</span>
      </div>
    </div>
  `;

  document.getElementById("heroDownload").addEventListener("click", () => {
    window.open(f.downloadLink, "_blank", "noopener,noreferrer");
  });
  document.getElementById("heroLearn").addEventListener("click", () => {
    renderDetail(f);
    document.getElementById("appDetail").scrollIntoView({ behavior: "smooth" });
  });
}

function createCard(item) {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <div class="card-top">
      <img loading="lazy" src="${item.icon}" alt="${item.name} icon" />
      <div>
        <h3>${item.name}</h3>
        <p>${item.developer}</p>
      </div>
    </div>
    <div class="meta">⭐ ${item.rating} • ${item.downloads}</div>
    <div class="card-actions">
      <button class="btn">Download</button>
      <button class="ghost-btn">Details</button>
    </div>
  `;

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    card.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  });

  const [downloadBtn, detailsBtn] = card.querySelectorAll("button");
  downloadBtn.addEventListener("click", () => window.open(item.downloadLink, "_blank", "noopener,noreferrer"));
  detailsBtn.addEventListener("click", () => {
    const detailData = { ...appData.featured, ...item, screenshots: appData.featured.screenshots };
    renderDetail(detailData);
    document.getElementById("appDetail").scrollIntoView({ behavior: "smooth" });
  });

  return card;
}

function renderGrid(list, target) {
  target.innerHTML = "";
  list.forEach((app) => target.appendChild(createCard(app)));
}

function renderCategories() {
  categoryChips.innerHTML = "";
  appData.categories.forEach((name) => {
    const chip = document.createElement("button");
    chip.className = "chip";
    chip.textContent = name;
    chip.addEventListener("click", () => {
      searchInput.value = name;
      searchInput.dispatchEvent(new Event("input"));
      document.getElementById("appsSection").scrollIntoView({ behavior: "smooth" });
    });
    categoryChips.appendChild(chip);
  });
}

function renderCollections() {
  collectionRow.innerHTML = "";
  appData.collections.forEach((col) => {
    const el = document.createElement("article");
    el.className = "collection-card";
    el.style.backgroundImage = `url(${col.image})`;
    el.innerHTML = `<span>${col.title}</span>`;
    collectionRow.appendChild(el);
  });
}

function renderCharts() {
  chartList.innerHTML = "";
  [...appData.apps, ...appData.games]
    .sort((a, b) => Number(b.rating) - Number(a.rating))
    .slice(0, 8)
    .forEach((item, idx) => {
      const li = document.createElement("li");
      li.textContent = `${idx + 1}. ${item.name} — ${item.rating}★`;
      chartList.appendChild(li);
    });
}

function renderDetail(app) {
  detailHead.innerHTML = `
    <div style="display:grid;grid-template-columns:72px 1fr auto;gap:12px;align-items:center;">
      <img loading="lazy" src="${app.icon}" alt="${app.name} icon" style="width:72px;height:72px;border-radius:16px;object-fit:cover;border:1px solid rgba(255,255,255,.14);"/>
      <div>
        <h2 style="margin:0;">${app.name}</h2>
        <p style="margin:2px 0 0;color:#bec6d2;">${app.developer || "Android Publisher"}</p>
      </div>
      <button class="btn" id="detailDownload">Install</button>
    </div>
  `;

  document.getElementById("detailDownload").addEventListener("click", () => {
    window.open(app.downloadLink, "_blank", "noopener,noreferrer");
  });

  detailDescription.textContent = app.description || appData.featured.description;
  detailDescription.classList.add("truncate");
  toggleDesc.textContent = "Read more";

  detailFeatures.innerHTML = "";
  (app.features || appData.featured.features).forEach((f) => {
    const li = document.createElement("li");
    li.textContent = f;
    detailFeatures.appendChild(li);
  });

  detailRatings.textContent = app.ratings || appData.featured.ratings;

  detailVersions.innerHTML = "";
  (app.versions || appData.featured.versions).forEach((v) => {
    const li = document.createElement("li");
    li.textContent = v;
    detailVersions.appendChild(li);
  });

  shotTrack.innerHTML = "";
  (app.screenshots || appData.featured.screenshots).forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";
    img.alt = `${app.name} screenshot`;
    shotTrack.appendChild(img);
  });
}

toggleDesc.addEventListener("click", () => {
  const expanded = !detailDescription.classList.contains("truncate");
  detailDescription.classList.toggle("truncate", expanded);
  toggleDesc.textContent = expanded ? "Read more" : "Show less";
});

searchInput.addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  const apps = appData.apps.filter((a) => `${a.name} ${a.developer}`.toLowerCase().includes(q));
  const games = appData.games.filter((a) => `${a.name} ${a.developer}`.toLowerCase().includes(q));
  renderGrid(apps.length ? apps : appData.apps, appsGrid);
  renderGrid(games.length ? games : appData.games, gamesGrid);
});

function setupAnchors() {
  document.querySelectorAll("[data-scroll]").forEach((el) => {
    el.addEventListener("click", () => {
      const target = document.querySelector(el.getAttribute("data-scroll"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (el.parentElement?.classList.contains("nav-links")) {
        document.querySelectorAll(".nav-links button").forEach((b) => b.classList.remove("active"));
        el.classList.add("active");
      }
    });
  });
}

function setupReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in");
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

function setupParallax() {
  window.addEventListener("scroll", () => {
    const y = window.scrollY * 0.08;
    heroBanner.style.transform = `translate3d(0, ${y}px, 0)`;
  }, { passive: true });
}

function init() {
  createSkeletons();
  setTimeout(() => {
    mountHero();
    renderCategories();
    renderGrid(appData.apps, appsGrid);
    renderGrid(appData.games, gamesGrid);
    renderCollections();
    renderCharts();
    renderDetail(appData.featured);
    setupAnchors();
    setupReveal();
    setupParallax();
  }, 260);
}

init();
