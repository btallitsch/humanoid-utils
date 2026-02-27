export async function fetchWithTimeout(url,{timeout=8000,...options}={}) {
  const controller=new AbortController();
  const id=setTimeout(()=>controller.abort(),timeout);
  try{
    return await fetch(url,{...options,signal:controller.signal});
  }finally{clearTimeout(id);}
}
