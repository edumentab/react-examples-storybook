import { storiesOf } from "@storybook/react";
import React from "react";
import { text } from "@storybook/addon-knobs";

import { Hangman } from ".";

storiesOf("Hangman/Game", module).add("play the game!", () => {
  const answer = text("Answer", "aeroplane");
  return <Hangman key={answer} answer={answer} />;
});
