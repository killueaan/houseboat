// document.addEventListener('DOMContentLoaded', function () {
//     // Функция обновления счётчика
//     function updateCounter(swiper) {
//     const currentSpan = document.querySelector('.swiper_counter .current');
//     const totalSpan = document.querySelector('.swiper_counter .total');

//     if (currentSpan && totalSpan) {
//         // Получаем количество реальных слайдов (без дублей)
//         const totalSlides = swiper.slides.filter(slide => !slide.classList.contains('swiper-slide-duplicate')).length;
//         const currentSlide = swiper.realIndex + 1;

//         currentSpan.textContent = currentSlide;
//         totalSpan.textContent = totalSlides;
//     }
// }

//     const swiper = new Swiper('.slider_block__wrapper', {
//         slidesPerView: 1,
//         spaceBetween: 0,
//         loop: true,
//         speed: 600,
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         on: {
//             init: function () {
//                 updateCounter(this);
//             },
//             slideChange: function () {
//                 updateCounter(this);
//             },
//         },
//     });

// const tabs = document.querySelectorAll('.slider_tabs__tab');
// const wrappers = document.querySelectorAll('.slider_block__wrapper--content');

// tabs.forEach((tab, index) => {
//     tab.addEventListener('click', () => {
//         // Убираем активный класс у всех табов
//         tabs.forEach(t => t.classList.remove('active'));
//         // Добавляем активный класс текущему
//         tab.classList.add('active');

//         // Скрываем все обертки
//         wrappers.forEach(wrapper => {
//             wrapper.classList.remove('active');
//         });
//         // Показываем нужную обертку
//         wrappers[index].classList.add('active');
//     });
// });
// });