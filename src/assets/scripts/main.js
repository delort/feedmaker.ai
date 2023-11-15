import '../styles/+.pcss';

import { setupMenu } from './Components/Menu.js';
import { setupDropdown } from './Components/Dropdown.js';

(function () {
    setupMenu(document.querySelectorAll('[data-menu]'));
    setupDropdown(document.querySelectorAll('[data-dropdown]'));
})();
