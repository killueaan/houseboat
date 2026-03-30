document.addEventListener('DOMContentLoaded', () => {
    const swiperElement = document.querySelector('.news-company-slider');
    let swiperInstance = null;

    const initSwiper = () => {
        if (window.innerWidth <= 800) {
            if (!swiperInstance) {
                swiperInstance = new Swiper('.news-company-slider', {
                    slidesPerView: 1.3,
                    spaceBetween: 16,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
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

    window.addEventListener('resize', () => {
        initSwiper();
    });
});