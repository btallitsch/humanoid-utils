import { fetchWithTimeout } from './fetchWithTimeout.js';
export async function fetchJson(url,options={}) {
  const res=await fetchWithTimeout(url,{headers:{'Content-Type':'application/json',...(options.headers||{})},...options});
  let data=null; try{data=await res.json();}catch{}
  if(!res.ok){const e=new Error('Fetch failed');e.status=res.status;e.data=data;throw e;}
  return data;
}
