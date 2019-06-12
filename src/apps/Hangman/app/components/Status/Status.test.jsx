import React from "react";
import { shallow } from "enzyme";

import { Status } from ".";

describe("The HangMan Status component", () => {
  test("shows message to losers", () => {
    const wrapper = shallow(<Status status="lost" />);
    expect(wrapper).toIncludeText("You lose");
  });
  test("shows message to winners", () => {
    const wrapper = shallow(<Status status="won" />);
    expect(wrapper).toIncludeText("You win");
  });
  test("shows instruction during game", () => {
    const wrapper = shallow(<Status status="playing" remaining={2} />);
    expect(wrapper).toIncludeText("Guess");
    expect(wrapper).toIncludeText("2");
  });
});
