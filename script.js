let calculation = JSON.parse(localStorage.getItem('calculation')) || '';
displayCalculation();

function addToCalculation (value) {
  if (calculation.length >= 30) return;
  calculation = calculation + value;
  localStorage.setItem('calculation', JSON.stringify(calculation));
  displayCalculation();
}

// Implied multiplication, RegEx
function preprocessCalculation(calc) {
  calc = calc.replace(/(\d)\(/g, '$1*(');
  calc = calc.replace(/\)(\d)/g, ')*$1');
  calc = calc.replace(/\)\(/g, ')*(');
  return calc;
}

function displayCalculation() {
  const display = document.querySelector('.js-calculator-display');
  display.innerHTML = calculation || '0';  
}

function resetCalculation() {
  calculation = '';
  localStorage.setItem('calculation', JSON.stringify(calculation));
  displayCalculation();
}

function backspace() {
  calculation = calculation.slice(0, -1);
  localStorage.setItem('calculation', JSON.stringify(calculation));
  displayCalculation();
}

function evaluateCalculation() {
  try {
    const processed = preprocessCalculation(calculation);
    
    const result = new Function(`return ${processed}`)();
    
    if (result === Infinity || isNaN(result)) {
      throw new Error("Cannot divide by zero");
    }

    // Konwertujemy wynik na string, żeby metody tekstowe (np. .length czy .slice) nadal działały
    calculation = String(result);
    localStorage.setItem('calculation', JSON.stringify(calculation));
    displayCalculation();
  } catch (e) {
    const display = document.querySelector('.js-calculator-display');
    if (display) {
      display.innerHTML = "Error";
    }
    calculation = '';
  }
}

document.querySelector('.buttons-box').addEventListener('click', (event) => {
  const button = event.target;
  //ignores clicking space between buttons
  if (!button.matches('button')) return;

  const value = button.dataset.value;
  const action = button.dataset.action;

  if (value) addToCalculation(value);
  if (action === 'reset') resetCalculation();
  if (action === 'backspace') backspace();
  if (action === 'evaluate') evaluateCalculation();
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (/\d/.test(key)) addToCalculation(key);
  else if ("+-*/".includes(key)) addToCalculation(`${key}`);
  else if (key === ".") addToCalculation(".");
  else if (key === "Enter" || event.code === "NumpadEnter") evaluateCalculation();
  else if (key === "(" || key === ")") addToCalculation(key);
  else if (key === "Backspace") backspace();
  else if (key === "Delete") resetCalculation();
});