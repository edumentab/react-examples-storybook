import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'

import React from 'react'

import { Tile } from './Tile'

storiesOf('apps/Memory/components/Tile', module).add('a memory tile', () => {
  const status = select('Card status', ['hidden', 'revealed', 'done'], 'hidden')
  const cardState = {
    type: 3,
    status: status,
  }
  const testClick = () => {
    console.log('CLICK')
  }
  return <Tile cardState={cardState} handleClick={testClick} />
})
