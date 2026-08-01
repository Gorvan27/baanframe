/* ============================================================
   DJ Shop — заказы через LINE / Facebook
   ------------------------------------------------------------
   ВАЖНО: когда получите LINE Official Account, впишите
   LINE_ID ниже (например "@djshop" — со знаком @).
   Всё остальное подхватится автоматически.
   ============================================================ */
const SHOP = {
  LINE_ID: "@724hqotw",                          // LINE OA — DJ Shop
  FB_PAGE_ID: "61554799322520",                  // страница DJ Shop
  FB_URL: "https://www.facebook.com/share/19SeNPXHiD/",
  PHONE: "0943427274",
  // Пока домен pattayacustomprint.com не куплен — ссылки в заказе ведут на рабочий адрес.
  // После покупки домена вернуть "https://pattayacustomprint.com"
  SITE: "https://gorvan27.github.io/baanframe",
  MAIL_USER: "danitaseenark",
  MAIL_HOST: "gmail.com"
};

const L = () => (window.DJLANG || "th");
const T = {
  th: {
    hi: "สวัสดีค่ะ สนใจสั่งทำสินค้านี้ค่ะ",
    item: "สินค้า", price: "ราคา", qty: "จำนวน", size: "ขนาด",
    style: "สไตล์กรอบ", mat: "สีขอบใน", link: "ลิงก์",
    pcs: "ชิ้น",
    copied: "คัดลอกข้อความสั่งซื้อแล้ว — วางในแชทได้เลย",
    saved: "บันทึกรูปตัวอย่างแล้ว — แนบในแชทได้เลย",
    qtyLabel: "จำนวน"
  },
  en: {
    hi: "Hello! I'd like to order this item",
    item: "Item", price: "Price", qty: "Qty", size: "Size",
    style: "Frame style", mat: "Mat colour", link: "Link",
    pcs: "pcs",
    copied: "Order text copied — just paste it in the chat",
    saved: "Preview saved — attach it in the chat",
    qtyLabel: "Qty"
  }
};
const t_ = k => (T[L()] || T.th)[k];

/* ---------- ссылка на чат ---------- */
function chatUrl(text) {
  if (SHOP.LINE_ID) {
    const id = SHOP.LINE_ID.replace(/^@/, "");
    return text
      ? `https://line.me/R/oaMessage/@${id}/?${encodeURIComponent(text)}`
      : `https://line.me/R/ti/p/@${id}`;
  }
  // Messenger не умеет подставлять текст, но m.me открывает диалог сразу
  return SHOP.FB_PAGE_ID ? `https://m.me/${SHOP.FB_PAGE_ID}` : SHOP.FB_URL;
}

/* ---------- копирование в буфер ---------- */
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      return ok;
    } catch (e2) { return false; }
  }
}

/* ---------- всплывающее подтверждение ---------- */
function toast(msg) {
  let el = document.querySelector(".dj-toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "dj-toast";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("show"), 3200);
}

/* ---------- текст заказа из карточки ---------- */
function orderText(card) {
  const name = card.querySelector("h3")?.textContent.trim() || "";
  const sub = card.querySelector(".en")?.textContent.trim() || "";
  const priceEl = card.querySelector(".price-lg");
  const price = priceEl ? priceEl.textContent.replace(/\s+/g, " ").trim() : "";
  const qtyEl = card.querySelector(".qty-val");
  const qty = qtyEl ? qtyEl.textContent.trim() : "1";
  const sizeEl = card.querySelector(".size-btn.on");
  const size = sizeEl ? sizeEl.dataset.s : "";
  const id = card.id || card.dataset.cat || "";
  const link = `${SHOP.SITE}/shop.html${id ? "#" + id : ""}`;

  const lines = [
    t_("hi"),
    "",
    `${t_("item")}: ${name}${sub ? " (" + sub + ")" : ""}`,
    ...(size ? [`${t_("size")}: ${size}`] : []),
    `${t_("price")}: ${price}`,
    `${t_("qty")}: ${qty} ${t_("pcs")}`,
    `${t_("link")}: ${link}`
  ];
  return lines.join("\n");
}

/* ---------- текст заказа из Design Studio ---------- */
function studioText() {
  const on = sel => document.querySelector(sel)?.textContent.trim() || "";
  const style = on("#styles .chip.on");
  const size = on("#sizes .chip.on");
  const matEl = document.querySelector("#mats .sw.on");
  const mat = matEl ? matEl.dataset.m : "";
  return [
    t_("hi"),
    "",
    `${t_("style")}: ${style}`,
    `${t_("mat")}: ${mat}`,
    `${t_("size")}: ${size}`,
    `${t_("link")}: ${SHOP.SITE}/studio.html`
  ].join("\n");
}

/* ---------- открыть чат: скопировать + перейти ---------- */
async function goToChat(text) {
  if (text) {
    const ok = await copyText(text);
    if (ok) toast(t_("copied"));
  }
  setTimeout(() => window.open(chatUrl(text), "_blank", "noopener"), 350);
}

/* ---------- селектор размеров: data-sizes='[{"s":"20×60 ซม.","p":299}]' ---------- */
function addSizeControls(card) {
  const raw = card.dataset.sizes;
  if (!raw || card.querySelector(".sizes")) return;
  let list;
  try { list = JSON.parse(raw); } catch (e) { return; }
  if (!Array.isArray(list) || !list.length) return;

  const priceEl = card.querySelector(".price-lg");
  const box = document.createElement("div");
  box.className = "sizes";
  list.forEach((v, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "size-btn";
    b.dataset.s = v.s;
    b.dataset.p = v.p;
    b.textContent = v.s;
    box.appendChild(b);
  });
  priceEl.parentNode.insertBefore(box, priceEl);

  const min = Math.min(...list.map(v => v.p));
  const fromWord = () => (typeof I18N !== "undefined" && I18N[L()] ? I18N[L()]["price.startAt"] : "from");
  const render = (price, withFrom) => {
    priceEl.innerHTML =
      (withFrom ? `<span class="from">${fromWord()}</span>` : "") +
      `<span class="cur">฿</span>${price.toLocaleString("en-US")}`;
    priceEl.classList.remove("changed");
    void priceEl.offsetWidth;
    priceEl.classList.add("changed");
  };
  render(min, true);

  box.addEventListener("click", e => {
    const b = e.target.closest(".size-btn");
    if (!b) return;
    e.preventDefault();
    box.querySelectorAll(".size-btn").forEach(x => x.classList.remove("on"));
    b.classList.add("on");
    render(Number(b.dataset.p), false);
  });
}

/* ---------- счётчик количества в карточке ---------- */
function addQtyControls(card) {
  const buy = card.querySelector(".btn-buy");
  if (!buy || card.querySelector(".qty")) return;
  const box = document.createElement("div");
  box.className = "qty";
  box.innerHTML =
    '<button type="button" class="qty-btn" data-d="-1" aria-label="minus">−</button>' +
    '<span class="qty-val">1</span>' +
    '<button type="button" class="qty-btn" data-d="1" aria-label="plus">+</button>';
  buy.parentNode.insertBefore(box, buy);
  box.addEventListener("click", e => {
    const b = e.target.closest(".qty-btn");
    if (!b) return;
    e.preventDefault();
    const v = box.querySelector(".qty-val");
    const next = Math.min(99, Math.max(1, parseInt(v.textContent, 10) + Number(b.dataset.d)));
    v.textContent = next;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  /* 1. карточки товаров: счётчик + кнопка заказа */
  document.querySelectorAll(".card").forEach(card => {
    addSizeControls(card);
    if (card.querySelector(".btn-buy")) addQtyControls(card);
  });
  document.querySelectorAll(".btn-buy").forEach(btn => {
    const card = btn.closest(".card");
    btn.setAttribute("rel", "noopener noreferrer");
    btn.addEventListener("click", e => {
      e.preventDefault();
      goToChat(card ? orderText(card) : "");
    });
  });

  /* 2. кнопка отправки дизайна из Studio */
  const send = document.getElementById("send");
  if (send) {
    send.addEventListener("click", e => {
      e.preventDefault();
      e.stopImmediatePropagation();
      const img = document.getElementById("img");
      if (img && img.style.display !== "none" && img.src) downloadPreview();
      goToChat(studioText());
    }, true);
  }

  /* 3. общие LINE-ссылки */
  document.querySelectorAll('.btn-line, .chat, a.cta[href="#"], .socials a.line, #ai-cta').forEach(el => {
    if (el.id === "send") return;
    el.setAttribute("href", chatUrl(""));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  /* 4. безопасность внешних ссылок */
  document.querySelectorAll('a[target="_blank"]').forEach(a =>
    a.setAttribute("rel", "noopener noreferrer"));

  /* 5. email собирается в браузере */
  document.querySelectorAll("[data-mail]").forEach(el => {
    const addr = SHOP.MAIL_USER + "@" + SHOP.MAIL_HOST;
    el.textContent = addr;
    if (el.tagName === "A") el.setAttribute("href", "mailto:" + addr);
  });
});

/* ---------- сохранить превью рамки картинкой ---------- */
function downloadPreview() {
  const img = document.getElementById("img");
  const frame = document.getElementById("frame");
  const mat = document.getElementById("mat");
  if (!img || !img.src || img.style.display === "none") return;

  const cs = getComputedStyle(frame);
  const border = parseInt(cs.borderTopWidth, 10) || 14;
  const borderColor = cs.borderTopColor || "#B3536F";
  const matPad = parseInt(getComputedStyle(mat).paddingTop, 10) || 18;
  const matColor = getComputedStyle(mat).backgroundColor || "#fff";

  const src = new Image();
  src.onload = () => {
    const scale = Math.min(1200 / src.width, 1400 / src.height, 2);
    const w = Math.round(src.width * scale), h = Math.round(src.height * scale);
    const b = Math.round(border * scale * 2), m = Math.round(matPad * scale * 2);
    const cv = document.createElement("canvas");
    cv.width = w + (b + m) * 2;
    cv.height = h + (b + m) * 2;
    const c = cv.getContext("2d");
    c.fillStyle = borderColor; c.fillRect(0, 0, cv.width, cv.height);
    c.fillStyle = matColor; c.fillRect(b, b, cv.width - b * 2, cv.height - b * 2);
    c.drawImage(src, b + m, b + m, w, h);
    cv.toBlob(blob => {
      if (!blob) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "dj-shop-design.png";
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 4000);
      toast(t_("saved"));
    }, "image/png");
  };
  src.src = img.src;
}
