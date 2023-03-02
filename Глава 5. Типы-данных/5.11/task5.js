const getLastDayOfMonth = (year, month) => {
  let lastDate = new Date(year, month + 1, 0);
  return lastDate.getDate();
};

console.log(getLastDayOfMonth(2012, 0));
console.log(getLastDayOfMonth(2012, 1));
console.log(getLastDayOfMonth(2013, 1));
