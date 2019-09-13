import { getNewMemoryGame } from './getNewMemoryGame'

describe('the getNewMemoryGame function', () => {
  describe('for 2 types and 3 errors allowed', () => {
    const res = getNewMemoryGame(2, 3)
    test('we get correct number of errors', () => {
      expect(res.errorsLeft).toBe(3)
    })
    test('we get correct number of cards', () => {
      expect(res.cards).toHaveLength(4)
    })
    test('we get correct card states', () => {
      expect(res.cards.every(c => c.status === 'hidden')).toBeTruthy()
    })
    test('we get two of each type', () => {
      expect(
        res.cards.every(
          c => res.cards.filter(ic => ic.type === c.type).length === 2
        )
      ).toBeTruthy()
    })
  })
  describe('for 3 types and 5 errors allowed', () => {
    const res = getNewMemoryGame(3, 5)
    test('we get correct number of errors', () => {
      expect(res.errorsLeft).toBe(5)
    })
    test('we get correct number of cards', () => {
      expect(res.cards).toHaveLength(6)
    })
    test('we get correct card states', () => {
      expect(res.cards.every(c => c.status === 'hidden')).toBeTruthy()
    })
    test('we get two of each type', () => {
      expect(
        res.cards.every(
          c => res.cards.filter(ic => ic.type === c.type).length === 2
        )
      ).toBeTruthy()
    })
  })
})
