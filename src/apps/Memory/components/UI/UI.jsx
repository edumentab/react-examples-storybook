import React from 'react'

import { Board } from '../Board/Board'
import { Status } from '../Status/Status'
import { getMemoryGameStatus } from '../../logic/getMemoryGameStatus'

/**
 * @typedef {import("../../types").MemoryGame} MemoryGame
 *
 * @typedef {object} UIProps
 * @property {MemoryGame} game
 *
 * @param {UIProps} props
 */
export const UI = props => {
  const status = getMemoryGameStatus(props.game)
  return (
    <div>
      <Status status={status} />
      <Board game={props.game} handleTileClick={props.handleTileClick} />
    </div>
  )
}
