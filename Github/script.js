/* ============================================================
   JOYERÍA ELEGANCE — script.js
   Catálogo por categorías + carrito + animaciones
   ============================================================ */

/* ---------- DATOS DE PRODUCTOS ---------- */
const PRODUCTS = [
  // ===== COLLARES =====
  { id:1, cat:'collares', name:'Collar Solara', price:129,
    images:['../img/collarsalara2.jpg','../img/collar.jpg','../img/collarsalara1.jpg'],
    variants:[
      {title:'Collar Solara', medida:'Cadena 45 cm + extensión 5 cm', material:'Bañado en oro / zirconias', colors:['blanco','rojo']},
      {title:'Collar Solara (Variante)', medida:'Dije 1.2 cm', material:'Bañado en oro rosa / zirconias', colors:['blanco']},
      {title:'Collar Solara (Variante)', medida:'Cadena 50 cm', material:'Plata 925 / zirconias', colors:['gris','blanco']}
    ]},
  { id:5, cat:'collares', name:'Collar Luna Llena', price:119,
    images:['../img/collarlunallena1.jpg','../img/collarlunallena2.jpg','../img/collarlunallena3.jpg'],
    variants:[
      {title:'Collar Luna Llena', medida:'Cadena 40 cm', material:'Plata 925 / nácar', colors:['gris','blanco']},
      {title:'Collar Luna Llena (Variante)', medida:'Cadena 42 cm', material:'Bañado en oro / nácar', colors:['blanco']},
      {title:'Collar Luna Llena (Variante)', medida:'Cadena 45 cm', material:'Acero dorado / nácar rosado', colors:['blanco','rojo']}
    ]},
  { id:9, cat:'collares', name:'Collar Cometa', price:115,
    images:['../img/cometa1.jpg','../img/cometa2.jpg','../img/cometa3.jpg'],
    variants:[
      {title:'Collar Cometa', medida:'Cadena 48 cm', material:'Bañado en oro / dije circonia', colors:['blanco']},
      {title:'Collar Cometa (Variante)', medida:'Cadena 46 cm', material:'Plata 925 / dije circonia azul', colors:['gris','azul']},
      {title:'Collar Cometa (Variante)', medida:'Cadena 50 cm', material:'Baño oro rosa / dije circonia rosa', colors:['rojo']}
    ]},
  { id:13, cat:'collares', name:'Collar Perla del Mar', price:149,
    images:['../img/perla1.jpg','../img/perla2.jpg','../img/perla3.jpg'],
    variants:[
      {title:'Collar Perla del Mar', medida:'Cadena 42 cm', material:'Plata 925 / perla cultivada', colors:['gris','blanco']},
      {title:'Collar Perla del Mar (Variante)', medida:'Cadena 44 cm', material:'Bañado en oro / perla cultivada', colors:['blanco']},
      {title:'Collar Perla del Mar (Variante)', medida:'Cadena 40 cm', material:'Baño oro rosa / perla barroca', colors:['rojo','blanco']}
    ]},
  { id:17, cat:'collares', name:'Collar Corazón Eterno', price:135,
    images:['../img/coraeterno1.jpg','../img/coraeterno2.jpg','../img/coraeterno3.jpg'],
    variants:[
      {title:'Collar Corazón Eterno', medida:'Cadena 43 cm + dije 1.5 cm', material:'Bañado en oro / circonia corazón', colors:['blanco','rojo']},
      {title:'Collar Corazón Eterno (Variante)', medida:'Cadena 45 cm', material:'Plata 925 / circonia corazón', colors:['gris','blanco']},
      {title:'Collar Corazón Eterno (Variante)', medida:'Cadena 41 cm', material:'Baño oro rosa / circonia corazón rosa', colors:['rojo']}
    ]},

  // ===== ARETES =====
  { id:2, cat:'aretes', name:'Aretes Nébula', price:79,
    images:['../img/aretesnebula1.jpg','../img/aretesnebula2.jpg','../img/aretesnebula3.jpg'],
    variants:[
      {title:'Aretes Nébula', medida:'4.5 cm', material:'Plata 925 / ópalos sintéticos', colors:['azul','blanco']},
      {title:'Aretes Nébula (Variante)', medida:'', material:'Acero inoxidable / cristal arcoíris', colors:['gris','azul','rojo']},
      {title:'Aretes Nébula (Variante)', medida:'', material:'Baño oro rosa / resina efecto cielo', colors:['blanco','azul']}
    ]},
  { id:6, cat:'aretes', name:'Aretes Estrella Fugaz', price:69,
    images:['../img/fugaz1.jpg','../img/fugaz2.jpg','../img/fugaz3.jpg'],
    variants:[
      {title:'Aretes Estrella Fugaz', medida:'3.8 cm', material:'Bañado en oro / circonias', colors:['blanco']},
      {title:'Aretes Estrella Fugaz (Variante)', medida:'3.2 cm', material:'Plata 925 / circonias', colors:['gris','blanco']},
      {title:'Aretes Estrella Fugaz (Variante)', medida:'4 cm', material:'Acero inoxidable / cristal azul', colors:['azul']}
    ]},
  { id:10, cat:'aretes', name:'Aretes Galaxia', price:75,
    images:['../img/galaxia1.jpg','../img/galaxia2.jpg','../img/galaxia3.jpg'],
    variants:[
      {title:'Aretes Galaxia', medida:'5 cm colgantes', material:'Plata 925 / cristal morado', colors:['gris','azul']},
      {title:'Aretes Galaxia (Variante)', medida:'4.5 cm', material:'Bañado en oro / cristal azul', colors:['blanco','azul']},
      {title:'Aretes Galaxia (Variante)', medida:'5.5 cm', material:'Acero inoxidable / cristal multicolor', colors:['gris','rojo','azul']}
    ]},
  { id:14, cat:'aretes', name:'Aretes Gota de Cristal', price:65,
    images:['../img/gota1.jpg','../img/gota2.jpg','../img/gota3.jpg'],
    variants:[
      {title:'Aretes Gota de Cristal', medida:'3.5 cm', material:'Bañado en oro / cristal transparente', colors:['blanco']},
      {title:'Aretes Gota de Cristal (Variante)', medida:'3 cm', material:'Plata 925 / cristal transparente', colors:['gris','blanco']},
      {title:'Aretes Gota de Cristal (Variante)', medida:'3.8 cm', material:'Acero dorado / cristal rosado', colors:['blanco','rojo']}
    ]},
  { id:18, cat:'aretes', name:'Aretes Aro Dorado', price:59,
    images:['../img/aro1.jpg','../img/aro2.jpg','../img/aro3.jpg'],
    variants:[
      {title:'Aretes Aro Dorado', medida:'Diámetro 2.5 cm', material:'Bañado en oro 18k', colors:['blanco']},
      {title:'Aretes Aro Dorado (Variante)', medida:'Diámetro 3.5 cm', material:'Bañado en oro 18k', colors:['blanco']},
      {title:'Aretes Aro Dorado (Variante)', medida:'Diámetro 2 cm', material:'Plata 925', colors:['gris']}
    ]},

  // ===== ANILLOS =====
  { id:3, cat:'anillos', name:'Anillo Aurora', price:99,
    images:['../img/anillo1.jpg','../img/anillo2.jpg','../img/anillo3.jpg'],
    variants:[
      {title:'Anillo Aurora', medida:'Ajustable talla 6-8', material:'Bañado en oro 18k / circonia central', colors:['blanco']},
      {title:'Anillo Aurora (Variante)', medida:'Talla 7 fija', material:'Plata 925 / circonia azul', colors:['gris','azul']},
      {title:'Anillo Aurora (Variante)', medida:'Ajustable', material:'Baño oro rosa / circonia rosa', colors:['blanco','rojo']}
    ]},
  { id:7, cat:'anillos', name:'Anillo Eclipse', price:109,
    images:['../img/eclipse1.jpg','../img/eclipse2.jpg','../img/eclipse3.jpg'],
    variants:[
      {title:'Anillo Eclipse', medida:'Talla 6', material:'Plata 925 / ónix negro', colors:['gris']},
      {title:'Anillo Eclipse (Variante)', medida:'Talla 7', material:'Bañado en oro / ónix negro', colors:['gris','blanco']},
      {title:'Anillo Eclipse (Variante)', medida:'Ajustable', material:'Baño oro rosa / madreperla', colors:['blanco']}
    ]},
  { id:11, cat:'anillos', name:'Anillo Zafiro Real', price:179,
    images:['../img/zafiro1.jpg','../img/zafiro2.jpg','../img/zafiro3.jpg'],
    variants:[
      {title:'Anillo Zafiro Real', medida:'Talla 6', material:'Bañado en oro blanco / zafiro sintético', colors:['blanco','azul']},
      {title:'Anillo Zafiro Real (Variante)', medida:'Talla 7', material:'Plata 925 / zafiro sintético', colors:['gris','azul']},
      {title:'Anillo Zafiro Real (Variante)', medida:'Ajustable', material:'Bañado en oro amarillo / zafiro sintético', colors:['blanco','azul']}
    ]},
  { id:15, cat:'anillos', name:'Anillo Trinity', price:159,
    images:['../img/trinity1.jpg','../img/trinity2.jpg','../img/trinity3.jpg'],
    variants:[
      {title:'Anillo Trinity', medida:'Talla 6', material:'Tres tonos: oro, oro rosa y plata', colors:['blanco','rojo','gris']},
      {title:'Anillo Trinity (Variante)', medida:'Talla 7', material:'Tres tonos: oro, oro rosa y plata', colors:['blanco','rojo','gris']},
      {title:'Anillo Trinity (Variante)', medida:'Ajustable', material:'Baño oro 18k liso', colors:['blanco']}
    ]},
  { id:19, cat:'anillos', name:'Anillo Flor de Loto', price:95,
    images:['../img/loto1.jpg','../img/loto2.jpg','../img/loto3.jpg'],
    variants:[
      {title:'Anillo Flor de Loto', medida:'Talla 6', material:'Plata 925 / esmalte blanco', colors:['gris','blanco']},
      {title:'Anillo Flor de Loto (Variante)', medida:'Talla 7', material:'Bañado en oro / esmalte blanco', colors:['blanco']},
      {title:'Anillo Flor de Loto (Variante)', medida:'Ajustable', material:'Baño oro rosa / esmalte rosa', colors:['rojo']}
    ]},

  // ===== PULSERAS =====
  { id:4, cat:'pulseras', name:'Pulsera Celeste', price:89,
    images:['../img/pulsera1.jpg','../img/pulsera2.jpg','../img/pulsera3.jpg'],
    variants:[
      {title:'Pulsera Celeste', medida:'18 cm + extensión 3 cm', material:'Plata 925 / dije luna', colors:['gris','blanco']},
      {title:'Pulsera Celeste (Variante)', medida:'19 cm', material:'Bañada en oro / dije estrella', colors:['blanco']},
      {title:'Pulsera Celeste (Variante)', medida:'17 cm ajustable', material:'Baño oro rosa / dije sol', colors:['rojo']}
    ]},
  { id:8, cat:'pulseras', name:'Pulsera Constelación', price:99,
    images:['../img/constelacion1.jpg','../img/constelacion2.jpg','../img/constelacion3.jpg'],
    variants:[
      {title:'Pulsera Constelación', medida:'17 cm + extensión 4 cm', material:'Plata 925 / puntos de circonia', colors:['gris','blanco']},
      {title:'Pulsera Constelación (Variante)', medida:'18 cm', material:'Bañada en oro / puntos de circonia', colors:['blanco']},
      {title:'Pulsera Constelación (Variante)', medida:'16 cm ajustable', material:'Acero dorado / cristal multicolor', colors:['rojo','azul','gris']}
    ]},
  { id:12, cat:'pulseras', name:'Pulsera Infinito', price:85,
    images:['../img/infinito1.jpg','../img/infinito2.jpg','../img/infinito3.jpg'],
    variants:[
      {title:'Pulsera Infinito', medida:'17 cm', material:'Plata 925 / dije infinito', colors:['gris']},
      {title:'Pulsera Infinito (Variante)', medida:'18 cm', material:'Bañada en oro / dije infinito', colors:['blanco']},
      {title:'Pulsera Infinito (Variante)', medida:'16.5 cm', material:'Baño oro rosa / dije infinito', colors:['rojo']}
    ]},
  { id:16, cat:'pulseras', name:'Pulsera Tenis Brillante', price:169,
    images:['../img/tenis1.jpg','../img/tenis2.jpg','../img/tenis3.jpg'],
    variants:[
      {title:'Pulsera Tenis Brillante', medida:'18 cm', material:'Plata 925 / circonias en línea', colors:['gris','blanco']},
      {title:'Pulsera Tenis Brillante (Variante)', medida:'19 cm', material:'Bañada en oro / circonias en línea', colors:['blanco']},
      {title:'Pulsera Tenis Brillante (Variante)', medida:'17.5 cm', material:'Baño oro blanco / circonias en línea', colors:['blanco']}
    ]},
  { id:20, cat:'pulseras', name:'Pulsera Dijes Charm', price:89,
    images:['../img/charm1.jpg','../img/charm2.jpg','../img/charm3.jpg'],
    variants:[
      {title:'Pulsera Dijes Charm', medida:'19 cm + extensión 3 cm', material:'Plata 925 / dijes variados', colors:['gris','blanco','rojo']},
      {title:'Pulsera Dijes Charm (Variante)', medida:'18 cm', material:'Bañada en oro / dijes variados', colors:['blanco']},
      {title:'Pulsera Dijes Charm (Variante)', medida:'20 cm', material:'Acero dorado / dijes multicolor', colors:['rojo','azul','gris']}
    ]}
];

const CATEGORIAS = [
  { key:'collares', label:'Collares', eyebrow:'Cadenas & dijes' },
  { key:'aretes',   label:'Aretes',   eyebrow:'Para cada look' },
  { key:'anillos',  label:'Anillos',  eyebrow:'El detalle final' },
  { key:'pulseras', label:'Pulseras', eyebrow:'Para el día a día' }
];

const NUMERO_WHATSAPP = '51966376986';

/* ---------- MONEDA Y TIPO DE CAMBIO ---------- */
const EXCHANGE_API = 'https://open.er-api.com/v6/latest/PEN';
let currentCurrency = 'PEN';      // 'PEN' o 'USD'
let usdRate = 0.27;               // PEN -> USD (aproximado, se reemplaza con dato real)
let rateIsLive = false;

function currencySymbol(){
  return currentCurrency === 'USD' ? 'US$' : 'S/';
}

function convertPrice(penAmount){
  return currentCurrency === 'USD' ? penAmount * usdRate : penAmount;
}

function formatPrecio(penAmount){
  return `${currencySymbol()} ${convertPrice(penAmount).toFixed(2)}`;
}

async function fetchExchangeRate(){
  try{
    const res = await fetch(EXCHANGE_API);
    const data = await res.json();
    if (data && data.result === 'success' && data.rates && data.rates.USD){
      usdRate = data.rates.USD;
      rateIsLive = true;
    }
  }catch(e){
    rateIsLive = false;
  }
  updateRateBadge();
  refreshCardPrices();
  renderCart();
}

function updateRateBadge(){
  const badge = document.getElementById('monedaBadge');
  if (!badge) return;
  const usdPerSol = (1 / usdRate).toFixed(2);
  badge.textContent = rateIsLive
    ? `Tipo de cambio actual: 1 US$ ≈ S/ ${usdPerSol}`
    : `Tipo de cambio aproximado: 1 US$ ≈ S/ ${usdPerSol}`;
}

function refreshCardPrices(){
  document.querySelectorAll('.price-row[data-price-pen]').forEach(row => {
    const pen = parseFloat(row.dataset.pricePen);
    row.querySelector('.price-currency').textContent = currencySymbol();
    row.querySelector('.price-amount').textContent = convertPrice(pen).toFixed(2);
  });
}

function setCurrency(currency){
  if (currency === currentCurrency) return;
  currentCurrency = currency;
  document.querySelectorAll('.currency-btn').forEach(b => b.classList.toggle('active', b.dataset.currency === currency));
  refreshCardPrices();
  renderCart();
  updateRateBadge();
}

/* ---------- CARRITO ---------- */
let cart = []; // {id, qty}

function getProduct(id){
  return PRODUCTS.find(p => p.id === id);
}

function addToCart(id, qty){
  qty = qty || 1;
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty });
  renderCart();
  openCart();
}

function removeFromCart(id){
  cart = cart.filter(i => i.id !== id);
  renderCart();
}

function changeCartQty(id, delta){
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else renderCart();
}

function clearCart(){
  cart = [];
  renderCart();
}

function cartTotal(){
  return cart.reduce((sum, i) => {
    const p = getProduct(i.id);
    return sum + (p ? p.price * i.qty : 0);
  }, 0);
}

function cartCount(){
  return cart.reduce((sum, i) => sum + i.qty, 0);
}

function renderCart(){
  const itemsEl = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  const countEl = document.getElementById('cartCount');
  const checkoutBtn = document.getElementById('cartCheckout');

  countEl.textContent = cartCount();

  if (cart.length === 0){
    itemsEl.innerHTML = '<p class="cart-empty">Tu joyero está vacío por ahora. Explora el catálogo y añade tus piezas favoritas ✧</p>';
    totalEl.textContent = formatPrecio(0);
    checkoutBtn.disabled = true;
    return;
  }

  checkoutBtn.disabled = false;
  itemsEl.innerHTML = cart.map(item => {
    const p = getProduct(item.id);
    if (!p) return '';
    return `
      <div class="cart-item">
        <img src="${p.images[0]}" alt="${p.name}">
        <div class="cart-item-info">
          <h5>${p.name}</h5>
          <div class="cart-item-price">${formatPrecio(p.price)} c/u</div>
          <div class="cart-item-qty">
            <button onclick="changeCartQty(${p.id}, -1)" aria-label="Quitar uno">−</button>
            <span>${item.qty}</span>
            <button onclick="changeCartQty(${p.id}, 1)" aria-label="Añadir uno">+</button>
            <button class="cart-item-remove" onclick="removeFromCart(${p.id})">Eliminar</button>
          </div>
        </div>
      </div>`;
  }).join('');

  totalEl.textContent = formatPrecio(cartTotal());
}

function openCart(){
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').setAttribute('aria-hidden', 'false');
}
function closeCart(){
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').setAttribute('aria-hidden', 'true');
}

function checkoutWhatsApp(){
  if (cart.length === 0) return;
  let mensaje = 'Hola, quiero hacer el siguiente pedido:%0A%0A';
  cart.forEach(item => {
    const p = getProduct(item.id);
    if (!p) return;
    mensaje += `• ${p.name} x${item.qty} — ${formatPrecio(p.price * item.qty)}%0A`;
  });
  mensaje += `%0ATotal: ${formatPrecio(cartTotal())}`;
  const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensaje}`;
  window.open(url, '_blank');
}

/* ---------- RENDER DEL CATÁLOGO ---------- */
const WHATSAPP_ICON = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"></path></svg>`;

function colorDots(colors){
  return colors.map(c => `<div class="color-dot color-${c}" title="${c}"></div>`).join('');
}

function buildCard(p){
  const imgsHtml = p.images.map(src => `
    <div class="card-carousel-item"><img loading="lazy" src="${src}" alt="${p.name}"></div>`).join('');
  const dotsHtml = p.images.map((_, i) => `<span class="card-carousel-dot ${i===0?'active':''}"></span>`).join('');
  const infoHtml = p.variants.map((v, i) => `
    <div class="card-info-item ${i===0?'active':''}">
      <h4>${v.title}</h4>
      ${v.medida ? `<p class="meta">Medidas: ${v.medida}</p>` : ''}
      <p class="meta">Material: ${v.material}</p>
      <div class="colors"><span class="label">Colores:</span>${colorDots(v.colors)}</div>
    </div>`).join('');

  return `
    <div class="card" data-id="${p.id}">
      <div class="card-carousel">
        <div class="card-carousel-inner">${imgsHtml}</div>
        <button class="card-carousel-btn prev" aria-label="Anterior">‹</button>
        <button class="card-carousel-btn next" aria-label="Siguiente">›</button>
        <div class="card-carousel-dots">${dotsHtml}</div>
      </div>
      <div class="info">
        ${infoHtml}
        <div class="price-row" data-price-pen="${p.price}">
          <span class="price-currency">${currencySymbol()}</span>
          <span class="price-amount">${convertPrice(p.price).toFixed(2)}</span>
        </div>
        <div class="qty-row">
          <button class="qty-minus" aria-label="Reducir cantidad">−</button>
          <span class="qty-value">1</span>
          <button class="qty-plus" aria-label="Aumentar cantidad">+</button>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn-add">Agregar al carrito</button>
        <button class="btn-whatsapp btn-consultar">${WHATSAPP_ICON} Consultar</button>
      </div>
    </div>`;
}

function renderCatalogo(){
  const cont = document.getElementById('catalogo');
  cont.innerHTML = CATEGORIAS.map(cat => {
    const items = PRODUCTS.filter(p => p.cat === cat.key);
    return `
      <div class="categoria" id="${cat.key}">
        <div class="categoria-head">
          <span class="cat-eyebrow">${cat.eyebrow}</span>
          <h3>${cat.label}</h3>
          <span class="cat-count">${items.length} piezas</span>
        </div>
        <div class="grid">
          ${items.map(buildCard).join('')}
        </div>
      </div>`;
  }).join('');

  attachCardEvents();
}

/* ---------- INTERACCIÓN DE TARJETAS ---------- */
function attachCardEvents(){
  document.querySelectorAll('.card').forEach(card => {
    const id = parseInt(card.dataset.id, 10);
    const qtyValue = card.querySelector('.qty-value');

    card.querySelector('.qty-plus').addEventListener('click', () => {
      qtyValue.textContent = parseInt(qtyValue.textContent, 10) + 1;
    });
    card.querySelector('.qty-minus').addEventListener('click', () => {
      const v = parseInt(qtyValue.textContent, 10);
      if (v > 1) qtyValue.textContent = v - 1;
    });
    card.querySelector('.btn-add').addEventListener('click', () => {
      addToCart(id, parseInt(qtyValue.textContent, 10));
      qtyValue.textContent = '1';
    });
    card.querySelector('.btn-consultar').addEventListener('click', () => {
      const p = getProduct(id);
      const activeIdx = [...card.querySelectorAll('.card-info-item')].findIndex(el => el.classList.contains('active'));
      const variant = p.variants[activeIdx >= 0 ? activeIdx : 0];
      const mensaje = encodeURIComponent(`Hola, estoy interesado en: ${variant.title}${variant.medida ? ' - ' + variant.medida : ''}. ¿Podrías darme más información?`);
      window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${mensaje}`, '_blank');
    });
    card.querySelector('.card-carousel-btn.prev').addEventListener('click', () => changeCardSlide(card, -1));
    card.querySelector('.card-carousel-btn.next').addEventListener('click', () => changeCardSlide(card, 1));
    card.querySelectorAll('.card-carousel-dot').forEach((dot, idx) => {
      dot.addEventListener('click', () => goToCardSlide(card, idx));
    });

    startCardAutoPlay(card);
    card.addEventListener('mouseenter', () => stopCardAutoPlay(card));
    card.addEventListener('mouseleave', () => startCardAutoPlay(card));
  });
}

function getCardIndex(card){
  const dots = card.querySelectorAll('.card-carousel-dot');
  let idx = 0;
  dots.forEach((d,i) => { if (d.classList.contains('active')) idx = i; });
  return idx;
}

function setCardSlide(card, index){
  const inner = card.querySelector('.card-carousel-inner');
  const items = card.querySelectorAll('.card-carousel-item');
  const dots = card.querySelectorAll('.card-carousel-dot');
  const infoItems = card.querySelectorAll('.card-info-item');
  const total = items.length;
  if (index >= total) index = 0;
  if (index < 0) index = total - 1;

  inner.style.transform = `translateX(${-index * 100}%)`;
  dots.forEach((d,i) => d.classList.toggle('active', i === index));
  infoItems.forEach((el,i) => el.classList.toggle('active', i === index));
}

function changeCardSlide(card, direction){
  setCardSlide(card, getCardIndex(card) + direction);
}
function goToCardSlide(card, index){
  setCardSlide(card, index);
}

const cardIntervals = new Map();
function startCardAutoPlay(card){
  const items = card.querySelectorAll('.card-carousel-item');
  if (items.length > 1 && !cardIntervals.has(card)){
    const interval = setInterval(() => changeCardSlide(card, 1), 4200);
    cardIntervals.set(card, interval);
  }
}
function stopCardAutoPlay(card){
  if (cardIntervals.has(card)){
    clearInterval(cardIntervals.get(card));
    cardIntervals.delete(card);
  }
}

/* ---------- CARRUSEL PRINCIPAL (HERO) ---------- */
let currentSlide = 0;
let autoSlideInterval;

function showSlide(index){
  const slides = document.querySelectorAll('.carousel-item');
  const indicators = document.querySelectorAll('.indicator');
  const total = slides.length;
  if (index >= total) currentSlide = 0;
  else if (index < 0) currentSlide = total - 1;
  else currentSlide = index;

  document.querySelector('.carousel-inner').style.transform = `translateX(${-currentSlide * 100}%)`;
  indicators.forEach((ind, i) => ind.classList.toggle('active', i === currentSlide));
}
function nextSlide(){ showSlide(currentSlide + 1); resetAutoSlide(); }
function previousSlide(){ showSlide(currentSlide - 1); resetAutoSlide(); }
function goToSlide(index){ showSlide(index); resetAutoSlide(); }
function startAutoSlide(){ autoSlideInterval = setInterval(() => showSlide(currentSlide + 1), 5000); }
function resetAutoSlide(){ clearInterval(autoSlideInterval); startAutoSlide(); }

/* ---------- BOTÓN VOLVER AL INICIO ---------- */
function irAlInicio(){
  const target = document.querySelector('#inicio');
  if (!target) return;
  const navHeight = document.querySelector('nav').offsetHeight;
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
}

/* ---------- LLUVIA DE CORAZONES Y FLORES ---------- */
function crearLluviaDePiezas(cantidad){
  const contenedor = document.getElementById('lluviaContainer');
  const formas = [
    // corazón
    `<svg viewBox="0 0 32 29" width="34" height="31"><path fill="currentColor" d="M16 28.5S1 19.6 1 9.9C1 4.9 4.9 1 9.7 1c2.8 0 5.4 1.4 6.3 3.6C17 2.4 19.6 1 22.4 1 27.2 1 31 4.9 31 9.9c0 9.7-15 18.6-15 18.6z"/></svg>`,
    // flor
    `<svg viewBox="0 0 40 40" width="34" height="34"><g fill="currentColor"><circle cx="20" cy="10" r="7"/><circle cx="30" cy="20" r="7"/><circle cx="20" cy="30" r="7"/><circle cx="10" cy="20" r="7"/><circle cx="20" cy="20" r="5" fill="#fff" opacity=".5"/></g></svg>`
  ];
  const colores = ['#D9A97A', '#A6274C', '#F3D9E4', '#C9A227'];

  for (let i = 0; i < cantidad; i++){
    const pieza = document.createElement('div');
    pieza.className = 'pieza-flotante';
    pieza.style.left = Math.random() * 100 + '%';
    pieza.style.color = colores[Math.floor(Math.random() * colores.length)];
    pieza.innerHTML = formas[Math.floor(Math.random() * formas.length)];

    const escala = (Math.random() * 0.9 + 0.7).toFixed(2); // 0.7 a 1.6
    pieza.style.transform = `scale(${escala})`;

    const duracion = (Math.random() * 8 + 14).toFixed(2); // 14s a 22s -> lento
    const retraso = (Math.random() * 18).toFixed(2);       // 0s a 18s
    pieza.style.animationDuration = duracion + 's';
    pieza.style.animationDelay = retraso + 's';

    contenedor.appendChild(pieza);
  }
}

/* ---------- INICIALIZACIÓN ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderCatalogo();
  renderCart();
  updateRateBadge();
  fetchExchangeRate();
  startAutoSlide();
  crearLluviaDePiezas(18);

  document.querySelectorAll('.currency-btn').forEach(btn => {
    btn.addEventListener('click', () => setCurrency(btn.dataset.currency));
  });

  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target){
        const navHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  window.addEventListener('scroll', () => {
    const btnInicio = document.getElementById('btnInicio');
    if (window.pageYOffset > 300) btnInicio.classList.add('visible');
    else btnInicio.classList.remove('visible');
  });

  document.getElementById('cartFab').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  document.getElementById('cartClear').addEventListener('click', clearCart);
  document.getElementById('cartCheckout').addEventListener('click', checkoutWhatsApp);
});