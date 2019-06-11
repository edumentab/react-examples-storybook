import { storiesOf } from "@storybook/react";
import React from "react";
import { text } from "@storybook/addon-knobs";

import { Hello } from ".";

storiesOf("Hello (basic rendering)", module).add(
  "basic",
  () => {
    const name = text("Name", "John Doe");
    return <Hello name={name} />;
  },
  {
    notes: `A super-simple component that just takes a prop and renders it.`
  }
);
