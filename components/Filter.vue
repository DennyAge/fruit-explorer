<template>
  <div class="filters">
    <h5 class="filters__title">Find fruits: {{ filteredCount }}</h5>
    <div v-for="(filter, key) in filters" :key="key" class="filter-item">
      <label class="filters__label">{{ label(key) }}:</label>
      <div class="filters__input-box">
        <input
          type="number"
          v-model="filter.min"
          placeholder="0"
          min="0"
          @keypress="
            (event) => event.target.value.length >= 4 && event.preventDefault()
          "
        />
        <span> - </span>
        <input
          type="number"
          v-model="filter.max"
          placeholder="1000"
          max="1000"
          @keypress="
            (event) => event.target.value.length >= 4 && event.preventDefault()
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  filters: Record<string, { min: number; max: number }>;
  filteredCount: number;
}>();

const label = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
</script>

<style scoped>
.filters {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.filters__title {
  font-size: var(--text-lg);
}
.filters__label {
  font-size: var(--text-sm);
  font-weight: 600;
}
.filter-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.filters__input-box {
  display: flex;
  align-items: center;
  gap: 1rem;
}
input {
  padding: 0.5rem;
  border: 1px solid var(--color-light-grey);
  border-radius: 0.25rem;
  box-shadow: var(--shadow-sm);
}
input::placeholder {
  color: var(--color-light-grey);
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
