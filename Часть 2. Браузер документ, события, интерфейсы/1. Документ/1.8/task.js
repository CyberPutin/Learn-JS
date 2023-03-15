// Задача-1

// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым.
// Уведомление должно автоматически исчезнуть через 1,5 секунды.

// Используйте CSS-позиционирование для отображения элемента в заданных координатах. Исходный документ имеет необходимые стили.

function showNotification({ top = 0, right = 0, className, html }) {
  let notification = document.createElement("div");
  notification.className = "notification";
  if (className) {
    notification.classList.add(className);
  }

  notification.style.top = top + "px";
  notification.style.right = right + "px";

  notification.innerHTML = html;
  document.body.append(notification);

  setTimeout(() => notification.remove(), 1500);
}

let i = 1;
setInterval(() => {
  showNotification({
    top: 100,
    right: 50,
    html: "Hello " + i++,
    className: "welcome",
  });
}, 2000);