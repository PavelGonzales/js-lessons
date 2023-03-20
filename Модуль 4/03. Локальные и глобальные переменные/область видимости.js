const a = 10;

function calc() {
  const a = 30;
  const b = 20;

  console.log(a + b); // 50
}

console.log(a); // 10
console.log(b); // undefined

console.log(a + b) // NaN



const global = 1;

function globalFn() {
  const a = 10;

  function localFn1() {
    const b = 20;
    console.log(a + b); // 30
  }

  function localFn2() {
    const c = 30;
    console.log(a + c); // 40
  }

  console.log(a); // 10
  console.log(b); // undefined
  console.log(c); // undefined

  localFn1(); // 30
  localFn2(); // 40
}

globalFn();


let counter = 0;

function increment() {
  counter = counter + 1;
}

increment();
console.log(counter); // 1
increment();
console.log(counter); // 2
increment();
console.log(counter); // 3