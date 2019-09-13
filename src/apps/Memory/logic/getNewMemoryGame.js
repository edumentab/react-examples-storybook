/**
 * @typedef {import("../types").MemoryGame} MemoryGame
 *
 * Creates a new memory game with randomized card order
 * @param {number} nbrOfTypes
 * @param {number} allowedErrors
 * @return {MemoryGame}
 */
export function getNewMemoryGame(nbrOfTypes, allowedErrors) {
  const range = Array.from(Array(nbrOfTypes)).map((i, n) => n)
  const cardTypes = range.concat(range)
  const cards = []
  while (cardTypes.length) {
    const randomIdx = Math.floor(Math.random() * cardTypes.length)
    cards.push({
      type: cardTypes.splice(randomIdx, 1)[0],
      status: 'hidden',
    })
  }
  return {
    errorsLeft: allowedErrors,
    cards,
  }
}
