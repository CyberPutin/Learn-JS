let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const SumSalaries = (obj) => {
  let sum = 0;
  for (k in obj) {
    sum = sum + salaries[k];
  }
  return sum;
};

const sum = SumSalaries(salaries);

console.log(sum);
