import { ref, computed } from "vue";
import type { Fruit } from "~/types";

export function useFruitFilter(fruits: Ref<Fruit[]>) {
  const filters = ref({
    calories: { min: 0, max: 628 },
    carbohydrates: { min: 0, max: 28 },
    fat: { min: 0, max: 61 },
    protein: { min: 0, max: 15 },
    sugar: { min: 0, max: 20 },
  });

  const filteredFruits = computed(() => {
    return fruits.value.filter((fruit) => {
      return (
        fruit.nutritions.calories >= filters.value.calories.min &&
        fruit.nutritions.calories <= filters.value.calories.max &&
        fruit.nutritions.carbohydrates >= filters.value.carbohydrates.min &&
        fruit.nutritions.carbohydrates <= filters.value.carbohydrates.max &&
        fruit.nutritions.fat >= filters.value.fat.min &&
        fruit.nutritions.fat <= filters.value.fat.max &&
        fruit.nutritions.protein >= filters.value.protein.min &&
        fruit.nutritions.protein <= filters.value.protein.max &&
        fruit.nutritions.sugar >= filters.value.sugar.min &&
        fruit.nutritions.sugar <= filters.value.sugar.max
      );
    });
  });

  return { filters, filteredFruits };
}
