const car = {
  name: "BMW",
  color: "green",
  wheels: 4,
  doors: 2,
  hp: 340,
  isStarted: false,
  engine: {
    hp: 340,
    capacity: 3,
    mileage: 60000,
  },
  start: function() {
    this.isStarted = true;
  },
  open(door) {
    console.log("Открываем дверь", door)
  }
}

car.stop = () => {
  console.log(this)
  this.isStarted = false;
}

car.start();
car.engine.test();
console.log(car.isStarted);
