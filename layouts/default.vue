<template>
  <main>
    <Loader v-if="isLoading" />
    <Header />
    <div class="page-content">
      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useFruitStore } from "~/stores/fruit.store";
import { useLoadingStore } from "~/stores/loading.store";

const loadingStore = useLoadingStore();
const fruitsStore = useFruitStore();

const fruits = computed(() => fruitsStore.fruits);
const isLoading = computed(() => loadingStore.isLoading);

const getData = async () => {
  try {
    loadingStore.setLoading(true);
    if (fruits.value.length === 0) {
      await fruitsStore.getAllFruits();
    }
    fruitsStore.loadFavoritesFromLocalStorage();
  } catch (error) {
    console.error("Failed get user:", error);
  } finally {
    loadingStore.setLoading(false);
  }
};

onMounted(getData);
</script>
<style scoped>
.page-content {
  padding: 0 2rem;
}
@media screen and (max-width: 500px) {
  .page-content {
    padding: 0 1rem;
  }
}
</style>
