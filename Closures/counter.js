function createCounter(n) {
  // n an increase
  return function() {
      return n++;
  };
}

function getCounterValues(n, calls) {
  // return as many times as the calls array and push it to the results array 
  let counter = createCounter(n);
  let results = [];
  for (let i = 0; i < calls.length; i++) {
      results.push(counter());
  }
  return results;
}


let n = 10;
let calls = ["call", "call", "call"];
console.log(getCounterValues(n, calls)); 

n = -2;
calls = ["call", "call", "call", "call", "call"];
console.log(getCounterValues(n, calls)); 