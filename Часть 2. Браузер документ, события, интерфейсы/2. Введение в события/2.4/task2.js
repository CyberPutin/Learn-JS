// Задача-2

// 1.Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том,
// действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.

// 2.Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML.
//   Так что найти все ссылки и поставить на них обработчики нельзя. Используйте делегирование.
// 3.Содержимое может иметь вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>.

contents.onclick = function (event) {
  function handleLink(href) {
    let isLeaving = confirm(`Leave for ${href}?`);
    if (!isLeaving) return false;
  }

  let target = event.target.closest("a");

  if (target && contents.contains(target)) {
    return handleLink(target.getAttribute("href"));
  }
};