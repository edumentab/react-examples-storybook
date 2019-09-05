import { storiesOf } from '@storybook/react'
import React from 'react'

import { Swedify } from './Swedify'

storiesOf('examples/Swedify (DOM manip)/Swedify (useRef)', module).add(
  'dynamic',
  () => <Swedify>Swedified via useRef!</Swedify>,
  {
    notes: {
      markdown: `DOM manipulation via [useRef hook](https://reactjs.org/docs/hooks-reference.html#useref).`,
    },
  }
)
