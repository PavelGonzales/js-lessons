const car = {
  name: "BMW",
  isStarted: false,
  start() {
    this.isStarted = true;
  },
  stop() {
    this.isStarted = true;
  },
}

// const name = car.name;
// const isStarted = car.isStarted;
// const start = car.start;
// const stop = car.stop;

const { name, isStarted, start, stop, hp = 340 } = car;
console.log(hp); // 340

start();
car.start();

const numbers = [1, 2, 3];

// const one = numbers[0];
// const two = numbers[1];
// const three = numbers[2];

const [one, two, three, four = 4] = numbers;

console.log(one, two, three, four) // 1, 2, 3, 4
