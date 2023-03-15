const truncate = (str, maxlength) => (str.length <= maxlength ? str : str.slice(0, maxlength - 1) + "...");

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 25));
console.log(truncate("Всем привет!", 20));
