/**
 * Helper function that takes a Hangman state and returns an array of letters
 * in the answer, masking all non-guessed letters with `null`
 */
export function getLetters(state) {
  return state.guesses.includes(state.answer)
    ? state.answer.split("")
    : state.answer
        .split("")
        .map(letter => (state.guesses.includes(letter) ? letter : null));
}
