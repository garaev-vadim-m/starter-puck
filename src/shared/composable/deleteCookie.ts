import { setCookie } from '@/shared/composable/setCookie';

export function deleteCookie(name) {
  setCookie(name, '', {
    expires: '-1',
  });
}
