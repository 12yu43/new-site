export function getFullUrl(endpoint: string): string {
  const BASE_URL = process.env.BASE_URL || "";
  return `${BASE_URL}${endpoint}`;
}
export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};