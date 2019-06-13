/**
 * @typedef {import("../types").Hangman} Hangman
 *
 * Helper function that takes a Hangman state and returns the total number
 * of errors in the made guesses
 * @param {Hangman} state - A Hangman game state
 * @returns {number} The number of made guesses that were errors
 */
export function getNbrOfErrors(state) {
  return state.guesses.filter(guess =>
    guess.length === 1 ? !state.answer.includes(guess) : state.answer !== guess
  ).length;
}
