import { AuroSideNav } from './src/auro-sidenav.js';
import { AuroSideNavItem } from './src/auro-sidenavitem.js'; 
import { AuroSideNavSection } from './src/auro-sidenavsection.js';

import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

RuntimeUtils.default.prototype.registerComponent('custom-sidenav', AuroSideNav);
RuntimeUtils.default.prototype.registerComponent('custom-sidenavitem', AuroSideNavItem);
RuntimeUtils.default.prototype.registerComponent('custom-sidenavsection', AuroSideNavSection);
