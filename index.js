'use strict';

/*
 Создать объект с 3 свойствами(number, string, undefined), 1 метод
 Сериализовать JSON.stringify
 Вывести в консоль результат
 Десериализовать JSON.parse
 Посмотреть на результат
 */

const obj = {
  firstName: 'Vlad',
  hostname: 'facebook.com',
  link: 'https://google.com',
};

/* JSON - JavaScript Object Notation */

const str = JSON.stringify(obj);

typeof str;

