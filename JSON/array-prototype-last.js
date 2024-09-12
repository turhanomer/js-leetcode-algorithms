Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }
};

const arr = [null, {}, 3]; // 3
console.log(arr.last());

const emptyArr = []; // -1
console.log(emptyArr.last());
