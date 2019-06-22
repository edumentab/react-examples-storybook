const path = require("path");
const cache = require("./cache");

let emitted = false;

module.exports = function sourceLoader(source) {
  const opts = this.query || {};
  const { root = "", compiled } = opts;
  const path = this.resourcePath;
  if (!root || path.match(root)) {
    cache.register(
      path.substr(root.length).replace(/^\//, ""),
      source,
      compiled
    );
  }
  return source;
};
