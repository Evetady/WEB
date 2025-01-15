let getNumbers = () => {
  let num1 = 0;
  let num2 = 0;

  if (num1 === 0 && num2 === 0) {
    num1 = parseInt(prompt("Введите число а"), 10);
    num2 = parseInt(prompt("Введите число b"), 10);
  }

  return {
    num1,
    num2
  };
};

let numbers = getNumbers();

function myFunction1() {
  console.log("Привет, мир!");
}

function myFunction2() {
  console.log("Число 1: " + numbers.num1);
  console.log("Число 2: " + numbers.num2);
}

function myFunction3() {
  let sum = numbers.num1 + numbers.num2;
  console.log("Сумма: " + sum);
}
function myFunction4() {
  let str = "Привет";
  console.log("Верхний регистр: " + str.toUpperCase());
  console.log("Нижний регистр: " + str.toLowerCase());
}
function myFunction5() {
  console.log("Сложение: " + (numbers.num1 + numbers.num2));
  console.log("Вычитание: " + (numbers.num1 - numbers.num2));
  console.log("Умножение: " + (numbers.num1 * numbers.num2));
  console.log("Деление: " + (numbers.num1 / numbers.num2));
}
function myFunction6() {
  console.log("Квадрат: " + Math.pow(numbers.num1, 2));
  console.log("Остаток от деления: " + numbers.num1 % numbers.num2);
  console.log("Среднее арифметическое: " + (numbers.num1 + numbers.num2) / 2);
}
