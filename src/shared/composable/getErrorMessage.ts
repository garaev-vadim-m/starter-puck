import { AxiosError } from 'axios';

type ErrorWithMessage = {
  message: string;
};

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError));
  }
}

/** Корректно получает текст ошибки.  */
export function getErrorMessage(error: unknown): string {
  if (error instanceof AxiosError && error.response?.data?.error) {
    // todo: удостовериться, что backend возращает ошибки в едином формате.
    return String(error.response.data.error);
  }

  if (typeof error === 'string') {
    return String(error);
  }

  return toErrorWithMessage(error).message || 'Неопознанная ошибка';
}
