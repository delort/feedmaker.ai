export function setupDropdown() {
    const el = document.querySelectorAll('[data-dropdown]');

    if (!el || !el.length) return;

    for (let i = 0; i < el.length; i++) {
        const dropdownTrigger = el[i].querySelector(`button`);

        const handleToggleDropdown = () => {
            el[i].classList.toggle('is-active');
        };

        dropdownTrigger.addEventListener('click', handleToggleDropdown);

        document.addEventListener('click', (event) => {
            const isClickInside = el[i].contains(event.target);

            if (!isClickInside) {
                el[i].classList.remove('is-active');
            }
        });
    }
}
