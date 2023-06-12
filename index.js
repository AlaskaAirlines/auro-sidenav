import { AuroSidenav } from './src/auro-sidenav';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-sidenav') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroSidenav {});
  }
}

export { registerComponent }
