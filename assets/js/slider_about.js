document.addEventListener('DOMContentLoaded', () => {
    let swiperInstance = null;

    const initSwiper = () => {
        if (window.innerWidth <= 860) {
            if (!swiperInstance) {
                swiperInstance = new Swiper('.lifestyle-slider', {
                    slidesPerView: 1.2,
                    spaceBetween: 16,
                    autoHeight: true,
                });
            }
        } else {
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
            }
        }
    };

    initSwiper();
    window.addEventListener('resize', initSwiper);
});

document.addEventListener('DOMContentLoaded', function () {
    let swiperInstance = null;

    const initSwiper = () => {
        if (window.innerWidth <= 860) {
            if (!swiperInstance) {
                swiperInstance = new Swiper('.production-slider', {
                    slidesPerView: 1.2,
                    spaceBetween: 16,
                    autoHeight: true,
                });
            }
        } else {
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
            }
        }
    };

    initSwiper();
    window.addEventListener('resize', initSwiper);
});