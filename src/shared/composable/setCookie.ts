import { ref } from 'vue';

export function setCookie(
  name,
  value,
  options = {
    expires: '3600',
  },
) {
  options = {
    path: '/',
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  const updatedCookie = ref(encodeURIComponent(name) + '=' + encodeURIComponent(value));

  for (const optionKey in options) {
    updatedCookie.value += '; ' + optionKey;
    const optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie.value += '=' + optionValue;
    }
  }

  document.cookie = updatedCookie.value;
}
