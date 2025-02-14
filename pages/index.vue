<template>
  <div>
    <div class="container">
      <div class="filter">
        <Filter :filtered-count="filteredFruits.length" :filters="filters" />
      </div>

      <div class="content">
        <PageHeader title="Fruits List" />
        <div class="fruit-grid">
          <FruitCard
            v-for="fruit in filteredFruits"
            :key="fruit.id"
            :fruit="fruit"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFruitStore } from "~/stores/fruit.store";
import { useFruitFilter } from "~/composables/useFruitFilter";

useHead({
  title: "Fruits List",
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
const { filters, filteredFruits } = useFruitFilter(fruits);
</script>

<style scoped>
.container {
  display: flex;
  gap: 3rem;
}
.filter {
  padding-right: 3rem;
  border-right: 1px solid var(--color-light-grey);
}
.content {
  width: 100%;
  height: calc(100dvh - 100px);
  overflow-y: scroll;
}

.fruit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}
@media screen and (max-width: 1200px) {
  .filter {
    display: none;
  }
}
</style>
