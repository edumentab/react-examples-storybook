import React from "react";
import { frames } from "./frames";

export const Gallow = props => {
  return <pre data-qa="gallow">{frames[props.nbrOfErrors]}</pre>;
};
