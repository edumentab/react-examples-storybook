import React from 'react'
import { storiesOf } from '@storybook/react'
import { getNewMemoryGame } from '../../logic/getNewMemoryGame'
import { Board } from './Board'

storiesOf('apps/Memory/components/Board', module).add('awesome board', () => {
  const game = getNewMemoryGame(3, 666)
  const handler = id => console.log('Clicked card number', id)
  return <Board game={game} handleTileClick={handler} />
})
