# DJ Shop — сайт багетной студии (Pattaya)

Статический сайт: `index.html` (главная + карта + отзывы), `shop.html` (каталог с фильтрами), `studio.html` (Design Studio v1 — превью рамки без AI), `style.css`.

## Деплой на GitHub Pages (аккаунт gorvan27)

```bash
cd baanframe-site
git init
git add .
git commit -m "DJ Shop v0.1"
git branch -M main
# создать репозиторий baanframe на github.com/gorvan27 (кнопка New repository)
git remote add origin https://github.com/gorvan27/baanframe.git
git push -u origin main
```

Затем на GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save.**
Через ~1 минуту сайт живой: `https://gorvan27.github.io/baanframe/`

Каждый следующий `git push` автоматически обновляет сайт.

## TODO (контент)
- [ ] Цены: заменить все `฿ —` в shop.html и index.html
- [ ] Фото продукции: положить в `img/`, заменить emoji-заглушки в `.img` / `.ph`
- [ ] Ссылка LINE OA (line.me/R/ti/p/...) — во все кнопки `💬 LINE`
- [ ] Ссылка TikTok
- [ ] 3 отзыва с Google Maps (index.html, блок #reviews)
- [ ] Позже: свой домен (~$10/год) вместо github.io
