interface IsEmptyOptions {
  falseIsEmpty?: boolean
}

const isempty = (value: any, {
  falseIsEmpty = false
}: IsEmptyOptions = {}) =>
  value === null ||
  value === undefined ||
  value === '' ||
  falseIsEmpty && value === false ||
  (value.constructor === Object && Object.keys(value).length === 0) ||
  (Array.isArray(value) && value.length === 0) ||
  (value.constructor === Map && value.size === 0) ||
  (value.constructor === Set && value.size === 0);

const isfalse = (value: any) => value === false;

isempty.false = isfalse;

export { isempty as default, isempty, isfalse };
