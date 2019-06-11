import { storiesOf } from "@storybook/react";
import React from "react";

import { UI } from ".";

const almostDead = {
  answer: "aeroplane",
  maxGuesses: 4,
  guesses: ["a", "e", "x", "n", "u"]
};

const justBeginning = {
  answer: "malediction",
  maxGuesses: 4,
  guesses: []
};

const makeGuess = guess => console.log("received guess", guess);

storiesOf("Hangman/components/UI", module)
  .add("almost dead", () => <UI state={almostDead} makeGuess={makeGuess} />)
  .add("just beginning", () => (
    <UI state={justBeginning} makeGuess={makeGuess} />
  ));
