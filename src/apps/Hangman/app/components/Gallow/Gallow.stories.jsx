import { storiesOf } from "@storybook/react";
import React from "react";
import { select } from "@storybook/addon-knobs";

import { Gallow } from ".";

storiesOf("apps/Hangman/components/Gallow", module).add(
  "dynamic",
  () => <Gallow nbrOfErrors={select("Frame", [0, 1, 2, 3, 4], 0)} />,
  {
    notes: {
      markdown: `The component responsible for drawing the gallow.`
    }
  }
);
