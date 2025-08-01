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
