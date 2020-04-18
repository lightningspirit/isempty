export default (value: any) =>
  value === null ||
  value === undefined ||
  value === '' ||
  (value.constructor === Object && Object.keys(value).length === 0) ||
  (Array.isArray(value) && value.length === 0) ||
  (value.constructor === Map && value.size === 0) ||
  (value.constructor === Set && value.size === 0);
