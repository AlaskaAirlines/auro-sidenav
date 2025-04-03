
import { AuroSideNavItem } from '../../src/auro-sidenavitem.js';

/**
   * This will register this element with the browser.
   * */
class AuroSideNavItemWCA extends AuroSideNavItem {}

if (!customElements.get("auro-sidenavitem")) {
  customElements.define("auro-sidenavitem", AuroSideNavItemWCA);
}
