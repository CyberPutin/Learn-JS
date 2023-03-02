// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

//   Замените код Function Expression стрелочной функцией:

const ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  "Вы согласны?",
  function () {
    alert("Вы согласились.");
  },
  function () {
    alert("Вы отменили выполнение.");
  }
);

