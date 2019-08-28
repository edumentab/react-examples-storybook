import React, { Component } from 'react'

import { performGuess, getNewGame } from '../logic'

import { UI, EnterField } from '../components'

export class Hangman extends Component {
  constructor(props) {
    super(props)
    this.state = { game: null }
  }
  makeGuess = guess =>
    this.setState({ game: performGuess(guess, this.state.game) })
  startGame = answer => this.setState({ game: getNewGame({ answer }) })
  render() {
    if (!this.state.game) {
      return (
        <EnterField
          onSubmit={this.startGame}
          placeholder="Choose the secret answer"
        />
      )
    }
    return <UI state={this.state.game} makeGuess={this.makeGuess} />
  }
}
