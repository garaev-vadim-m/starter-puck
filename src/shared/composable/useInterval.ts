import { onUnmounted, onUpdated, ref, watchEffect } from 'vue';

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = ref(callback);
  const intervalId = ref<ReturnType<typeof setInterval>>();

  onUpdated(() => {
    savedCallback.value = callback;
  });

  watchEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    intervalId.value = setInterval(() => savedCallback.value(), delay);
  });

  onUnmounted(() => {
    if (intervalId.value) clearInterval(intervalId.value);
  });
}
