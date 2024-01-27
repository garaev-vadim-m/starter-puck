import { getErrorMessage } from '@/shared/composable/getErrorMessage';
import { logError } from '@/shared/composable/logError';
import { AxiosResponse } from 'axios';
import { ref } from 'vue';

type CallbackArg<T> = () => Promise<AxiosResponse<T>>;
export type UseApiError = { message: string; error: unknown } | undefined;

export function useApi<T>(callback: CallbackArg<T>, { immediate = true } = {}) {
  const data = ref<T>();
  const error = ref<UseApiError>();
  const loading = ref(false);

  async function doFetch() {
    data.value = undefined;
    error.value = undefined;

    try {
      loading.value = true;
      const response = await callback();
      data.value = response.data;
    } catch (e) {
      error.value = { message: getErrorMessage(e), error: e };
      logError(e);
    } finally {
      loading.value = false;
    }
  }

  if (immediate) doFetch();

  return {
    data,
    error,
    loading,
    doFetch,
  };
}
