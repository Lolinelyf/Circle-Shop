import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useToastsStore = defineStore('toasts', () => {
  const toast = ref();
  let timeoutId;

  function showToast(message) {
    clearTimeout(timeoutId);

    if (toast.value) {
      hideToast();
      setTimeout(() => showToast(message), 250);
      return;
    }

    toast.value = message;
    timeoutId = setTimeout(() => hideToast(), 3000);
  }

  function hideToast() {
    toast.value = undefined;
  }

  return { toast, showToast, hideToast };
});
