// Prefixes a /public asset path (e.g. "/assets/hero.png") with the app baseURL.
// Nuxt applies baseURL to its own bundles and <NuxtLink>, but NOT to raw string
// src/href in templates — so static assets break when the site is served under a
// project path (baseURL "/anapa-generator/"). This makes them resolve in both
// modes: domain root (baseURL "/") and project path.
export function useAssetUrl() {
  const base = useRuntimeConfig().app.baseURL.replace(/\/$/, '')
  return (path: string) => base + path
}
