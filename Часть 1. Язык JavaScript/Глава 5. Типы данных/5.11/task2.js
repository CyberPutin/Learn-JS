const getWeekDay = (date) => {
  const weekDay = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  return weekDay[date.getDay()];
};

let date = new Date(2012, 0, 3);
let date2 = new Date(2012, 0, 5);
console.log(getWeekDay(date));
console.log(getWeekDay(date2));
