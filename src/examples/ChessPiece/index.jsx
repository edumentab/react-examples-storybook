import React from 'react'
import { TransitionGroup } from 'react-transition-group'
import Transition from 'react-transition-group/Transition'
import classnames from 'classnames'

import css from './ChessPiece.css'
import { ChessPieceProps } from './ChessPiece.types';

const char = {
  king: '♚',
  queen: '♛',
  rook: '♜',
  bishop: '♝',
  knight: '♞',
  pawn: '♟',
}

/**
 * @typedef {import("./ChessPiece.types").ChessPieceProps} ChessPieceProps
 *
 * @param {ChessPieceProps} props
 */
export const ChessPiece = props => {
  return (
    <span
      className={classnames(css.container, {
        [css.available]: props.mode === 'available',
        [css.selected]: props.mode === 'selected',
      })}
    >
      <TransitionGroup>
        <Transition key={props.piece} timeout={{ enter: 20, exit: 500 }}>
          {status => (
            <span
              className={classnames(css.icon, {
                [css.entering]: status === 'entering',
                [css.exiting]: status === 'exiting',
              })}
            >
              {char[props.piece]}
            </span>
          )}
        </Transition>
      </TransitionGroup>
    </span>
  )
}

ChessPiece.propTypes = ChessPieceProps