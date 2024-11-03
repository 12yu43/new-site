export function getFullUrl(endpoint: string): string {
  const BASE_URL = process.env.BASE_URL || "";
  return `${BASE_URL}${endpoint}`;
}
