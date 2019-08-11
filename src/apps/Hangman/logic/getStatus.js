import { getNbrOfErrors } from './getNbrOfErrors'

/**
 * @typedef {import("../types").Hangman} Hangman
 * @typedef {import("../types").HangmanStatus} HangmanStatus
 *
 * Helper function that takes a Hangman state and returns whether the
 * the current status is `won`, `lost` or `playing`
 * @param {Hangman} state
 * @return {HangmanStatus}
 */
export function getStatus(state) {
  if (getNbrOfErrors(state) >= state.maxGuesses) return 'lost'
  if (state.guesses.includes(state.answer)) return 'won'
  if (state.answer.split('').every(letter => state.guesses.includes(letter)))
    return 'won'
  return 'playing'
}
