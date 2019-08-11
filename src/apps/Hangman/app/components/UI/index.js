import React, { useState } from 'react'

import { getLetters, getNbrOfErrors, getStatus } from '../../../logic'

import { Status } from '../Status'
import { Gallow } from '../Gallow'
import { EnterField } from '../EnterField'
import { GuessHistory } from '../GuessHistory'
import { Word } from '../Word'

/**
 * @typedef {import("../../../types").Hangman} Hangman
 *
 * @typedef {object} UIProps
 * @prop {Hangman} state The current state of the game
 * @prop {function} makeGuess callback to submit a new guess
 *
 * A component render the UI for an ongoing Hangman game
 * @param {UIProps} props
 */
export const UI = props => {
  const { state, makeGuess } = props
  const nbrOfErrors = getNbrOfErrors(state)
  const status = getStatus(state)

  return (
    <div>
      <Status status={status} remaining={state.maxGuesses - nbrOfErrors - 1} />
      <EnterField
        onSubmit={makeGuess}
        disabled={status !== 'playing'}
        placeholder="Guess a letter or word"
      />
      <Word letters={getLetters(state)} />
      <Gallow nbrOfErrors={nbrOfErrors} />
      <GuessHistory guesses={state.guesses} />
    </div>
  )
}
