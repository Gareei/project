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
