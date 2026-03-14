// ╔══════════════════════════════════════════════════════════════╗
// ║              HOW TO SET YOUR OWN MENU PHOTOS                 ║
// ╠══════════════════════════════════════════════════════════════╣
// ║  1. Create a folder named  img/  next to this HTML file      ║
// ║  2. Copy your photos into that  img/  folder                 ║
// ║  3. Rename each photo to match the filename listed below     ║
// ║     OR change the  img:  value to your actual filename       ║
// ║                                                              ║
// ║  Example — to change the Espresso photo:                     ║
// ║    img: 'img/espresso.jpg'   ← change to your file           ║
// ║    img: 'img/my_photo.png'   ← any format works              ║
// ║                                                              ║
// ║    If a photo is missing the emoji shows as a fallback ✔    ║
// ╚══════════════════════════════════════════════════════════════╝

const menu = [
  // ── COFFEE ──────────────────────────────────────────────────
  { id: 1,  cat: "coffee",  emoji: "☕", name: "Espresso",          price: 2.5,  badge: "hot",  desc: "Double shot, rich & bold",               img: "img/Expreso.png" },
  { id: 2,  cat: "coffee",  emoji: "☕", name: "Americano",          price: 3.0,  badge: null,   desc: "Espresso + hot water, clean",             img: "img/americano.jpg" },
  { id: 3,  cat: "coffee",  emoji: "☕", name: "Cappuccino",         price: 3.8,  badge: null,   desc: "Espresso, steamed milk & foam",           img: "img/cappuccino.jpg" },
  { id: 4,  cat: "coffee",  emoji: "☕", name: "Flat White",         price: 4.0,  badge: "new",  desc: "Velvety microfoam, strong",               img: "img/flat_white.jpg" },
  { id: 5,  cat: "coffee",  emoji: "🥛", name: "Latte",              price: 4.2,  badge: null,   desc: "Smooth espresso & steamed milk",          img: "img/coffe-latte-with-coffee-beans.jpg" },
  { id: 6,  cat: "coffee",  emoji: "🍮", name: "Caramel Macchiato",  price: 4.8,  badge: null,   desc: "Vanilla, milk, espresso, caramel",        img: "img/caramel_macchiato.jpg" },
  { id: 7,  cat: "coffee",  emoji: "🍫", name: "Mocha",              price: 4.5,  badge: null,   desc: "Espresso, chocolate & milk",              img: "img/mocha.jpg" },
  { id: 8,  cat: "coffee",  emoji: "🧊", name: "Cold Brew",          price: 4.0,  badge: "new",  desc: "12-hr steeped, smooth & dark",            img: "img/cold_brew.jpg" },
  { id: 9,  cat: "coffee",  emoji: "☕", name: "Cortado",            price: 3.5,  badge: null,   desc: "Equal espresso & warm milk",              img: "img/cortado.jpg" },
  { id: 10, cat: "coffee",  emoji: "🥃", name: "Irish Coffee",       price: 5.5,  badge: null,   desc: "Coffee, whiskey & cream",                 img: "img/irish_coffee.jpg" },

  // ── TEA ─────────────────────────────────────────────────────
  { id: 11, cat: "tea", emoji: "🍵", name: "Earl Grey",           price: 3.0, badge: null,  desc: "Bergamot black tea, classic",                img: "img/earl_grey.jpg" },
  { id: 12, cat: "tea", emoji: "🍵", name: "Matcha Latte",        price: 4.5, badge: "new", desc: "Ceremonial grade + oat milk",                img: "img/matcha_latte.jpg" },
  { id: 13, cat: "tea", emoji: "🌼", name: "Chamomile",           price: 2.8, badge: null,  desc: "Soothing floral herbal",                     img: "img/chamomile.jpg" },
  { id: 14, cat: "tea", emoji: "🍵", name: "Chai Latte",          price: 4.0, badge: null,  desc: "Spiced tea & steamed milk",                  img: "img/chai_latte.jpg" },
  { id: 15, cat: "tea", emoji: "🌸", name: "Jasmine Green",       price: 3.2, badge: null,  desc: "Floral & light green tea",                   img: "img/jasmine_green.jpg" },
  { id: 16, cat: "tea", emoji: "🍃", name: "Peppermint Tea",      price: 2.9, badge: null,  desc: "Cool & refreshing herbal mint",              img: "img/peppermint_tea.jpg" },
  { id: 17, cat: "tea", emoji: "🍵", name: "Ceylon Tea",          price: 3.1, badge: null,  desc: "Bright & crisp Sri Lankan black tea",        img: "img/ceylon_tea.jpg" },
  { id: 18, cat: "tea", emoji: "🌿", name: "Lemongrass Ginger",   price: 3.5, badge: "new", desc: "Zesty citrus with warm ginger kick",         img: "img/lemongrass_ginger.jpg" },
  { id: 19, cat: "tea", emoji: "🍑", name: "Peach Oolong",        price: 4.2, badge: "hot", desc: "Fruity oolong with sweet peach",             img: "img/peach_oolong.jpg" },
  { id: 20, cat: "tea", emoji: "🫖", name: "Yunnan Gold Tea",     price: 3.6, badge: "new", desc: "Smooth & honey-sweet Chinese black tea",     img: "img/yunnan_gold.jpg" },

  // ── FRAPPÉ ──────────────────────────────────────────────────
  { id: 21, cat: "frappe", emoji: "🧋", name: "Classic Frappé",       price: 5.0, badge: null,  desc: "Coffee blended with ice & cream",         img: "img/classic_frappe.jpg" },
  { id: 22, cat: "frappe", emoji: "🧋", name: "Matcha Frappé",        price: 5.5, badge: "new", desc: "Green tea & vanilla frappe",              img: "img/matcha_frappe.jpg" },
  { id: 23, cat: "frappe", emoji: "🧋", name: "Caramel Crunch",       price: 5.8, badge: "hot", desc: "Toffee, espresso, whip",                  img: "img/caramel_crunch.jpg" },
  { id: 24, cat: "frappe", emoji: "🍓", name: "Strawberry Milkshake", price: 5.2, badge: null,  desc: "Fresh strawberry smoothie",               img: "img/strawberry_milkshake.jpg" },
  { id: 25, cat: "frappe", emoji: "🍪", name: "Oreo Frappé",          price: 5.8, badge: null,  desc: "Blended Oreo & vanilla cream",            img: "img/oreo_frappe.jpg" },

  // ── JUICE ───────────────────────────────────────────────────
  { id: 26, cat: "juice", emoji: "🍊", name: "Fresh Orange Juice",    price: 3.8, badge: "new", desc: "Freshly squeezed, pulpy",                 img: "img/orange_juice.jpg" },
  { id: 27, cat: "juice", emoji: "🍉", name: "Watermelon Juice",      price: 3.5, badge: null,  desc: "Summer watermelon, chilled",              img: "img/watermelon_juice.jpg" },
  { id: 28, cat: "juice", emoji: "🥬", name: "Green Detox",           price: 4.2, badge: "new", desc: "Spinach, cucumber, apple, ginger",        img: "img/green_detox.jpg" },
  { id: 29, cat: "juice", emoji: "🥭", name: "Mango Lassi",           price: 4.0, badge: null,  desc: "Mango, yogurt & cardamom",               img: "img/mango_lassi.jpg" },
  { id: 30, cat: "juice", emoji: "🍋", name: "Lemonade",              price: 3.0, badge: "hot", desc: "House-made, honey-sweetened",             img: "img/lemonade.jpg" },
  { id: 36, cat: "juice", emoji: "🍍", name: "Pineapple Juice",       price: 3.8, badge: null,  desc: "Tropical fresh pineapple chilled",        img: "img/pineapple_juice.jpg" },
  { id: 37, cat: "juice", emoji: "🍇", name: "Grape Juice",           price: 3.5, badge: null,  desc: "Sweet purple grapes freshly pressed",     img: "img/grape_juice.jpg" },
  { id: 38, cat: "juice", emoji: "🥕", name: "Carrot Ginger Juice",   price: 4.0, badge: "new", desc: "Fresh carrot with zesty ginger kick",     img: "img/carrot_ginger_juice.jpg" },
  { id: 39, cat: "juice", emoji: "🍎", name: "Apple Mint Juice",      price: 3.8, badge: null,  desc: "Crisp green apple with fresh mint",       img: "img/apple_mint_juice.jpg" },
  { id: 40, cat: "juice", emoji: "🌺", name: "Hibiscus Cooler",       price: 4.2, badge: "hot", desc: "Floral hibiscus with honey & lime",       img: "img/hibiscus_cooler.jpg" },

  // ── PASTRY ──────────────────────────────────────────────────
  { id: 41, cat: "pastry", emoji: "🥐", name: "Butter Croissant",      price: 2.8, badge: null,  desc: "Flaky, golden, fresh-baked",              img: "img/butter_croissant.jpg" },
  { id: 42, cat: "pastry", emoji: "🥐", name: "Almond Croissant",      price: 3.2, badge: "hot", desc: "Frangipane-filled, toasted",              img: "img/almond_croissant.jpg" },
  { id: 43, cat: "pastry", emoji: "🫐", name: "Blueberry Muffin",      price: 2.5, badge: null,  desc: "Bursting with fresh blueberries",         img: "img/blueberry_muffin.jpg" },
  { id: 44, cat: "pastry", emoji: "🌀", name: "Cinnamon Roll",          price: 3.5, badge: "new", desc: "Gooey cream cheese glaze",               img: "img/cinnamon_roll.jpg" },
  { id: 45, cat: "pastry", emoji: "🍌", name: "Banana Bread",           price: 2.8, badge: null,  desc: "Moist, walnut-topped slice",             img: "img/banana_bread.jpg" },
  { id: 46, cat: "pastry", emoji: "🥐", name: "Cruffin",                price: 4.5, badge: "new", desc: "Croissant-muffin hybrid, vanilla cream", img: "img/cruffin.jpg" },
  { id: 47, cat: "pastry", emoji: "🍋", name: "Yuzu Lemon Tart",        price: 4.2, badge: "new", desc: "Tangy citrus curd, buttery shell",        img: "img/yuzu_lemon_tart.jpg" },
  { id: 48, cat: "pastry", emoji: "🍮", name: "Miso Caramel Éclair",    price: 4.8, badge: "hot", desc: "Choux pastry, salty miso-caramel cream", img: "img/miso_caramel_eclair.jpg" },
  { id: 49, cat: "pastry", emoji: "🍈", name: "Guava Pastelito",        price: 3.5, badge: "new", desc: "Flaky Cuban pastry, sweet guava filling", img: "img/guava_pastelito.jpg" },
  { id: 50, cat: "pastry", emoji: "🌀", name: "Sourdough Cinnamon Roll",price: 4.0, badge: null,  desc: "Tangy sourdough, cream cheese glaze",    img: "img/sourdough_cinnamon.jpg" },
  { id: 51, cat: "pastry", emoji: "🪺", name: "Kataifi Nest",           price: 5.0, badge: "hot", desc: "Shredded filo, pistachio, honey drizzle", img: "img/kataifi_nest.jpg" },
  { id: 52, cat: "pastry", emoji: "🎂", name: "Mini Layer Cake",        price: 3.8, badge: "new", desc: "One-bite layered cake, seasonal flavors", img: "img/mini_layer_cake.jpg" },
  { id: 53, cat: "pastry", emoji: "🍓", name: "Strawberry Danish",      price: 3.8, badge: "new", desc: "Flaky pastry, cream cheese, strawberry",  img: "img/strawberry_danish.jpg" },
  { id: 54, cat: "pastry", emoji: "🍫", name: "Chocolate Croissant",    price: 3.2, badge: "hot", desc: "Buttery layers, dark chocolate filling",  img: "img/chocolate_croissant.jpg" },
  { id: 55, cat: "pastry", emoji: "🥧", name: "Matcha Cream Puff",      price: 4.2, badge: "new", desc: "Crisp choux, matcha diplomat cream",      img: "img/matcha_cream_puff.jpg" },

  // ── CAKE ────────────────────────────────────────────────────
  { id: 60, cat: "cake", emoji: "🎂", name: "New York Cheesecake", price: 5.5, badge: null,  desc: "Dense, creamy with berry coulis",         img: "img/cheesecake.jpg" },
  { id: 61, cat: "cake", emoji: "🍰", name: "Tiramisu",            price: 5.0, badge: "hot", desc: "Espresso, mascarpone, cocoa",             img: "img/tiramisu.jpg" },
  { id: 62, cat: "cake", emoji: "🍋", name: "Lemon Tart",          price: 4.8, badge: null,  desc: "Zingy curd, buttery pastry",              img: "img/lemon_tart.jpg" },
  { id: 63, cat: "cake", emoji: "🍫", name: "Choc Lava Cake",      price: 5.2, badge: "new", desc: "Warm, gooey center, vanilla ice",         img: "img/lava_cake.jpg" },
  { id: 64, cat: "cake", emoji: "🥕", name: "Carrot Cake",         price: 4.5, badge: null,  desc: "Spiced, cream cheese frosting",           img: "img/carrot_cake.jpg" },

  // ── BREAKFAST ───────────────────────────────────────────────
  { id: 70, cat: "breakfast", emoji: "🥑", name: "Avocado Toast",  price: 7.5,  badge: "hot", desc: "Sourdough, poached egg, chili",           img: "img/avocado_toast.jpg" },
  { id: 71, cat: "breakfast", emoji: "🍳", name: "Eggs Benedict",  price: 9.0,  badge: null,  desc: "Hollandaise, ham, muffin",                img: "img/eggs_benedict.jpg" },
  { id: 72, cat: "breakfast", emoji: "🍇", name: "Açaí Bowl",      price: 8.5,  badge: "new", desc: "Granola, fresh fruit, honey",             img: "img/acai_bowl.jpg" },
  { id: 73, cat: "breakfast", emoji: "🍽️", name: "Full English",  price: 11.0, badge: null,  desc: "Eggs, bacon, beans, toast",               img: "img/full_english.jpg" },
  { id: 74, cat: "breakfast", emoji: "🥞", name: "Pancake Stack",  price: 8.0,  badge: null,  desc: "3 fluffy pancakes, maple syrup",          img: "img/pancakes.jpg" },

  // ── SANDWICH ────────────────────────────────────────────────
  { id: 80, cat: "sandwich", emoji: "🥪", name: "Club Sandwich",    price: 8.5, badge: null,  desc: "Turkey, bacon, lettuce, tomato",          img: "img/club_sandwich.jpg" },
  { id: 81, cat: "sandwich", emoji: "🥖", name: "Caprese Panini",   price: 7.0, badge: null,  desc: "Mozzarella, tomato, pesto, basil",        img: "img/caprese_panini.jpg" },
  { id: 82, cat: "sandwich", emoji: "🌯", name: "BLT Wrap",         price: 7.5, badge: null,  desc: "Bacon, lettuce, tomato, mayo",            img: "img/blt_wrap.jpg" },
  { id: 83, cat: "sandwich", emoji: "🥪", name: "Tuna Melt",        price: 7.8, badge: "hot", desc: "Grilled tuna & cheese on sourdough",      img: "img/tuna_melt.jpg" },
  { id: 84, cat: "sandwich", emoji: "🌯", name: "Veggie Wrap",      price: 6.8, badge: "new", desc: "Hummus, roasted veggies, feta",           img: "img/veggie_wrap.jpg" },
];

// ── STATE ─────────────────────────────────────────────────────
let cart = {};
let activeCategory = "all";

// ── RENDER MENU ───────────────────────────────────────────────
function renderMenu(cat) {
  const grid  = document.getElementById("menuGrid");
  const title = document.getElementById("sectionTitle");
  const filtered = cat === "all" ? menu : menu.filter(i => i.cat === cat);
  const labels = {
    all: "Full Menu", coffee: "Coffee", tea: "Tea",
    frappe: "Frappé & Milkshakes", juice: "Fresh Juices",
    pastry: "Pastry & Baked Goods", cake: "Cakes & Desserts",
    breakfast: "Breakfast", sandwich: "Sandwiches & Wraps",
  };
  title.textContent = labels[cat] || "Menu";
  grid.innerHTML = filtered.map(item => `
    <div class="menu-card" onclick="addToCart(${item.id})">
      ${item.badge === "new" ? '<span class="badge-new">New</span>' : ""}
      ${item.badge === "hot" ? '<span class="badge-hot">🔥 Hot</span>' : ""}
      <div class="menu-card-img">
        <span class="img-fallback">${item.emoji}</span>
        <img
          src="${item.img}"
          alt="${item.name}"
          loading="lazy"
          onload="this.previousElementSibling.style.display='none'"
          onerror="this.style.display='none'"
        />
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <div class="menu-card-footer">
          <span class="menu-card-price">$${item.price.toFixed(2)}</span>
          <button class="add-btn" onclick="event.stopPropagation();addToCart(${item.id})">+</button>
        </div>
      </div>
    </div>
  `).join("");
}

// ── FILTER ────────────────────────────────────────────────────
function filterCat(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderMenu(cat);
}

// ── CART ──────────────────────────────────────────────────────
function addToCart(id) {
  const item = menu.find(m => m.id === id);
  if (!item) return;
  if (cart[id]) cart[id].qty++;
  else cart[id] = { item, qty: 1 };
  renderCart();
  showToast(`${item.emoji} ${item.name} added!`);
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  renderCart();
}

// ── RENDER CART (updates BOTH sidebar and drawer) ─────────────
function renderCart() {
  const entries = Object.values(cart);
  const totalQty = entries.reduce((s, e) => s + e.qty, 0);
  const subtotal  = entries.reduce((s, e) => s + e.item.price * e.qty, 0);
  const tax       = subtotal * 0.08;
  const service   = subtotal * 0.05;
  const total     = subtotal + tax + service;

  // ── badge
  document.getElementById("cartCount").textContent = totalQty;

  // ── mobile bottom bar
  const mctLabel = document.getElementById("mctLabel");
  const mctSub   = document.getElementById("mctSub");
  if (mctLabel) mctLabel.textContent = totalQty ? `${totalQty} item${totalQty > 1 ? "s" : ""}` : "0 items";
  if (mctSub)   mctSub.textContent   = `$${total.toFixed(2)} total`;

  const itemsHTML = entries.length
    ? entries.map(e => `
        <div class="order-item">
          <span class="oi-emoji">${e.item.emoji}</span>
          <span class="oi-name">${e.item.name}</span>
          <div class="qty-ctrl">
            <button class="qty-btn" onclick="changeQty(${e.item.id},-1)">−</button>
            <span class="qty-val">${e.qty}</span>
            <button class="qty-btn" onclick="changeQty(${e.item.id},1)">+</button>
          </div>
          <span class="oi-price">$${(e.item.price * e.qty).toFixed(2)}</span>
        </div>
      `).join("")
    : `<div class="empty-cart"><i class="fas fa-coffee"></i><p>Your order is empty.<br>Pick something delicious!</p></div>`;

  const countText = totalQty ? `${totalQty} item${totalQty > 1 ? "s" : ""} in order` : "No items yet";

  // ── Update SIDEBAR
  _updatePanel({
    items:    "orderItems",
    totals:   "orderTotals",
    btn:      "checkoutBtn",
    count:    "orderCount",
    sub:      "subtotalVal",
    tax:      "taxVal",
    svc:      "serviceVal",
    total:    "totalVal",
  }, entries, itemsHTML, countText, subtotal, tax, service, total);

  // ── Update DRAWER
  _updatePanel({
    items:    "drawerOrderItems",
    totals:   "drawerOrderTotals",
    btn:      "drawerCheckoutBtn",
    count:    "drawerOrderCount",
    sub:      "drawerSubtotalVal",
    tax:      "drawerTaxVal",
    svc:      "drawerServiceVal",
    total:    "drawerTotalVal",
  }, entries, itemsHTML, countText, subtotal, tax, service, total);
}

function _updatePanel(ids, entries, itemsHTML, countText, subtotal, tax, service, total) {
  const el = id => document.getElementById(id);
  if (!el(ids.items)) return;

  el(ids.items).innerHTML  = itemsHTML;
  el(ids.count).textContent = countText;
  el(ids.totals).style.display = entries.length ? "block" : "none";
  el(ids.btn).disabled = !entries.length;

  if (entries.length) {
    el(ids.sub).textContent   = `$${subtotal.toFixed(2)}`;
    el(ids.tax).textContent   = `$${tax.toFixed(2)}`;
    el(ids.svc).textContent   = `$${service.toFixed(2)}`;
    el(ids.total).textContent = `$${total.toFixed(2)}`;
  }
}

// ── DRAWER ────────────────────────────────────────────────────
function openDrawer() {
  // Only open drawer when sidebar is hidden (mobile/tablet)
  const sidebar = document.getElementById("orderPanel");
  if (sidebar && window.getComputedStyle(sidebar).display !== "none") return;

  document.getElementById("orderDrawer").classList.add("open");
  document.getElementById("drawerOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  document.getElementById("orderDrawer").classList.remove("open");
  document.getElementById("drawerOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

// Close drawer with Escape key
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeDrawer();
});

// ── INVOICE ───────────────────────────────────────────────────
function openInvoice() {
  // Merge customer/table from whichever panel is visible
  const sidebar = document.getElementById("orderPanel");
  const sidebarVisible = sidebar && window.getComputedStyle(sidebar).display !== "none";

  const customer = sidebarVisible
    ? (document.getElementById("customerName").value.trim() || document.getElementById("drawerCustomerName").value.trim())
    : (document.getElementById("drawerCustomerName").value.trim() || document.getElementById("customerName").value.trim());
  const tableNo = sidebarVisible
    ? (document.getElementById("tableNumber").value.trim() || document.getElementById("drawerTableNumber").value.trim())
    : (document.getElementById("drawerTableNumber").value.trim() || document.getElementById("tableNumber").value.trim());

  const entries  = Object.values(cart);
  const subtotal = entries.reduce((s, e) => s + e.item.price * e.qty, 0);
  const tax      = subtotal * 0.08;
  const service  = subtotal * 0.05;
  const total    = subtotal + tax + service;
  const now      = new Date();
  const invNo    = "INV-" + now.getFullYear()
    + String(now.getMonth() + 1).padStart(2, "0")
    + String(now.getDate()).padStart(2, "0")
    + "-" + String(Math.floor(Math.random() * 9000) + 1000);

  document.getElementById("invCustomer").textContent = customer || "Valued Guest";
  document.getElementById("invTable").textContent    = tableNo  || "—";
  document.getElementById("invDate").textContent     =
    now.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" }) +
    " · " + now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  document.getElementById("invNo").textContent       = invNo;

  document.getElementById("invItems").innerHTML = entries.map(e => `
    <tr>
      <td>${e.item.emoji} ${e.item.name}</td>
      <td style="text-align:center">${e.qty}</td>
      <td style="text-align:right">$${e.item.price.toFixed(2)}</td>
      <td style="text-align:right">$${(e.item.price * e.qty).toFixed(2)}</td>
    </tr>
  `).join("");

  document.getElementById("invSubtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("invTax").textContent      = `$${tax.toFixed(2)}`;
  document.getElementById("invService").textContent  = `$${service.toFixed(2)}`;
  document.getElementById("invTotal").textContent    = `$${total.toFixed(2)}`;

  closeDrawer();
  document.getElementById("invoiceModal").classList.add("show");
}

function closeInvoice() {
  document.getElementById("invoiceModal").classList.remove("show");
  cart = {};
  // Clear all inputs
  ["customerName","tableNumber","drawerCustomerName","drawerTableNumber"]
    .forEach(id => { const el = document.getElementById(id); if (el) el.value = ""; });
  renderCart();
}

// ── TOAST ─────────────────────────────────────────────────────
function showToast(msg) {
  const wrap = document.getElementById("toastWrap");
  const t    = document.createElement("div");
  t.className   = "toast";
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(() => t.remove(), 2100);
}

// ── INIT ──────────────────────────────────────────────────────
renderMenu("all");