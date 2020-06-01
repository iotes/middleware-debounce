import {
  createIotes,
  createDeviceDispatchable,
} from '@iotes/core'

import {
  createTestStrategy,
  config,
  wait,
} from '@iotes/strategy-test'

import { debounce } from '../src'

describe('Debounce Middleware', () => {
  // TESTS
  test('Debouces', async () => {
    const [remote, strategy] = createTestStrategy()
    const iotes = createIotes({
      topology: config.topology,
      strategy,
    })

    let result: any = null
    let i = 1

    iotes.deviceSubscribe((state) => { result = state }, undefined, [debounce(50)])

    // Initial value
    iotes.deviceDispatch(
      createDeviceDispatchable('debounce', 'UPDATE', { i }),
    )
    i += 1

    // Dispatch many messages quickly
    const timer = setInterval(() => {
      i += 1
      iotes.deviceDispatch(
        createDeviceDispatchable('debounce', 'UPDATE', { i }),
      )
      if (i > 10) clearInterval(timer)
    }, 5)

    await wait(45)

    expect(result.debounce.payload.i).toEqual(1)

    await wait(50)

    expect(result.debounce.payload.i).toEqual(10)
  })
})
