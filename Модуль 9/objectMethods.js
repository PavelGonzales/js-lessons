// Object.create()
const person = {
  name: "Петя",
  getName: function() {
    console.log(`Привет, меня зовут ${this.name}`);
  }
}

const person1 = Object.create(person);
person1.name = "Вася";

person.getName(); // Привет, меня зовут Петя
person1.getName(); // Привет, меня зовут Вася

// Object.assign()
const obj1 = {
  a: 1
}
const obj2 = {
  a: 2,
  b: 3
}

const obj3 = Object.assign(obj1, obj2);
console.log(obj3);

// Object.entries()
const obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.entries(obj)) // [['a', 1], ['b', 2], ['c', 3]]

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}

// Object.freeze()
const car = {
  name: "BMW"
};

Object.freeze(car);

car.name = "Mercedes"; // Ничего не произойдет

console.log(car.name); // BMW

// Object.keys()
const obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.keys(obj)); // ["a", "b", "c"]

// Object.values()
const obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.keys(obj)); // [1, 2, 3]