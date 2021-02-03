'use strict';

/* 
  Создать функцию delay(ms).then(callback)

  setTimeout(()=>{},ms)

  delay(ms).then(()=>{})
*/

/* Промисификация */
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

delay(200).then(() => {
  console.log('ok');
});
