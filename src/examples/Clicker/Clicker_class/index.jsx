import React, { useState, Component } from 'react'

export class Clicker extends Component {
  constructor(props) {
    super(props)
    this.state = { count: props.start || 0 }
  }
  // note that we assign arrow functions here to make sure `this`
  // points to the right thing when passed as a reference
  increase = () => this.setState({ count: this.state.count + 1 })
  decrease = () => this.setState({ count: this.state.count - 1 })
  render() {
    return (
      <div>
        Current count: <span data-qa="count">{this.state.count}</span>
        <button data-qa="increase" onClick={this.increase}>
          Increase
        </button>
        <button data-qa="decrease" onClick={this.decrease}>
          Decrease
        </button>
      </div>
    )
  }
}
