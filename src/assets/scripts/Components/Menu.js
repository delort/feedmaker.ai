export function setupMenu() {
    const el = document.querySelectorAll('[data-menu]');

    if (!el || !el.length) return;

    for (let i = 0; i < el.length; i++) {
        const menuName = el[i].dataset.menu;
        const menuTriggers = document.querySelectorAll(
            `[data-menu-trigger=${menuName}]`,
        );

        const handleToggleMenu = () => {
            el[i].classList.toggle('is-active');
        };

        menuTriggers.forEach((trigger) =>
            trigger.addEventListener('click', handleToggleMenu),
        );
    }
}
