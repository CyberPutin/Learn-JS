const unique = (arr) => {
  let result = [];

  for (let i of arr) {
    if (!result.includes(i)) {
      result.push(i);
    }
  }

  return result;
};

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

console.log(unique(strings));
