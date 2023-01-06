import { compose } from './compose'
export const pipe = (...func: Function[]) => {
  return compose(...func.reverse())
}
