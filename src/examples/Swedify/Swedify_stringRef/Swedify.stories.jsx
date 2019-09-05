import { storiesOf } from '@storybook/react'
import React from 'react'

import { Swedify } from './Swedify'

storiesOf(
  'examples/Swedify (DOM manip)/Swedify (createRef, class)',
  module
).add(
  'dynamic',
  () => <Swedify>Swedified via string ref (deprecated)</Swedify>,
  {
    notes: {
      markdown: `DOM manipulation via [createRef](https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs).`,
    },
  }
)
