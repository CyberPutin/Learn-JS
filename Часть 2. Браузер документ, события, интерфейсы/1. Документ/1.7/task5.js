//Задача-5

//Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    }
  }
};

//Вариант-1

// function createTree(container, obj) {
//   container.innerHTML = createTreeText(obj);
// }

// function createTreeText(obj) {
//   let li = "";
//   let ul;
//   for (let key in obj) {
//     li += "<li>" + key + createTreeText(obj[key]) + "</li>";
//   }
//   if (li) {
//     ul = "<ul>" + li + "</ul>";
//   }
//   return ul || "";
// }

// createTree(container, data);

//Вариант-2

function createTree(container, obj) {
  container.append(createTreeDom(obj));
}

function createTreeDom(obj) {
  if (!Object.keys(obj).length) return;

  let ul = document.createElement("ul");

  for (let key in obj) {
    let li = document.createElement("li");
    li.innerHTML = key;

    let childrenUl = createTreeDom(obj[key]);
    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
  }

  return ul;
}

let container = document.getElementById("container");
createTree(container, data);