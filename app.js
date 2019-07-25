// $( document ).ready(function() {
//     console.log( "ready!" );
// }); 

// const num1 = 10;
// const num2 = 20;

// let value;
// //+ - * /

// value = num1 + num2;
// value = value + 100;
// value += 100;
// //value = 4;
// //value = 4 % 2;
// value++;
// value--;
// ++value;
// --value;

// value = 0.6 + 0.7;
// //value = parseFloat(value.toFixed(1));
// value = (0.6*10 + 0.7*10) / 10;


// //Math

// value = Math.PI;
// value = Math.random();//каждый раз выводит новое число рандомно
// value = Math.round(2.4);//округляет число как в математике
// value = Math.ceil(2.1);//всегдаокругляет в большую сторону
// value = Math.floor(2.9);//всегда округляет в меньшую сторону
// value = Math.min(2, 12, 15, 0, 12);//выводит минимальное значение
// value = Math.max(2, 12, 15, 0, 12);//выводит максимальное значение

// value = Math.random() * 10;
// value = Math.floor(Math.random() * 10 + 1);

// const arr = ['black', 'red', 'yellow', 'pink', 'white', 'blue', 'orange', 'green'];

// value = value = Math.floor(Math.random() * arr.length);


// console.log(value, arr [value]);

// // const firstName = 'Denis';
// // const lastName = 'Mesdheryakov';
// // const age = 30;
// // const str = 'Hello my name is Denis';

// // let value1;

// // value1 = firstName + lastName;
// // value1 = firstName + ' ' + lastName;
// // value1 += ' I am ' + age;
// // value1 = firstName.length;
// // value1 = firstName[3];
// // value1 = lastName[lastName.length - 1];//последний элемент в строке

// // value1 = firstName.toUpperCase();
// // value1 = firstName.concat(' ', lastName);

// // value1 = firstName.indexOf('n');
// // value1 = str.includes ('my');

// // value1 = str.slice(0, 5);//не включаяпоследний(в данном случае 5-й)
// // value1 = str.slice(5);
// // value1 = str.slice(0, -3);

// // value1 = str.replace('Denis', 'Den');//первое значение которое найти, второе начто заменить

// // console.log(value1);

// //        ДЗ

// const string = 'some test string';

// let value2;


// value2 = string.indexOf('string');
// value2 = string.lastIndexOf(' ');
// value2 = string.slice(4,10);

// value2 = Math.PI;
// value2 = value2.toFixed(2);
// value2 = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
// value2 = Math.min(15, 9, 16, 12, 51, 12, 13, 51);
// value2 = Math.random();
// //value2 = parseFloat(value2.toFixed(2));
// value2 = Math.floor(Math.random() * 10 + 3); 


// console.log(value2);

// //     Второй день

// const firstName = 'Denis';
// const lastName = 'Mesdheryakov';
// const age = 30;

// let scd;

// scd = 'Hello my name is' + firstName + ' ' + lastName;



// scd = '<ul>' +
//       '<li>First Name: ' + firstName + '</li>' +
//       '<li>Last Name: ' + lastName + '</li>' +
//       '<li>Age: ' + age + '</li>' + 
//       '</ul>';
      
// // console.log(scd);

// //ES6
// scd = `
//     <ul>
//      <li>First name: ${firstName}</li>
//      <li>Last name: ${lastName}</li>
//      <li>Age: ${age}</li>
//      <li>Math.random: ${ Math.random() }</li>
//      <li>5+5 = ${ 5 + 5 }</li>
//     </ul>
// `;
// document.body.innerHTML = scd;


23.07

// const user = {
//     firstName: 'Denis',
//     age: 30,
//     isAdmin: true,
//     email: 'test@test.com',
//     'user-address': {
//         city: 'Kharkiv'
//     },
//     skills:['html', 'css', 'js']
// };

// let value4;
// let prop = 'skills';

// value4 = user.firstName;
// value4 = user['isAdmin'];
// value4 = user['user-address'].city;
// value4 = user['user-address'] ['city'];

// value4 = user [prop][0];

// user.firstName = 'Den';

// user.info = 'some info';

// value4 = user.info;

// user['user-address'].city = 'Kiev';
// user['user-address'].country = 'Ukraine';



// console.log(value4)
// console.log(user);

//  
// $( document ).ready(function() {
//     'use strict'
//     paper.install(window);
//     paper.setup(document.getElementById('mainCanvas'));
//     var c = Shape.Circle(200, 200, 80) ;
//     c.fillColor = ' red ' ;
//     var text = new PointText(200, 200) ;
//     text.justification = 'center';
//     text.fillColor = ' white';
//     text.fontSize = 23;
//     text.content = 'Люблю Макса'; 
    
//     var tool = new Tool();
//     tool.onMouseDown = function ( event ) {
//         var c = Shape.Circle( event.point.x, event.point.y, 25) ; 
//         c.fillColor = ' red';
//     }
//     paper.view.draw();
//          console.log( "ready!" );
// }); 

25.07

// const user = {
//     firstName: 'Denis',
//     age: 30,
//     isAdmin: true,
//     email: 'test@test.com',
//     'user-address': {
//         city: 'Kharkiv'
//     },
//     skills: ['html', 'css', 'js']
// };

// let value;
// let prop = 'skills';

// value = user.firstName;
// value = user['isAdmin'];
// value = user['user-address'];
// value = user['user-address'].city;
// value = user['user-address'] ['city'];
// value = user [prop]['0'];

// user.firstName = 'Den';

// value = user.firstName;

// user.info = 'Some info';

// user['user-address'].city = 'Kiev';
// user['user-address'].country = 'Ukraine';

// user.plan.basic = 'basic';

// console.log(value);
// console.log(user);

// let a = 0;
// let b =0;

// if (a > 0) {
//     b = a;
// } else {
//     b += 1;
// }

// выражение ?, если true : если false
// выражение ?, если false : выражение ? если true : если false

// b = a > 0 ? a : b + 1;

// b = a > 0 ? 2 : a < 0 ? 3 : 0;


// console.log(`b: ${b}`);

// let color = 'red';

// switch(color) {
//     case 'yellow':
//     case 'red':
//         console.log('color is red || yellow');
//         break;
//     default:
//         console.log('Default');
// };


// Цыклы
// while, do wile, for, for of, for in

// let i = 10;

// while(i--) {
//     console.log(i);
// }

// do {
//     console.log('action')
// } while(i > 0);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let str = 'Hello';
// let res = '';

// for (let i = 0; i <str.length; i++) {
//     res += str[i] + '*';
// }

// console.log(res);

