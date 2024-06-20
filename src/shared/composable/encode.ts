/**
 * encode object
 * @return string
 * @param value
 */
export function encode(value: Record<string, string>): string {
  return btoa(JSON.stringify(value));
}
