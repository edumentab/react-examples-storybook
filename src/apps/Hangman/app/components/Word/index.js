import React from "react";

const letterStyle = {
  fontSize: "60px",
  margin: "3px",
  fontFamily: "monospace",
  backgroundColor: "#CCC"
};

/**
 * @typedef {object} WordProps
 * @prop {(string|null)[]} letters The letters in the current word
 *
 * A component to show a text description of the current status
 * @param {WordProps} props
 */
export const Word = props => {
  return (
    <div>
      {props.letters.map((letter, n) => (
        <span style={letterStyle} key={n}>
          {letter || "_"}
        </span>
      ))}
    </div>
  );
};
