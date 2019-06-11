import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import { Hello } from ".";

describe("The Hello component", () => {
  it("says hello to the name that was passed in", () => {
    const wrapper = shallow(<Hello name="Göran" />);
    expect(wrapper.text()).toEqual("Hello Göran!");
  });
});
