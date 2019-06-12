import React from "react";
import { mount } from "enzyme";

import { Form } from ".";

describe("the Form example component (controlled, hook)", () => {
  let wrapper, input, button, callback;
  beforeEach(() => {
    callback = jest.fn();
    wrapper = mount(<Form onSubmit={callback} />);
    input = wrapper.find('[data-qa="name-field"]');
    button = wrapper.find('[data-qa="submit-btn"]');
  });
  // hooks are still wonky in Enzyme tests :/
  test.skip("submits the current field content when button is clicked", () => {
    input.simulate("change", { target: { value: "SuperMax" } });
    button.simulate("click");
    expect(callback).toHaveBeenCalledWith("SuperMax");
  });
  test.skip("can also submit via Enter key", () => {
    input.simulate("change", { target: { value: "Dork" } });
    input.simulate("keyPress", { key: "Enter" });
    expect(callback).toHaveBeenCalledWith("Dork");
  });
});
