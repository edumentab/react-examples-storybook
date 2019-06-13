import { storiesOf } from "@storybook/react";
import React from "react";
import { text } from "@storybook/addon-knobs";

import { EnterField } from ".";

storiesOf("apps/Hangman/components/EnterField", module).add(
  "submits to console",
  () => {
    const callback = value => console.log("Received submission", value);
    return <EnterField onSubmit={callback} placeholder="Type and hit Enter" />;
  }
);
