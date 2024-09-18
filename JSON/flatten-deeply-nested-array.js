var flat = function (arr, depth) {
  const stack = [...arr.map(item => [item, depth])];
  const result = [];

  while (stack.length > 0) {
      const [item, depth] = stack.pop();

      if (Array.isArray(item) && depth > 0) {
          stack.push(...item.map(subItem => [subItem, depth - 1]));
      } else {
          result.push(item);
      }
  }

  return result.reverse();;
};

console.log(flat([1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]], 1));
