var createCounter = function (init) {
  let value = init;
  
  function increment() {
    value++;
    return value;
  }
  function decrement() {
    value--;
    return value;
  }
  function reset() {
    value = init;
    return value;
  }

  return {increment, decrement, reset}
}

const counter = createCounter(5); 
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4