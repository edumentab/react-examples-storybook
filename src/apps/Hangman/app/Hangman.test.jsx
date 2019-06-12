import React from "react";
import { shallow } from "enzyme";

jest.mock("../logic/getNewGame", () => ({ getNewGame: jest.fn() }));
jest.mock("../logic/hangman", () => ({ hangman: jest.fn() }));
import { getNewGame, hangman } from "../logic";

import { Hangman } from ".";
import { UI } from "./components/UI";

describe("the Hangman game", () => {
  const answer = "indigo";
  let wrapper;
  describe("the initialisation", () => {
    const startState = { fake: "state" };
    beforeEach(() => {
      getNewGame.mockReturnValue(startState);
      wrapper = shallow(<Hangman answer={answer} />);
    });
    test("renders a UI", () => {
      expect(wrapper.find(UI)).toExist();
    });
    test("passed in a makeGuess function", () => {
      expect(typeof wrapper.find(UI).prop("makeGuess")).toEqual("function");
    });
    test("passed in a new game state", () => {
      expect(wrapper.find(UI)).toHaveProp("state", startState);
    });
    test("created the state from the answer prop", () => {
      expect(getNewGame).toHaveBeenCalledWith({ answer });
    });
    describe("when making a guess", () => {
      const guess = "x";
      const updatedState = { updated: "fake state" };
      beforeEach(() => {
        hangman.mockReturnValue(updatedState);
        wrapper = shallow(<Hangman answer={answer} />);
        const makeGuess = wrapper.find(UI).prop("makeGuess");
        makeGuess(guess);
      });
      test("we pass updated state from logic layer to UI", () => {
        expect(wrapper.find(UI)).toHaveProp("state", updatedState);
      });
      test("the hangman logic was called correctly", () => {
        expect(hangman).toHaveBeenCalledWith(guess, startState);
      });
    });
  });
});
