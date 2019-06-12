import { Gallow } from "./";
import React from "react";
import { shallow } from "enzyme";

jest.mock("./frames", () => ({ frames: ["test0", "test1", "test2"] }));

describe("the Gallow component", () => {
  test("picks a frame according to given nbr of errors", () => {
    const wrapper = shallow(<Gallow nbrOfErrors={2} />);
    expect(wrapper.find('[data-qa="gallow"]')).toHaveText("test2");
  });
});
