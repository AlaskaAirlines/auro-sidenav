<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Sidenav

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/description.md) -->
<!-- The below content is automatically added from ../docs/partials/description.md -->
`<auro-sidenav>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) that provides users a way to create navigational interfaces on the left-hand side of a page to navigate to separate pages or different sections within the same page.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-sidenav use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ../docs/partials/useCases.md -->
The `<auro-sidenav>` element should be used in situations where users may:

* create in-page navigation for long content-heavy pages
* provide navigation to related pages on a page
<!-- AURO-GENERATED-CONTENT:END -->

## Additional Information

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/readmeAddlInfo.md) -->
<!-- The below content is automatically added from ../docs/partials/readmeAddlInfo.md -->
When consuming the `auro-sidenav` you will be registering the `auro-sidenavitem` and `auro-sidenavsection` component as well as the `auro-sidenav` components to the DOM. These components will be necessary to create the navigation.

The `auro-sidenavsection` is an extension of the `auro-accordion` can be used to create sections.

The `auro-sidenavitem` is an extension of the `auro-hyperlink` and used to create the navigational links in the `auro-sidenav`. You can use the expected `href` and `target` attributes to properly enable and style the links.

Please refer to the below example to see how to use these components.
<!-- AURO-GENERATED-CONTENT:END -->

## Setup

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/setup.md) -->
<!-- The below content is automatically added from ../docs/partials/setup.md -->
The `auro-sidenav` component is configured to remain in "mobile" (read: accordion dropdown) form until passed the
`static` attribute. See the code example below for a vanilla JavaScript solution to add and remove this attribute
automatically when resizing the browser window. To see this code in action, resize the window for the **Responsive**
example farther down the page.

_This code example is a wrapper around the native `window.matchMedia`. Though Sidenav functions in SSR, this specific 
function has a dependency on the browser environment._

```javascript
// This design token variable can be whatever/from wherever you want
const DESIGN_TOKEN_VARIABLE = '--ds-grid-breakpoint-md';
const breakpointPx = getComputedStyle(document.documentElement).getPropertyValue(DESIGN_TOKEN_VARIABLE)
const mediaQueryString = `(min-width: ${breakpointPx})`
const windowMediaMatcher = window.matchMedia(mediaQueryString);

const toggleSidenavCollapse = (e) => {
  // ! CHANGE THIS ID TO TARGET YOUR DESIRED ELEMENT!
  const auroSidenavExample = document.getElementById("collapsible-example")

  // onload does not include a match, manually specify it
  if (e.matches === undefined) {
    e.matches = window.innerWidth >= Number(breakpointPx.replace("px", ""))
  }

  if (e.matches) {
    auroSidenavExample?.setAttribute('static', '')
  } else {
    auroSidenavExample?.removeAttribute('static')
  }
};

windowMediaMatcher.onchange = toggleSidenavCollapse;
window.onload = toggleSidenavCollapse;
```

**NOTE:** When using the above code outside of React or other frameworks, please place your script tag somewhere below
the sidenav in your HTML.

```html
<body>
  <auro-sidenav id="my-sidenav">...</auro-sidenav>
  <!-- somewhere below your sidenav... -->
  <script>
    // script from above code block
  </script>
</body>
```

You may also leverage things like `useMediaQuery` from React MUI, or similar media query functions.

```javascript
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ResponsiveSidenav() {
  const DESIGN_TOKEN_VARIABLE = '--ds-grid-breakpoint-md';
  const breakpointPx = getComputedStyle(document.documentElement).getPropertyValue(DESIGN_TOKEN_VARIABLE)
  const isMediumScreen = useMediaQuery(`(min-width: ${breakpointPx})`);

  return <auro-sidenav static={isMediumScreen}>{`(min-width: ${breakpointPx}) matches: ${matches}`}</auro-sidenav>;
}
```
<!-- AURO-GENERATED-CONTENT:END -->

## Examples

#### Default

The following example illustrates a common use case for the `sidenav` element that includes a navigation header, an accordion sub-nav action, as well as a link that will open to an external URL.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/full.html) -->
  <!-- The below content is automatically added from ../apiExamples/full.html -->
  <auro-sidenav static>
    <span slot="heading">Pet travel policies</span>
    <auro-sidenavitem href="/content/travel-info/pets">Pet travel overview</auro-sidenavitem>
    <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/pets-in-cabin">Pets in cabin</auro-sidenavitem>
    <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/pets-in-baggage-compartment">Pets in baggage compartment</auro-sidenavitem>
    <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-hawaii">Traveling to Hawaii</auro-sidenavitem>
    <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-international" target="_blank">International travel with pets</auro-sidenavitem>
    <auro-sidenavsection>
      <span slot="trigger">FAQ</span>
      <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/banfield-qa#safe-to-fly">Is it safe to fly with my pet?</auro-sidenavitem>
      <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/banfield-qa#certain-breeds-prohibited">Why are certain breeds prohibited from flying in the cargo compartment?</auro-sidenavitem>
      <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/banfield-qa#dog-info" target="_blank">Dogs</auro-sidenavitem>
      <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/banfield-qa#cat-info" target="_blank">Cats</auro-sidenavitem>
    </auro-sidenavsection>
  </auro-sidenav>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/full.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/full.html -->

```html
<auro-sidenav static>
  <span slot="heading">Pet travel policies</span>
  <auro-sidenavitem href="/content/travel-info/pets">Pet travel overview</auro-sidenavitem>
  <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/pets-in-cabin">Pets in cabin</auro-sidenavitem>
  <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/pets-in-baggage-compartment">Pets in baggage compartment</auro-sidenavitem>
  <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-hawaii">Traveling to Hawaii</auro-sidenavitem>
  <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-international" target="_blank">International travel with pets</auro-sidenavitem>
  <auro-sidenavsection>
    <span slot="trigger">FAQ</span>
    <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/banfield-qa#safe-to-fly">Is it safe to fly with my pet?</auro-sidenavitem>
    <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/banfield-qa#certain-breeds-prohibited">Why are certain breeds prohibited from flying in the cargo compartment?</auro-sidenavitem>
    <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/banfield-qa#dog-info" target="_blank">Dogs</auro-sidenavitem>
    <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/banfield-qa#cat-info" target="_blank">Cats</auro-sidenavitem>
  </auro-sidenavsection>
</auro-sidenav>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Responsive

The following example is a responsive sidenav using the code outlined above to trigger the `static` attribute on window resize.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/responsive.html) -->
  <!-- The below content is automatically added from ../apiExamples/responsive.html -->
  <auro-sidenav id="collapsible-example">
    <span slot="heading">Responsive Sidenav</span>
    <auro-sidenavitem href="/content/about-us/history">Historical overview</auro-sidenavitem>
    <auro-sidenavitem href="/content/about-us/history/history-by-decade">History by decade</auro-sidenavitem>
    <auro-sidenavitem href="/content/about-us/history/pioneers">Alaska Airlines pioneers</auro-sidenavitem>
  </auro-sidenav>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/responsive.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/responsive.html -->

```html
<auro-sidenav id="collapsible-example">
  <span slot="heading">Responsive Sidenav</span>
  <auro-sidenavitem href="/content/about-us/history">Historical overview</auro-sidenavitem>
  <auro-sidenavitem href="/content/about-us/history/history-by-decade">History by decade</auro-sidenavitem>
  <auro-sidenavitem href="/content/about-us/history/pioneers">Alaska Airlines pioneers</auro-sidenavitem>
</auro-sidenav>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### auro-sidenavitem

The `<auro-sidenavitem>` element is an [extension](https://lit.dev/docs/components/defining/) of `<auro-hyperlink>` element. All of the [auro-hyperlink API](https://auro.alaskaair.com/components/auro/hyperlink/api) are therefore exposed through the `auro-sidenavitem`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/hyperlink.html) -->
  <!-- The below content is automatically added from ../apiExamples/hyperlink.html -->
  <auro-sidenav static>
    <span slot="heading">Airlines</span>
    <auro-sidenavitem href="/" target="_blank">Alaska Airlines</auro-sidenavitem>
    <auro-sidenavitem href="https://www.aa.com/" target="_blank">American Airlines</auro-sidenavitem>
    <auro-sidenavitem href="https://www.britishairways.com/" target="_blank">British Airways</auro-sidenavitem>
    <auro-sidenavitem href="https://www.jal.co.jp/" target="_blank">Japan Airlines</auro-sidenavitem>
  </auro-sidenav>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/hyperlink.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/hyperlink.html -->

```html
<auro-sidenav static>
  <span slot="heading">Airlines</span>
  <auro-sidenavitem href="/" target="_blank">Alaska Airlines</auro-sidenavitem>
  <auro-sidenavitem href="https://www.aa.com/" target="_blank">American Airlines</auro-sidenavitem>
  <auro-sidenavitem href="https://www.britishairways.com/" target="_blank">British Airways</auro-sidenavitem>
  <auro-sidenavitem href="https://www.jal.co.jp/" target="_blank">Japan Airlines</auro-sidenavitem>
</auro-sidenav>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Selected

The `<auro-sidenav>` element supports using the `selected` attribute on `<auro-sidenavitem>` element to designate an item as active.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/selected.html) -->
  <!-- The below content is automatically added from ../apiExamples/selected.html -->
  <auro-sidenav static>
    <span slot="heading">Favorite In-Flight Meal</span>
    <auro-sidenavitem>Signature Fruit & Cheese Platter</auro-sidenavitem>
    <auro-sidenavitem selected>The Jetsetter's Jam Sandwich</auro-sidenavitem>
    <auro-sidenavitem>Northwest Deli Picnic Pack</auro-sidenavitem>
    <auro-sidenavitem>Mediterranean Tapas Picnic Pack</auro-sidenavitem>
    <auro-sidenavitem>Kid's Choice Picnic Pack</auro-sidenavitem>
  </auro-sidenav>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/selected.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/selected.html -->

```html
<auro-sidenav static>
  <span slot="heading">Favorite In-Flight Meal</span>
  <auro-sidenavitem>Signature Fruit & Cheese Platter</auro-sidenavitem>
  <auro-sidenavitem selected>The Jetsetter's Jam Sandwich</auro-sidenavitem>
  <auro-sidenavitem>Northwest Deli Picnic Pack</auro-sidenavitem>
  <auro-sidenavitem>Mediterranean Tapas Picnic Pack</auro-sidenavitem>
  <auro-sidenavitem>Kid's Choice Picnic Pack</auro-sidenavitem>
</auro-sidenav>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Sections

The `<auro-sidenav>` element uses `<auro-sidenavsection>` elements to create sections and layers in the navigation. The `<auro-sidenavsection>` element is an extension of the `<auro-accordion>` element, you will need to supply a `trigger` slot for its children as well as the `<auro-sidenavitem>` elements. The `<auro-sidenav>` element will automatically apply the `chevron` and `fluid` attributes to the `<auro-sidenavsection>` elements.

The `<auro-sidenavitem>` elements will automatically be styled as tiered children in the `<auro-sidenav>` element.

Please [refer to the auro-accordion documentation](https://auro.alaskaair.com/components/auro/accordion/api) if you wish to use any of its additional attributes or functionality.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/sections.html) -->
  <!-- The below content is automatically added from ../apiExamples/sections.html -->
  <auro-sidenav static>
    <span slot="heading">Helpful links</span>
    <auro-sidenavsection>
      <span slot="trigger">Reservations</span>
      <auro-sidenavitem href="/content/travel-info/accessible-services/airport-accessibility">Is it safe to fly with my pet?</auro-sidenavitem>
      <auro-sidenavitem href="/booking/reservation-lookup">Why are certain breeds prohibited from flying in the cargo compartment?</auro-sidenavitem>
    </auro-sidenavsection>
    <auro-sidenavsection>
      <span slot="trigger">Hotels, cars, and rides</span>
      <auro-sidenavitem target="_blank" href="https://www.alaskaair.com/hotels/user/reservations">Hotel reservations</auro-sidenavitem>
      <auro-sidenavitem target="_blank" href="https://www.alaskaair.com/car-rental/manage">Car reservations</auro-sidenavitem>
    </auro-sidenavsection>
    <auro-sidenavsection>
      <span slot="trigger">Animals</span>
      <auro-sidenavitem href="/content/travel-info/pets">Booking pet travel</auro-sidenavitem>
      <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/banfield-qa">Pet travel FAQ</auro-sidenavitem>
    </auro-sidenavsection>
  </auro-sidenav>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/sections.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/sections.html -->

```html
<auro-sidenav static>
  <span slot="heading">Helpful links</span>
  <auro-sidenavsection>
    <span slot="trigger">Reservations</span>
    <auro-sidenavitem href="/content/travel-info/accessible-services/airport-accessibility">Is it safe to fly with my pet?</auro-sidenavitem>
    <auro-sidenavitem href="/booking/reservation-lookup">Why are certain breeds prohibited from flying in the cargo compartment?</auro-sidenavitem>
  </auro-sidenavsection>
  <auro-sidenavsection>
    <span slot="trigger">Hotels, cars, and rides</span>
    <auro-sidenavitem target="_blank" href="https://www.alaskaair.com/hotels/user/reservations">Hotel reservations</auro-sidenavitem>
    <auro-sidenavitem target="_blank" href="https://www.alaskaair.com/car-rental/manage">Car reservations</auro-sidenavitem>
  </auro-sidenavsection>
  <auro-sidenavsection>
    <span slot="trigger">Animals</span>
    <auro-sidenavitem href="/content/travel-info/pets">Booking pet travel</auro-sidenavitem>
    <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/banfield-qa">Pet travel FAQ</auro-sidenavitem>
  </auro-sidenavsection>
</auro-sidenav>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Mobile experience header

The `<auro-sidenav>` element uses the attribute `static` to toggle on/off accordion functionality with the navigation header. This can be both static and dynamic. Refer to the [default](#default) example for how to change this value dynamically based on a specific media query design token.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/isToggle.html) -->
  <!-- The below content is automatically added from ../apiExamples/isToggle.html -->
  <auro-sidenav>
      <span slot="heading">Collapsible side navigation (click to toggle)</span>
      <auro-sidenavitem href="/content/travel-info/pets">Pet travel overview</auro-sidenavitem>
      <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/pets-in-cabin">Pets in cabin</auro-sidenavitem>
      <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/pets-in-baggage-compartment">Pets in baggage compartment</auro-sidenavitem>
      <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-hawaii">Traveling to Hawaii</auro-sidenavitem>
      <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-international" target="_blank">International travel with pets</auro-sidenavitem>
  </auro-sidenav>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/isToggle.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/isToggle.html -->

```html
<auro-sidenav>
    <span slot="heading">Collapsible side navigation (click to toggle)</span>
    <auro-sidenavitem href="/content/travel-info/pets">Pet travel overview</auro-sidenavitem>
    <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/pets-in-cabin">Pets in cabin</auro-sidenavitem>
    <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-with-pets/pets-in-baggage-compartment">Pets in baggage compartment</auro-sidenavitem>
    <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-hawaii">Traveling to Hawaii</auro-sidenavitem>
    <auro-sidenavitem href="/content/travel-info/policies/pets-traveling-international" target="_blank">International travel with pets</auro-sidenavitem>
</auro-sidenav>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `<auro-sidenav>` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `register(name)` method in our `AuroSideNav` related components and pass in a unique name.

```js
import { AuroSideNav } from './src/auro-sidenav.js';
import { AuroSideNavItem } from './src/auro-sidenavitem.js'; 
import { AuroSideNavSection } from './src/auro-sidenavsection.js';

AuroSideNav.register('custom-sidenav');
AuroSideNavItem.register('custom-sidenavitem');
AuroSideNavSection.register('custom-sidenavsection');
```

This will create a new custom element that you can use in your HTML that will function identically to the `<auro-sidenav>` element.

Using the `registerComponent` function to create a custom `<auro-sidenav>` will also create a custom `<auro-sidenavitem>` and `<auro-sidenavsection>` with the exact same naming convention. For example, using `registerComponent('custom-sidenav')` will result in `<custom-sidenavitem>` and `<custom-sidenavsection>` also being created.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ../apiExamples/custom.html -->
  <custom-sidenav static>
    <span slot="heading">Alaska Airlines History</span>
    <custom-sidenavitem href="/content/about-us/history">Historical overview</custom-sidenavitem>
    <custom-sidenavitem href="/content/about-us/history/history-by-decade">History by decade</custom-sidenavitem>
    <custom-sidenavitem href="/content/about-us/history/pioneers">Alaska Airlines pioneers</custom-sidenavitem>
  </custom-sidenav>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/custom.html -->

```html
<custom-sidenav static>
  <span slot="heading">Alaska Airlines History</span>
  <custom-sidenavitem href="/content/about-us/history">Historical overview</custom-sidenavitem>
  <custom-sidenavitem href="/content/about-us/history/history-by-decade">History by decade</custom-sidenavitem>
  <custom-sidenavitem href="/content/about-us/history/pioneers">Alaska Airlines pioneers</custom-sidenavitem>
</custom-sidenav>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
