bmwName = "BMW";
bmwColor = "black";
bmwWheels = 4;
bmwDoors = 2;
bmwHp = 340;
bmwIsStarted = false;

mercedesName = "Mercedes";
mercedesColor = "white";
mercedesWheels = 4;
mercedesDoors = 4;
mercedesHp = 140;
mercedesIsStarted = false;

audiName = "Audi";
audiColor = "blue";
audiWheels = 4;
audiDoors = 4;
audiHp = 245;
audiIsStarted = false;

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
