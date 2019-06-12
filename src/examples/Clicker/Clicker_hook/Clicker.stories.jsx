import { storiesOf } from "@storybook/react";
import React from "react";
import { number } from "@storybook/addon-knobs";

import { Clicker } from ".";

storiesOf("examples/Clicker (state handling)/Clicker (hook)", module).add(
  "dynamic",
  () => {
    const start = number("Initial count", 0);
    return <Clicker start={start} key={start} />;
  },
  {
    notes: `A basic stateful component using the [<code>useState</code> hook](https://reactjs.org/docs/hooks-state.html).`
  }
);
