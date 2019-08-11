/**
 * @typedef {import("../types").Hangman} Hangman
 *
 * Helper function that takes a Hangman state and returns an array of letters
 * in the answer, masking all non-guessed letters with `null`
 * @param {Hangman} state - A Hangman game state
 * @returns {(string|null)[]} An array of letters/null
 */
export function getLetters(state) {
  return state.guesses.includes(state.answer)
    ? state.answer.split('')
    : state.answer
        .split('')
        .map(letter => (state.guesses.includes(letter) ? letter : null))
}
