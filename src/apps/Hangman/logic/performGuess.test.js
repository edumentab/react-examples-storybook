import { performGuess } from './performGuess'

describe('the Hangman performGuess logic function', () => {
  describe('when game is in progress', () => {
    const state = {
      guesses: ['a', 'o'],
      answer: 'plane',
      maxGuesses: 4,
    }
    test('new guesses are added to the state', () => {
      const result = performGuess('i', state)
      expect(result).toEqual({
        ...state,
        guesses: state.guesses.concat('i'),
      })
    })
    test('empty guesses are ignored', () => {
      const result = performGuess('', state)
      expect(result).toEqual(state)
    })
    test('repeat guesses are ignored', () => {
      const result = performGuess('a', state)
      expect(result).toEqual(state)
    })
  })
  describe('when game is won', () => {
    const state = {
      guesses: ['a', 'e', 'plane'],
      answer: 'plane',
      maxGuesses: 4,
    }
    test('guesses are ignored', () => {
      const result = performGuess('p', state)
      expect(result).toEqual(state)
    })
  })
  describe('when game is lost', () => {
    const state = {
      guesses: ['i', 'a', 'o', 'y', 'x'],
      answer: 'plane',
      maxGuesses: 4,
    }
    test('guesses are ignored', () => {
      const result = performGuess('p', state)
      expect(result).toEqual(state)
    })
  })
})
