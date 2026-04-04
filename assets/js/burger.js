const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const headerInner = document.querySelector('.header__inner');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        headerInner.style.background = '#131B1FB2';
        document.body.style.overflow = 'hidden'; 
    } else {
        headerInner.style.background = '#131B1FB2';
        document.body.style.overflow = '';
    }
});

const mobileLinks = mobileMenu.querySelectorAll('.nav__link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        headerInner.style.background = '#00000025';
        document.body.style.overflow = '';
    });
});

document.addEventListener('click', (e) => {
    if (!burgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        burgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        headerInner.style.background = '#00000025';
        document.body.style.overflow = '';
    }
});