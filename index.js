'use strict';

const money = prompt('Ваш бюджет на месяц?', '');
const time = prompt('Введите дату в формате YYYY-MM-DD', '');

const expenseItem = prompt(
  'Введите обязательную статью расходов в этом месяце',
  ''
);
const volumeOfExpenses = prompt('Во сколько обойдется?', '');

const appData = {
  budget: money,
  timeData: time,
  expenses: {
    expenseItem: volumeOfExpenses,
  },
  optionalExpenses: {},
  income: [],
  savings: false,
};
alert('Бюджет на один день ' + (money - volumeOfExpenses) / 30);
