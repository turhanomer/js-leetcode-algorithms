var sortBy = function (arr, fn) {
  mappedArray = arr.map((item) => ({
    value: item,
    key: fn(item),
  }));

  mappedArray.sort((a, b) => a.key - b.key);

  return mappedArray.map((item) => item.value);
};

const arr = [5, 4, 1, 2, 3];
const arr1 = [{ x: 1 }, { x: 0 }, { x: -1 }];

const fn = (item) => item;
const fn1 = (item) => item.x;

console.log(sortBy(arr, fn));
console.log(sortBy(arr1, fn));