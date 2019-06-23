import React, { useCallback } from "react";
import { SyntaxHighlighter } from "@storybook/components";
import { styled } from "@storybook/theming";
import createElement from "react-syntax-highlighter/create-element";

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)(({ theme }) => ({
  fontSize: theme.typography.size.s2 - 1
}));

const HighlighterInner = props => {
  const { code, language = "javascript", onLinkClick } = props;
  const handleLinkClick = useCallback(
    e => {
      const link = e.target.getAttribute("data-link");
      if (link) {
        onLinkClick(link);
      }
    },
    [onLinkClick]
  );
  return (
    <div onClick={handleLinkClick}>
      <style>{`pre.hljs { white-space: pre; overflow-x: auto; }`}</style>
      <SyntaxHighlighter
        language={language}
        showLineNumbers
        renderer={({ rows, stylesheet, useInlineStyles }) => {
          return rows.map((row, i) => {
            return createElement({
              node: {
                ...row,
                properties: {
                  ...row.properties,
                  className: []
                },
                children: row.children.map(mapChild)
              },
              stylesheet,
              useInlineStyles,
              key: `code-segement${i}`
            });
          });
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

class Highlighter extends React.Component {
  state = { error: null };
  componentDidCatch(error) {
    this.setState({ error });
  }
  render() {
    if (this.state.error) {
      return <pre>{this.props.code}</pre>;
    }
    return <HighlighterInner {...this.props} />;
  }
}

export default Highlighter;

function mapChild(node, i, row) {
  const extraProps = {};
  if (i > 3 && (node.properties.className || []).includes("string")) {
    const content = (((node.children || [])[0] || {}).value || "").replace(
      /^"|"$/g,
      ""
    );
    if (content.match(/^[\.\/]/)) {
      const from = row[i - 2];
      if (
        (from.properties.className || []).includes("keyword") &&
        ((from.children || [])[0] || {}).value === "from"
      ) {
        return {
          ...node,
          properties: {
            ...node.properties,
            "data-link": content,
            className: node.properties.className.concat("file-link"),
            style: {
              cursor: "pointer",
              userSelect: "none"
            }
          }
        };
      }
    }
  }
  return node;
}
