import { storiesOf } from '@storybook/react'
import React from 'react'
import { select, number } from '@storybook/addon-knobs'

import { Status } from '.'

storiesOf('apps/Hangman/components/Status', module).add(
  'choose with knobs',
  () => (
    <Status
      status={select('Status', ['won', 'lost', 'playing'], 'playing')}
      remaining={number('Remaining', 4)}
    />
  )
)
