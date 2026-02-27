export function createStorage(storage, namespace = 'app') {
  const getKey = key => `${namespace}:${key}`;
  const isAvailable = () => {
    try {
      const k='__test__'; storage.setItem(k,'1'); storage.removeItem(k); return true;
    } catch { return false; }
  };
  const set = (key,value,{ttl}={})=>{
    if(!isAvailable()) return false;
    const record={value,expiresAt:ttl?Date.now()+ttl:null};
    try{storage.setItem(getKey(key),JSON.stringify(record));return true;}catch{return false;}
  };
  const get=(key,fallback=null)=>{
    if(!isAvailable()) return fallback;
    try{
      const raw=storage.getItem(getKey(key)); if(!raw) return fallback;
      const record=JSON.parse(raw);
      if(record.expiresAt && Date.now()>record.expiresAt){remove(key);return fallback;}
      return record.value ?? fallback;
    }catch{return fallback;}
  };
  const remove=key=>isAvailable()&&storage.removeItem(getKey(key));
  const clear=()=>isAvailable()&&Object.keys(storage).filter(k=>k.startsWith(`${namespace}:`)).forEach(k=>storage.removeItem(k));
  return {set,get,remove,clear};
}
