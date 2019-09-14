import React from 'react'
import css from './Board.css'

import { Tile } from '../Tile/Tile'

/**
 * @typedef {import("../../types").MemoryGame} MemoryGame
 *
 * @typedef {object} TileProps
 * @property {MemoryGame} game
 *
 * @param {TileProps} props
 */
export const Board = props => {
  return (
    <div className={css.board}>
      {props.game.cards.map((card, n) => (
        <Tile
          key={n}
          cardState={card}
          handleClick={() => props.handleTileClick(n)}
        />
      ))}
    </div>
  )
}
