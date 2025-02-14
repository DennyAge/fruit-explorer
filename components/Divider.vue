<script setup lang="ts">
const emit = defineEmits(["close"]);
const close = () => {
  return emit("close");
};
</script>

<template>
  <div class="divider">
    <div class="divider__header">
      <button class="divider__close-btn" @click="close">
        <Icon name="ri:close-large-fill" />
      </button>
    </div>
    <div class="divider__body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.divider {
  position: fixed;
  top: 4rem;
  left: 0;

  width: max-content;
  height: 100dvh;
  overflow: scroll;

  background: var(--color-primary-25);
  z-index: 10;
  animation: slide-left ease 1s;
}
.divider__header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
}
.divider__close-btn {
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  font-size: var(--text-lg);
  color: var(--color-black);

  cursor: pointer;
}
.divider__body {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem 3rem 1.5rem;
}
@keyframes slide-left {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@media screen and (max-width: 500px) {
  .divider {
    width: 100dvw;
  }
}
</style>
