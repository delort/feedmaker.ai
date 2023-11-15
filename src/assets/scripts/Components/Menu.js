export function setupMenu(menus) {
    if (!menus || !menus.length) return;

    for (let i = 0; i < menus.length; i++) {
        const menuName = menus[i].dataset.menu;
        const menuTriggers = document.querySelectorAll(
            `[data-menu-trigger=${menuName}]`,
        );

        const handleToggleMenu = () => {
            menus[i].classList.toggle('is-active');
        };

        menuTriggers.forEach((trigger) =>
            trigger.addEventListener('click', handleToggleMenu),
        );
    }
}
