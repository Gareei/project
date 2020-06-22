
const ciclWhile = (num) => {
	let i = 0;
	while (i <= num) {
		console.log(i);
		i += 1;
	}
	return i;
}

ciclWhile(6);

let j = 0;
do {
	console.log(j);
	j += 1;
}
while (j < 6);


// пример возврата переменной из функции во вне

const retVar = () => {
	let num = 50;
	return num;
}

let anotherNum = retVar();
console.log(anotherNum);

// свойства и методы

let str = "test";
console.log(str.length); //length свойство

//toUpperCase toLowerCase - методы
console.log(str.toUpperCase()); 
console.log(str.toLowerCase()); 

let twelve = "12.2";
console.log(Math.round(twelve)); // 12

twelve = "12.2px";
console.log(parseInt(twelve)); // 12
console.log(parseFloat(twelve)); // 12.2



//Урок 2.13. Callback-функции нужны для того, чтобы вызов их осуществлялся в строго определенном порядке

function learnJS(lang, callback) {
	console.log("Я учу " + lang);
	callback();
}

learnJS("JavaScript", function() {
	console.log("Я прошел 3-й урок!");
});

//или тоже самое

function learnJS(lang, callback) {
	console.log("Я учу " + lang);
	callback();
}

function done() {
	console.log("Я прошел 3-й урок!");
} 

learnJS("JavaScript", done);


//Урок 2.14. Объекты

let options = {
	width: 1024,
	heith: 1024,
	name: "test"
};

console.log(options.name);
options.bool = false; //добавить новое свойство
options.color = {
	border: "black",
	bg: "red"
};

delete options.bool; //удалить свойство

console.log(options);

//вывод все свойства и значения объекта

for (let key in options) {
	console.log(key+' : '+options[key]);
}

console.log(Object.keys(options).length); //количество свойств в объекте


//Урок 2.15. Массивы и псевдомассивы

//Полное описание массивов
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array

let arr = [1, 2, 3,4 ,5]

arr.pop(); // удалить последний элемент массива
arr.push("6"); // добавить эл в конец массива

arr.shift(); // удалить первый элемент массива
arr.unshift("0"); // удалить первый элемент массива

console.log(arr);

//перебор элементов массива 

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// перебор с помощью метода forEach
//item - эл массива, i - индекс элемента, mass - сам массив
arr.forEach(function(item, i , mass) {
	//console.log(mass[i]+ ' ' + mass);
	console.log(i+" - "+item);
})

// перебор с помощью for in или for of

let mass = [1, 3, 4, 6, 7]
for (let key in mass) {
	console.log(key+' - '+ mass[key]) //индекс, элемент
}
console.log("\n")

for (let key of mass) {
	console.log(key) //элемент
}

// пример записи в массив результатов введенных пользователем из диалога prompt с помощью метода split

let ans = prompt("",""),
	arr = [];

arr = ans.split(',');
console.log(arr);

// преобразование массива в строку методом join
let arr = ['1','2','3','4'];
let str = arr.join(',');
console.log(str);

// сортировка массива 
let arr = ['ааа','ббб','ггг','000', 'ffff'];
str = arr.sort();
console.log(str);

//сортировка чисел, как строки
let arr = [1, 15, 4];
str = arr.sort();
console.log(str);

//сортировка чисел по порядку, как числа с помощью функции
let arr = [1, 15, 4],
str = arr.sort(compareNum);

function compareNum(a,b) {
	return a - b
}
console.log(arr);


//Урок 2.16. Объектно-ориентированное программирование (ООП)

Функции-конструкторы https://learn.javascript.ru/constructor-new
Классы https://learn.javascript.ru/classes

// объект солдат
let soldier = {
	healt: 400, //здоровье
	armor: 100 //броня
}

// и объект солдат Джон
let john = {
	healt: 100
}

john.__proto__ = soldier; // Джон потомок (прототип) soldier

console.log(john);
console.log(john.armor);