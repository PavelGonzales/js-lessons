// 04. (Практика) Работа с условным оператором и логическими выражениями
const isCardInserted = true;
const minimalSum = 500;
const sum = prompt("Введите сумму");

if (isCardInserted && sum >= minimalSum) {
  console.log("Операция выполняется");
} else {
  console.log("Операция отклонена");
}

const password = "qwerty";
const confirmPassword = prompt("Введите пароль");

if (password == confirmPassword) {
  console.log("Пароли совпадают");
} else {
  console.log("Пароли не совпадают");
}

// 09. (Практика) Примеры использования условных операторов
// 1
const isRain = true;

isRain ? console.log("Идет дождь") : console.log("Дождя нет");

// 2
const maxPrice = 1000;
const minPrice = 200;
const price = Number(prompt("Введите сумму"));

if (price > maxPrice) {
  console.log("Цена слишком большая");
} else if (price < minPrice) {
  console.log("Цена слишком маленькая");
} else {
  console.log("Цена нормальная");
}

// 3
const freeCashier = Number(prompt("Введите номер кассы"));

switch (freeCashier) {
  case 1:
    console.log("Свободная касса №1");
    break;
  case 2:
    console.log("Свободная касса №2");
    break;
  case 3:
    console.log("Свободная касса №3");
    break;
  case 4:
    console.log("Свободная касса №4");
    break;
  default:
    console.log("Все кассы заняты");
    break;
}

// 4
const power = Number(prompt("Введите мощность автомобиля"));
let sum = 0;

if (power < 100) {
  sum = power * 12;
} else if (power <= 100 && power < 125) {
  sum = power * 25; 
} else if (power <= 125 && power < 150) {
  sum = power * 35; 
} else if (power <= 150 && power < 175) {
  sum = power * 45; 
} else if (power <= 175 && power < 200) {
  sum = power * 50; 
} else if (power <= 200 && power < 225) {
  sum = power * 65; 
} else if (power >= 225 && power < 250) {
  sum = power * 75; 
} else {
  sum = power * 150;
}

console.log("Сумма налога " + sum + " рублей");
