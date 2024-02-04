/**
 * encode object
 * @return string
 * @param value
 */
export function encode(value): string {
  return btoa(JSON.stringify(value));
}
