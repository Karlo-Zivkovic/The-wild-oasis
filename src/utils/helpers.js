import { differenceInDays, formatDistance, parseISO } from "date-fns";

export function formatCurrency(value) {
  const formated = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
  return formated;
}
export function formatDate(value) {
  const formated = new Date(value).toLocaleDateString("en-us", {
    month: "short",
    // weekday: "long",
    day: "numeric",
    year: "numeric",
  });
  return formated;
}
export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const getToday = function (options = {}) {
  const today = new Date();

  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};
