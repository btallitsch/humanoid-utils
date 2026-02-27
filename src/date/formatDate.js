export function formatDate(date,{ locale = 'en-US', options = {} } = {}) {
  if (!(date instanceof Date)) date = new Date(date);
  return new Intl.DateTimeFormat(locale, options).format(date);
}
