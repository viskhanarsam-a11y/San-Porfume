const sellerPhone = "79287352134";
const telegramLink = "https://t.me/";

const products = [
  {
    id: "platine-blanc-aromatix",
    name: "Platine Blanc Aromatix X French Avenue",
    brand: "Aromatix X French Avenue",
    volume: "125 мл",
    price: "Цена по запросу",
    status: "В наличии",
    available: true,
    image: "Фото/platine-blanc-aromatix.avif",
    description:
      "Свежий мужской и женский аромат с фужерным характером, цитрусовым стартом, зеленой прохладой и древесной базой. Подойдет тем, кто любит чистые, заметные и современные композиции.",
    accords: [
      { name: "фужерный", color: "#3BB8A3", strength: 100 },
      { name: "цитрусовый", color: "#F4F34A", strength: 92 },
      { name: "зеленый", color: "#14A51E", strength: 78 },
      { name: "свежий пряный", color: "#6DA327", strength: 68 },
      { name: "древесный", color: "#7B522D", strength: 52 },
      { name: "фруктовый", color: "#A63A31", strength: 42 },
    ],
  },
  {
    id: "altair-spirit-of-kings",
    name: "Altair Spirit of Kings",
    brand: "Spirit of Kings",
    volume: "100 мл",
    price: "Цена по запросу",
    status: "В наличии",
    available: true,
    image: "Фото/altair-spirit-of-kings.jpg",
    description:
      "Роскошный унисекс-аромат с цитрусами, черной смородиной, белыми цветами, амброй, ванилью, мускусом и древесной базой. Подойдет тем, кто любит теплые, заметные и благородные композиции.",
    accords: [
      { name: "цитрусовый", color: "#D7A04C", strength: 100 },
      { name: "цветочный", color: "#B87A63", strength: 88 },
      { name: "амбровый", color: "#8A4F2B", strength: 78 },
      { name: "ванильный", color: "#C49B69", strength: 66 },
      { name: "древесный", color: "#5A3322", strength: 58 },
    ],
  },
  {
    id: "sauvage-edp",
    name: "Dior Sauvage EDP",
    brand: "Dior",
    volume: "125 мл",
    price: "Цена по запросу",
    status: "Нет в наличии",
    available: false,
    image: "",
    description:
      "Яркий свежий аромат с пряным звучанием, амбровой глубиной и древесной базой. Хороший пример карточки для товара, который можно добавить по названию.",
    accords: [
      { name: "свежий пряный", color: "#78A641", strength: 100 },
      { name: "амбровый", color: "#B7762F", strength: 86 },
      { name: "цитрусовый", color: "#F0DD4F", strength: 76 },
      { name: "древесный", color: "#7B522D", strength: 64 },
      { name: "мускусный", color: "#D7D0C1", strength: 52 },
    ],
  },
  {
    id: "lost-cherry",
    name: "Tom Ford Lost Cherry",
    brand: "Tom Ford",
    volume: "125 мл",
    price: "Цена по запросу",
    status: "Нет в наличии",
    available: false,
    image: "",
    description:
      "Густой сладкий аромат с вишневым акцентом, миндальной мягкостью и теплой пряной базой. Можно использовать как шаблон для будущего товара.",
    accords: [
      { name: "вишневый", color: "#9B1F32", strength: 100 },
      { name: "сладкий", color: "#D85B7A", strength: 88 },
      { name: "миндальный", color: "#D4A76A", strength: 74 },
      { name: "фруктовый", color: "#B64238", strength: 66 },
      { name: "теплый пряный", color: "#9C6738", strength: 54 },
    ],
  },
];

const grid = document.querySelector("#product-grid");
const modal = document.querySelector("#product-modal");
const modalImage = document.querySelector("#modal-image");
const modalBrand = document.querySelector("#modal-brand");
const modalTitle = document.querySelector("#modal-title");
const modalVolume = document.querySelector("#modal-volume");
const modalPrice = document.querySelector("#modal-price");
const modalStatus = document.querySelector("#modal-status");
const modalDescription = document.querySelector("#modal-description");
const modalAccords = document.querySelector("#modal-accords");
const modalWhatsapp = document.querySelector("#modal-whatsapp");
const modalTelegram = document.querySelector("#modal-telegram");

function placeholderImage(name) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 800">
      <rect width="640" height="800" fill="#e9dfd0"/>
      <rect x="190" y="140" width="260" height="470" rx="34" fill="#fffaf1" stroke="#c8a96a" stroke-width="10"/>
      <rect x="260" y="82" width="120" height="90" rx="18" fill="#c8a96a"/>
      <path d="M225 250h190v220H225z" fill="#111111" opacity=".08"/>
      <text x="320" y="386" text-anchor="middle" font-family="Arial" font-size="68" font-weight="700" fill="#6e1f2b">${initials}</text>
      <text x="320" y="706" text-anchor="middle" font-family="Arial" font-size="32" font-weight="700" fill="#1e1e1e">San Porfume</text>
    </svg>
  `)}`;
}

function textColorFor(hex) {
  const color = hex.replace("#", "");
  const r = parseInt(color.slice(0, 2), 16);
  const g = parseInt(color.slice(2, 4), 16);
  const b = parseInt(color.slice(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 150 ? "#17120b" : "#ffffff";
}

function accordBars(accords, limit = accords.length) {
  return accords
    .slice(0, limit)
    .map(
      (accord) => `
        <div
          class="accord-bar"
          style="--width: ${accord.strength}%; --bar-color: ${accord.color}; --text-color: ${textColorFor(accord.color)}"
        >
          ${accord.name}
        </div>
      `,
    )
    .join("");
}

function contactMessage(productName) {
  return encodeURIComponent(`Здравствуйте! Хочу узнать про парфюм ${productName}.`);
}

function productCard(product) {
  const image = product.image || placeholderImage(product.name);
  const statusClass = product.available ? "" : " out";

  return `
    <article class="product-card">
      <div class="product-image">
        <img src="${image}" alt="${product.name}" />
        <span class="product-status${statusClass}">${product.status}</span>
      </div>
      <div>
        <h3>${product.name}</h3>
        <div class="product-info-row">
          <span class="product-chip">${product.volume}</span>
          <span class="product-chip">${product.price}</span>
        </div>
        <p>${product.description}</p>
        <div class="accord-preview" aria-label="Основные аккорды">
          ${accordBars(product.accords, 3)}
        </div>
      </div>
      <button class="button" type="button" data-product-id="${product.id}">Подробнее</button>
    </article>
  `;
}

function renderProducts() {
  grid.innerHTML = products.map(productCard).join("");
}

function openProduct(productId) {
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return;
  }

  modalImage.src = product.image || placeholderImage(product.name);
  modalImage.alt = product.name;
  modalBrand.textContent = product.brand;
  modalTitle.textContent = product.name;
  modalVolume.textContent = product.volume;
  modalPrice.textContent = product.price;
  modalStatus.textContent = product.status;
  modalDescription.textContent = product.description;
  modalAccords.className = "accord-list";
  modalAccords.innerHTML = accordBars(product.accords);

  const message = contactMessage(product.name);
  modalWhatsapp.href = `https://wa.me/${sellerPhone}?text=${message}`;
  modalTelegram.href = telegramLink;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

renderProducts();

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product-id]");
  if (button) {
    openProduct(button.dataset.productId);
  }
});

modal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-modal]")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});
