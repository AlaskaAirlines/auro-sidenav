// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';
import { AuroAccordion } from '@aurodesignsystem/auro-accordion/src/auro-accordion.js';

import styleSectionsCss from './styles/style-sections-css.js';
import colorSectionsCss from './styles/color-sections-css.js';
import tokensCss from './styles/tokens-css.js';

/**
 * The auro-sidenavsection element can be used to create an accordion of auro-sidenavitems within the auro-sidenav.
 */

// build the component class
export class AuroSideNavSection extends AuroAccordion {

  static get styles() {
    const styles = super.styles;
    return [
      ...styles,
      styleSectionsCss,
      colorSectionsCss,
      tokensCss
    ];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-sidenavsection"] - The name of element that you want to register to.
   *
   * @example
   * AuroSideNavSection.register("custom-sidenavsection") // this will register this element to <custom-sidenavsection/>
   *
   */
  static register(name = "auro-sidenavsection") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroSideNavSection);
  }
}
