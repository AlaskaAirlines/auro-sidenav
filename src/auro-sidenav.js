// Copyright (c) 2023 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { LitElement, html } from "lit";
// import AuroElement from '@aurodesignsystem/webcorestylesheets/dist/auroElement/auroElement';
import "@aurodesignsystem/auro-accordion";

// Register dependent components
import './auro-sidenavitem.js';
import './auro-sidenavsection.js';

// Import touch detection lib
import { ifDefined } from 'lit/directives/if-defined.js';
import styleCss from "./style-css.js";
import throttle from './utils/throttle.js';

const DESIGN_TOKEN_VARIABLE = '--ds-grid-breakpoint-sm';

/**
 * This FALLBACK value was retrieved from the auro design tokens as of Thursday, Feb. 9 2024.
 * NOTE: As this is a _fallback_ value, it is only ever used if the DESIGN_TOKEN_VARIABLE is unable to be retrieved.
 *
 * @type {number}
 */
const FALLBACK_MOBILE_BREAKPOINT = 576;

/**
 * The auro-sidenav element provides users a way to create navigational interfaces on the lefthand
 * side of a page to navigate to separate pages or different sections within the same page.
 * @slot heading - Defines what to use as the header of the sidenav.
 * @slot - Default slot of the sidenav. Please construct using auro-sidenavitems and auro-sidenavsections.
 * @attr {String} alignRight - Sets role attribute on the [auro-accordion](https://auro.alaskaair.com/components/auro/accordion/api#alignRight).
 * @attr {String} chevron - Sets role attribute on the [auro-accordion](https://auro.alaskaair.com/components/auro/accordion/api#chevron).
 * @attr {String} emphasis - Sets role attribute on the [auro-accordion](https://auro.alaskaair.com/components/auro/accordion/api#emphasis).
 * @attr {String}  expanded - Sets role attribute on the [auro-accordion](https://auro.alaskaair.com/components/auro/accordion/api#expanded).
 * @attr {String} grouped - Sets role attribute on the [auro-accordion](https://auro.alaskaair.com/components/auro/accordion/api#grouped).
 * @attr {String} variant - Sets role attribute on the [auro-accordion](https://auro.alaskaair.com/components/auro/accordion/api#variant).
 */

// build the component class
export class AuroSidenav extends LitElement {
  constructor() {
    super();

    this.breakpoint = this.getSmallBreakpoint();
    this.windowWidth = window.innerWidth;

    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  static get properties() {
    return {
      windowWidth: {
        type: Number,
        state: true
      },
      // eslint-disable-next-line no-warning-comments
      // TODO: Do we need to pass all of these attributes to the accordion?
      alignRight: {
        type: String,
        reflect: true,
      },
      chevron: {
        type: String,
        reflect: true,
      },
      emphasis: {
        type: String,
        reflect: true,
      },
      expanded: {
        type: String,
        reflect: true,
      },
      grouped: {
        type: String,
        reflect: true,
      },
      variant: {
        type: String,
        reflect: true,
      },
    };
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

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.handleWindowResize);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.handleWindowResize);
  }

  /**
   * @private
   */
  handleWindowResize() {
    const throttleDelay = 500;
    // eslint-disable-next-line no-warning-comments
    // TODO: Do we want to keep a throttle fn? Do we have a util or lib that we already use for this sort of thing?
    const throttled = throttle(
      () => {
        this.windowWidth = window.innerWidth;
      },
      throttleDelay
    );

    throttled();
  }

  getSmallBreakpoint() {
    const smallBreakpointVar = getComputedStyle(document.documentElement).getPropertyValue(DESIGN_TOKEN_VARIABLE);

    return smallBreakpointVar.includes("px")
      ? Number(smallBreakpointVar.replace('px', ''))
      // See top of file for explanation of this fallback value.
      : FALLBACK_MOBILE_BREAKPOINT;
  }

  isSmallBreakpoint() {
    return this.windowWidth <= this.getSmallBreakpoint();
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const sidenavContent = html`
      <span slot="${ifDefined(this.isSmallBreakpoint(this.breakpoint) ? 'trigger' : undefined)}">
        <slot name="heading"></slot>
      </span>
      <slot @slotchange="{this.handleSlotChange}"></slot>
    `;

    return html`${this.isSmallBreakpoint(this.breakpoint)
      ? html`
        <auro-accordion
          alignRight="${ifDefined(this.alignRight ? this.alignRight : undefined)}"
          chevron="${ifDefined(this.chevron ? this.chevron : undefined)}"
          emphasis="${ifDefined(this.emphasis ? this.emphasis : undefined)}"
          expanded="${ifDefined(this.expanded ? this.expanded : undefined)}"
          grouped="${ifDefined(this.grouped ? this.grouped : undefined)}"
          variant="${ifDefined(this.variant ? this.variant : undefined)}"
        >
          ${sidenavContent}
          </auro-accoridon>`
      : sidenavContent
    }`;
  }
}

// default internal definition
if (!customElements.get("auro-sidenav")) {
  customElements.define("auro-sidenav", AuroSidenav);
}
