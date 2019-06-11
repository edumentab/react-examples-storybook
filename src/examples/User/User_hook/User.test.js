import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import { User } from ".";
import { UserContext } from "./_UserContext";

describe("The User component (hook version)", () => {
  it("should render name fetched from user context", () => {
    const name = "Johan Hegg";
    const userData = { name, loggedIn: true };
    const wrapper = mount(
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
    expect(wrapper).toIncludeText(name);
  });
});
