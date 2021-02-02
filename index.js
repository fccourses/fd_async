'use strict';

// 2 way to async
const timeoutId = setTimeout(function test() {}, 0);

function count() {
  let number = 0;

  const id = setInterval(() => {
    console.log(++number);
    for (let i = 0; i < 1000000000; i++) {}
    if (number >= 20) {
      clearInterval(id);
      console.timeEnd('1');
    }
  }, 100);
}

console.time('1');
count();

/* 
Функция, которая последовательно выводит в консоль числа 
от 1 до 20 с интервалом в 100мс.
  Решить можно двумя способами. 
    setTimeout - рекурсия с if'ом
    setInterval - if, clearInterval
  Померять время. 
    console.time('1');
    console.timeEnd('1');
*/
