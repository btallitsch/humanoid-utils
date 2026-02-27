export const required = v => v != null && v !== '';
export const minLength = min => v => typeof v === 'string' && v.length >= min;
export const email = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
export function validate(value, rules = []) {
  return rules.every(rule => rule(value));
}
