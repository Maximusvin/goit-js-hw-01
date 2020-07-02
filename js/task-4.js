'use strict';

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let userCountDroid = prompt('Укажите количетсов дроидов к покупке:');

if (userCountDroid === null) {
  console.log('Отменено пользователем!');
} else {
  userCountDroid = Number(userCountDroid);
  totalPrice = userCountDroid * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits -= totalPrice;
    console.log(`Вы купили ${userCountDroid} дроидов, на счету осталось ${credits} кредитов.`);
  }
}
