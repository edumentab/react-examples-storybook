import { getNbrOfErrors } from './getNbrOfErrors'

describe('the getNbrOfErrors Hangman helper', () => {
  describe('when user has guessed nothing', () => {
    const state = {
      guesses: [],
      answer: 'plane',
      maxGuesses: 4,
    }
    test('we get 0', () => {
      const result = getNbrOfErrors(state)
      expect(result).toEqual(0)
    })
  })
  describe('when the user has made a few guesses', () => {
    const state = {
      guesses: ['x', 'o', 'e', 'donkey', 'monkey'],
      answer: 'monkey',
      maxGuesses: 4,
    }
    test('only the errors are counted', () => {
      const result = getNbrOfErrors(state)
      expect(result).toEqual(2)
    })
  })
})
