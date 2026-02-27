export function serializeForm(form) {
  const data = new FormData(form);
  return Object.fromEntries(data.entries());
}
