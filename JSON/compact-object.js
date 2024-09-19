var compactObject = function (obj) {
  if (Array.isArray(obj)) {
      return obj.map(compactObject).filter(Boolean);
  } else if (obj !== null && typeof obj === "object") {
      const result = {};
      for (const key in obj) {
          const value = compactObject(obj[key]);
          if (Boolean(value)) {
              result[key] = value;
          }
      }
      return result;
  }
  return obj
};

console.log(compactObject({"a": null, "b": [false, 1]}));
console.log([null, 0, false, 1]);

