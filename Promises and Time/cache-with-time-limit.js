var TimeLimitedCache = function () {
  this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const currentTime = Date.now();
  const expirationTime = currentTime + duration;

  const exists =
    this.cache.has(key) && this.cache.get(key).expirationTime > currentTime;

  this.cache.set(key, { value, expirationTime });

  setTimeout(() => {
    if (this.cache.get(key)?.expirationTime <= Date.now()) {
      this.cache.delete(key);
    }
  }, duration);

  return exists;
};

TimeLimitedCache.prototype.get = function (key) {
  const currentTime = Date.now();

  if (this.cache.has(key) && this.cache.get(key).expirationTime > currentTime) {
    return this.cache.get(key).value;
  } else {
    return -1;
  }
};

TimeLimitedCache.prototype.count = function () {
  const currentTime = Date.now();
  let count = 0;

  this.cache.forEach(({ expirationTime }) => {
    if (expirationTime > currentTime) {
      count++;
    }
  });

  return count;
};

// Örnek kullanım
const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
