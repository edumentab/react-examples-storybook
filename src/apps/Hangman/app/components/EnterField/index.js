import React, { useRef } from "react";

export const EnterField = props => {
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
        placeholder={props.placeholder}
        autoComplete="off"
        data-qa="input-field"
      />
    </div>
  );
};
