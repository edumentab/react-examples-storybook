import { performMove } from './performMove'

/**
 * @typedef {import("../types").MemoryGame} MemoryGame
 */

describe('the performMove function', () => {
  /**
   * @type {MemoryGame}
   */
  let game
  describe('when touching a revealed card when no other cards are revealed', () => {
    beforeEach(() => {
      game = {
        errorsLeft: 3,
        cards: [
          { type: 0, status: 'hidden' },
          { type: 0, status: 'revealed' },
          { type: 1, status: 'hidden' },
          { type: 1, status: 'hidden' },
        ],
      }
    })
    test('nothing happens', () => {
      expect(performMove(game, 1)).toEqual(game)
    })
  })
  describe('when touching a revealed card when another card is revealed', () => {
    beforeEach(() => {
      game = {
        errorsLeft: 3,
        cards: [
          { type: 0, status: 'hidden' },
          { type: 0, status: 'revealed' },
          { type: 1, status: 'hidden' },
          { type: 1, status: 'revealed' },
          { type: 2, status: 'done' },
          { type: 2, status: 'done' },
        ],
      }
    })
    test('both are flipped back', () => {
      expect(performMove(game, 3)).toEqual({
        errorsLeft: 3,
        cards: [
          { type: 0, status: 'hidden' },
          { type: 0, status: 'hidden' },
          { type: 1, status: 'hidden' },
          { type: 1, status: 'hidden' },
          { type: 2, status: 'done' },
          { type: 2, status: 'done' },
        ],
      })
    })
  })
  describe('when touching a done card', () => {
    beforeEach(() => {
      game = {
        errorsLeft: 3,
        cards: [
          { type: 0, status: 'hidden' },
          { type: 0, status: 'revealed' },
          { type: 1, status: 'hidden' },
          { type: 1, status: 'revealed' },
          { type: 2, status: 'done' },
          { type: 2, status: 'done' },
        ],
      }
    })
    test('nothing happens', () => {
      expect(performMove(game, 4)).toEqual(game)
    })
  })
  describe('when touching a hidden card and none is revealed', () => {
    beforeEach(() => {
      game = {
        errorsLeft: 3,
        cards: [
          { type: 0, status: 'hidden' },
          { type: 0, status: 'hidden' },
          { type: 1, status: 'hidden' },
          { type: 1, status: 'hidden' },
          { type: 2, status: 'done' },
          { type: 2, status: 'done' },
        ],
      }
    })
    test('that card is revealed', () => {
      expect(performMove(game, 2)).toEqual({
        errorsLeft: 3,
        cards: [
          { type: 0, status: 'hidden' },
          { type: 0, status: 'hidden' },
          { type: 1, status: 'revealed' },
          { type: 1, status: 'hidden' },
          { type: 2, status: 'done' },
          { type: 2, status: 'done' },
        ],
      })
    })
  })
  describe('when touching a hidden card and a similar is revealed', () => {
    beforeEach(() => {
      game = {
        errorsLeft: 3,
        cards: [
          { type: 0, status: 'revealed' },
          { type: 0, status: 'hidden' },
          { type: 1, status: 'hidden' },
          { type: 1, status: 'hidden' },
          { type: 2, status: 'done' },
          { type: 2, status: 'done' },
        ],
      }
    })
    test('both are made done', () => {
      expect(performMove(game, 1)).toEqual({
        errorsLeft: 3,
        cards: [
          { type: 0, status: 'done' },
          { type: 0, status: 'done' },
          { type: 1, status: 'hidden' },
          { type: 1, status: 'hidden' },
          { type: 2, status: 'done' },
          { type: 2, status: 'done' },
        ],
      })
    })
  })
  describe('when touching a hidden card and a different is revealed', () => {
    beforeEach(() => {
      game = {
        errorsLeft: 3,
        cards: [
          { type: 0, status: 'revealed' },
          { type: 0, status: 'hidden' },
          { type: 1, status: 'hidden' },
          { type: 1, status: 'hidden' },
          { type: 2, status: 'done' },
          { type: 2, status: 'done' },
        ],
      }
    })
    test('the hidden card is revealed and errorsLeft is diminished', () => {
      expect(performMove(game, 2)).toEqual({
        errorsLeft: 2,
        cards: [
          { type: 0, status: 'revealed' },
          { type: 0, status: 'hidden' },
          { type: 1, status: 'revealed' },
          { type: 1, status: 'hidden' },
          { type: 2, status: 'done' },
          { type: 2, status: 'done' },
        ],
      })
    })
  })
  describe('when touching a hidden card and two others are revealed', () => {
    beforeEach(() => {
      game = {
        errorsLeft: 3,
        cards: [
          { type: 0, status: 'revealed' },
          { type: 0, status: 'hidden' },
          { type: 1, status: 'revealed' },
          { type: 1, status: 'hidden' },
          { type: 2, status: 'done' },
          { type: 2, status: 'done' },
        ],
      }
    })
    test('nothing happens', () => {
      expect(performMove(game, 4)).toEqual(game)
    })
  })
})
