import { default as _compact} from 'lodash/compact'
import { default as _uniq} from 'lodash/uniq'
import objectResolvePath from 'object-resolve-path'


export const asArray = (input, { delim = ',', trim = true, uniq = true, compact = true } = {}) => {
  let output = typeof input == 'string'
    ? input.split(delim)
    : input || []

  if(trim) output = output.map(v => (typeof v == 'string' ? v.trim() : v))
  if(compact) output = _compact(output)
  if(uniq) output = _uniq(output)

  return output
}

export const resolvePath = objectResolvePath

