import { buildQuery } from './buildQuery.js'; export function withQuery(url, params) { const qs = buildQuery(params); return qs ? `${url}?${qs}` : url; }
