export function setupAccordion() {
    const el = document.querySelectorAll('[data-accordion]');

    if (!el || !el.length) return;

    for (let i = 0; i < el.length; i++) {
        let activeIndex = null;
        const name = el[i].dataset.tabs;
        const triggers = el[i].querySelectorAll('[data-accordion-trigger]');

        const toggleAccordionActive = () => {
            triggers.forEach((trigger, index) => {
                if (index === activeIndex) {
                    trigger.parentElement.classList.add('is-active');
                } else {
                    trigger.parentElement.classList.remove('is-active');
                }
            });
        };

        triggers.forEach((trigger, index) => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();

                if (activeIndex === index) {
                    activeIndex = null;
                } else {
                    activeIndex = index;
                }

                toggleAccordionActive();
            });
        });
    }
}
