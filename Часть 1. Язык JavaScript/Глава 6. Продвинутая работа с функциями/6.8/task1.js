//Задача-1
//Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// setInterval
const printNumbers = (from, to) => {
  let current = from;

  let timerId = setInterval(() => {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
};

printNumbers(5, 10);

// setTimeout
const printNumbers = (from, to) => {
  let current = from;

  setTimeout((go = () => {
      console.log(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }),
    1000
  );
};

printNumbers(5, 10);