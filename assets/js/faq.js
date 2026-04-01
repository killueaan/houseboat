document.addEventListener('DOMContentLoaded', function () {
    const tabs = Array.from(document.querySelectorAll('.questions_tab'));
    const contents = Array.from(document.querySelectorAll('.question_content'));
    const rightContainer = document.querySelector('.questions_block__right');
    
    let activeIndex = null;
    let isContentVisible = true;

    function isMobile() {
        return window.innerWidth <= 600;
    }

    function closeAll() {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        
        if (!isMobile()) {
            contents.forEach(c => {
                if (c.parentElement !== rightContainer) {
                    rightContainer.appendChild(c);
                }
            });
        }
        
        activeIndex = null;
        isContentVisible = false;
    }

    function activateTab(tab, content, index) {
        // Если кликнули на тот же таб и контент открыт - закрываем
        if (activeIndex === index && isContentVisible) {
            closeAll();
            return;
        }
        
        // Если кликнули на другой таб или контент закрыт - открываем
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        content.classList.add('active');
        
        if (isMobile()) {
            tab.after(content);
        }
        
        activeIndex = index;
        isContentVisible = true;
    }

    // Инициализация
    const activeTab = document.querySelector('.questions_tab.active');
    if (activeTab) {
        const index = tabs.indexOf(activeTab);
        if (index >= 0 && contents[index]) {
            activeIndex = index;
            isContentVisible = true;
            activateTab(activeTab, contents[index], index);
        }
    }

    // Обработка кликов
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function () {
            activateTab(tab, contents[index], index);
        });
    });

    // Обработка изменения размера окна
    window.addEventListener('resize', function () {
        if (!isMobile()) {
            // На десктопе все контенты в правом контейнере
            contents.forEach(content => {
                if (content.parentElement !== rightContainer) {
                    rightContainer.appendChild(content);
                }
            });
            
            // Восстанавливаем активный контент
            if (activeIndex !== null && isContentVisible) {
                tabs[activeIndex].classList.add('active');
                contents[activeIndex].classList.add('active');
            } else {
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));
            }
        } else {
            // На мобильном: активный контент после таба
            if (activeIndex !== null && isContentVisible) {
                const tab = tabs[activeIndex];
                const content = contents[activeIndex];
                tab.after(content);
                tab.classList.add('active');
                content.classList.add('active');
            } else {
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));
            }
        }
    });
});