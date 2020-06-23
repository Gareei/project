'use strict';
/*
let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item");

menu.insertBefore(menuItem[2], menuItem[1]);                    // Поменяли местами два элемента
*/    
let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item');

    menu.insertBefore(menuItem[2], menuItem[1]);                 // Поменяли местами два элемента


let menuItemLi = document.createElement("li");
menuItemLi.classList.add("menu-item");                          // Добавляем новый li, с классом и текстом
menuItemLi.textContent = "Пятый элемент";                       
menu.appendChild(menuItemLi);                                   


document.body.style.backgroundImage = "url('img/apple_true.jpg')";  // Меняем фон

let title = document.getElementById("title");
title.textContent = "Мы продаем только подлинную технику Apple"    // Заменить текст


let adv = document.getElementsByClassName("adv")[0];
adv.remove();                                                   // Удалить рекламу со страницы


let promptforApple = document.querySelector("#prompt");
let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
promptforApple.textContent = yourOpinion;
