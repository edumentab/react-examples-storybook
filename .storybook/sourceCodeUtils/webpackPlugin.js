const cache = require("./cache");

class SourcePlugin {
  apply(compiler) {
    compiler.hooks.entryOption.tap("Source Code Plugin", (context, entry) => {
      cache.cleanCache();
    });
    compiler.hooks.emit.tapAsync(
      "Source Code Plugin",
      (compilation, callback) => {
        const sources = JSON.stringify(cache.getSources());
        cache.cleanCache();
        compilation.assets["rawSources.js"] = {
          source: () => `window.rawSources = ${sources};`,
          size: () => sources.length
        };
        compilation.assets["rawSources.json"] = {
          source: () => sources,
          size: () => sources.length
        };
        callback();
      }
    );
  }
}

module.exports = SourcePlugin;
