//Задача-2

//В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.
//Когда будет выполнена запланированная функция?

//1.После цикла.
//2.Перед циклом.
//3.В начале цикла.

//Что покажет alert?

"use strict";

let i = 0;

setTimeout(() => alert(i), 100); // 100000000

for (let j = 0; j < 100000000; j++) {
  i++;
}

// Функция будет запущена после завершения текущего кода, следовательно, после цикла