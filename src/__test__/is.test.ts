import { describe, it, expect } from 'vitest'
import {
  isArray,
  isBoolean,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isString,
  isUndefined
} from '../'

describe('test is utils', () => {
  it('test is_function', () => {
    expect(isFunction(() => {})).toBe(true)
  })

  it('test is_string', () => {
    expect(isString('string')).toBe(true)
  })

  it('test is_object', () => {
    expect(isObject({})).toBe(true)
  })

  it('test is_array', () => {
    expect(isArray([])).toBe(true)
  })

  it('test is_number', () => {
    expect(isNumber(0)).toBe(true)
  })

  it('test is_boolean', () => {
    expect(isBoolean(false)).toBe(true)
  })

  it('test is_null', () => {
    expect(isNull(null)).toBe(true)
  })

  it('test is_undefined', () => {
    expect(isUndefined(undefined)).toBe(true)
  })
})
