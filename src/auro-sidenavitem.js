// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';
import { AuroHyperlink } from '@aurodesignsystem/auro-hyperlink/src/auro-hyperlink.js';

import styleItemsCss from './styles/style-items-css.js';
import colorItemsCss from './styles/color-items-css.js';
import tokensCss from './styles/tokens-css.js';

/**
 * The auro-sidenavitem element can be used to create a link within the auro-sidenav.
 */

// build the component class
export class AuroSideNavItem extends AuroHyperlink {

  static get styles() {
    const styles = super.styles;
    return [
      ...styles,
      styleItemsCss,
      colorItemsCss,
      tokensCss
    ];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-sidenavitem"] - The name of element that you want to register to.
   *
   * @example
   * AuroSideNav.register("custom-sidenavitem") // this will register this element to <custom-sidenavitem/>
   *
   */
  static register(name = "auro-sidenavitem") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroSideNavItem);
  }
}
