export function setupDropdown(dropdowns) {
    if (!dropdowns || !dropdowns.length) return;

    for (let i = 0; i < dropdowns.length; i++) {
        const dropdownTrigger = dropdowns[i].querySelector(`button`);

        const handleToggleDropdown = () => {
            dropdowns[i].classList.toggle('is-active');
        };

        dropdownTrigger.addEventListener('click', handleToggleDropdown);

        document.addEventListener('click', (event) => {
            const isClickInside = dropdowns[i].contains(event.target);

            if (!isClickInside) {
                dropdowns[i].classList.remove('is-active');
            }
        });
    }
}
