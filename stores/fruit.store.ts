import { defineStore } from "pinia";
import type { Fruit } from "~/types";

const defaultValues: {
  fruits: Fruit[];
  fruitsFamily: Fruit[];
  favorites: number[];
} = {
  fruits: [],
  fruitsFamily: [],
  favorites: [],
};

export const useFruitStore = defineStore("fruit", {
  state: () => defaultValues,
  getters: {},
  actions: {
    async getAllFruits() {
      try {
        const data = await $fetch("/api/fruits");
        this.$patch({ fruits: data || [] });
      } catch (error) {
        console.error("Get fruits failed:", error);
        this.$patch({ fruits: [] });
      }
    },
    async getFamilyFruits(family: string) {
      try {
        const data = await $fetch(`/api/fruits-family/${family}`);
        this.$patch({ fruitsFamily: data || [] });
      } catch (error) {
        console.error("Get fruits family failed:", error);
        this.$patch({ fruitsFamily: [] });
      }
    },
    addToFavorites(fruitId: number) {
      if (!this.favorites.includes(fruitId)) {
        this.favorites.push(fruitId);
        this.saveFavorites();
      }
    },
    removeFromFavorites(fruitId: number) {
      this.favorites = this.favorites.filter((id) => id !== fruitId);
      this.saveFavorites();
    },
    saveFavorites() {
      if (process.client) {
        localStorage.setItem("favorites", JSON.stringify(this.favorites));
      }
    },
    loadFavoritesFromLocalStorage() {
      if (process.client) {
        const favorites = localStorage.getItem("favorites");
        if (favorites) {
          this.$patch({ favorites: JSON.parse(favorites) });
        }
      }
    },
  },
});
