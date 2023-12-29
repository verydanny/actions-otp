import * as core from '@actions/core'
import * as OTPAuth from 'otpauth'

async function generateToken(uri: string, otpWindow: number): Promise<string> {
  const time = ((30 * (1 - ((Date.now() / 1000 / 30) % 1))) | 0) * 1000

  return new Promise(resolve => {
    if (time < otpWindow) {
      core.debug(`Time left is under the 'otp-window' time`)

      return setTimeout(() => resolve(generateToken(uri, otpWindow)), time)
    }

    return resolve(OTPAuth.URI.parse(uri).generate())
  })
}

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  const totpURL = core.getInput('otp-url')

  if (!totpURL || totpURL === '') {
    return core.setFailed(
      `The OTP secret is required, please read the documentation.`
    )
  }

  const otpWindow = (Number(core.getInput('otp-window')) ?? 5) * 1000
  const token = await generateToken(totpURL, otpWindow)

  core.setOutput('otp-token', token)

  return
}

run()
