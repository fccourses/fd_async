'use strict';

console.log('1');

fetch('./data.json')
  .then((response) => {
    console.log('5');
    console.log(response);
    const jsonPromise = response.json();
    return jsonPromise;
  })
  .then((data) => {
    console.log('6');
    console.log(data);
    return 5;
  })
  .catch((err) => {
    console.log('ERROR WITH PROMISE',err);
  })
  .finally(()=>{
    console.log('fetch ended')
  })
