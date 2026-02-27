export function parseQuery(search = window.location.search) { return Object.fromEntries(new URLSearchParams(search)); }
