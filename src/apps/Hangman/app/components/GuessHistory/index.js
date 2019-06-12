import React from "react";

export const GuessHistory = props => {
  return (
    <React.Fragment>
      <h4>Guesses:</h4>
      <ul>
        {props.guesses.map((guess, n) => (
          <li key={n}>{guess}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};
