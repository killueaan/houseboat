// Бургер-меню
const burgerBtn = document.getElementById('burgerBtn');
const nav = document.getElementById('nav');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('menu-open'); // блокировка скролла при открытом меню
});

// Закрытие меню при клике на ссылку
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});