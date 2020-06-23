let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

//изменение свойств элементов в циклах for и forEarch

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i , heards) {
//     item.style.backgroundColor = 'blue';
// });

//создание новых элементов

let div = document.createElement('div'),
    text = document.createTextNode('Тут был я!');
    
div.classList.add('black'); //добавление класса к элементу div
//document.body.appendChild(div); //добавление элемента div на страницу
//wrapper.appendChild(div);
document.body.insertBefore(div, circle[0]);//вставка div перед первым кружком
document.body.removeChild(circle[1]); //удаление второго кружка (родитель body)
wrapper.removeChild(heart[1]); //удаление второго сердечка (родитель wrapper)

document.body.replaceChild(btn[1], circle[1]); //замена одного элемента другим, кружка на кнопку
//div.innerHTML = '<h1>Hello World!</h1>'; //вставка любого текста в элемент div
div.textContent = '<h1>Hello World!</h1>'; //вставка только текста в элемент div(теги не сработают вставятся, как текст)

console.log(div);



    /* 
выбор селектора
класс - "."
id - "#"
атрибут - "[]"
и т.д.
*/
// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart);
// console.log(heart[1]);
// console.log(oneHeart);