/**
 * Unit tests for the action's main functionality, src/main.ts
 *
 * These should be run as if the action was called from a workflow.
 * Specifically, the inputs listed in `action.yml` should be set as environment
 * variables following the pattern `INPUT_<INPUT_NAME>`.
 */

import * as core from '@actions/core'
import * as main from '../src/main'

// Other utilities
// const timeRegex = /^\d{2}:\d{2}:\d{2}/
const defaultSecret = `otpauth://totp/CapRover:captain.toha.verydanny.me?secret=REFIYUJREELHNPNHVPBYJPRMKOCPCBRB&period=30&digits=6&algorithm=SHA1&issuer=CapRover`

// Mock the GitHub Actions core library
// let debugMock: jest.SpyInstance
// let errorMock: jest.SpyInstance
let getInputMock: jest.SpyInstance
let setFailedMock: jest.SpyInstance
// let setOutputMock: jest.SpyInstance
// let setSecretMock: jest.SpyInstance

// Mock the action's entrypoint
const runMock = jest.spyOn(main, 'run')

const mockDefaultInputImplementation = (
  input: string
): string | number | boolean => {
  switch (input) {
    case 'otp-url':
      return defaultSecret
    case 'otp-window':
      return 5
    default:
      return ''
  }
}

describe('action', () => {
  beforeEach(() => {
    jest.clearAllMocks()

    // debugMock = jest.spyOn(core, 'debug').mockImplementation()
    // errorMock = jest.spyOn(core, 'error').mockImplementation()
    getInputMock = jest.spyOn(core, 'getInput').mockImplementation()
    setFailedMock = jest.spyOn(core, 'setFailed').mockImplementation()
    // setOutputMock = jest.spyOn(core, 'setOutput').mockImplementation()
    // setSecretMock = jest.spyOn(core, 'setSecret').mockImplementation()
  })

  it(`Sets the 'otp-secret'`, async () => {
    getInputMock.mockImplementation(mockDefaultInputImplementation)

    await main.run()
    expect(runMock).toHaveReturned()
  }, 12000)

  it(`Fails if not provided 'otp-secret'`, async () => {
    getInputMock.mockImplementation((name: string): string => {
      switch (name) {
        case 'otp-secret':
          return ''
        default:
          return ''
      }
    })

    await main.run()
    expect(setFailedMock).toHaveBeenNthCalledWith(
      1,
      'The OTP secret is required, please read the documentation.'
    )
  })
})
