// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { AuroHyperlink } from '@aurodesignsystem/auro-hyperlink/dist/auro-hyperlink.js';

import styleCss from './style-items-css.js';

// build the component class
export class AuroSideNavItem extends AuroHyperlink {

  static get styles() {
    const styles = super.styles;
    return [
      ...styles,
      styleCss
    ];
  }
}

// default internal definition
if (!customElements.get("auro-sidenavitem")) {
  customElements.define("auro-sidenavitem", AuroSideNavItem);
}
