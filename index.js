'use strict';

const result = Promise.reject(42);
const result2 = Promise.resolve(2);

function handlePromise(promise) {
  return promise
    .then((result) => {
      console.log(result);
    })
    .catch(() => {
      console.log('Споймали ошибку');
    });
}

handlePromise(result);
handlePromise(result2);
