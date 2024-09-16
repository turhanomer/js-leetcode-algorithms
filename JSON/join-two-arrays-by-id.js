var join = function (arr1, arr2) {
  const idMap = new Map();

  const mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  };
  for (const obj of arr1) {
    idMap.set(obj.id, obj);
  }
  for (const obj of arr2) {
    if (idMap.has(obj.id)) {
      const existingObj = idMap.get(obj.id);
      const mergedObj = mergeObjects(existingObj, obj);
      idMap.set(obj.id, mergedObj);
    } else {
      idMap.set(obj.id, obj);
    }
  }
  const joinedArray = Array.from(idMap.values()).sort((a, b) => a.id - b.id);

  return joinedArray;
};

const arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];

const arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];

console.log(join(arr1, arr2));