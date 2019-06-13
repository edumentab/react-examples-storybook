import React, { useRef } from "react";
import pt from "prop-types";

/**
 * @typedef {object} EnterFieldProps
 * @prop {bool} disabled
 * @prop {func} onSubmit
 * @prop {string} placeholder
 *
 * A component to display an input that submits on Enter press
 * @param {EnterFieldProps} props
 */
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
