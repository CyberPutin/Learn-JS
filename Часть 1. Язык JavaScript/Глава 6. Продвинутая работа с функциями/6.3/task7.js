//Задача-7
//Починить код, чтобы каждая функция выводила их порядковые номера

const makeArmy = () => {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      console.log(j);
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
};

let army = makeArmy();

army[0]();// 0
army[5]();// 5