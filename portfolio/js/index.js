window.onscroll = function() {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").classList.add('myNavbar');
    } else {
        document.getElementById("navbar").classList.remove('myNavbar');
    }
}//Navigation
const menu = document.querySelector('.header__burger');
const header__list = document.querySelector('.navbar-menu');


const menu_items = document.querySelectorAll('.nav-link');
for(var i = 0, len = menu_items.length; i < len; i++) {
    menu_items[i].onclick = function () {
        menu.classList.toggle('active');
        header__list.classList.toggle('active');
    }
}
menu.onclick = function(){
    menu.classList.toggle('active');
    header__list.classList.toggle('active');
};








//
// const portfolioBtn = document.querySelector('.portfolio-btn');
// const portfolioImages = document.querySelectorAll('.portfolio-image');
// portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
//  portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
//  portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
//  portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
// const portfolioBtns = document.querySelector('.portfolio-btns');
// function changeImage(event) {
//     if(event.target.classList.contains('portfolio-btn')) {
//         // здесь код функции, меняющей src изображений
//
//     }
// }




























console.log("Все пункты выполнены.\n Итог - 85 баллов");