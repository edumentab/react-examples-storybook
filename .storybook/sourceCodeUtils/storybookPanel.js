import React, { useEffect, useCallback, useState } from "react";
import addons, { types } from "@storybook/addons";

const SourceCodePanel = props => {
  const { channel, storybookAPI, rawSources: rawSourcesFromProps } = props;
  const [filePath, setFilePath] = useState("");
  const [rawSources, setRawSources] = useState(rawSourcesFromProps);
  const handleStoryChange = (path, rs) => {
    if (rs) {
      const actualPath = matchPathToSource(path, rs);
      if (actualPath) {
        setFilePath(actualPath);
      } else {
        console.log(
          "WARNING! Selected source path not found among rawSources",
          path
        );
      }
    }
  };
  const handleDropdownChange = useCallback(e => setFilePath(e.target.value), [
    setFilePath
  ]);
  useEffect(() => {
    if (!rawSources) {
      channel.once("sourceCode/rawSources", data => {
        setRawSources(data);
        channel.on("sourceCode/selectedStory", p => handleStoryChange(p, data));
        if (filePath) {
          handleStoryChange(filePath, data);
        }
      });
    } else {
      channel.on("sourceCode/selectedStory", p => {
        handleStoryChange(p, rawSources);
      });
    }
    return () => channel.off("sourceCode/selectedStory");
  }, []);
  if (!props.active) return null;
  if (!rawSources) return <span>...loading...</span>;
  const files = Object.keys(rawSources);
  return (
    <React.Fragment>
      <select onChange={handleDropdownChange} value={filePath}>
        <option> ---- Select a file ---</option>
        {files.map(file => (
          <option value={file} key={file}>
            {file}
          </option>
        ))}
      </select>
      <p>Current file: {filePath}</p>
      <pre
        dangerouslySetInnerHTML={{
          __html: (rawSources[filePath] || "").replace(/</g, "&lt;")
        }}
      />
    </React.Fragment>
  );
};

export default SourceCodePanel;

function matchPathToSource(path, rawSources) {
  const files = Object.keys(rawSources);
  return files.find(file => file.includes(path) || path.includes(file));
}
