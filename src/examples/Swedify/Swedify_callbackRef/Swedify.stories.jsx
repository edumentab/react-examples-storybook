import { storiesOf } from '@storybook/react'
import React from 'react'

import { Swedify } from './Swedify'

storiesOf('examples/Swedify (DOM manip)/Swedify (callback ref)', module).add(
  'dynamic',
  () => <Swedify>Swedified via callback ref!</Swedify>,
  {
    notes: {
      markdown: `DOM manipulation via [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs).`,
    },
  }
)
