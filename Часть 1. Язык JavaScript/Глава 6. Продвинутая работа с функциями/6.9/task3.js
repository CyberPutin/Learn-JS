//Задача-3
//Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. 

function debounce(f, ms) {
  let time;
  return function() {
    if ((Date.now() - time) < ms) {
      return;
    }
    time = Date.now();
    f.call(this, ...arguments);
  }
}