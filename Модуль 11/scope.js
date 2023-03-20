// Глобальная область видимости

if (true) {
  // локальная область видимости
}

function fn() {
  // локальная область видимости
}

for (let i = 0; i < 10; i++) { // let i тоже создалась в локальной области видимости
  // локальная область видимости
}


function printLoop() { // Доступны переменные: printLoopVariable
  const printLoopVariable = "printLoopVariable";
  
  for (let i = 1; i <= 10; i++) { // Доступны переменные: printLoopVariable, forVariable
    const forVariable = "forVariable";

    console.log("i = ", i);
    if (i === 10) { // Доступны переменные: printLoopVariable, forVariable, ifVariable
      const ifVariable = "ifVariable";

      console.log("Конец цикла");
    }
  }
}
// Никакие переменные не доступны
