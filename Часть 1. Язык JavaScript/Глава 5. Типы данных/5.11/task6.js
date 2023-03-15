const getSecondsToday = () => {
  const nowDay = new Date();
  const today = new Date(nowDay.getFullYear(), nowDay.getMonth(), nowDay.getDate());
  return Math.round((nowDay - today) / 1000);
};

console.log(getSecondsToday());
