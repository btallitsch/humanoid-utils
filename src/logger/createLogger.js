export function createLogger({ level = 'info', enabled = true, prefix = '' } = {}) {
  const levels = ['debug', 'info', 'warn', 'error'];
  const currentLevel = levels.indexOf(level);

  function log(type, ...args) {
    if (!enabled) return;
    if (levels.indexOf(type) < currentLevel) return;
    const tag = prefix ? `[${prefix}]` : '';
    console[type](tag, ...args);
  }

  return {
    debug: (...a) => log('debug', ...a),
    info: (...a) => log('info', ...a),
    warn: (...a) => log('warn', ...a),
    error: (...a) => log('error', ...a)
  };
}
