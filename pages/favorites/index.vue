<template>
  <div>
    <h2 class="page-title">Favorite Fruits:</h2>
    <div class="fruit-grid">
      <FruitCard
        v-for="fruit in favoriteFruits"
        :key="fruit.id"
        :fruit="fruit"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFruitStore } from "~/stores/fruit.store";

useHead({
  title: "Favorite List",
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/logo.png",
    },
  ],
});

const fruitsStore = useFruitStore();
const fruits = computed(() => fruitsStore.fruits);

const favoriteFruits = computed(() => {
  return fruits.value.filter((fruit) =>
    fruitsStore.favorites.includes(fruit.id),
  );
});
</script>

<style scoped>
.fruit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}
.page-title {
  font-size: 2rem;
}
@media screen and (max-width: 500px) {
  .page-title {
    font-size: var(--text-xl);
  }
}
</style>
