import React, { useState } from "react";

import { getLetters, getNbrOfErrors, getStatus } from "../../../logic";

import { Status } from "../Status";
import { Gallow } from "../Gallow";
import { EnterField } from "../EnterField";
import { GuessHistory } from "../GuessHistory";
import { Word } from "../Word";

export const UI = props => {
  const { state, makeGuess } = props;
  const nbrOfErrors = getNbrOfErrors(state);
  const status = getStatus(state);

  return (
    <div>
      <Status status={status} remaining={state.maxGuesses - nbrOfErrors - 1} />
      <EnterField
        onSubmit={makeGuess}
        disabled={status !== "playing"}
        placeholder="Guess a letter or word"
      />
      <Word letters={getLetters(state)} />
      <Gallow nbrOfErrors={nbrOfErrors} />
      <GuessHistory guesses={state.guesses} />
    </div>
  );
};
