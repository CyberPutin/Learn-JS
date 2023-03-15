const filterRange = (arr, a = 0, b = Math.max(...arr)) => {
  return arr.filter((i) => i >= a && i <= b);
};

let arr = [5, 3, 8, 1];

console.log(filterRange(arr, 1, 4));
console.log(filterRange(arr)); // * без передачи диапазона вернет тот же массив
