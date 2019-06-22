import React from "react";
import addons, { makeDecorator } from "@storybook/addons";

export default makeDecorator({
  name: "withSourceInfo",
  parameterName: "sourceCode",
  wrapper: (getStory, context, { parameters }) => {
    const channel = addons.getChannel();
    channel.emit("sourceCode/selectedStory", context.parameters.fileName);
    return getStory(context);
  }
});
