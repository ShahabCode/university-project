const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const ratingFilter = document.getElementById("ratingFilter");
const sortSelect = document.getElementById("sortSelect");
const onlyFavorites = document.getElementById("onlyFavorites");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");

const servicesGrid = document.getElementById("servicesGrid");

function getCards() {
  return Array.from(document.querySelectorAll(".service-card"));
}

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedCat = categoryFilter.value;
  const minRating = Number(ratingFilter.value);
  const favOnly = onlyFavorites.checked;

  const cards = getCards();

  cards.forEach((card) => {
    const name = (card.dataset.name || "").toLowerCase();
    const cat = card.dataset.category || "all";
    const rating = Number(card.dataset.rating || 0);

    const isFavorite = card.classList.contains("is-favorite");

    const matchSearch = name.includes(query);
    const matchCat = selectedCat === "all" ? true : cat === selectedCat;
    const matchRating = rating >= minRating;
    const matchFav = favOnly ? isFavorite : true;

    const visible = matchSearch && matchCat && matchRating && matchFav;
    card.style.display = visible ? "block" : "none";
  });

  applySort();
}

function applySort() {
  const cards = getCards();

  // فقط کارت‌های visible رو مرتب کن
  const visibleCards = cards.filter((c) => c.style.display !== "none");

  const sortValue = sortSelect.value;

  visibleCards.sort((a, b) => {
    const nameA = (a.dataset.name || "").toLowerCase();
    const nameB = (b.dataset.name || "").toLowerCase();
    const ratingA = Number(a.dataset.rating || 0);
    const ratingB = Number(b.dataset.rating || 0);
    const featuredA = a.dataset.featured === "true";
    const featuredB = b.dataset.featured === "true";

    if (sortValue === "rating_desc") return ratingB - ratingA;
    if (sortValue === "name_asc") return nameA.localeCompare(nameB);
    if (sortValue === "name_desc") return nameB.localeCompare(nameA);

    // featured (پیشنهادی)
    if (featuredA === featuredB) return 0;
    return featuredA ? -1 : 1;
  });

  visibleCards.forEach((card) => servicesGrid.appendChild(card));
}

function resetFilters() {
  searchInput.value = "";
  categoryFilter.value = "all";
  ratingFilter.value = "0";
  sortSelect.value = "featured";
  onlyFavorites.checked = false;
  applyFilters();
}

/* کلیک روی کارت دسته‌بندی */
document.querySelectorAll(".category-card").forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryFilter.value = btn.dataset.cat;
    applyFilters();
    window.scrollTo({ top: servicesGrid.offsetTop - 80, behavior: "smooth" });
  });
});

/* favorite (قلب) */
document.querySelectorAll(".heart-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".service-card");
    const icon = btn.querySelector("i");

    card.classList.toggle("is-favorite");

    if (card.classList.contains("is-favorite")) {
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
    } else {
      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
    }

    applyFilters();
  });
});

/* events */
searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
ratingFilter.addEventListener("change", applyFilters);
sortSelect.addEventListener("change", applyFilters);
onlyFavorites.addEventListener("change", applyFilters);
resetFiltersBtn.addEventListener("click", resetFilters);

/* init */
applyFilters();
