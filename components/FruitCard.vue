<template>
  <div class="fruit-card" v-if="fruit">
    <div class="fruit-card-header">
      <h2>{{ fruit.name }}</h2>
      <button class="favorite-btn" @click="toggleFavorite">
        <Icon
          v-if="isFavorite"
          name="ri:star-fill"
          class="favorite-icon"
          :class="isFavorite && 'active'"
        />
        <Icon
          v-else
          name="ri:star-line"
          class="favorite-icon"
          :class="isFavorite && 'active'"
        />
      </button>
    </div>
    <p>
      <b>Family: </b>
      <NuxtLink :to="`/family/${fruit.family}`">{{ fruit.family }}</NuxtLink>
    </p>
    <p><b>Calories:</b> {{ fruit.nutritions?.calories ?? "-" }}</p>
    <p><b>Carbohydrates:</b> {{ fruit.nutritions?.carbohydrates ?? "-" }}g</p>
    <p><b>Fat:</b> {{ fruit.nutritions?.fat ?? "-" }}g</p>
    <p><b>Protein:</b> {{ fruit.nutritions?.protein ?? "-" }}g</p>
    <p><b>Sugar:</b> {{ fruit.nutritions?.sugar ?? "-" }}g</p>
  </div>
</template>

<script setup lang="ts">
import type { Fruit } from "~/types";
import { useFruitStore } from "~/stores/fruit.store";

const props = defineProps<{
  fruit: Fruit;
}>();

const fruitStore = useFruitStore();
const isFavorite = computed(() =>
  fruitStore.favorites.includes(props.fruit.id),
);

function toggleFavorite() {
  if (isFavorite.value) {
    fruitStore.removeFromFavorites(props.fruit.id);
  } else {
    fruitStore.addToFavorites(props.fruit.id);
  }
}
</script>

<style scoped>
.fruit-card {
  border: 1px solid var(--color-light-grey);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow-md);
}
.fruit-card-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-light-grey);
}
.favorite-btn {
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: var(--text-2xl);
}
.favorite-icon {
  color: grey;
}
.active {
  color: gold;
}
@media screen and (max-width: 500px) {
  .fruit-card {
    font-size: var(--text-xs);
  }
  .fruit-card-header h2 {
    font-size: var(--text-md);
  }
  .favorite-btn {
    font-size: var(--text-xl);
  }
}
</style>
