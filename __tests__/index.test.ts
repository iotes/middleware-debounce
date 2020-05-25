// This needs to implemented with strategy-test
/*

describe('Debounce Middleware', () => {
  beforeEach(async () => {
    [localStore, createLocalStrategy] = createLocalStoreAndStrategy()
    localModule = createIotes({
      topology: testTopologoy,
      strategy: createLocalStrategy,
    })
  })

  test('debounces', async () => {
    let result: any = null
    let i = 1

    localModule.deviceSubscribe(
      (state) => {
        result = state
      },
      undefined,
      [debounce(50)],
    )

    localModule.deviceDispatch(
      createDeviceDispatchable('debounce', 'UPDATE', { i }),
    )
    i += 1

    const timer = setInterval(() => {
      if (i > 10) clearInterval(timer)
      localModule.deviceDispatch(
        createDeviceDispatchable('debounce', 'UPDATE', { i }),
      )
      i += 1
    }, 5)

    // Wait for something to come in
    await new Promise((res, rej) => setTimeout(() => {
      if (result) {
        res()
      }
      rej()
    }, 35))

    expect(result.debounce.payload.i).toEqual(1)

    await new Promise((res, rej) => setTimeout(() => {
      if (result) {
        res()
      }
      rej()
    }, 20))

    expect(result.debounce.payload.i).toEqual(10)
  })
})

*/
