# Анапа-Генератор

Лендинг компании по монтажу, обслуживанию и ремонту дизельных генераторных
установок (Анапа и Анапский район), переписанный на **Nuxt 3 с SSR** и упакованный
в Docker-контейнер.

Исходный одностраничный сайт (самописный DC-фреймворк) лежит в `claude/` и оставлен
для справки. Вся вёрстка и интерактив (прилипающая шапка, бургер-меню, акцентный цвет)
перенесены 1:1.

## Стек

- [Nuxt 3](https://nuxt.com) — SSR (Nitro `node-server` preset)
- Vue 3 `<script setup>`
- Менеджер пакетов — **pnpm**

## Структура

```
app.vue               # страница: hero, специалисты, услуги, работы, ТО, цены, контакты
components/TheHeader.vue  # шапка с логикой скролла и мобильного меню
assets/css/main.css   # все стили (перенесены из оригинала)
public/assets/        # изображения (hero, фото специалистов)
nuxt.config.ts        # конфиг, шрифты, runtimeConfig
Dockerfile            # multi-stage сборка (pnpm → .output)
docker-compose.yml    # запуск контейнера
```

## Разработка

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Прод-сборка (без контейнера)

```bash
pnpm build
node .output/server/index.mjs   # SSR-сервер на :3000
```

## Запуск в Docker

```bash
docker compose up --build       # http://localhost:3000
```

или вручную:

```bash
docker build -t anapa-generator .
docker run --rm -p 3000:3000 anapa-generator
```

## Конфигурация без пересборки

Через переменные окружения (см. `docker-compose.yml`):

| Переменная               | По умолчанию | Назначение                                  |
| ------------------------ | ------------ | ------------------------------------------- |
| `NUXT_PUBLIC_ACCENT`     | `#e0922a`    | Акцентный цвет (`--accent`)                 |
| `NUXT_PUBLIC_SHOW_WORKS` | `true`       | Показывать секцию «Наши работы»             |
| `HOST` / `PORT`          | `0.0.0.0` / `3000` | Адрес и порт SSR-сервера               |
