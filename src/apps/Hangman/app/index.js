import React, { useState } from "react";

import { hangman, getNewGame } from "../logic";

import { UI } from "./components/UI";
import { EnterField } from "./components/EnterField";

export const Hangman = props => {
  const [state, setState] = useState(null);

  const makeGuess = guess => setState(hangman(guess, state));
  const startGame = answer => setState(getNewGame({ answer }));

  if (!state) {
    return (
      <EnterField onSubmit={startGame} placeholder="Choose the secret answer" />
    );
  }

  return <UI state={state} makeGuess={makeGuess} />;
};
