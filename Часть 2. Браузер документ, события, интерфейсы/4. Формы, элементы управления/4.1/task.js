// Задача-1

//Имеется <select>:

// <select id="genres">
//   <option value="rock">Рок</option>
//   <option value="blues" selected>Блюз</option>
// </select>

// Используя JavaScript:

// 1.Выведите значение и текст выбранного пункта.
// 2.Добавьте пункт: <option value="classic">Классика</option>.
// 3.Сделайте его выбранным.

// 1
let selectedOption = genres.options[genres.selectedIndex];
alert(selectedOption.value);
alert(selectedOption.text);

// 2
let newOption = new Option("Классика", "classic");
genres.append(newOption);

// 3
newOption.selected = true;