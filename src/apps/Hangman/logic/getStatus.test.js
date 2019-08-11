import { getStatus } from './getStatus'

describe('the getStatus Hangman helper', () => {
  describe('when user has made max number of errors', () => {
    const state = {
      guesses: ['x', 'y', 'z', 'm'],
      answer: 'plane',
      maxGuesses: 4,
    }
    test('we get `lost`', () => {
      const result = getStatus(state)
      expect(result).toEqual('lost')
    })
  })
  describe('when user has guessed all individual letters', () => {
    const state = {
      guesses: ['a', 'o', 'r', 'd'],
      answer: 'door',
      maxGuesses: 4,
    }
    test('we get `won`', () => {
      const result = getStatus(state)
      expect(result).toEqual('won')
    })
  })
  describe('when user has guessed the correct word', () => {
    const state = {
      guesses: ['a', 'o', 'r', 'door'],
      answer: 'door',
      maxGuesses: 4,
    }
    test('we get `won`', () => {
      const result = getStatus(state)
      expect(result).toEqual('won')
    })
  })
  describe('when user has guesses remaining', () => {
    const state = {
      guesses: ['a', 'o', 'm'],
      answer: 'door',
      maxGuesses: 4,
    }
    test('we get `playing`', () => {
      const result = getStatus(state)
      expect(result).toEqual('playing')
    })
  })
})
