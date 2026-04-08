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

//     const tabs = document.querySelectorAll('.slider_tabs__tab');
//     tabs.forEach(tab => {
//         tab.addEventListener('click', function () {
//             tabs.forEach(t => t.classList.remove('active'));
//             this.classList.add('active');
//             console.log('Выбрана категория:', this.textContent);
//         });
//     });
// });