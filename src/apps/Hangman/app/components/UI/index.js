import React, { useState } from "react";

import { getLetters, getNbrOfErrors, getStatus } from "../../../logic";

import { Status } from "../Status";
import { Gallow } from "../Gallow";
import { MakeGuess } from "../MakeGuess";
import { GuessHistory } from "../GuessHistory";
import { Word } from "../Word";

export const UI = props => {
  const { state, makeGuess } = props;
  const nbrOfErrors = getNbrOfErrors(state);
  const status = getStatus(state);

  return (
    <div>
      <Status status={status} remaining={state.maxGuesses - nbrOfErrors - 1} />
      <MakeGuess onSubmit={makeGuess} disabled={status !== "playing"} />
      <Word letters={getLetters(state)} />
      <Gallow nbrOfErrors={nbrOfErrors} />
      <GuessHistory guesses={state.guesses} />
    </div>
  );
};
