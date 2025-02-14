<script setup lang="ts">
useHead({
  title: "Fruits Family",
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/logo.svg",
    },
  ],
});

import { useFruitStore } from "~/stores/fruit.store";
import { useLoadingStore } from "~/stores/loading.store";
import { useFruitFilter } from "~/composables/useFruitFilter";

const route = useRoute();
const family = route.params.family as string;
const fruitsStore = useFruitStore();
const loadingStore = useLoadingStore();

const fruits = computed(() => fruitsStore.fruitsFamily);
const { filters, filteredFruits } = useFruitFilter(fruits);
const divider = ref<boolean>(false);

const openDivider = () => {
  divider.value = !divider.value;
};

onMounted(async () => {
  loadingStore.setLoading(true);
  try {
    await fruitsStore.getFamilyFruits(family);
  } finally {
    loadingStore.setLoading(false);
  }
});
</script>

<template>
  <section class="container">
    <div class="filter-content">
      <Filter :filtered-count="filteredFruits.length" :filters="filters" />
    </div>
    <div class="page-content">
      <PageHeader
        :title="`${family} fruit family:`"
        filter-btn
        @open-divider="openDivider"
      />
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
