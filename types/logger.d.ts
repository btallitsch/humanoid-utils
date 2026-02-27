export function createLogger(options?: { level?: 'debug'|'info'|'warn'|'error'; enabled?: boolean; prefix?: string }): { debug: Function; info: Function; warn: Function; error: Function };
