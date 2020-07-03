'use strict';

let total = 0;
let counter = 0;
let value = 0;
let inputUserNum;

while (true) {
  inputUserNum = prompt('Введите любое число:');

  if (inputUserNum === null) {
    break;
  }

  inputUserNum = Number(inputUserNum);
  if (Number.isNaN(inputUserNum)) {
    alert('Было введено не число, попробуйте еще раз');
    value += 1;
    continue;
  }

  total += Number(inputUserNum);
  counter += 1;
}

alert(`Вы ввели ${counter + value} значений. Из них - ${counter} чисел. И сумма этих чисел равна ${total}`);
