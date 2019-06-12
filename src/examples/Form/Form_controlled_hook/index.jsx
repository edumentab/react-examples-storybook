import React, { useState, useCallback } from "react";

export const Form = props => {
  const [field, setField] = useState("John Doe");
  const handleSubmit = useCallback(() => {
    props.onSubmit(field);
    setField("");
  }, [props.onSubmit]);
  const handleKeyPress = useCallback(
    e => {
      if (e.key === "Enter") handleSubmit();
    },
    [handleSubmit, setField]
  );
  const handleType = useCallback(e => {
    console.log("TYYYYPE", e.target.value);
    setField(e.target.value), [setField];
  });
  console.log("REEENDEEER", field);
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
  );
};
