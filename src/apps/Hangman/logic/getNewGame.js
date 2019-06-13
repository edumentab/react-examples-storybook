/**
 * @typedef {import("../types").Hangman} Hangman
 *
 * @typedef {object} GetNewGameOptions
 * @prop {string} answer
 * @prop {number} [maxGuesses]
 *
 * Creates a fresh hangman session. Pass in an options object
 * with the correct `answer` and optionally the max number
 * of wrong guesses
 * @param {GetNewGameOptions} options
 * @returns {Hangman} A new Hangman app state
 */
export const getNewGame = options => ({
  answer: options.answer,
  maxGuesses: options.maxGuesses,
  guesses: []
});
