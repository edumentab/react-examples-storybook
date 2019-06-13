/**
 * The Hangman app state
 * @typedef {Object} Hangman
 * @property {number} maxGuesses The total number of errors allowed
 * @property {string[]} guesses The guesses made so far
 * @property {string} answer The secret word players are trying to guess
 *
 * The possible statuses of a Hangman session
 * @typedef {'won' | 'lost' | 'playing'} HangmanStatus
 */
