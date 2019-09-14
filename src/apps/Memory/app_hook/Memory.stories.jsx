import { storiesOf } from '@storybook/react'
import React from 'react'

import { Memory } from './Memory'

storiesOf('apps/Memory/App_hook', module).add('Play Memory!', () => {
  return <Memory nbrOfTypes={4} allowedErrors={3} />
})
