var compose = function(functions) {
  return function(x) {
    if(functions.length === 0){
      return x; // If the function array is empty we return the input as it is.
    }
    // Create the function composition using reduceRight
    return functions.reduceRight(function(acc, fn){
      return(fn(acc)); // we use the output of the previous function when moving to the next function
    }, x)
  }
}

const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4));