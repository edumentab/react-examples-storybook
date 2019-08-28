import { storiesOf } from '@storybook/react'
import React from 'react'
import { text } from '@storybook/addon-knobs'

import { GuessHistory } from '.'

storiesOf('apps/Hangman/components/GuessHistory', module).add('basic', () => {
  const guesses = ['a', 'e', 'aeroplane']
  return <GuessHistory guesses={guesses} />
})
