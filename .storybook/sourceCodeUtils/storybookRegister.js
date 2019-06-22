import addonAPI, { types } from "@storybook/addons";
import Panel from "./storybookPanel";
import React from "react";

addonAPI.register("edumentab/sourcecode", storybookAPI => {
  const channel = addonAPI.getChannel();
  let rawSources;
  fetch("./rawSources.json")
    .then(response => response.json())
    .then(data => {
      rawSources = data;
      channel.emit("sourceCode/rawSources", data);
    });
  addonAPI.add("edumentab/sourcecode/panel", {
    type: types.TAB,
    title: "source",
    route: ({ storyId }) => `/sourceCode/${storyId}`,
    match: ({ viewMode }) => viewMode === "sourceCode",
    render: ({ active }) => {
      return React.createElement(Panel, {
        channel: addonAPI.getChannel(),
        storybookAPI,
        active,
        rawSources
      });
    }
  });
});
