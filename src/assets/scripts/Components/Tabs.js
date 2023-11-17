export function setupTabs() {
    const el = document.querySelectorAll('[data-tabs]');

    if (!el || !el.length) return;

    for (let i = 0; i < el.length; i++) {
        let activeIndex = 0;
        const name = el[i].dataset.tabs;
        const tabs = el[i].querySelectorAll('button');
        const content = document.querySelector(`[data-tabs-content=${name}]`);
        const tabContents = content?.querySelectorAll(':scope > *') || [];

        const toggleTabsActive = () => {
            tabs.forEach((tab, index) => {
                if (index === activeIndex) {
                    tab.classList.add('is-active');
                } else {
                    tab.classList.remove('is-active');
                }
            });

            tabContents.forEach((content, index) => {
                if (index === activeIndex) {
                    content.classList.add('is-active');
                } else {
                    content.classList.remove('is-active');
                }
            });
        };

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();

                activeIndex = index;

                toggleTabsActive();
            });
        });
    }
}
