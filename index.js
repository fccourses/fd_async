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

/**
 *
 * @param {string} src
 * @return {Promise}
 */
function loadImage(src) {
  const imgToSend = document.createElement('img');
  imgToSend.setAttribute('src', src); // Браузер начинает грузить картинку

  return new Promise((resolve, reject) => {
    imgToSend.addEventListener('load', () => {
      resolve(imgToSend);
    });
    imgToSend.addEventListener('error', () => {
      reject(new Error());
    });
  });
}

loadImage('https://pro-spo.ru/images/stories/2014/elitefon.ru-38277.jpg')
  .then((imgToReceive) => {
    document.body.append(imgToReceive);
  })
  .catch(() => {
    alert('error happened');
  });
