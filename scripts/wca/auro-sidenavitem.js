
import { AuroSideNavItem } from '../../src/auro-sidenavitem.js';

/**
   * The auro-sidenavitem element is the default child element of auro-sidenav.
   */
class AuroSideNavItemWCA extends AuroSideNavItem {}

if (!customElements.get("auro-sidenavitem")) {
  customElements.define("auro-sidenavitem", AuroSideNavItemWCA);
}
