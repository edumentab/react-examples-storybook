import React, { useRef } from "react";

export const Form = props => {
  const inputRef = useRef(null);
  const handleSubmit = () => {
    props.onSubmit(inputRef.current.value);
    inputRef.current.value = "";
  };
  const handleKeyPress = e => {
    if (e.key === "Enter") handleSubmit();
  };
  return (
    <fieldset>
      <legend>Enter your name</legend>
      <input
        ref={inputRef}
        data-qa="name-field"
        type="text"
        onKeyPress={handleKeyPress}
        defaultValue="John Doe"
      />
      <button data-qa="submit-btn" onClick={handleSubmit}>
        Submit!
      </button>
    </fieldset>
  );
};
