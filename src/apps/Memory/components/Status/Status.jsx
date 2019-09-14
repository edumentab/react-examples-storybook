import React from 'react'

/**
 * @typedef {import("../../types").MemoryGameStatus} MemoryGameStatus
 *
 * @typedef {object} StatusProps
 * @property {MemoryGameStatus} status
 *
 * @param {StatusProps} props
 */
export const Status = props => {
  switch (props.status) {
    case 'idle':
      return 'Click something!'
    case 'looking':
      return 'I wooooonder where the OTHER one is?!'
    case 'lost':
      return 'GAME OVER! SAD PANDA! U SUCK'
    case 'won':
      return 'OMG you did it! Celebraaaaation!'
    case 'mistake':
      return 'NOPE! Sorry (not sorry)'
    default:
      return 'this should never ever ever happen'
  }
}
