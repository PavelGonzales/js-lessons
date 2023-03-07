const value = 1;

switch (value) {
  case 1:
    console.log("Выводим 1");
    break;
  case 2:
    console.log("Выводим 2");
    break;
  default:
    console.log("Выводим значение по умолчанию");
    break;
}

const day = 6;
let dayName;


if (day === 1) {
  dayName = "Понедельник";
} else if (day === 2) {
  dayName = "Вторник";
} else if (day === 3) {
  dayName = "Среда";
} else if (day === 4) {
  dayName = "Четверг";
} else if (day === 5) {
  dayName = "Пятница";
} else if (day === 6) {
  dayName = "Суббота";
} else if (day === 7) {
  dayName = "Воскресенье";
} else {
  dayName = "Некорректный день";
}

switch (day) {
  case 1:
    dayName = "Понедельник";
    break;
  case 2:
    dayName = "Вторник";
    break;
  case 3:
    dayName = "Среда";
    break;
  case 4:
    dayName = "Четверг";
    break;
  case 5:
    dayName = "Пятница";
    break;
  case 6:
    dayName = "Суббота";
    break;
  case 7:
    dayName = "Воскресенье";
    break;
  default:
    dayName = "Некорректный день";
    break;
}

console.log(dayName);