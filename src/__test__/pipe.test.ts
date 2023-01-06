import { pipe } from './../pipe'
import { describe, expect, it } from 'vitest'

describe('pipe', () => {
  it('test pipe', () => {
    function add(num: number) {
      return num + num
    }

    function multiply(num: number) {
      return num * num
    }

    expect(pipe(add, multiply)(3)).toBe(36)
    expect(pipe(multiply, add)(3)).toBe(18)
  })
})
