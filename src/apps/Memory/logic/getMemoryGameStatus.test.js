import { getMemoryGameStatus } from './getMemoryGameStatus'

describe('the getMemoryGameStatus function', () => {
  describe('when no errors left', () => {
    const res = getMemoryGameStatus({
      cards: [],
      errorsLeft: 0,
    })
    test('we get "lost"', () => {
      expect(res).toEqual('lost')
    })
  })
  describe('when all cards are done', () => {
    const res = getMemoryGameStatus({
      cards: [{ type: 1, status: 'done' }, { type: 1, status: 'done' }],
      errorsLeft: 3,
    })
    test('we get "won"', () => {
      expect(res).toEqual('won')
    })
  })
  describe('when single card is revealed', () => {
    const res = getMemoryGameStatus({
      cards: [{ type: 1, status: 'hidden' }, { type: 1, status: 'revealed' }],
      errorsLeft: 3,
    })
    test('we get "looking"', () => {
      expect(res).toEqual('looking')
    })
  })
  describe('when two cards are revealed', () => {
    const res = getMemoryGameStatus({
      cards: [{ type: 1, status: 'revealed' }, { type: 1, status: 'revealed' }],
      errorsLeft: 3,
    })
    test('we get "mistake"', () => {
      expect(res).toEqual('mistake')
    })
  })
})
