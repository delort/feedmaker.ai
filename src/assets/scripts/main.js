import '../styles/+.pcss';

import { setupMenu } from './Components/Menu.js';
import { setupDropdown } from './Components/Dropdown.js';
import { setupPlans } from './Components/Plan.js';
import { setupTabs } from './Components/Tabs.js';

(function () {
    setupMenu();
    setupDropdown();
    setupPlans();
    setupTabs();
})();
