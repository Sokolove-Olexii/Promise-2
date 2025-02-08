const makePromise = (delay, text) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.floor(Math.random() * 10 + 1) < 5) {
        res(text);
      } else {
        rej(text);
      }
    }, delay);
  });
};

const PromiseA = makePromise(1000, "A");
const PromiseB = makePromise(2000, "B");
const PromiseC = makePromise(3000, "C");

Promise.any([PromiseA, PromiseB, PromiseC])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

Promise.all([PromiseA, PromiseB, PromiseC])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

Promise.race([PromiseA, PromiseB, PromiseC])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
