'use strict';

const btn = document.getElementById('btn');

btn.addEventListener('click', handleBtnClick); /* 1 way to async */

function sum(...args) {
  return args.reduce((a, i) => a + i, 0);
}

function handleBtnClick(event) {
  /* Блокировка потока */
  let date;
  for (let i = 0; i < 10000000; i++) {
    date = new Date();
  }
  console.log(date);
}

const res = sum(1, 1, 12, 341, 4, 235, 234, 23);
console.log(res);



