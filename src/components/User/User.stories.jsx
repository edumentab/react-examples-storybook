import { storiesOf } from "@storybook/react";
import React from "react";
import { text, boolean } from "@storybook/addon-knobs";

import { User } from ".";
import { UserContext } from "./_UserContext";

storiesOf("User (context)", module).add("dynamic", () => {
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
});
