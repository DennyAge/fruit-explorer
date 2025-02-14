<script setup lang="ts">
useHead({
  title: "Fruits List",
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/logo.svg",
    },
  ],
});

import { useFruitStore } from "~/stores/fruit.store";
import { useFruitFilter } from "~/composables/useFruitFilter";
import Divider from "~/components/Divider.vue";

const fruitsStore = useFruitStore();
const fruits = computed(() => fruitsStore.fruits);
const { filters, filteredFruits } = useFruitFilter(fruits);
const divider = ref<boolean>(false);

const openDivider = () => {
  divider.value = !divider.value;
};
</script>

<template>
  <section class="container">
    <div class="filter-content">
      <Filter :filtered-count="filteredFruits.length" :filters="filters" />
    </div>

    <div class="page-content">
      <PageHeader title="Fruits List:" filter-btn @open-divider="openDivider" />
      <div class="fruit-list">
        <FruitCard
          v-for="fruit in filteredFruits"
          :key="fruit.id"
          :fruit="fruit"
        />
      </div>
    </div>
  </section>
  <Divider v-if="divider" @close="openDivider">
    <Filter :filtered-count="filteredFruits.length" :filters="filters" />
  </Divider>
</template>

<style scoped>
.container {
  display: flex;
  gap: 3rem;
}
.filter-content {
  padding: 2rem 3rem 0 0;
  border-right: 0.063rem solid var(--color-light-grey);
}
.page-content {
  width: 100%;
}
.fruit-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  height: calc(100dvh - 12rem);
  overflow-y: scroll;
  padding-bottom: 2rem;
}
@media screen and (max-width: 1200px) {
  .filter-content {
    display: none;
  }
}
</style>
