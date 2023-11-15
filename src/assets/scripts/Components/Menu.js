export function setupMenu(menus) {
    if (!menus || !menus.length) return;

    for (let i = 0; i < menus.length; i++) {
        const menuName = menus[i].dataset.menu;
        const menuTriggers = document.querySelectorAll(
            `[data-menu-trigger=${menuName}]`,
        );

        const handleToggleMenu = () => {
            menus[i].style.display =
                menus[i].style.display === 'block' ? 'none' : 'block';
        };

        menuTriggers.forEach((trigger) =>
            trigger.addEventListener('click', handleToggleMenu),
        );
    }
}
