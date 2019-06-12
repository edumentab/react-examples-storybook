import React, { useRef } from "react";

export const MakeGuess = props => {
  const inputRef = useRef(null);
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      props.onSubmit(inputRef.current.value);
      inputRef.current.value = "";
    }
  };
  return (
    <div style={{ margin: "5px" }}>
      <input
        ref={inputRef}
        onKeyPress={handleKeyPress}
        disabled={props.disabled}
        id="guess"
        placeholder="Guess letter or word"
        autoComplete="off"
        data-qa="guess-input"
      />
    </div>
  );
};
