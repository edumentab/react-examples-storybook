import React from "react";
import { frames } from "./frames";

/**
 * @typedef {object} GallowProps
 * @prop {number} nbrOfErrors
 *
 * A component to show the gallow, frame depends on number of errors
 * @param {GallowProps} props
 */
export const Gallow = props => {
  return <pre data-qa="gallow">{frames[props.nbrOfErrors]}</pre>;
};
