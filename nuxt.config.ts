// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  // SSR is enabled by default — kept explicit for clarity.
  ssr: true,
  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      // Configurable from the container without rebuilding the image:
      //   NUXT_PUBLIC_ACCENT=#c0392b
      //   NUXT_PUBLIC_SHOW_WORKS=false
      accent: '#e0922a',
      showWorks: true,
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title: 'Анапа-Генератор — Монтаж, обслуживание и ремонт дизельных генераторов',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Монтаж, плановое обслуживание и аварийный ремонт дизельных генераторных установок свыше 15 кВт в Анапе и Анапском районе. Выезд, диагностика и устранение неисправностей с гарантией результата.',
        },
        { name: 'theme-color', content: '#16191d' },
        { property: 'og:title', content: 'Анапа-Генератор — дизельные генераторы' },
        {
          property: 'og:description',
          content:
            'Монтаж, обслуживание и ремонт дизельных генераторных установок свыше 15 кВт. Анапа и Анапский район.',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Golos+Text:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
})
