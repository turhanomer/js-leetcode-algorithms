var chunk = function (arr, size) {
  const chunkedArray = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunks = arr.slice(i, i + size);
    chunkedArray.push(chunks);
  }
  return chunkedArray;
};

console.log(chunk([1, 9, 6, 3, 2], 3));
