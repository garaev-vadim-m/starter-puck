import { ElMessageBox } from 'element-plus';

export function modalClose(title: string, message?: string) {
  return ElMessageBox({
    title: title,
    message: message,
    showCancelButton: true,
    confirmButtonText: 'Да',
    cancelButtonText: 'Нет',
    showClose: false,
  });
}
