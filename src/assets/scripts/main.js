import '../styles/+.pcss';

import { setupMenu } from './Components/Menu.js';
import { setupDropdown } from './Components/Dropdown.js';
import { setupPlans } from './Components/Plan.js';
import { setupTabs } from './Components/Tabs.js';
import { setupAccordion } from './Components/Accordion.js';

import MicroModal from 'micromodal';

(function () {
    setupMenu();
    setupDropdown();
    setupPlans();
    setupTabs();
    setupAccordion();

    MicroModal.init();
})();
