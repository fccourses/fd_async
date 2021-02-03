'use strict';

const promiseShchrodinger = new Promise(executor);

function executor(resolve, reject) {
  const catsFate = Math.random();

  if (catsFate >= 0.5) {
    resolve('cat is alive');
  } else {
    reject('dead cat');
  }
}

promiseShchrodinger
  .then((catVerdict) => {
    console.log(catVerdict);
  })
  .catch((err) => {
    console.error(err);
  });
