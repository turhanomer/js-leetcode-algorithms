var map = function (arr, fn) {
  // create empty array
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // adds the current array one by one
    newArr.push(fn(arr[i], i));    
  }
  return newArr;
}

let arr1 = [1,2,3];
let fn1 = function plusone(n) {return n + 1}
console.log(map(arr1, fn1));
