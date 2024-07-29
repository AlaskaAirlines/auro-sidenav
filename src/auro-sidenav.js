// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable lit/binding-positions, lit/no-invalid-html */

// If using litElement base class
import { LitElement } from "lit";
import { html } from 'lit/static-html.js';

import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';

import { AuroAccordion } from '@aurodesignsystem/auro-accordion/src/auro-accordion.js';
import accordionVersion from "./accordionVersion.js";

// Register dependent components
import './auro-sidenavsection.js';
import './auro-sidenavitem.js';

import styleCss from "./style-css.js";
import colorCss from "./color-css.js";
import tokensCss from "./tokens-css.js";

/**
 * The auro-sidenav element provides users a way to create navigational interfaces on the lefthand
 * side of a page to navigate to seperate pages or different sections within the same page.
 * @slot heading - Defines what to use as the header of the sidenav.
 * @slot - Default slot of the sidenav. Please construct using auro-sidenavitems and auro-sidenavsections.
 */

// build the component class
export class AuroSidenav extends LitElement {
  constructor() {
    super();

    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.accordionTag = versioning.generateTag('auro-accordion', accordionVersion, AuroAccordion);
  }

  static get properties() {
    return {
      static: {
        type: Boolean,
        reflect: true
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "navigation");
    this.setAttribute("aria-label", "Main");
  }

  static get styles() {
    return [
      styleCss,
      colorCss,
      tokensCss
    ];
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
          if (!element.hasAttribute('href')) {
            element.setAttribute('role', 'button');
          }
        } else if (element.tagName.includes('SECTION')) {
          element.setAttribute("chevron", true);
          element.setAttribute("fluid", true);
          handleSlotChangeHelper(element, depth + 1);
        }
      }
    }

    handleSlotChangeHelper(this, 0);
    this.initItems();
  }


  /**
   * Used to update selected menu when navigating in-page content.
   * @param {Event} event - Mousedown event.
   * @private
   */
  handleMouseDown(event) {
    const item = event.target;

    if (item.tagName.toLowerCase() !== 'auro-sidenavitem') {
      return;
    }

    if (item.hasAttribute('href')) {
      return;
    }

    this.selectItem(item);
  }


  /**
   * Manage Enter keyboard events.
   * @private
   * @param {Object} event - Event object from the browser.
   */
  handleKeyDown(event) {
    const item = event.target;

    // With Enter event, update selected item
    switch (event.key) {
      case "Enter":
        if (item.tagName.toLowerCase() !== 'auro-sidenavitem') {
          return;
        }
        if (item.hasAttribute('href')) {
          return;
        }
        this.selectItem(item);
        break;
      default:
        break;
    }
  }

  /**
   * Initializes list of sidenavitems in the DOM. This must re-run whenever slotted items change.
   * @private
   */
  initItems() {
    this.items = Array.from(this.querySelectorAll('auro-sidenavitem'));
  }

  /**
   * Updates items so that only specified item is selected.
   * @private
   * @param {Object} selectedItem - Item to be selected.
   */
  selectItem(selectedItem) {
    for (const item of this.items) {
      item.removeAttribute('selected');
    }
    selectedItem.setAttribute('selected', "");
  }

  firstUpdated() {
    this.handleSlotChange();
    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('mousedown', this.handleMouseDown);
  }

  /**
   * See [Lit Element updated](https://lit.dev/docs/v1/components/lifecycle/#updated)
   * Asynchronously handles updates to the component.
   * This method is automatically called when properties have been updated.
   * @param {Map<string | number | symbol, unknown>} changedProperties - A Map of properties that have changed, where
   * the key is the property name and the value is its previous value.
   * @returns {Promise<void>} A Promise that resolves when the update is complete.
   * @override
   */
  async updated(changedProperties) {
    super.updated(changedProperties);
    await this.updateComplete;

    if (!this.static) {
      const sidenavMobileAccordion = this.shadowRoot.getElementById("accordion");
      if (sidenavMobileAccordion) {
        // #accordionContent is the farthest down we can drill in the DOM to still catch all nested accordion events
        const sidenavMobileAccordionContent = sidenavMobileAccordion.shadowRoot.querySelector('div.componentWrapper > #accordionContent');

        // Catch all nested accordion expansion events
        sidenavMobileAccordionContent.addEventListener("toggleExpanded", (event) => {
          const nestedAccordionElement = event.target;
          const nestedAccordionContent = nestedAccordionElement.shadowRoot.querySelector('div.componentWrapper > #accordionContent');

          // Set height to auto to allow expansion/contraction
          sidenavMobileAccordionContent.style.height = "auto";

          const onTransitionEnd = () => {
            // Transition is over, now update sidenav "root" accordion with correct height
            sidenavMobileAccordion.handleContentSlotChanges();
            // Make listener clean itself up
            nestedAccordionContent.removeEventListener("transitionend", onTransitionEnd);
          };

          nestedAccordionContent.addEventListener("transitionend", onTransitionEnd);
        });
      }
    }
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const sidebarContent = html`
      <span><slot name="heading"></slot></span>
      <slot @slotchange="{this.handleSlotChange}"></slot>
    `;
    const sidebarContentCollapsable = html`
      <${this.accordionTag} id="accordion" part="accordion-root" chevron="none">
        <span slot="trigger"><slot name="heading"></slot></span>
        <!-- Listen for inner accordions -->
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </${this.accordionTag}>
    `;

    return html`${this.static ? sidebarContent : sidebarContentCollapsable}`;
  }
}

// default internal definition
if (!customElements.get("auro-sidenav")) {
  customElements.define("auro-sidenav", AuroSidenav);
}
