import { ElMessage } from 'element-plus';
import { getErrorMessage } from './getErrorMessage';

interface LogErrorOptions {
  /** Отображает ELMessage.error в интерфейсе с текстом ошибки. */
  isMessage?: boolean;
  message?: string;
}

export function logError(error: unknown, options: LogErrorOptions = {}) {
  const { isMessage, message } = options;

  const errorMsg = getErrorMessage(error);
  console.error(`errorMessage: ${errorMsg}`, error);

  if (isMessage) ElMessage.error(message ? message : errorMsg);
}
