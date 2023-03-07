const day = 7;
let dayName;

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
  case 7:
    dayName = "Выходной";
    break;
  default:
    dayName = "Некорректный день";
    break;
}

console.log(dayName)
