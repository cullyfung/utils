import { toString } from './base'

export function isObject(obj: any) {
  return toString(obj) == '[object Object]'
}

export function isUndefined(obj: any) {
  return toString(obj) == '[object Undefined]'
}

export function isNull(obj: any) {
  return toString(obj) == '[object Null]'
}

export function isRegex(obj: any) {
  return toString(obj) == '[object RegExp]'
}

export function isDate(obj: any) {
  return toString(obj) == '[object Date]'
}

export function isFunction(obj: any) {
  return toString(obj) == '[object Function]'
}

export function isNumber(obj: any) {
  return typeof obj === 'number'
}

export function isString(obj: any) {
  return typeof obj === 'string'
}

export function isBoolean(obj: any) {
  return typeof obj === 'boolean'
}

export function isWindow(obj: any) {
  return typeof window !== 'undefined' && toString(obj) == '[object Window]'
}

export function isBrowser(obj: any) {
  return (
    isWindow(obj) ||
    (typeof document !== 'undefined' && toString(obj) === '[object Document]')
  )
}

export function isArray(obj: any) {
  return Array.isArray(obj)
}
