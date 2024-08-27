var filter = function (arr, fn) {
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
};

const arr1 = [0, 10, 20, 30];
const arr2 = [1, 2, 3];
const arr3 = [-2, -1, 0, 1, 2];

const fn1 = function (n) {
  return n > 10;
};
const fn2 = function (n, i) {
  return i === 0;
};
const fn3 = function (n) {
  return n + 1;
};

console.log(filter(arr1, fn1));
console.log(filter(arr2, fn2));
console.log(filter(arr3, fn3));
