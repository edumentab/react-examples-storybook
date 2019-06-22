const path = require("path");
const cache = require("./cache");

let emitted = false;

module.exports = function sourceLoader(source) {
  const opts = this.query || {};
  const root = opts.root || "";
  const path = this.resourcePath;
  if (!root || path.match(root)) {
    cache.register(path.substr(root.length).replace(/^\//, ""), source);
  }
  return source;
};
