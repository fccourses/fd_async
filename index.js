'use strict';

console.log('1');

const p1 = fetch('./data.json');

console.log('2', p1);

const p2 = p1.then((response) => {
  console.log('5');
  console.log(response);
  const jsonPromise = response.json();
  return jsonPromise;
});

console.log('3', p2);

const p3 = p2.then((data) => {
  console.log('6');
  console.log(data);
  return 5;
});

console.log('4', p3);
