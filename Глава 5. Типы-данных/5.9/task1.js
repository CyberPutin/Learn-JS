let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const sumSalaries = (salaries) => {
  let result = 0;
  for (value of Object.values(salaries)) {
    result += value;
  }
  return result;
};

console.log(sumSalaries(salaries));
