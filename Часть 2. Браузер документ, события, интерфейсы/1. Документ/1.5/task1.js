//Задача-1

//У нас есть дерево, структурированное как вложенные списки ul/li.
//Напишите код, который выведет каждый элемент списка <li>

for (let li of document.querySelectorAll("li")) {
  let title = li.firstChild.data;

  title = title.trim();

  let count = li.getElementsByTagName("li").length;

  console.log(`${title} : ${count}`);
}