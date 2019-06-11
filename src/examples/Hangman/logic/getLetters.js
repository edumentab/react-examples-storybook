export function getLetters(state) {
  return state.guesses.includes(state.answer)
    ? state.answer.split("")
    : state.answer
        .split("")
        .map(letter => (state.guesses.includes(letter) ? letter : null));
}
