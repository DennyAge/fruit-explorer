<template>
  <div class="empty-content">
    <div class="empty-content__body">
      <nuxt-img src="/empty.svg" />
      <p>Empty data</p>
    </div>
  </div>
</template>

<style scoped>
.empty-content {
  height: calc(100dvh - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
}
.empty-content__body {
  display: flex;
  flex-direction: column;
  align-items: center;

  color: var(--color-grey);
  font-size: var(--text-xl);
}
</style>
