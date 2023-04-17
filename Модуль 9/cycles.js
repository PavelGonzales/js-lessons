// for...in
const object = {
  a: 1,
  b: 2,
  c: 3
};

for (const property in object) {
  console.log(`Свойство: ${property}, значение: ${object[property]}`);
}

// Object.getOwnPropertyNames(obj)
const object = {
  a: 1,
  b: 2,
  c: 3
};

Object.getOwnPropertyNames(object).forEach(property => {
  console.log(`Свойство: ${property}, значение: ${object[property]}`);
})

// Object.keys(obj)
const object = {
  a: 1,
  b: 2,
  c: 3
};

Object.values(object).forEach(property => {
  console.log(`Свойство: ${property}, значение: ${object[property]}`);
})

const registrationForm = {
  firstName: "Петя",
  lastName: "Васечкин",
  birthDate: "19.12.1990",
  password: "qwerty"
}

for (const field in registrationForm) {
  if (field === "firstName") {
    // Смотрим что имя введено
  }
  if (field === "lastName") {
    // Смотрим что фамилия введена
  }
  if (field === "birthDate") {
    // Смотрим что  дата введена правильно
  }
  if (field === "password") {
    // Смотрим что пароль удовлетворяет правилам
  }
}
