import { fetchJson } from './fetchJson.js';
export async function retryFetch(url,{retries=3,retryDelay=500,...options}={}) {
  let attempt=0;
  while(attempt<=retries){
    try{return await fetchJson(url,options);}
    catch(e){if(attempt===retries) throw e;
      await new Promise(r=>setTimeout(r,retryDelay*(attempt+1)));
      attempt++;
    }
  }
}
