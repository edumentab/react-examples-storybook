import { storiesOf } from "@storybook/react";
import React from "react";
import { text } from "@storybook/addon-knobs";

import { MakeGuess } from ".";

storiesOf("apps/Hangman/components/MakeGuess", module).add("basic", () => {
  const callback = value => console.log("Received guess", value);
  return <MakeGuess guess={callback} />;
});
