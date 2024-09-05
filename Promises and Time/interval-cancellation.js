var cancellabe = function (fn, args, t) {
  //Empty arry
  const result = [];
  //Start time
  const startTime = Date.now();
  // Add result to the array
  const initialResult = fn(...args);
  result.push({ time: 0, returned: initialResult });
  // add every t ms
  const intervalId = setInterval(() => {
    const currentTime = Date.now() - startTime;
    const results = fn(...args);
    result.push({ time: currentTime, returned: results });
  }, t);
  //Cancel the operation
  const cancelTime = () => {
    clearInterval(intervalId);
    console.log(result);
  };
  return cancelTime;
};

const fn = (x) => x * 2;
const args = [4],
  t = 35,
  cancelTimeMs = 190;

const cancelFn = cancellabe(fn, args, t);
setTimeout(cancelFn, cancelTimeMs);
