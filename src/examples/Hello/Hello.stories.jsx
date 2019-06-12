import { storiesOf } from "@storybook/react";
import React from "react";
import { text } from "@storybook/addon-knobs";

import { Hello } from "../Hello";

storiesOf("examples/Hello (basic rendering)", module).add(
  "change input in the Knobs tab",
  () => {
    const name = text("Name", "John Doe");
    return <Hello name={name} />;
  },
  {
    notes: `A super-simple component that just takes a prop and renders it.`
  }
);
