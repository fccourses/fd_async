'use strict';

console.log('start');

setTimeout(() => {
  console.log('timer');
}, 0);

const p1 = new Promise((resolve, reject) => {
  console.log('Создание промиса');
  resolve();
  reject();
  console.log('Завершение создания промиса');
});

p1.then(() => console.log('В методе then'));

console.log('end');
