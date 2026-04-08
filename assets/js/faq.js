document.addEventListener('DOMContentLoaded', function () {
    const tabs = Array.from(document.querySelectorAll('.questions_tab'));
    const contents = Array.from(document.querySelectorAll('.question_content'));
    const rightContainer = document.querySelector('.questions_block__right');

    let activeIndex = null;
    let isMobileMode = window.innerWidth <= 800;

    function isMobile() {
        return window.innerWidth <= 800;
    }

    function closeAll() {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        activeIndex = null;

        if (!isMobile()) {
            contents.forEach(content => {
                if (content.parentElement !== rightContainer) {
                    rightContainer.appendChild(content);
                }
            });
        }
    }

    function activateTab(tab, content, index) {
        if (isMobile() && activeIndex === index) {
            closeAll();
            return;
        }

        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        content.classList.add('active');

        if (isMobile()) {
            tab.after(content);
        }

        activeIndex = index;
    }

    const activeTab = document.querySelector('.questions_tab.active');
    if (activeTab) {
        const index = tabs.indexOf(activeTab);
        if (index >= 0 && contents[index]) {
            activeIndex = index;
            activateTab(activeTab, contents[index], index);
        }
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function () {
            activateTab(tab, contents[index], index);
        });
    });

    window.addEventListener('resize', function () {
        const mobileNow = isMobile();

        if (!mobileNow) {
            contents.forEach(content => {
                if (content.parentElement !== rightContainer) {
                    rightContainer.appendChild(content);
                }
            });

            if (activeIndex !== null) {
                tabs[activeIndex].classList.add('active');
                contents[activeIndex].classList.add('active');
            }
        } else {
            if (activeIndex !== null && tabs[activeIndex].classList.contains('active')) {
                tabs[activeIndex].after(contents[activeIndex]);
                tabs[activeIndex].classList.add('active');
                contents[activeIndex].classList.add('active');
            }
        }

        isMobileMode = mobileNow;
    });
});