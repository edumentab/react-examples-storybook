import React from "react";

/**
 * @typedef {import("../../../types").HangmanStatus} HangmanStatus
 *
 * @typedef {object} StatusProps
 * @prop {HangmanStatus} status The current status of the game
 * @prop {number} remaining Number of errors that can still be made
 *
 * A component to show a text description of the current status
 * @param {StatusProps} props
 */

export const Status = props => {
  if (props.status === "won") return "You win! :D";
  if (props.status === "lost") return "You lose :/";
  return `Guess a letter or word! ${props.remaining} remaining.`;
};
