'use strict';

let costOfDelivery;
let countryChoice = prompt('Укажите страну доставки товара из списка: (Китай, Чили, Австралия, Индия, Ямайка)');

if (countryChoice === null) {
  alert('Вы отменили выбор страны доставки. Всего доброго');
} else {
  countryChoice = countryChoice[0].toUpperCase() + countryChoice.slice(1).toLowerCase();

  switch (countryChoice) {
    case 'Китай':
      costOfDelivery = 100;
      break;

    case 'Чили':
      costOfDelivery = 250;
      break;

    case 'Австралия':
      costOfDelivery = 170;
      break;

    case 'Индия':
      costOfDelivery = 80;
      break;

    case 'Ямайка':
      costOfDelivery = 120;
      break;

    default:
      costOfDelivery = 'not available';
  }

  const message =
    costOfDelivery !== 'not available'
      ? `Доставка в ${countryChoice} будет стоить ${costOfDelivery} кредитов`
      : 'В вашей стране доставка не доступна';
  alert(message);
}
