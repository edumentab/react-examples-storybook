import React from "react";
import { mount } from "enzyme";

import { Form } from ".";

describe("the Form example component (uncontrolled, hook)", () => {
  let wrapper, input, button, callback;
  beforeEach(() => {
    callback = jest.fn();
    wrapper = mount(<Form onSubmit={callback} />);
    input = wrapper.find('[data-qa="name-field"]');
    button = wrapper.find('[data-qa="submit-btn"]');
  });
  test("submits the current field content when button is clicked", () => {
    input.getDOMNode().value = "SuperMax";
    button.simulate("click");
    expect(callback).toHaveBeenCalledWith("SuperMax");
  });
  test("can also submit via Enter key", () => {
    input.getDOMNode().value = "Dork";
    input.simulate("keyPress", { key: "Enter" });
    expect(callback).toHaveBeenCalledWith("Dork");
  });
});
