const isAvailable = true;

if (isAvailable) {
  let innerVariable = "Я видна только в блоке блока";

  console.log(innerVariable); // выведется "Я видна только в блоке блока"
}

console.log(innerVariable); // выведется ошибка "innerVariable is not defined"

let mutableVariable = "Меня можно изменить";
mutableVariable = "Новое значение";

console.log(mutableVariable); // Выведется "Новое значение"

const immutableVariable = "Меня не изменить";
immutableVariable = "Новое значение"; // Тут будет ошибка "Assignment to constant variable"

console.log(immutableVariable); // Код сюда даже не дойдет, потому что выведется ошибка о присвоении нового значения константе
