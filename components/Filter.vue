<script setup lang="ts">
import { defineProps, ref, watch } from "vue";

const props = defineProps<{
  filters: Record<string, { min: number; max: number }>;
  filteredCount: number;
}>();

const localFilters = ref({ ...props.filters });

watch(
  () => props.filters,
  (newFilters) => {
    localFilters.value = { ...newFilters };
  },
  { deep: true },
);

const label = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const clearFilters = () => {
  Object.keys(localFilters.value).forEach((key) => {
    localFilters.value[key].min = 0;
  });
};
</script>

<template>
  <div class="filters">
    <div class="filters__title">Find fruits: {{ filteredCount }}</div>
    <div v-for="(filter, key) in localFilters" :key="key" class="filter-item">
      <label class="filters__label">{{ label(key) }}:</label>
      <div class="filters__input-box">
        <input
          type="number"
          v-model="filter.min"
          placeholder="0"
          min="0"
          @keypress="
            (event) =>
              event?.target?.value.length >= 4 && event.preventDefault()
          "
        />
        <span> - </span>
        <input
          type="number"
          v-model="filter.max"
          placeholder="1000"
          max="1000"
          @keypress="
            (event) =>
              event?.target?.value.length >= 4 && event.preventDefault()
          "
        />
      </div>
    </div>
    <div class="filters__footer">
      <button @click="clearFilters">Clear Filters</button>
    </div>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.filters__title {
  font-size: var(--text-lg);
  font-weight: 600;
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
  margin-bottom: 1rem;
}
input {
  max-width: 8rem;
  padding: 0.5rem;
  border: 0.063rem solid var(--color-light-grey);
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
.filters__footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.filters__footer button {
  padding: 0.5rem 1rem;
  border: 0.063rem solid var(--color-primary-75);
  border-radius: 0.25rem;
  background: var(--color-primary-100);
  color: var(--color-white);
  cursor: pointer;
}
.filters__footer button:hover {
  background: var(--color-primary-75);

  box-shadow: var(--shadow-sm);
}
</style>
