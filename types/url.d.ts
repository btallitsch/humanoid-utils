export function parseQuery(search?:string):Record<string,string>; export function buildQuery(params:Record<string,any>):string; export function withQuery(url:string,params:Record<string,any>):string;
