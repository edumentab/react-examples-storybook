import React, { useEffect, useCallback, useState } from "react";
import addons, { types } from "@storybook/addons";
import Highlighter from "./storybookHighlighter";
import path from "path";

const SourceCodePanel = props => {
  const { channel, storybookAPI, rawSources: rawSourcesFromProps } = props;
  const [filePath, setFilePath] = useState("");
  const [rawSources, setRawSources] = useState(rawSourcesFromProps);
  const [showCompiled, setShowCompiled] = useState(false);
  const handleStoryChange = (path, rs) => {
    if (rs) {
      const actualPath = matchPathToSource(path, rs);
      if (actualPath) {
        setFilePath(actualPath);
      } else {
        console.warn(
          "WARNING! Selected source path not found among rawSources",
          path
        );
      }
    }
  };
  const handleDropdownChange = useCallback(e => setFilePath(e.target.value), [
    setFilePath
  ]);
  const handleToggleCompiled = useCallback(
    e => setShowCompiled(e.target.checked),
    [setShowCompiled]
  );
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
  const files = Object.keys(rawSources).sort();
  const handleLinkClick = p => {
    const rel = path.join(filePath.replace(/\/[^\/]*$/, "/"), p);
    const found = ["/index.jsx", "/index.js", ".jsx", ".js", ".css"]
      .map(suff => rel + suff)
      .find(p => !!rawSources[p]);
    if (found) {
      setFilePath(found);
    } else {
      console.warn("WARNING - could not find corresponding file in list");
    }
  };
  return (
    <React.Fragment>
      <div>
        <label>
          Show compiled? {(!!showCompiled).toString()}{" "}
          <input
            type="checkbox"
            checked={showCompiled}
            onChange={handleToggleCompiled}
          />
        </label>
      </div>
      <select onChange={handleDropdownChange} value={filePath}>
        <option> ---- Select a file ---</option>
        {files.map(file => (
          <option value={file} key={file}>
            {file}
          </option>
        ))}
      </select>
      <p>Current file: {filePath}</p>
      <Highlighter
        language={"javascript"}
        code={(rawSources[filePath] || {})[showCompiled ? "compiled" : "raw"]}
        onLinkClick={handleLinkClick}
      />
    </React.Fragment>
  );
};

export default SourceCodePanel;

function matchPathToSource(path, rawSources) {
  const files = Object.keys(rawSources);
  return files.find(file => file.includes(path) || path.includes(file));
}
