export function buildQuery(params = {}) { const qs = new URLSearchParams(); Object.entries(params).forEach(([k,v])=>{ if(v!=null) qs.set(k,String(v));}); return qs.toString(); }
