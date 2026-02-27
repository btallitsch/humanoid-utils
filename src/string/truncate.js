export function truncate(str = '', length = 100, suffix = '…') {
  if (str.length <= length) return str;
  return str.slice(0, length).trimEnd() + suffix;
}
