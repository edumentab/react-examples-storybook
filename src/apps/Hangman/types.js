import pt from 'prop-types'

/**
 * The Hangman app state
 * @typedef {object} Hangman
 * @property {number} maxGuesses The total number of errors allowed
 * @property {string[]} guesses The guesses made so far
 * @property {string} answer The secret word players are trying to guess
 *
 * The possible statuses of a Hangman session
 * @typedef {'won' | 'lost' | 'playing'} HangmanStatus
 */

export const HangmanProp = pt.shape({
  guesses: pt.arrayOf(pt.string).isRequired,
  answer: pt.string.isRequired,
  maxGuesses: pt.number.isRequired,
})

export const HangmanStatusProp = pt.oneOf(['won', 'lost', 'playing'])
