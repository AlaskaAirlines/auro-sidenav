// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { AuroHyperlink } from "@aurodesignsystem/auro-hyperlink/class";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import colorItemsCss from "./styles/color-items.scss";
import styleItemsCss from "./styles/style-items.scss";
import tokensCss from "./styles/tokens.scss";

/**
 * The auro-sidenavitem element can be used to create a link within the auro-sidenav.
 */

// build the component class
export class AuroSideNavItem extends AuroHyperlink {
  static get styles() {
    const styles = AuroHyperlink.styles;
    return [...styles, styleItemsCss, colorItemsCss, tokensCss];
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
