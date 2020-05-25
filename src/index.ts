import { State, Middleware } from '@iotes/core'

export const debounce = (time: number = 1000): Middleware => {
  let shouldDispatch = true

  return (state: State) => {
    if (!shouldDispatch) return null
    shouldDispatch = false
    setTimeout(() => { shouldDispatch = true }, time)
    return state
  }
}

export default debounce
