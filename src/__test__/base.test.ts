import { describe, it, expect } from 'vitest'
import { toString } from '../base'

describe('test base', () => {
  it('test toString', () => {
    expect(toString('foo')).toEqual('[object String]')
  })
})
