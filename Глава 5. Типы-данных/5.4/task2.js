let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");
console.log(styles);
styles[Math.ceil(styles.length / 2) - 1] = "Классика";
console.log(styles);
styles.shift(0);
console.log(styles);
styles.unshift("Рэп", "Регги");
console.log(styles);
