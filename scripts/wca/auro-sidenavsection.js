
import { AuroSideNavSection } from '../../src/auro-sidenavsection.js';

/**
   * The auro-sidenavsection element can be used to create an accordion of auro-sidenavitems within the auro-sidenav.
   */
class AuroSideNavSectionWCA extends AuroSideNavSection {}

if (!customElements.get("auro-sidenavsection")) {
  customElements.define("auro-sidenavsection", AuroSideNavSectionWCA);
}
