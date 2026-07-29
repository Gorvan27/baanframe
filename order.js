/* ============================================================
   DJ Shop — заказы через LINE / Facebook
   ------------------------------------------------------------
   ВАЖНО: когда получите LINE Official Account, замените
   LINE_ID ниже на свой (например "@djshop" — со знаком @).
   Всё остальное подхватится автоматически.
   ============================================================ */
const SHOP = {
  LINE_ID: "",                                   // ← вписать, напр. "@djshop"
  FB_URL: "https://www.facebook.com/share/19SeNPXHiD/",
  PHONE: "0943427274",
  // защита email от спам-ботов (собирается в браузере)
  MAIL_USER: "danitaseenark",
  MAIL_HOST: "gmail.com"
};

/* ссылка на чат LINE: OA если задан, иначе Facebook Messenger */
function chatUrl(text) {
  if (SHOP.LINE_ID) {
    const id = SHOP.LINE_ID.replace(/^@/, "");
    return text
      ? `https://line.me/R/oaMessage/@${id}/?${encodeURIComponent(text)}`
      : `https://line.me/R/ti/p/@${id}`;
  }
  return SHOP.FB_URL;
}

/* текст заказа из карточки товара */
function orderText(card) {
  const lang = window.DJLANG || "th";
  const name = card.querySelector("h3")?.textContent.trim() || "";
  const priceEl = card.querySelector(".price-lg");
  const price = priceEl ? priceEl.textContent.replace(/\s+/g, " ").trim() : "";
  return lang === "th"
    ? `สวัสดีค่ะ สนใจสั่งทำ: ${name} (${price}) ค่ะ`
    : `Hello! I'd like to order: ${name} (${price})`;
}

document.addEventListener("DOMContentLoaded", () => {
  /* 1. кнопки «สั่งซื้อเลย» в карточках → чат с готовым текстом */
  document.querySelectorAll(".btn-buy").forEach(btn => {
    const card = btn.closest(".card");
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");
    btn.addEventListener("click", e => {
      e.preventDefault();
      window.open(chatUrl(card ? orderText(card) : ""), "_blank", "noopener");
    });
  });

  /* 2. все LINE-ссылки и плавающий чат */
  document.querySelectorAll('.btn-line, .chat, a.cta[href="#"], .socials a.line').forEach(el => {
    el.setAttribute("href", chatUrl(""));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  /* 3. безопасность: внешние ссылки не получают доступ к вкладке */
  document.querySelectorAll('a[target="_blank"]').forEach(a => {
    a.setAttribute("rel", "noopener noreferrer");
  });

  /* 4. email собирается в браузере — боты из HTML его не вытащат */
  document.querySelectorAll("[data-mail]").forEach(el => {
    const addr = SHOP.MAIL_USER + "@" + SHOP.MAIL_HOST;
    el.textContent = addr;
    if (el.tagName === "A") el.setAttribute("href", "mailto:" + addr);
  });
});
