function checkAge(age) {
  if (age < 18) {
    console.log("несовершеннолетний");
  } else {
    console.log("совершеннолетний");
  }
}

checkAge(21); // совершеннолетний

function sum(a = 0, b = 0, c = 0) {
  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log("Вы неверно указали один из параметров");
  }
}

sum(1, 2, 3); // 6

sum(1, 2); // sum(1, 2, undefined) // NaN

sum(1, 2); // sum(1, 2, 0) // 3