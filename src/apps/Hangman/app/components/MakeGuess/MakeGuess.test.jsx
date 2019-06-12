import React from "react";
import { mount } from "enzyme";

import { MakeGuess } from ".";

describe("The HangMan MakeGuess component", () => {
  let wrapper, input, button, callback;
  beforeEach(() => {
    callback = jest.fn();
    wrapper = mount(<MakeGuess onSubmit={callback} />);
    input = wrapper.find('[data-qa="guess-input"]');
  });
  describe("when making a guess", () => {
    const guess = "a";
    beforeEach(() => {
      input.getDOMNode().value = "a";
      input.simulate("keyPress", { key: "Enter" });
    });
    test("submits the guess to the callback", () => {
      expect(callback).toHaveBeenCalledWith("a");
    });
    test("clears the input field", () => {
      expect(input.getDOMNode().value).toEqual("");
    });
  });
});
