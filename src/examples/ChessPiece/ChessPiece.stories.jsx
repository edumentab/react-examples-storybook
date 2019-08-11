import { storiesOf } from '@storybook/react'
import React from 'react'
import { select } from '@storybook/addon-knobs'

import { ChessPiece } from '.'

storiesOf('examples/ChessPiece (transition, CSS modules)', module).add(
  'select with knob',
  () => {
    return (
      <ChessPiece
        piece={select(
          'Piece',
          ['pawn', 'king', 'queen', 'rook', 'bishop', 'knight'],
          'pawn'
        )}
        mode={select('Mode', ['normal', 'available', 'selected'], 'normal')}
      />
    )
  },
  {
    notes: `A chess piece using [CSS modules](https://github.com/css-modules/css-modules) and [React Transition Group](https://github.com/reactjs/react-transition-group) (and also the [classnames](https://github.com/JedWatson/classnames#readme) helper) `,
  }
)
