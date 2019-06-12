import React from "react";
import { shallow } from "enzyme";

import { User } from ".";
import { UserContext } from "./_UserContext";

describe("The User component (old context version)", () => {
  it("should render name fetched from user context", () => {
    const name = "Johan Hegg";
    const userData = { name, loggedIn: true };
    const wrapper = shallow(<User />, { context: { user: userData } });
    expect(wrapper).toIncludeText(name);
  });
});
