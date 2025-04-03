
import { AuroSideNav } from '../../src/auro-sidenav.js';

/**
 * The auro-sidenav element provides users a way to create navigational interfaces on the lefthand
 * side of a page to navigate to seperate pages or different sections within the same page.
 * */
class AuroSideNavWCA extends AuroSideNav {}

if (!customElements.get("auro-sidenav")) {
  customElements.define("auro-sidenav", AuroSideNavWCA);
}
