// Задача-4

//Напишите функцию printList(list), которая выводит элементы списка по одному.
//Сделайте два варианта решения: используя цикл и через рекурсию.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  let item = list;
  
  while (item) {
    console.log(item.value);
      item = item.next;
  }
}
printList(list);


function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
};

printList(list);