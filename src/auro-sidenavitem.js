// Copyright (c) 2026 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { AuroHyperlink } from "@aurodesignsystem/auro-hyperlink/class";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import colorItemsCss from "./styles/color-items.scss";
import styleItemsCss from "./styles/style-items.scss";
import tokensCss from "./styles/tokens.scss";

/**
 * The `auro-sidenavitem` element can be used to create a link within the `auro-sidenav`.
 * @customElement auro-sidenavitem
 * 
 * Force a list of inherited auro-hyperlink properties to be hidden from the generated documentation.
 * @forcePrivate {'appearance', 'download', 'fluid', 'layout', 'ondark', 'onDark', 'referrerpolicy', 'rel', 'role', 'safeUri', 'size', 'shape', 'type', 'variant'}
 */
export class AuroSideNavItem extends AuroHyperlink {
  static get styles() {
    const styles = AuroHyperlink.styles;
    return [...styles, styleItemsCss, colorItemsCss, tokensCss];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-sidenavitem"] - The name of the element that you want to register.
   *
   * @example
   * AuroSideNav.register("custom-sidenavitem") // this will register this element to <custom-sidenavitem/>
   *
   */
  static register(name = "auro-sidenavitem") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroSideNavItem);
  }
}
