'use strict';

function sum(a, b) {
  if (!a || !b) {
    throw new TypeError();
  }
  return a + b;
}

function sub(a, b) {
  if (!a || !b) {
    throw new TypeError();
  }
  return a - b;
}

console.log('start');

try {

  console.log('Внутри try до sum()');
  sum(2); // выкинула ошибку
  console.log('Внутри try после sum()'); // не отрабатывает

} catch (err) {

  console.log('Споймана ошибка ', err); // когда ошибка

} finally {

  console.log('finally'); // всегда отрабатывает
}

console.log('end');
