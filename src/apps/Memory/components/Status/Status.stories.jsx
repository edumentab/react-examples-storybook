import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'

import React from 'react'

import { Status } from './Status'

storiesOf('apps/Memory/components/Status', module).add(
  'testing the Status',
  () => {
    const status = select(
      'Game status',
      ['won', 'lost', 'idle', 'mistake', 'looking'],
      'idle'
    )
    return <Status status={status} />
  }
)
