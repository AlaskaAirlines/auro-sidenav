<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE — THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Sidenav

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
`<auro-sidenav>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) that provides users a way to create navigational interfaces on the left-hand side of a page to navigate to separate pages or different sections within the same page.
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
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

## Example(s)

### Basic

The following example illustrates a common use case for the sidenav element that includes a navigation header, an accordion sub-nav action, as well as a link that will open to an external URL.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ../apiExamples/basic.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/basic.html -->

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
