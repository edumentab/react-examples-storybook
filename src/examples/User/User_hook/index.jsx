import React, { useContext } from "react";

import { UserContext } from "./_UserContext";

export const User = props => {
  const user = useContext(UserContext);
  return (
    <span>
      {user.name || "Anonymous"} {user.loggedIn && "(authenticated)"}
    </span>
  );
};
