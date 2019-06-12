import { storiesOf } from "@storybook/react";
import React from "react";
import { text, boolean } from "@storybook/addon-knobs";

import { User } from ".";
import { UserContext } from "./_UserContext";

storiesOf("examples/User (data from context)/User (hook)", module).add(
  "dynamic",
  () => {
    const userData = {
      name: text("Name", "Johan Hegg"),
      loggedIn: boolean("Logged in", true)
    };
    return (
      <UserContext.Provider value={userData}>
        <div>
          <div>
            <div>
              <User />
            </div>
          </div>
        </div>
      </UserContext.Provider>
    );
  },
  {
    notes: {
      markdown: `A version of <code>User</code> that accesses data from [React context API](https://reactjs.org/docs/context.html) through the [<code>useContext</code> hook](https://reactjs.org/docs/hooks-reference.html#usecontext).`
    }
  }
);
