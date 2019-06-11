import React from "react";
import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import { User } from ".";
import { UserContext } from "./_UserContext";

describe("The User component (old context version)", () => {
  it("should render name fetched from user context", () => {
    const name = "Johan Hegg";
    const userData = { name, loggedIn: true };
    const wrapper = render(<User />, { context: { user: userData } });
    expect(wrapper.text()).toMatch(name);
  });
});
