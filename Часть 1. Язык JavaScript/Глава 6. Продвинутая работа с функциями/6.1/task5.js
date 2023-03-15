//Задача-5

//Выведите односвязный список из Задачи-4 в обратном порядке.
//Сделайте два решения: с использованием цикла и через рекурсию.

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

function printReverseList(list) {
  let arr = [];
  let item = list;

  while (item) {
    arr.push(item.value);
    item = item.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
printReverseList(list);


const reversePrintList = (list) => {
  if (list.next) {
    reversePrintList(list.next);
  }
  console.log(list.value);
}
reversePrintList(list);