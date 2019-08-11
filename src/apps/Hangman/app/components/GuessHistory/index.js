import React from 'react'

/**
 * @typedef {import("../../../types").HangmanStatus} HangmanStatus
 *
 * @typedef {object} GuessHistoryProps
 * @prop {string[]} guesses All guesses made so far
 *
 * A component to show a text description of the current status
 * @param {GuessHistoryProps} props
 */
export const GuessHistory = props => {
  return (
    <React.Fragment>
      <h4>Guesses:</h4>
      <ul>
        {props.guesses.map((guess, n) => (
          <li key={n}>{guess}</li>
        ))}
      </ul>
    </React.Fragment>
  )
}
