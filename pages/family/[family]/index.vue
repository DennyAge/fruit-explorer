<template>
  <div>
    <div class="container">
      <div class="filter">
        <Filter :filtered-count="filteredFruits.length" :filters="filters" />
      </div>
      <div class="content">
        <h2 class="page-title">{{ family }} fruit family</h2>
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
import { useLoadingStore } from "~/stores/loading.store";
import { useFruitFilter } from "~/composables/useFruitFilter";

useHead({
  title: "Fruits Family",
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/logo.png",
    },
  ],
});

const route = useRoute();
const family = route.params.family as string;
const fruitsStore = useFruitStore();
const loadingStore = useLoadingStore();
const fruits = computed(() => fruitsStore.fruitsFamily);
const { filters, filteredFruits } = useFruitFilter(fruits);

onMounted(async () => {
  loadingStore.setLoading(true);
  try {
    await fruitsStore.getFamilyFruits(family);
  } finally {
    loadingStore.setLoading(false);
  }
});
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
.page-title {
  font-size: 2rem;
}
.fruit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}
@media screen and (max-width: 500px) {
  .filter {
    display: none;
  }
  .page-title {
    font-size: var(--text-xl);
  }
}
</style>
