const STORAGE_KEYS = {
  favorites: "destinyFavorites",
  week: "destinyWeeklyMenu",
  groceryChecked: "destinyGroceryChecked"
};

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const SLOTS = ["Breakfast", "Lunch", "Dinner", "Snack"];

const state = {
  search: "",
  category: "All",
  tag: "all",
  calories: "all",
  protein: "all",
  sort: "newest",
  favorites: loadJSON(STORAGE_KEYS.favorites, []),
  week: loadJSON(STORAGE_KEYS.week, createEmptyWeek()),
  groceryChecked: loadJSON(STORAGE_KEYS.groceryChecked, {})
};

function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function saveJSON(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function createEmptyWeek() {
  return DAYS.reduce((acc, day) => {
    acc[day] = SLOTS.reduce((slots, slot) => ({ ...slots, [slot]: "" }), {});
    return acc;
  }, {});
}
function byId(id) { return document.getElementById(id); }
function mealById(id) { return window.DESTINY_MEALS.find(meal => meal.id === id); }
function unique(values) { return [...new Set(values)].filter(Boolean); }
function escapeHTML(value = "") {
  return String(value).replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
}
function toast(message) {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2400);
}

function init() {
  byId("statMeals").textContent = window.DESTINY_MEALS.length;
  renderFilters();
  renderCategoryChips();
  renderMeals();
  renderFavorites();
  renderWeeklyBuilder();
  renderStructuredWeeks();
  renderGroceryList();
  renderEducation();
  bindEvents();
}

document.addEventListener("DOMContentLoaded", init);

function renderFilters() {
  const categories = ["All", ...unique(window.DESTINY_MEALS.map(meal => meal.category))];
  const tags = ["all", ...unique(window.DESTINY_MEALS.flatMap(meal => meal.tags))];
  byId("categoryFilter").innerHTML = categories.map(cat => `<option value="${escapeHTML(cat)}">${escapeHTML(cat)}</option>`).join("");
  byId("tagFilter").innerHTML = tags.map(tag => `<option value="${escapeHTML(tag)}">${tag === "all" ? "All" : escapeHTML(tag)}</option>`).join("");
}

function renderCategoryChips() {
  const categories = ["All", ...unique(window.DESTINY_MEALS.map(meal => meal.category))];
  byId("categoryChips").innerHTML = categories.map(cat => `<button type="button" class="chip ${state.category === cat ? "active" : ""}" data-category-chip="${escapeHTML(cat)}">${escapeHTML(cat)}</button>`).join("");
}

function getFilteredMeals() {
  let meals = [...window.DESTINY_MEALS];
  const q = state.search.trim().toLowerCase();
  if (q) {
    meals = meals.filter(meal => [
      meal.title, meal.category, meal.goalType,
      ...meal.tags, ...meal.ingredients, ...Object.values(meal.components)
    ].join(" ").toLowerCase().includes(q));
  }
  if (state.category !== "All") meals = meals.filter(meal => meal.category === state.category);
  if (state.tag !== "all") meals = meals.filter(meal => meal.tags.includes(state.tag));
  if (state.calories === "under350") meals = meals.filter(meal => meal.calories < 350);
  if (state.calories === "350to500") meals = meals.filter(meal => meal.calories >= 350 && meal.calories <= 500);
  if (state.calories === "over500") meals = meals.filter(meal => meal.calories > 500);
  if (state.protein === "30plus") meals = meals.filter(meal => meal.protein >= 30);
  if (state.protein === "40plus") meals = meals.filter(meal => meal.protein >= 40);
  if (state.protein === "50plus") meals = meals.filter(meal => meal.protein >= 50);
  if (state.sort === "proteinDesc") meals.sort((a,b) => b.protein - a.protein);
  if (state.sort === "caloriesAsc") meals.sort((a,b) => a.calories - b.calories);
  if (state.sort === "prepAsc") meals.sort((a,b) => a.prepTime - b.prepTime);
  if (state.sort === "budget") meals.sort((a,b) => Number(b.tags.includes("Budget friendly")) - Number(a.tags.includes("Budget friendly")) || a.calories - b.calories);
  if (state.sort === "newest") meals.sort((a,b) => b.id.localeCompare(a.id));
  return meals;
}

function renderMeals() {
  const meals = getFilteredMeals();
  byId("resultCount").textContent = `${meals.length} meal preps showing`;
  byId("mealGrid").innerHTML = meals.map(mealCard).join("");
}

function mealCard(meal) {
  const favorite = state.favorites.includes(meal.id);
  return `
    <article class="meal-card">
      <img src="${escapeHTML(meal.image)}" alt="${escapeHTML(meal.title)}" loading="lazy" onerror="this.src='assets/meals/fallback.svg'">
      <div class="meal-card-body">
        <div>
          <p class="eyebrow">${escapeHTML(meal.category)}</p>
          <h3>${escapeHTML(meal.title)}</h3>
        </div>
        <div class="card-meta">
          <span>${meal.calories}<br>cal</span>
          <span>${meal.protein}g<br>pro</span>
          <span>${meal.carbs}g<br>carb</span>
          <span>${meal.fats}g<br>fat</span>
        </div>
        <div class="tags">${meal.tags.slice(0,4).map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}</div>
        <div class="card-actions">
          <button class="btn primary" type="button" data-view="${meal.id}">View Recipe</button>
          <button class="btn ghost" type="button" data-favorite="${meal.id}">${favorite ? "Saved" : "Favorite"}</button>
          <button class="btn secondary" type="button" data-quick-add="${meal.id}">Add to Week</button>
          <button class="btn ghost" type="button" data-pdf="${meal.id}">Download PDF</button>
        </div>
      </div>
    </article>`;
}

function renderFavorites() {
  const meals = state.favorites.map(mealById).filter(Boolean);
  byId("favoritesGrid").innerHTML = meals.length ? meals.map(mealCard).join("") : `<p class="note">No favorites saved yet. Tap Favorite on any meal to keep it here.</p>`;
}

function renderWeeklyBuilder() {
  const options = `<option value="">Select meal</option>` + window.DESTINY_MEALS.map(meal => `<option value="${meal.id}">${escapeHTML(meal.title)}</option>`).join("");
  byId("weekGrid").innerHTML = DAYS.map(day => `
    <article class="day-card">
      <h3>${day}</h3>
      ${SLOTS.map(slot => `
        <div class="slot">
          <label>${slot}</label>
          <select data-week-select="${day}|${slot}">${options}</select>
        </div>
      `).join("")}
    </article>
  `).join("");
  document.querySelectorAll("[data-week-select]").forEach(select => {
    const [day, slot] = select.dataset.weekSelect.split("|");
    select.value = state.week?.[day]?.[slot] || "";
  });
}

function renderStructuredWeeks() {
  byId("structuredWeeksGrid").innerHTML = window.DESTINY_WEEKLY_MENUS.map(menu => `
    <article class="structured-card">
      <p class="eyebrow">${escapeHTML(menu.goal)}</p>
      <h3>${escapeHTML(menu.name)}</h3>
      <p><strong>${menu.averageCalories} calories</strong> average • <strong>${menu.averageProtein}g protein</strong> average</p>
      <ul>${Object.entries(menu.days).slice(0,3).map(([day, slots]) => `<li>${day}: ${escapeHTML(slots.Breakfast)}, ${escapeHTML(slots.Lunch)}</li>`).join("")}</ul>
      <div class="builder-actions">
        <button class="btn primary" type="button" data-apply-menu="${menu.id}">Use This Week</button>
        <button class="btn ghost" type="button" data-menu-pdf="${menu.id}">Download PDF</button>
      </div>
    </article>
  `).join("");
}

function buildGroceryFromWeek() {
  const selected = DAYS.flatMap(day => SLOTS.map(slot => state.week?.[day]?.[slot]).filter(Boolean)).map(mealById).filter(Boolean);
  const grouped = JSON.parse(JSON.stringify(window.DESTINY_MASTER_GROCERY));
  selected.forEach(meal => {
    Object.entries(meal.grocery).forEach(([group, items]) => {
      if (!grouped[group]) grouped[group] = [];
      items.forEach(item => { if (!grouped[group].includes(item)) grouped[group].push(item); });
    });
  });
  return grouped;
}

function renderGroceryList() {
  const grocery = buildGroceryFromWeek();
  byId("groceryGrid").innerHTML = Object.entries(grocery).map(([group, items]) => `
    <article class="grocery-group">
      <h3>${escapeHTML(group)}</h3>
      ${items.sort().map(item => {
        const id = `${group}:${item}`;
        return `<label class="check-item"><input type="checkbox" data-grocery-check="${escapeHTML(id)}" ${state.groceryChecked[id] ? "checked" : ""}> ${escapeHTML(item)}</label>`;
      }).join("")}
    </article>
  `).join("");
}

function renderEducation() {
  const guides = [
    ["How to meal prep for fat loss", "Build meals around lean protein, high volume vegetables, controlled carbs, and lower calorie sauces. Prep 2 to 4 days at a time so meals stay fresh."],
    ["How to meal prep for muscle gain", "Increase total calories with larger carb portions, quality fats, and protein at every meal. Use rice, potatoes, oats, pasta, olive oil, avocado, and lean meats."],
    ["How to store food safely", "Cool cooked meals before sealing. Store most cooked preps in airtight containers and keep cold until ready to eat."],
    ["How long cooked proteins last", "Most cooked proteins are best used within 3 to 4 days in the fridge. Freeze extra portions when prepping longer weeks."],
    ["Make meals taste better", "Use acid, herbs, spices, salsa, citrus, hot sauce, Greek yogurt sauce, and fresh toppings before adding heavy oils or creamy sauces."],
    ["Build a balanced plate", "Start with protein, add vegetables, choose a carb based on your training day, then add a measured fat source."],
    ["Lower calorie swaps", "Swap mayo for Greek yogurt, regular rice for cauliflower rice, creamy dressings for salsa, and fried proteins for grilled or air-fried options."],
    ["Higher protein swaps", "Add egg whites to eggs, Greek yogurt to bowls, extra turkey to pasta, tuna to rice bowls, or protein powder to oats."],
  ];
  byId("educationGrid").innerHTML = guides.map(([title, body]) => `<article><h3>${title}</h3><p>${body}</p></article>`).join("");
}

function openRecipe(id) {
  const meal = mealById(id);
  if (!meal) return;
  byId("modalContent").innerHTML = `
    <div class="modal-hero"><img src="${escapeHTML(meal.image)}" alt="${escapeHTML(meal.title)}" onerror="this.src='assets/meals/fallback.svg'"></div>
    <div class="modal-body">
      <p class="eyebrow">${escapeHTML(meal.category)} • ${meal.prepTime + meal.cookTime} minutes total</p>
      <h2 id="modalTitle">${escapeHTML(meal.title)}</h2>
      <div class="macro-row"><span>${meal.calories}<br>Calories</span><span>${meal.protein}g<br>Protein</span><span>${meal.carbs}g<br>Carbs</span><span>${meal.fats}g<br>Fats</span><span>${meal.fiber}g<br>Fiber</span></div>
      <div class="builder-actions">
        <button class="btn primary" type="button" data-pdf="${meal.id}">Download Recipe PDF</button>
        <button class="btn secondary" type="button" data-quick-add="${meal.id}">Add to Weekly Menu</button>
        <button class="btn ghost" type="button" data-favorite="${meal.id}">${state.favorites.includes(meal.id) ? "Saved" : "Favorite"}</button>
      </div>
      <div class="detail-grid">
        <section class="detail-box"><h3>Ingredients</h3><ul>${meal.ingredients.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul></section>
        <section class="detail-box"><h3>Instructions</h3><ol>${meal.instructions.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ol></section>
        <section class="detail-box"><h3>Portion Breakdown</h3><ul>${meal.portionBreakdown.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul></section>
        <section class="detail-box"><h3>Nutrition Components</h3><div class="component-list">${Object.entries(meal.components).map(([key, value]) => `<span><strong>${escapeHTML(key)}:</strong> ${escapeHTML(value)}</span>`).join("")}</div></section>
        <section class="detail-box"><h3>Storage</h3><p>${escapeHTML(meal.storage)}</p></section>
        <section class="detail-box"><h3>Reheating</h3><p>${escapeHTML(meal.reheating)}</p></section>
      </div>
    </div>`;
  byId("recipeModal").classList.add("open");
  byId("recipeModal").setAttribute("aria-hidden", "false");
}
function closeModal() {
  byId("recipeModal").classList.remove("open");
  byId("recipeModal").setAttribute("aria-hidden", "true");
}

function toggleFavorite(id) {
  state.favorites = state.favorites.includes(id) ? state.favorites.filter(item => item !== id) : [...state.favorites, id];
  saveJSON(STORAGE_KEYS.favorites, state.favorites);
  renderMeals();
  renderFavorites();
  toast(state.favorites.includes(id) ? "Saved to favorites" : "Removed from favorites");
}

function quickAddToWeek(id) {
  for (const day of DAYS) {
    for (const slot of SLOTS) {
      if (!state.week[day][slot]) {
        state.week[day][slot] = id;
        saveJSON(STORAGE_KEYS.week, state.week);
        renderWeeklyBuilder();
        renderGroceryList();
        toast(`Added to ${day} ${slot}`);
        return;
      }
    }
  }
  toast("Your week is full. Clear a slot to add more meals.");
}

function applyStructuredMenu(menuId) {
  const menu = window.DESTINY_WEEKLY_MENUS.find(item => item.id === menuId);
  if (!menu) return;
  state.week = createEmptyWeek();
  DAYS.forEach(day => {
    SLOTS.forEach(slot => {
      const title = menu.days?.[day]?.[slot];
      const meal = window.DESTINY_MEALS.find(item => item.title === title);
      state.week[day][slot] = meal?.id || "";
    });
  });
  saveJSON(STORAGE_KEYS.week, state.week);
  renderWeeklyBuilder();
  renderGroceryList();
  toast(`${menu.name} added to your weekly builder`);
}

function bindEvents() {
  byId("searchInput").addEventListener("input", e => { state.search = e.target.value; renderMeals(); });
  byId("categoryFilter").addEventListener("change", e => { state.category = e.target.value; renderCategoryChips(); renderMeals(); });
  byId("tagFilter").addEventListener("change", e => { state.tag = e.target.value; renderMeals(); });
  byId("calorieFilter").addEventListener("change", e => { state.calories = e.target.value; renderMeals(); });
  byId("proteinFilter").addEventListener("change", e => { state.protein = e.target.value; renderMeals(); });
  byId("sortFilter").addEventListener("change", e => { state.sort = e.target.value; renderMeals(); });
  byId("clearFiltersBtn").addEventListener("click", () => {
    state.search = ""; state.category = "All"; state.tag = "all"; state.calories = "all"; state.protein = "all"; state.sort = "newest";
    byId("searchInput").value = ""; byId("categoryFilter").value = "All"; byId("tagFilter").value = "all"; byId("calorieFilter").value = "all"; byId("proteinFilter").value = "all"; byId("sortFilter").value = "newest";
    renderCategoryChips(); renderMeals();
  });
  document.body.addEventListener("click", e => {
    const view = e.target.closest("[data-view]"); if (view) openRecipe(view.dataset.view);
    const fav = e.target.closest("[data-favorite]"); if (fav) toggleFavorite(fav.dataset.favorite);
    const quick = e.target.closest("[data-quick-add]"); if (quick) quickAddToWeek(quick.dataset.quickAdd);
    const pdf = e.target.closest("[data-pdf]"); if (pdf) downloadMealPDF(pdf.dataset.pdf);
    const chip = e.target.closest("[data-category-chip]"); if (chip) { state.category = chip.dataset.categoryChip; byId("categoryFilter").value = state.category; renderCategoryChips(); renderMeals(); }
    const close = e.target.closest("[data-close-modal]"); if (close) closeModal();
    const apply = e.target.closest("[data-apply-menu]"); if (apply) applyStructuredMenu(apply.dataset.applyMenu);
    const menuPdf = e.target.closest("[data-menu-pdf]"); if (menuPdf) downloadStructuredMenuPDF(menuPdf.dataset.menuPdf);
  });
  document.body.addEventListener("change", e => {
    if (e.target.matches("[data-week-select]")) {
      const [day, slot] = e.target.dataset.weekSelect.split("|");
      state.week[day][slot] = e.target.value;
      saveJSON(STORAGE_KEYS.week, state.week);
      renderGroceryList();
    }
    if (e.target.matches("[data-grocery-check]")) {
      state.groceryChecked[e.target.dataset.groceryCheck] = e.target.checked;
      saveJSON(STORAGE_KEYS.groceryChecked, state.groceryChecked);
    }
  });
  byId("clearWeekBtn").addEventListener("click", () => { state.week = createEmptyWeek(); saveJSON(STORAGE_KEYS.week, state.week); renderWeeklyBuilder(); renderGroceryList(); toast("Weekly menu cleared"); });
  byId("generateGroceryBtn").addEventListener("click", () => { renderGroceryList(); location.hash = "grocery"; toast("Grocery list generated from weekly menu"); });
  byId("downloadWeekBtn").addEventListener("click", downloadWeekPDF);
  byId("copyGroceryBtn").addEventListener("click", copyGroceryList);
  byId("downloadGroceryBtn").addEventListener("click", downloadGroceryPDF);
  byId("resetGroceryBtn").addEventListener("click", () => { state.groceryChecked = {}; saveJSON(STORAGE_KEYS.groceryChecked, state.groceryChecked); renderGroceryList(); });
}

function getPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "letter" });
  doc.setTextColor(196, 96, 122);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Destiny Fitness", 42, 44);
  doc.setDrawColor(199, 162, 78);
  doc.line(42, 54, 570, 54);
  doc.setTextColor(74, 74, 74);
  return doc;
}
function addWrapped(doc, text, x, y, maxWidth = 528, lineHeight = 15) {
  const lines = doc.splitTextToSize(String(text), maxWidth);
  doc.text(lines, x, y);
  return y + lines.length * lineHeight;
}
function checkPage(doc, y) { if (y > 735) { doc.addPage(); return 48; } return y; }
function addSection(doc, title, lines, y) {
  y = checkPage(doc, y + 8);
  doc.setTextColor(196, 96, 122); doc.setFont("helvetica", "bold"); doc.setFontSize(13); doc.text(title, 42, y);
  y += 18; doc.setTextColor(74, 74, 74); doc.setFont("helvetica", "normal"); doc.setFontSize(10);
  const list = Array.isArray(lines) ? lines : [lines];
  list.forEach(item => { y = checkPage(doc, y); y = addWrapped(doc, `• ${item}`, 52, y, 506, 14) + 3; });
  return y + 4;
}
function downloadMealPDF(id) {
  const meal = mealById(id); if (!meal) return;
  const doc = getPDF(); let y = 86;
  doc.setFontSize(22); doc.setFont("helvetica", "bold"); doc.setTextColor(196, 96, 122); y = addWrapped(doc, meal.title, 42, y, 528, 24) + 12;
  doc.setTextColor(74, 74, 74); doc.setFontSize(11); doc.setFont("helvetica", "bold");
  y = addWrapped(doc, `${meal.calories} calories | ${meal.protein}g protein | ${meal.carbs}g carbs | ${meal.fats}g fats | ${meal.fiber}g fiber`, 42, y, 528, 14) + 8;
  y = addSection(doc, "Ingredients", meal.ingredients, y);
  y = addSection(doc, "Instructions", meal.instructions, y);
  y = addSection(doc, "Portion Breakdown", meal.portionBreakdown, y);
  y = addSection(doc, "Storage", meal.storage, y);
  y = addSection(doc, "Reheating", meal.reheating, y);
  y = addSection(doc, "Disclaimer", "Nutrition information is an estimate and may vary based on brands, portions, and preparation methods.", y);
  doc.save(`${meal.id}-${meal.title.toLowerCase().replace(/[^a-z0-9]+/g,"-")}.pdf`);
}
function downloadWeekPDF() {
  const doc = getPDF(); let y = 86;
  doc.setFontSize(22); doc.setFont("helvetica", "bold"); doc.setTextColor(196, 96, 122); doc.text("Weekly Meal Plan", 42, y); y += 28;
  DAYS.forEach(day => {
    y = checkPage(doc, y);
    doc.setTextColor(196, 96, 122); doc.setFont("helvetica", "bold"); doc.setFontSize(13); doc.text(day, 42, y); y += 16;
    doc.setTextColor(74,74,74); doc.setFont("helvetica", "normal"); doc.setFontSize(10);
    SLOTS.forEach(slot => {
      const meal = mealById(state.week?.[day]?.[slot]);
      y = addWrapped(doc, `${slot}: ${meal ? meal.title : "Open"}`, 52, y, 506, 14) + 2;
    });
    y += 8;
  });
  doc.save("destiny-fitness-weekly-meal-plan.pdf");
}
function downloadStructuredMenuPDF(menuId) {
  const menu = window.DESTINY_WEEKLY_MENUS.find(item => item.id === menuId); if (!menu) return;
  const doc = getPDF(); let y = 86;
  doc.setFontSize(22); doc.setFont("helvetica", "bold"); doc.setTextColor(196, 96, 122); doc.text(menu.name, 42, y); y += 24;
  doc.setTextColor(74,74,74); doc.setFontSize(11); doc.text(`${menu.averageCalories} average calories | ${menu.averageProtein}g average protein`, 42, y); y += 24;
  DAYS.forEach(day => { y = addSection(doc, day, SLOTS.map(slot => `${slot}: ${menu.days[day][slot]}`), y); });
  doc.save(`${menu.id}.pdf`);
}
function groceryText() {
  const grocery = buildGroceryFromWeek();
  return Object.entries(grocery).map(([group, items]) => `${group}\n${items.sort().map(item => `- ${item}`).join("\n")}`).join("\n\n");
}
function copyGroceryList() {
  navigator.clipboard.writeText(groceryText()).then(() => toast("Grocery list copied"), () => toast("Copy failed. Try again."));
}
function downloadGroceryPDF() {
  const doc = getPDF(); let y = 86;
  doc.setFontSize(22); doc.setFont("helvetica", "bold"); doc.setTextColor(196, 96, 122); doc.text("Grocery List", 42, y); y += 24;
  Object.entries(buildGroceryFromWeek()).forEach(([group, items]) => { y = addSection(doc, group, items.sort(), y); });
  doc.save("destiny-fitness-grocery-list.pdf");
}
