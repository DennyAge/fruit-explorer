<script setup lang="ts">
const navLinks = [
  { label: "Home", to: "/" },
  { label: "Favorites", to: "/favorites" },
];
</script>

<template>
  <div class="header">
    <div class="header__logo">
      <nuxt-img src="/logo.svg" alt="logo" />
      Fruit Explorer
    </div>
    <nav class="header__nav">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.label"
        class="header__nav__link"
        active-class="active_link"
        :to="link.to"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  height: 2rem;

  box-shadow: var(--shadow-md);
}
.header__logo {
  font-size: 2rem;
  font-weight: 700;
}
.header__logo img {
  width: 2rem;
}
.header__nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.header__nav__link {
  text-decoration: none;
  font-size: var(--text-lg);
  font-weight: 500;
  color: var(--color-black);
  border-bottom: 2px solid transparent;

  cursor: pointer;
}
.header__nav__link:hover {
  color: var(--color-primary-100);
  border-bottom: 2px solid var(--color-primary-100);
}
.active_link {
  color: var(--color-primary-100);
  border-bottom: 2px solid var(--color-primary-100);
}
@media screen and (max-width: 500px) {
  .header {
    padding: 1rem;
  }
  .header__logo {
    font-size: var(--text-lg);
  }
  .header__logo img {
    width: 1rem;
  }
  .header__nav__link {
    font-size: var(--text-sm);
  }
}
</style>
