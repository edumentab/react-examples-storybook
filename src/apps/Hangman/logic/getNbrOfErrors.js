/**
 * Helper function that takes a Hangman state and returns the total number
 * of errors in the made guesses
 */
export function getNbrOfErrors(state) {
  return state.guesses.filter(guess =>
    guess.length === 1 ? !state.answer.includes(guess) : state.answer !== guess
  ).length;
}
