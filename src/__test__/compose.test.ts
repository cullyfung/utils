import { describe, expect, it } from 'vitest'
import { compose } from '../'

describe('test compose', () => {
  it('test compose function', () => {
    function add(num: number) {
      return num + num
    }

    function multiply(num: number) {
      return num * num
    }

    expect(compose(multiply, add)(3)).toBe(36)

    expect(compose(add, multiply)(3)).toBe(18)
  })
})
