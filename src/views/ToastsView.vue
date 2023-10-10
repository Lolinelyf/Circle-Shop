<script setup>
import { useToastsStore } from '../stores/toasts';

const store = useToastsStore();
</script>

<template>
  <Transition
    :enter-from-class="$style.transitionEdge"
    :enter-active-class="$style.transitionActive"
    :leave-active-class="$style.transitionActive"
    :leave-to-class="$style.transitionEdge"
  >
    <div v-if="store.toast" :class="$style.host">
      <div :class="$style.toast">
        {{ store.toast }}
      </div>
    </div>
  </Transition>
</template>

<style module>
.host {
  position: fixed;
  bottom: 8px;
  left: 8px;
  right: 8px;
  z-index: var(--z-toast);
}

.transitionActive {
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.transitionEdge {
  opacity: 0;
  transform: translateY(100%);
}

.toast {
  border-radius: 8px;
  box-shadow: var(--shadow);
  color: var(--color-white);
  background: var(--color-accent);
  padding: 8px 16px;
  font-size: 14px;
  text-align: center;
  user-select: none;
}
</style>
