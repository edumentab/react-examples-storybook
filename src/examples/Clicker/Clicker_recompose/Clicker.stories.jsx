import { storiesOf } from '@storybook/react'
import React from 'react'
import { number } from '@storybook/addon-knobs'

import { Clicker } from '.'

storiesOf('examples/Clicker (state handling)/Clicker (recompose)', module).add(
  'dynamic',
  () => {
    const start = number('Initial count', 0)
    return <Clicker start={start} key={start} />
  },
  {
    notes: `A basic stateful component using the [<code>Recompose</code> library](https://github.com/acdlite/recompose), which can be seen as a precursor to the new [hooks API](https://reactjs.org/docs/hooks-intro.html).`,
  }
)
