import React from "react";

export const MakeGuess = props => {
  const callback = e => {
    e.preventDefault();
    const input = e.target.children[0];
    const value = input.value;
    input.value = "";
    props.guess(value);
  };
  return (
    <form onSubmit={callback} style={{ margin: "5px" }}>
      <input
        disabled={props.disabled}
        id="guess"
        placeholder="Guess letter or word"
        autoComplete="off"
      />
    </form>
  );
};
