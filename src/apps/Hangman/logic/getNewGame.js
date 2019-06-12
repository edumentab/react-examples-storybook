/**
 * Creates a fresh hangman session. Pass in an options object
 * with the correct `answer` and optionally the max number
 * of wrong guesses
 */
export const getNewGame = ({ answer, maxGuesses = 4 }) => ({
  answer,
  maxGuesses,
  guesses: []
});
