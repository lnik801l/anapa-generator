<script setup lang="ts">
// Header turns solid after a small scroll, and the burger toggles the mobile nav.
// Mirrors the original component state: { navOpen, scrolled }.
const scrolled = ref(false)
const navOpen = ref(false)

const { telHref, phoneDisplay } = useContacts()

function onScroll() {
  scrolled.value = window.scrollY > 24
}

function toggleNav() {
  navOpen.value = !navOpen.value
}

function closeNav() {
  navOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="site-head" :class="{ 'is-solid': scrolled }">
    <div class="wrap head-row">
      <a class="brand" href="#top">
        <span class="brand-mark">АГ</span>
        <span class="brand-tx">
          <span class="brand-name">Анапа-Генератор</span>
          <span class="brand-sub">Дизельные генераторы</span>
        </span>
      </a>
      <nav class="nav">
        <div class="nav-links" :class="{ open: navOpen }">
          <a class="nav-a" href="#team" @click="closeNav">Специалисты</a>
          <a class="nav-a" href="#services" @click="closeNav">Услуги</a>
          <a class="nav-a" href="#works" @click="closeNav">Работы</a>
          <a class="nav-a" href="#to" @click="closeNav">Регламент ТО</a>
          <a class="nav-a" href="#price" @click="closeNav">Стоимость</a>
          <a class="nav-a" href="#contacts" @click="closeNav">Контакты</a>
        </div>
        <a class="head-cta" :href="telHref"><span>{{ phoneDisplay }}</span>Позвонить</a>
        <button class="burger" aria-label="Меню" @click="toggleNav">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </div>
  </header>
</template>
