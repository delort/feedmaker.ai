export function setupPlans() {
    const el = document.querySelectorAll('[data-plan]');

    if (!el || !el.length) return;

    for (let i = 0; i < el.length; i++) {
        let activeIndex = 0;
        const name = el[i].dataset.plan;
        const tabs = el[i].querySelectorAll('button');
        const content = document.querySelector(`[data-plan-content=${name}]`);
        const switchers = content?.querySelectorAll('[data-plan-switch]') || [];

        const toggleTabsActive = () => {
            tabs.forEach((tab, index) => {
                if (index === activeIndex) {
                    tab.classList.add('is-active');
                } else {
                    tab.classList.remove('is-active');
                }
            });

            switchers.forEach((item) => {
                const values = JSON.parse(item.dataset.planSwitch);

                item.innerText = values[activeIndex];
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
