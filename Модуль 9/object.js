const bmwName = "BMW";
const bmwColor = "black";
const bmwWheels = 4;
const bmwDoors = 2;
const bmwHp = 340;
const bmwIsStarted = false;
 
const mercedesName = "Mercedes";
const mercedesColor = "white";
const mercedesWheels = 4;
const mercedesDoors = 4;
const mercedesHp = 140;
const mercedesIsStarted = false;

const audiName = "Audi";
const audiColor = "blue";
const audiWheels = 4;
const audiDoors = 4;
const audiHp = 245;
const audiIsStarted = false;

// Определяем объект
// const car = new Object()
const car = {}

car.name = "BMW";
car.color = "black";
car.wheels = 4;
car.doors = 2;
car.hp = 340;
car.isStarted = false;

car.color = "green";

console.log(car.hp) // 340
console.log(car['hp']) // 340

const fieldName = 'hp';
console.log(car[fieldName]); // 340

console.log(car.engineCapacity) // undefined

const engine = {
  hp: 340,
  capacity: 3,
  mileage: 60000,
}

car.engine = engine;

delete car.hp;
console.log(car.hp); // undefined

{ a: 1 } === { a: 1 } // false

JSON.stringify({ a: 1 }) === JSON.stringify({ a: 1 }) // true
