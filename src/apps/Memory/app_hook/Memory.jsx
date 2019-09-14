import React, { useState, useMemo } from 'react'

import { UI } from '../components/UI/UI'

import { getNewMemoryGame } from '../logic/getNewMemoryGame'
import { performMove } from '../logic/performMove'

export const Memory = props => {
  const { nbrOfTypes, allowedErrors } = props
  const newGame = useMemo(() => getNewMemoryGame(nbrOfTypes, allowedErrors), [
    allowedErrors,
    nbrOfTypes,
  ])
  const [game, setGame] = useState(newGame)
  const handleTileClick = id => {
    const updatedGame = performMove(game, id)
    setGame(updatedGame)
  }

  return <UI game={game} handleTileClick={handleTileClick} />
}
