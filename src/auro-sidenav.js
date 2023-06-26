// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { LitElement, html } from "lit";
// import AuroElement from '@aurodesignsystem/webcorestylesheets/dist/auroElement/auroElement';

// Register dependent components
import './auro-sidenavsection';
import './auro-sidenavitem';

// Import touch detection lib
import styleCss from "./style-css.js";

/**
 * The auro-sidenav element provides users a way to create navigational interfaces on the lefthand
 * side of a page to navigate to seperate pages or different sections within the same page.
 * @slot heading - Defines what to use as the header of the sidenav
 * @slot - Default slot of the sidenav. Please construct using auro-sidenavitems and auro-sidenavsections.
 */

// build the component class
export class AuroSidenav extends LitElement {

  static get properties() {
    return {};
  }

  static get styles() {
    return [styleCss];
  }

  /**
   * Used to update sidenavitem tiers on construction and @slotchange event.
   * @private
   */
  handleSlotChange() {

    /**
     * Recursive helper function used to recurse through children and attach tiers to sidenavitems.
     * @param {*} node Describes node to apply slot changes to.
     * @param {*} depth Describes depth that specified `node` exists in relative DOM tree.
     * @private
     */
    function handleSlotChangeHelper(node, depth) {
      for (const element of node.children) {
        if (element.tagName.includes('ITEM')) {
          element.setAttribute('tier', depth);
        } else if (element.tagName.includes('SECTION')) {
          element.setAttribute("chevron", true);
          element.setAttribute("fluid", true);
          handleSlotChangeHelper(element, depth + 1);
        }
      }
    }

    handleSlotChangeHelper(this, 0);
  }

  firstUpdated() {
    this.handleSlotChange();
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <span><slot name="heading"></slot></span>
      <slot @slotchange="{this.handleSlotChange}"></slot>
    `;
  }
}

// default internal definition
if (!customElements.get("auro-sidenav")) {
  customElements.define("auro-sidenav", AuroSidenav);
}
