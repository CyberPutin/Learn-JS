//Задача-4
//Где в DOM-иерархии "document"?

// Объектом какого класса является document, можно выяснить так:

// alert(document); // [object HTMLDocument]
// Или так:

// alert(document.constructor.name); // HTMLDocument
// Итак, document – объект класса HTMLDocument.

// Какое место HTMLDocument занимает в иерархии?

// Можно поискать в документации. Но попробуем выяснить это самостоятельно.

// Пройдём по цепочке прототипов по ссылке__proto__.

// Как мы знаем, методы класса находятся в prototype конструктора. Например, в HTMLDocument.prototype находятся методы для объектов типа document.

// Также внутри prototype есть ссылка на функцию-конструктор:

// alert(HTMLDocument.prototype.constructor === HTMLDocument); // true
// Чтобы получить имя класса в строковой форме, используем constructor.name. Сделаем это для всей цепочки прототипов document вверх до класса Node:

// alert(HTMLDocument.prototype.constructor.name); // HTMLDocument
// alert(HTMLDocument.prototype.__proto__.constructor.name); // Document
// alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node
// Вот и иерархия.

// Мы также можем исследовать объект с помощью console.dir(document) и увидеть имена функций-конструкторов, открыв __proto__. Браузерная консоль берёт их как раз из свойства constructor.