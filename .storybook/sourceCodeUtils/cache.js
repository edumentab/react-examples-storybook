var cache = {};

module.exports = {
  register(path, source) {
    if (!cache[path]) {
      cache[path] = source;
    } else if (!cache[path].toString().includes(source)) {
      cache[path] += source;
    }
  },
  getSources() {
    return cache;
  },
  cleanCache() {
    cache = {};
  }
};
