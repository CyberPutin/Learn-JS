// Задача-1

// Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.
// Используйте делегирование событий. Должен быть лишь один обработчик на элементе-контейнере для всего.

container.onclick = function (event) {
  if (event.target.className != "remove-button") return;

  let pane = event.target.closest(".pane");
  pane.remove();
};