document.addEventListener('DOMContentLoaded', function () {
    // Функция обновления счётчика
    function updateCounter(swiper) {
        const currentSpan = document.querySelector('.slider_counter .current');
        const totalSpan = document.querySelector('.slider_counter .total');

        if (currentSpan && totalSpan) {
            // При loop: true используем realIndex
            const currentSlide = swiper.realIndex + 1;
            const totalSlides = swiper.slides.length - 2; // вычитаем 2 дублированных слайда при loop

            currentSpan.textContent = currentSlide;
            totalSpan.textContent = totalSlides;
        }
    }

    // Инициализация слайдера
    const swiper = new Swiper('.slider_block__wrapper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 600,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            init: function () {
                updateCounter(this);
            },
            slideChange: function () {
                updateCounter(this);
            },
        },
    });

    // Переключение табов (если нужно)
    const tabs = document.querySelectorAll('.slider_tabs__tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Убираем активный класс у всех табов
            tabs.forEach(t => t.classList.remove('active'));
            // Добавляем активный класс текущему
            this.classList.add('active');

            // Здесь можно добавить логику фильтрации слайдов
            const category = this.textContent.trim();
            console.log('Выбрана категория:', category);
        });
    });

    // Полноэкранный режим
    const fullscreenBtn = document.querySelector('.slider_block--fullscreen');
    const sliderWrapper = document.querySelector('.slider_block__wrapper');

    if (fullscreenBtn && sliderWrapper) {
        fullscreenBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                sliderWrapper.requestFullscreen().catch(err => {
                    console.log(`Ошибка полноэкранного режима: ${err.message}`);
                });
            } else {
                document.exitFullscreen();
            }
        });
    }
});

const modal = document.getElementById('modal');
const modalImg = document.getElementById('imgFull');
const mainImg = document.getElementById('img');
const zoomBtns = document.querySelectorAll('#zoomBtn1, #zoomBtn2');

function openModal() {
    modal.classList.add('active');
    modalImg.src = mainImg.src;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

zoomBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
});


modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

const tabs = document.querySelectorAll('.slider_tabs__tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});
const tabsProject = document.querySelectorAll('.plan_project_buttons');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});
