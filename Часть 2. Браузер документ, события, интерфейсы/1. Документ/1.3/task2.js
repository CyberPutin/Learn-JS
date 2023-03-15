//Задача-2

// Если elem – произвольный узел DOM-элемента…

// Правда, что elem.lastChild.nextSibling всегда равен null?
// Правда, что elem.children[0].previousSibling всегда равен null ?

// Элемент elem.lastChild всегда последний, у него нет ссылки nextSibling, поэтому он равен null.
// Не правда. elem.children[0] – потомок-элемент. Но у него могут быть соседи, например, перед ним могут быть другие узлы - previousSibling может быть текстовым узлом.
// Если потомков нет, то будет ошибка.
// Например, при попытке доступа к elem.lastChild.nextSibling выдаст ошибку, т.к. elem.lastChild равен null.