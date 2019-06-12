import { storiesOf } from "@storybook/react";
import React from "react";

import { Form } from ".";

storiesOf(
  "examples/Form (controlled vs uncontrolled)/Form (controlled, hook)",
  module
).add(
  "output in console",
  () => {
    return <Form onSubmit={name => console.log("Submitted", name)} />;
  },
  {
    notes: `A form using the [controlled pattern](https://reactjs.org/docs/forms.html#controlled-components)`
  }
);
