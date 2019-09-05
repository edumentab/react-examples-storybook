import React, { useReducer } from 'react'

/**
 * @typedef {import("../types").ClickerProps} ClickerProps
 *
 * @param {ClickerProps} props
 */
export const Clicker = () => {
  const [count, dispatch] = useReducer((state, action) => state + action, 0)
  return (
    <div>
      Current count: <span data-qa="count">{count}</span>
      <button data-qa="increase" onClick={() => dispatch(1)}>
        Increase
      </button>
      <button data-qa="decrease" onClick={() => dispatch(-1)}>
        Decrease
      </button>
    </div>
  )
}
