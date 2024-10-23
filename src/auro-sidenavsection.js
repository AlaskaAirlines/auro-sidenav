// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { AuroAccordion } from '@aurodesignsystem/auro-accordion/src/auro-accordion.js';

import styleSectionsCss from './style-sections-css.js';
import colorSectionsCss from './color-sections-css.js';
import tokensCss from './tokens-css.js';

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

}

// default internal definition
if (!customElements.get("auro-sidenavsection")) {
  customElements.define("auro-sidenavsection", AuroSideNavSection);
}
