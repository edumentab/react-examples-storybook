import { storiesOf } from "@storybook/react";
import React from "react";
import { text, boolean } from "@storybook/addon-knobs";

import { User } from ".";
import { UserContext } from "./_UserContext";

storiesOf("User (old context)", module).add(
  "dynamic",
  () => {
    const userData = {
      name: text("Name", "Johan Hegg"),
      loggedIn: boolean("Logged in", true)
    };
    return (
      <UserContext key={JSON.stringify(userData)} user={userData}>
        <div>
          <div>
            <div>
              <User />
            </div>
          </div>
        </div>
      </UserContext>
    );
  },
  {
    notes: {
      markdown: `
A version of <code>User</code> that reads data from the [old deprecated context API](https://reactjs.org/docs/legacy-context.html).
`
    }
  }
);
