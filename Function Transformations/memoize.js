function memoize(fn) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;

    return result;
  }
}

const memoizedFn = memoize(function (a, b) {
  return a + b;
})
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5

// In the first call memoisedFn(2, 3) is calculated and the result (5) is added to the cache.
// In the second call, memoisedFn(2, 3) with the same arguments is returned directly from the cache (5), no calculation is performed.