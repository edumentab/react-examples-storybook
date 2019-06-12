import { storiesOf } from "@storybook/react";
import React from "react";
import { select, number } from "@storybook/addon-knobs";

import { Status } from ".";

storiesOf("Hangman/components/Status", module).add("basic", () => (
  <Status
    status={select("Status", ["won", "lost", "playing"])}
    remaining={number("Remaining", 4)}
  />
));
