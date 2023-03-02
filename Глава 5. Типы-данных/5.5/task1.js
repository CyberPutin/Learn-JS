const camelize = (str) => {
  return str
    .split("-")
    .map((s, i) => (i === 0 ? s : s[0]?.toUpperCase() + s.slice(1)))
    .join("");
};

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
