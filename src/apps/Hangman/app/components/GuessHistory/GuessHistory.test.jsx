import React from "react";
import { shallow } from "enzyme";
import { GuessHistory } from ".";

describe("The hangman GuessHistory component", () => {
  test("should render all the given guesses", () => {
    const guesses = ["aeroplane", "monkey", "x"];
    const wrapper = shallow(<GuessHistory guesses={guesses} />);
    for (const guess of guesses) {
      expect(wrapper).toIncludeText(guess);
    }
  });
});
