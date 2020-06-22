'use strict';

let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}

}

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	
	chooseExpenses: function() {
		for (let i = 0; i < 2; i += 1) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется?", '');
	
			if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
	
				console.log('done');
				appData.expenses[a] = b;
			} else {
				console.log("bad result");
				i--;
			}
		}
	},

	detectDayBudget: function() {// Расчет дневного бюджета
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert("Бюджет на 1 день составляет " + appData.moneyPerDay + " руб.");
	},

	detectLevel: function () { // Расчет уровня достатка
		if (appData.moneyPerDay < 100) {
			console.log("Это минимальный уровень достатка!");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Это средний уровень достатка!");
		} else if (appData.moneyPerDay > 2000) {
			console.log("Это высокий уровень достатка!");
		} else {
			console.log("Произошла ошибка");
		}
	},

	checkSavings: function () {//метод накопления с депозита, если он есть
		if (appData.savings == true) {
			let save = parseFloat(+prompt("Какова сумма накоплений?")),
				percent = parseFloat(+prompt("Под какой процент?"));
			appData.monthIncome = save / 100 / 12 * percent; // расчет прибыли с депозита за месяц
			alert(`Ваша прибыль с депозита в месяц ${appData.monthIncome} руб.`);
		}
	},

	chooseOptExpenses: function () {//метод для определения необязательных расходов
		for (i = 1; i <= 3; i++) {
			let a = prompt("Статья необязательных расходов?");
			if (typeof (a) === 'string' && typeof (a) != null && a != "" && a.length < 50) {
				appData.optionalExpenses[i] = a;
			} else {
				console.log("bad result");
				i--;
			}
		}
		console.log(appData.optionalExpenses);
	},

	chooseIncome: function() {//метод доподнительный доход
		for (let i = 1; i <= 1; i++) {
			let items = prompt("Что принесет доподнительный доход? (Перечислите через запятую)", "");
			if (typeof (items) === 'string' && typeof (items) != null && items != "" && Number(items) !== +items) {
				appData.income = items.split(', ');
				appData.income.push(prompt("Может что-то еще?")); // добавим в конец массива income
				appData.income.sort(); // сортируем элементы				
			} else {
				alert("Значение не должно быть пустым, числом или пробелом!");
				i--;
			}
		}
	
		appData.income.forEach(function(item, i) {
			//let srt = mass;
			alert("Способы доп. заработка: \n"+i+1+" - "+item);
		})
		
		
	}


};


for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

console.log(appData);