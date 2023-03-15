function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Родители разрешили?");
  }
}

//   Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

function checkAge1(age) {
  return (age > 18) ? true : confirm("Родители разрешили?");
}

function checkAge2(age) {
  return (age > 18) || confirm("Родители разрешили?");
}
