document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.production-slider', {
        slidesPerView: 1.3,
        spaceBetween: 16,
        autoHeight: true,
    });
    
    // Отключаем слайдер на десктопе (≥769px)
    function toggleSlider() {
        if (window.innerWidth >= 769) {
            swiper.disable();
        } else {
            swiper.enable();
        }
    }
    
    toggleSlider();
    window.addEventListener('resize', toggleSlider);
});