import { getLetters } from './getLetters'

describe('the getLetters Hangman helper', () => {
  describe('when user has guessed nothing', () => {
    const state = {
      guesses: [],
      answer: 'plane',
      maxGuesses: 4,
    }
    test('we get a `null` per letter in the answer', () => {
      const result = getLetters(state)
      expect(result).toEqual([null, null, null, null, null])
    })
  })
  describe('when the user has guessed some letters', () => {
    const state = {
      guesses: ['x', 'o', 'e'],
      answer: 'monkey',
      maxGuesses: 4,
    }
    test('those letters are included, the rest is null', () => {
      const result = getLetters(state)
      expect(result).toEqual([null, 'o', null, null, 'e', null])
    })
  })
  describe('when the user has guessed the full word', () => {
    const state = {
      guesses: ['x', 'o', 'door'],
      answer: 'door',
      maxGuesses: 4,
    }
    test('all letters are revealed', () => {
      const result = getLetters(state)
      expect(result).toEqual(['d', 'o', 'o', 'r'])
    })
  })
})
