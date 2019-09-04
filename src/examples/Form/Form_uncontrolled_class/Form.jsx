import React, { createRef } from 'react'

export class Form extends React.Component {
  input = createRef()
  handleKeyPress = e => {
    if (e.key === 'Enter') this.submitName()
  }
  submitName = () => {
    this.props.onSubmit(this.input.current.value)
    this.input.current.value = ''
  }
  render() {
    return (
      <fieldset>
        <legend>Enter your name</legend>
        <input
          data-qa="name-field"
          type="text"
          onKeyPress={this.handleKeyPress}
          ref={this.input}
          defaultValue="John Doe"
        />
        <button data-qa="submit-btn" onClick={this.submitName}>
          Submit!
        </button>
      </fieldset>
    )
  }
}
