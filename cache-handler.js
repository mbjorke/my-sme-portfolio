// This is a simple cache handler that can be extended for more advanced caching
// For now, it just uses the default in-memory cache
module.exports = class CacheHandler {
  constructor(options) {
    this.options = options;
    this.cache = {};
  }

  async get(key) {
    return this.cache[key];
  }

  async set(key, data) {
    this.cache[key] = data;
  }
};
