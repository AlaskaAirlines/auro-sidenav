/* eslint-disable jsdoc/require-jsdoc, no-magic-numbers, no-param-reassign */

import { AuroSideNav } from '../src/auro-sidenav.js';
import { AuroSideNavItem } from '../src/auro-sidenavitem.js'; 
import { AuroSideNavSection } from '../src/auro-sidenavsection.js';

AuroSideNav.register();
AuroSideNavItem.register();
AuroSideNavSection.register();

AuroSideNav.register('custom-sidenav');
AuroSideNavItem.register('custom-sidenavitem');
AuroSideNavSection.register('custom-sidenavsection');
