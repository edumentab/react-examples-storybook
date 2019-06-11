import React from "react";

const letterStyle = {
  fontSize: "60px",
  margin: "3px",
  fontFamily: "monospace",
  backgroundColor: "#CCC"
};

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
