import { createStorage } from './createStorage.js';
export const localStore = typeof window!=='undefined'?createStorage(window.localStorage,'local'):null;
