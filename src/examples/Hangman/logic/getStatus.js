import { getNbrOfErrors } from "./getNbrOfErrors";

export function getStatus(state) {
  if (getNbrOfErrors(state) === state.maxGuesses - 1) return "lost";
  if (state.guesses.includes(state.answer)) return "won";
  if (state.answer.split("").every(letter => state.guesses.includes(letter)))
    return "won";
  return "playing";
}
