const btnMenu = document.querySelector(".nav-burger");
const menu_mobile = document.querySelector(".menu-mobile");
const CloseMenu = document.querySelector(".close-menu");
const list_mobile = document.querySelector(".nav-list-mobile");
const burger = document.querySelector(".nav-burger");

btnMenu.addEventListener('click', function(){
    menu_mobile.classList.toggle('show');
    list_mobile.classList.toggle('show-background');
    burger.classList.toggle('show-down');
});

CloseMenu.addEventListener('click', function(){
    menu_mobile.classList.toggle('show');
    list_mobile.classList.toggle('show-background');
    burger.classList.toggle('show-down');
});

// menu_mobile.addEventListener('click', function(){
//     menu_mobile.classList.toggle('show');
//     list_mobile.classList.toggle('show-background');
//     burger.classList.toggle('show-down');
// });