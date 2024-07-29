import { AuroSidenav } from './src/auro-sidenav.js';
import { AuroSideNavItem } from './src/auro-sidenavitem.js'; 
import { AuroSideNavSection } from './src/auro-sidenavsection.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-sidenav') => {
  const itemName = name + 'item';
  const sectionName = name + 'section';

  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroSidenav {});
  }

  if (!customElements.get(itemName)) {
    customElements.define(itemName, class extends AuroSideNavItem {});
  }

  if (!customElements.get(sectionName)) {
    customElements.define(sectionName, class extends AuroSideNavSection {});
  }
}

export { registerComponent }
