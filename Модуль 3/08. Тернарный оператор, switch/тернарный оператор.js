// значение ? условие1 : условие2

const tumbler = false;

if (tumbler) {
  console.log("Свет включен");
} else {
  console.log("Свет выключен");
}

tumbler ? console.log("Свет включен") : console.log("Свет выключен");

// условие1 ? условие1 : условие2 ? значение2 : значение3

const age = 21;
// const person = age < 1 ? "грудной ребенок"
//   : age >= 1 && age <= 12 ? "ребенок"
//   : age >= 13 && age <= 16 ? "подросток"
//   : age >= 17 && age <= 21 ? "юноша"
//   : age >= 22 && age <= 60 ? "взрослый"
//   : age >= 61 && age <= 75 ? "пожилой"
//   : age >= 76 && age <= 90 ? "старик"
//   : "долгожитель";


let person;

if (age < 1) {
  person = "грудной ребенок";
} else if (age >= 1 && age <= 12) {
  person = "ребенок";
} else if (age >= 13 && age <= 16) {
  person = "подросток";
} else if (age >= 17 && age <= 21) {
  person = "юноша";
} else if (age >= 22 && age <= 60) {
  person = "взрослый";
} else if (age >= 61 && age <= 75) {
  person = "пожилой";
} else if (age >= 76 && age <= 90) {
  person = "старик";
} else {
  person = "долгожитель";
}

console.log(person);
