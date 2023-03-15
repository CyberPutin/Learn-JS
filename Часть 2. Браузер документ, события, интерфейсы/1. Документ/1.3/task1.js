//Задача-1

//Для страницы:

// <html>
// <body>
//   <div>Пользователи:</div>
//     <ul>
//       <li>Джон</li>
//       <li>Пит</li>
//     </ul>
// </body>
// </html>

//Напишите код, как получить:

// 1.элемент <div>?
// 2.<ul>?
// 3.второй <li> (с именем Пит)?

let div1 = document.body.firstElementChild;
let div2 = document.body.children[0];
let div3 = document.body.childNodes[1];

let ul1 = document.body.lastElementChild;
let ul2 = document.body.children[1];

let li1 = document.body.lastElementChild.lastElementChild;