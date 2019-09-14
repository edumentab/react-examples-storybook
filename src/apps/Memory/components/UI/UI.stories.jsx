import { storiesOf } from '@storybook/react'
import { getNewMemoryGame } from '../../logic/getNewMemoryGame'
import React from 'react'

import { UI } from './UI'

storiesOf('apps/Memory/components/UI', module).add('UI', () => {
  const game = getNewMemoryGame(3, 666)
  const handler = id => console.log('Clicked card number', id)
  return <UI game={game} handleTileClick={handler} />
})
