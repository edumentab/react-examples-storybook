import { storiesOf } from '@storybook/react'
import React from 'react'

import { EnterField } from '../EnterField'

storiesOf('apps/Hangman/components/EnterField', module).add(
  'submits to console',
  () => {
    const callback = value => console.log('Received submission', value)
    return <EnterField onSubmit={callback} placeholder="Type and hit Enter" />
  }
)
