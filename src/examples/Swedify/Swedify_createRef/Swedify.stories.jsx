import { storiesOf } from '@storybook/react'
import React from 'react'

import { Swedify } from './Swedify'

storiesOf(
  'examples/Swedify (DOM manip)/Swedify (createRef, class)',
  module
).add('dynamic', () => <Swedify>Swedified via class and createRef!</Swedify>, {
  notes: {
    markdown: `DOM manipulation via [createRef](https://reactjs.org/docs/refs-and-the-dom.html).`,
  },
})
