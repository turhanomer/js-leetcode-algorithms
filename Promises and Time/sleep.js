async function sleep(millis) {
  return new Promise((resolve, millis) => setTimeout(resolve, millis))
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); //100
sleep(200).then(() => console.log(Date.now()- t)); //200