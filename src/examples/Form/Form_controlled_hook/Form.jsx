import React, { useState } from 'react'

export const Form = props => {
  const [field, setField] = useState('John Doe')
  const handleSubmit = () => {
    props.onSubmit(field)
    setField('')
  }
  const handleKeyPress = e => {
    if (e.key === 'Enter') handleSubmit()
  }
  const handleType = e => {
    setField(e.target.value)
  }
  return (
    <fieldset>
      <legend>Enter your name</legend>
      <input
        data-qa="name-field"
        type="text"
        onChange={handleType}
        onKeyPress={handleKeyPress}
        value={field}
      />
      <button data-qa="submit-btn" onClick={handleSubmit}>
        Submit!
      </button>
    </fieldset>
  )
}
