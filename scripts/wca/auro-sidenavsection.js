
import { AuroSideNavSection } from '../../src/auro-sidenavsection.js';

/**
   * This will register this element with the browser.
   * */
class AuroSideNavSectionWCA extends AuroSideNavSection {}

if (!customElements.get("auro-sidenavsection")) {
  customElements.define("auro-sidenavsection", AuroSideNavSectionWCA);
}
