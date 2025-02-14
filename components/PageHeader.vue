<script setup lang="ts">
defineProps<{
  title: string;
  filterBtn?: boolean;
}>();
const emit = defineEmits(["open-divider"]);
const showFilter = () => {
  return emit("open-divider");
};
</script>

<template>
  <div class="page-header">
    <h1 class="page-title">{{ title }}</h1>
    <button v-if="filterBtn" class="filter-btn" @click="showFilter">
      <Icon name="ri:filter-line" />
    </button>
  </div>
</template>

<style scoped>
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.page-title {
  font-size: 2rem;
}
.filter-btn {
  padding: 0;
  margin: 0;
  background: transparent;
  border: none;
  font-size: var(--text-2xl);
  cursor: pointer;
  display: none;
}
@media screen and (max-width: 1200px) {
  .filter-btn {
    display: block;
  }
}
@media screen and (max-width: 500px) {
  .page-title {
    font-size: var(--text-xl);
  }
}
</style>
