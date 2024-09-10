var isEmpty = function (obj) {
  return Object.keys(obj).length === 0 ? true : false;
};

obj = { x: 5, y: 42 };
console.log(isEmpty(obj));
