function helloUsers(...names) {
  console.log(`Привет, ${names}`);
}

helloUsers("Петя", "Маша"); // Привет, Петя,Маша


const users = ["Петя", "Маша"];

helloUsers(users[0], users[1]);
helloUsers(...users);

const string = "Петя";
helloUsers(...string); // Привет, П,е,т,я

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
}
