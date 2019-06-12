import React, { useState } from "react";

import { hangman, getLetters, getNbrOfErrors, getStatus } from "../logic";

import { UI } from "./components/UI";

export const Hangman = props => {
  const [state, setState] = useState({
    maxGuesses: 5,
    guesses: [],
    answer: props.answer
  });

  const makeGuess = guess => setState(hangman(guess, state));

  return (
    <div>
      <UI state={state} makeGuess={makeGuess} />
    </div>
  );
};
