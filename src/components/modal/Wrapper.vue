<template>
  <Transition name="modal">
    <slot></slot>
  </Transition>
</template>

<style scoped>
.modal-wrapper {
  position: fixed;
  z-index: 99;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
