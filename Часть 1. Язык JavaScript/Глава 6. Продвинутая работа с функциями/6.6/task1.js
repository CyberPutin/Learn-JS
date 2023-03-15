//Задача-1

//Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

//counter() должен возвращать следующее значение (как и раньше).
//counter.set(value) должен устанавливать счётчику значение value.
//counter.decrease() должен уменьшать значение счётчика на 1.

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (value) => (count = value);

  counter.decrease = () => count--;

  return counter;
}

let counter = makeCounter();
  
  console.log(сounter()); // 0
  console.log(counter()); // 1
  
  counter.set(10); // установить новое значение счётчика
  console.log(counter()); // 10
  
  counter.decrease(); // уменьшить значение счётчика на 1
  console.log(counter()); // получим 10 вместо 11