import { createStorage } from './createStorage.js';
export const sessionStore = typeof window!=='undefined'?createStorage(window.sessionStorage,'session'):null;
