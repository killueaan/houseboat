const swiper = new Swiper('.property-cards-slider', {
    slidesPerView: 1,
    spaceBetween: 16,
    autoHeight: true,
});

// ЗАКОМЕНТИЛ ЛОМАЕТ
// function toggleSlider() {
//     if (window.innerWidth >= 1000) {
//         swiper.enable();
//     } else {
//         swiper.disable();
//     }
// }

// toggleSlider();
// window.addEventListener('resize', toggleSlider);

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.documents-slider', {
        slidesPerView: 1.1,
        spaceBetween:8,
        autoHeight: true,
    });

    function toggleSlider() {
        if (window.innerWidth >= 1200) {
            swiper.disable();
        } else {
            swiper.enable();
        }
    }

    toggleSlider();
    window.addEventListener('resize', toggleSlider);
});

// ДОБАВИЛ
let houseboatSlider;

function initSlider() {
    const sliderEl = document.querySelector('.houseboat-slider');
    if (!sliderEl) return;

    if (window.innerWidth < 900) {
        if (!houseboatSlider) {
            houseboatSlider = new Swiper(sliderEl, {
                slidesPerView: 1.2,
                spaceBetween: 12,
                
            });
        }
    } else {
        if (houseboatSlider) {
            houseboatSlider.destroy(true, true);
            houseboatSlider = null;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initSlider();
    window.addEventListener('resize', initSlider);
});


