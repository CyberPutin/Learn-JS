let userName = prompt("Введите имя пользователя", '');

if (userName === "Админ") {
  const password = prompt("Введите пароль");
  if (password === "Я главный") {
    alert("Здравствуйте!");
  } else if (password === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (userName === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}
