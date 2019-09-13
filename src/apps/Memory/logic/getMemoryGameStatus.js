/**
 * @typedef {import("../types").MemoryGame} MemoryGame
 * @typedef {import("../types").MemoryGameStatus} MemoryGameStatus
 *
 * Helper function that takes a Memory game and returns current status
 * @param {MemoryGame} game
 * @return {MemoryGameStatus}
 */
export function getMemoryGameStatus(game) {
  if (game.errorsLeft === 0) return 'lost'
  const counts = game.cards.reduce(
    (memo, card) => ({
      ...memo,
      [card.status]: memo[card.status] + 1,
    }),
    { hidden: 0, done: 0, revealed: 0 }
  )
  if (counts.done === game.cards.length) return 'won'
  if (counts.revealed === 2) return 'mistake'
  if (counts.revealed === 1) return 'looking'
  return 'idle'
}
