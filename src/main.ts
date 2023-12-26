import * as core from '@actions/core'
import { wait } from './wait'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds')

    core.setOutput('ENV IS', process.env.NODE_ENV)
    core.debug(`ENV IS ${process.env.NODE_ENV}`)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
