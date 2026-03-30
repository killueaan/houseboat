document.addEventListener('DOMContentLoaded', function () {
    const tabs = Array.from(document.querySelectorAll('.questions_tab'));
    const contents = Array.from(document.querySelectorAll('.question_content'));
    const rightContainer = document.querySelector('.questions_block__right');
    
    // Сохраняем исходное положение для возврата на десктопе
    const originalContentOrder = [...contents];

    function isMobile() {
        return window.innerWidth <= 600;
    }

    function activateTab(tab, content) {
        // Снимаем активность со всех
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => {
            c.classList.remove('active');
            if (!isMobile() && c.parentElement !== rightContainer) {
                rightContainer.appendChild(c);
            }
        });

        tab.classList.add('active');
        content.classList.add('active');

        if (isMobile()) {
            tab.after(content);
        }
    }

    const activeTab = document.querySelector('.questions_tab.active');
    if (activeTab) {
        const index = tabs.indexOf(activeTab);
        if (index >= 0 && contents[index]) {
            activateTab(activeTab, contents[index]);
        }
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function () {
            activateTab(tab, contents[index]);
        });
    });

    window.addEventListener('resize', function () {
        if (!isMobile()) {
            contents.forEach(content => {
                if (content.parentElement !== rightContainer) {
                    rightContainer.appendChild(content);
                }
            });
            contents.forEach((c, i) => {
                c.classList.toggle('active', tabs[i].classList.contains('active'));
            });
        } else {
            const activeIndex = tabs.findIndex(t => t.classList.contains('active'));
            if (activeIndex >= 0) {
                activateTab(tabs[activeIndex], contents[activeIndex]);
            }
        }
    });
});