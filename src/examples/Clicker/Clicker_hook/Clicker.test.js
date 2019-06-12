import React from "react";
import { shallow } from "enzyme";
import { Clicker } from ".";

// The tests are identical for all Clicker variants

describe("The Clicker component (hook variant)", () => {
  it("starts at 0 by default", () => {
    const wrapper = shallow(<Clicker />);
    expect(wrapper.find('[data-qa="count"]')).toHaveText("0");
  });
  it("can start at given start value", () => {
    const wrapper = shallow(<Clicker start={7} />);
    expect(wrapper.find('[data-qa="count"]')).toHaveText("7");
  });
  it("can increase the value", () => {
    const wrapper = shallow(<Clicker start={3} />);
    wrapper.find('[data-qa="increase"]').simulate("click");
    expect(wrapper.find('[data-qa="count"]')).toHaveText("4");
  });
});
