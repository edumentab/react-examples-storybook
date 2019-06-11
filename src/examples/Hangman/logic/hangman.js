import { getStatus } from "./getStatus";

export function hangman(guess, currentState) {
  if (
    !guess || // ignore empty guesses
    currentState.guesses.includes(guess) || // ignore duplicate guesses
    getStatus(currentState) !== "playing" // ignore guesses after game end
  ) {
    return currentState;
  }
  return {
    ...currentState,
    guesses: currentState.guesses.concat(guess)
  };
}
