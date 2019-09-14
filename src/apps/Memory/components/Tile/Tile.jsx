import React from 'react'

import classNames from 'classnames'

import css from './Tile.css'

/**
 * @typedef {import("../../types").MemoryCard} MemoryCard
 *
 * @typedef {object} TileProps
 * @property {MemoryCard} cardState
 *
 * @param {TileProps} props
 */
export const Tile = props => (
  <div
    onClick={props.handleClick}
    className={classNames(css.tile, css[props.cardState.status])}
  >
    {props.cardState.status !== 'hidden' && props.cardState.type}
  </div>
)
