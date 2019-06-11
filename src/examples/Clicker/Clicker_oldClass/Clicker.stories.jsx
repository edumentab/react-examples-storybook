import { storiesOf } from "@storybook/react";
import React from "react";
import { number } from "@storybook/addon-knobs";

import { Clicker } from ".";

storiesOf("Clicker (state handling)/Clicker (old createClass)", module).add(
  "dynamic",
  () => {
    const start = number("Initial count", 0);
    const ClickerFactory = React.createFactory(Clicker); // detour because old legacy component
    return <ClickerFactory start={start} key={start} />;
  },
  {
    notes: `A basic stateful component using the deprecated [<code>createReactClass</code>](https://reactjs.org/docs/react-without-es6.html).`
  }
);
