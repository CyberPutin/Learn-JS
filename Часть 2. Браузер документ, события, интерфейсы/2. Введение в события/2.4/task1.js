// Задача-1

// Почему в коде ниже return false не работает?
// Браузер переходит по указанной ссылке, но нам этого не нужно.
// Как поправить?

// <script>
//   function handler() {
//     alert( "..." );
//     return false;
//   }
// </script>

// <a href="https://w3.org" onclick="handler()">браузер откроет w3.org</a>

// Исправленный вариант

// <script>
//  function handler() {
//    alert("...");
//    return false;
//  }
// </script>

// <a href="https://w3.org" onclick="return handler()">w3.org</a>