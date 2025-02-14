<template>
  <div class="page-header">
    <h2 class="page-title">{{ title }}</h2>
    <button class="filter-btn">
      <Icon name="ri:filter-line" />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style scoped>
.filter-btn {
  padding: 0;
  margin: 0;
  background: transparent;
  border: none;

  font-size: var(--text-2xl);
  cursor: pointer;

  display: none;
}
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.page-title {
  font-size: 2rem;
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
