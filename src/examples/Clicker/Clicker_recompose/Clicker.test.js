import React from "react";
import { mount } from "enzyme";

import { Clicker } from ".";

// The tests are identical for all Clicker variants
// (except this one uses mount since Clicker renders an inner component now)

describe("The Clicker component (recompose variant)", () => {
  it("starts at 0 by default", () => {
    const wrapper = mount(<Clicker />);
    expect(wrapper.find('[data-qa="count"]')).toHaveText("0");
  });
  it("can start at given start value", () => {
    const wrapper = mount(<Clicker start={7} />);
    expect(wrapper.find('[data-qa="count"]')).toHaveText("7");
  });
  it("can increase the value", () => {
    const wrapper = mount(<Clicker start={3} />);
    wrapper.find('[data-qa="increase"]').simulate("click");
    expect(wrapper.find('[data-qa="count"]')).toHaveText("4");
  });
});
