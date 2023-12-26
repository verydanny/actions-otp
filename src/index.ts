import * as core from '@actions/core'
import { authenticator } from 'otplib'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  const secret = core.getInput('otp-secret')

  if (!secret) {
    core.error(`The OTP secret is required, please read the documentation.`)
  }
}
