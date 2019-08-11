import React, { useState } from 'react'
import { withState } from 'recompose'

const withCountState = withState('count', 'setCount')

export const Clicker = props => {
  const start = props.start || 0
  const withCountState = withState('count', 'setCount', start)
  const InnerClicker = withCountState(({ count, setCount }) => (
    <div>
      Current count: <span data-qa="count">{count}</span>
      <button data-qa="increase" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button data-qa="decrease" onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  ))
  return <InnerClicker />
}
