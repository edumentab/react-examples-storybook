import { getMemoryGameStatus } from './getMemoryGameStatus'

/**
 * @typedef {import("../types").MemoryGame} MemoryGame
 *
 * Make a move in a memory game
 * @param {MemoryGame} game
 * @param {number} cardIdx
 * @return {MemoryGame}
 */
export function performMove(game, cardIdx) {
  const status = getMemoryGameStatus(game)
  const card = game.cards[cardIdx]
  if (status === 'lost') return game
  if (status === 'won') return game
  if (card.status === 'revealed') {
    if (status === 'looking') return game
    return {
      ...game,
      cards: game.cards.map(card => ({
        ...card,
        status: card.status === 'revealed' ? 'hidden' : card.status,
      })),
    }
  }
  if (card.status === 'hidden') {
    if (status === 'idle') {
      return {
        ...game,
        cards: game.cards.map((card, n) => ({
          ...card,
          status: n === cardIdx ? 'revealed' : card.status,
        })),
      }
    }
    if (status === 'looking') {
      const otherIdx = game.cards.findIndex(card => card.status === 'revealed')
      const otherCard = game.cards[otherIdx]
      if (card.type === otherCard.type) {
        return {
          ...game,
          cards: game.cards.map((card, n) => ({
            ...card,
            status: n === cardIdx || n === otherIdx ? 'done' : card.status,
          })),
        }
      } else {
        return {
          ...game,
          errorsLeft: game.errorsLeft - 1,
          cards: game.cards.map((card, n) => ({
            ...card,
            status: n === cardIdx ? 'revealed' : card.status,
          })),
        }
      }
    }
  }
  return game
}
