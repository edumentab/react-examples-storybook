import React, { useState } from "react";

import { performGuess, getNewGame } from "../logic";

import { UI, EnterField } from "./components";

export const Hangman = props => {
  const [state, setState] = useState(null);

  const makeGuess = guess => setState(performGuess(guess, state));
  const startGame = answer => setState(getNewGame({ answer }));

  if (!state) {
    return (
      <EnterField onSubmit={startGame} placeholder="Choose the secret answer" />
    );
  }

  return <UI state={state} makeGuess={makeGuess} />;
};
