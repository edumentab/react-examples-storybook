import React from "react";
import { mount } from "enzyme";

import { EnterField } from ".";

describe("The HangMan EnterField component", () => {
  let wrapper, input, button, callback;
  const placeholder = "write stuff here";
  beforeEach(() => {
    callback = jest.fn();
    wrapper = mount(
      <EnterField onSubmit={callback} placeholder={placeholder} />
    );
    input = wrapper.find('[data-qa="guess-input"]');
  });
  test("puts the placeholder on the input", () => {
    expect(input).toHaveProp("placeholder", placeholder);
  });
  describe("when making an input", () => {
    const input = "a";
    beforeEach(() => {
      input.getDOMNode().value = "a";
      input.simulate("keyPress", { key: "Enter" });
    });
    test("submits the input to the callback", () => {
      expect(callback).toHaveBeenCalledWith("a");
    });
    test("clears the input field", () => {
      expect(input.getDOMNode().value).toEqual("");
    });
  });
  describe("when gets disabled flag", () => {
    beforeEach(() => {
      wrapper = mount(<EnterField onSubmit={callback} disabled />);
      input = wrapper.find('[data-qa="guess-input"]');
    });
    test("the input is disabled", () => {
      expect(input).toHaveProp("disabled", true);
    });
  });
});
