import React, { useState, Component } from 'react'
import createReactClass from 'create-react-class'

export const Clicker = createReactClass({
  getInitialState() {
    return { count: this.props.start || 0 }
  },
  increase() {
    this.setState({ count: this.state.count + 1 })
  },
  decrease() {
    this.setState({ count: this.state.count - 1 })
  },
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
  },
})
