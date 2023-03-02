const filterRangeInPlace = (arr1, a, b) => {
  arr = arr1.filter((i) => i >= a && i <= b);
};

let arr = [5, 3, 8, 1];

console.log(arr);
filterRangeInPlace(arr, 1, 4);
console.log(arr);
