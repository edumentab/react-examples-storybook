import pt from 'prop-types'

/**
 * @typedef {'hidden' | 'done' | 'revealed'} MemoryCardStatus
 *
 * @typedef {object} MemoryCard
 * @property {number} type
 * @property {MemoryCardStatus} status
 *
 * @typedef {object} MemoryGame
 * @property {number} errorsLeft
 * @property {MemoryCard[]} cards
 *
 * @typedef {'idle' | 'won' | 'looking' | 'mistake' | 'lost'} MemoryGameStatus
 */

export const MemoryGameProps = pt.shape({
  errorsLeft: pt.number,
  cards: pt.arrayOf(
    pt.shape({
      type: pt.number,
      status: pt.oneOf(['hidden', 'done', 'revealed']),
    })
  ),
})
