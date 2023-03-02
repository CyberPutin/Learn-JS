let str = "Привет";

str.test = 5;

// alert(str.test);
console.log(str.test); // undefined т.к. временный объект удаляется
// и больше нет свойства test при нестрогом режиме
