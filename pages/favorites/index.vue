<script setup lang="ts">
import EmptyContent from "~/components/EmptyContent.vue";

useHead({
  title: "Favorite List",
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/logo.svg",
    },
  ],
});

import { useFruitStore } from "~/stores/fruit.store";

const fruitsStore = useFruitStore();
const fruits = computed(() => fruitsStore.fruits);

const favoriteFruits = computed(() => {
  return fruits.value.filter((fruit) =>
    fruitsStore.favorites.includes(fruit.id),
  );
});
</script>

<template>
  <EmptyContent v-if="favoriteFruits.length <= 0" />
  <section v-else>
    <PageHeader title="Favorite Fruits:" />
    <div class="fruit-list">
      <div class="fruit-grid">
        <FruitCard
          v-for="fruit in favoriteFruits"
          :key="fruit.id"
          :fruit="fruit"
          show-link
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.fruit-list {
  height: calc(100dvh - 12rem);
  overflow-y: scroll;
  padding-bottom: 2rem;
}
.fruit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1rem;
}
</style>
