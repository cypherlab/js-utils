export const _ = {
    find: (array, cb) => array.find(cb)
  , filter: (array, cb) => array.filter(cb)
  , debounce: (array, cb) => array.debounce(cb)
  , map: (array, cb) => array.map(cb)
  , compact: (array) => array.filter(Boolean)
  , uniq: (array) => [...new Set(array)]
  , debounce: (fn, wait) => {
      let t
      return function () {
        clearTimeout(t)
        t = setTimeout(() => fn.apply(this, arguments), wait)
      }
    }
  , get: (obj, path, defaultValue) => {
      const result = String.prototype.split.call(path, /[,[\].]+?/)
        .filter(Boolean)
        .reduce((res, key) => (res !== null && res !== undefined) ? res[key] : res, obj);
      return (result === undefined || result === obj) ? defaultValue : result;
    }
}

export const asArray = (input, { delim = ',', trim = true, uniq = true, compact = true } = {}) => {
  let output = typeof input == 'string'
    ? input.split(delim)
    : input || []

  if(trim) output = output.map(v => (typeof v == 'string' ? v.trim() : v))
  if(compact) output = _.compact(output)
  if(uniq) output = _.uniq(output)

  return output
}