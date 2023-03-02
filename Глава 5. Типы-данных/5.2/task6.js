const randomInteger = (min, max) => {
  let result = min + Math.random() * (max + 1 - min);
  return Math.floor(result);
};

console.log(randomInteger(1, 5));
