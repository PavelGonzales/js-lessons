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