function helloUsers(name1, name2, name3) {
  console.log(`Привет, ${name1}, ${name2}, ${name3}`);
}

helloUsers("Петя", "Маша", "Леша"); // Привет, Петя, Маша, Леша

function helloUsers(...names) {
  console.log(`Привет, ${names}`);
}

helloUsers("Петя", "Маша", "Леша", "Саша", "Полина"); // Привет, Петя,Маша,Леша


const users = ["Петя", "Маша"];

helloUsers(users[0], users[1]);
helloUsers(...users);

const string = "Петя";
helloUsers(...string); // Привет, П,е,т,я

Math.math

const baseCar = {
  wheels: 4,
  isStarted: false,
  start() {
    this.isStarted = true;
  },
  stop() {
    this.isStarted = false;
  }
}

const myCar = {
  ...baseCar,
  name: "BMW",
  wheels: 3,
}

const obj1 = {a: 1};
const obj2 = {b: 2};

// const newObj = Object.assign(obj1, obj2);
const newObj = {...obj1, ...obj2};
