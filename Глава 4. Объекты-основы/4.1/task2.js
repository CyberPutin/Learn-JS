let schedule = {};

const isEmpty = (obj) => {
  for (k in obj) {
    return false;
  }
  return true;
};

console.log(isEmpty(schedule));
