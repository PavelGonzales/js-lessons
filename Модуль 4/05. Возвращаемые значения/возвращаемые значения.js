function pow(number) {
  console.log(number * number);
}

pow(3); // 9

// const result = pow(3);
console.log(result); // undefined

function pow(number) {
  return number * number;
}


const result = pow(9);
console.log(result); // 9
console.log(pow(3)); // 9

function returnIf(a, b) {
  if (a > b) {
    return 'a > b';
  }

  return 'Иф не отработал';
}

const res = returnIf(2, 1); // a > b


function checkAge(age) {
  if (age < 18) {
    return "несовершеннолетний";
  } else {
    return "совершеннолетний";
  }
}

const result1 = checkAge(18); // совершеннолетний
console.log(result) // совершеннолетний


function abs() {
  return 1;
  return 2;
}
