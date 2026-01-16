```js
// Import the class only
import { AuroSideNav, AuroSideNavItem } from '@aurodesignsystem/auro-sidenav/class';

// Register with a custom name if desired
AuroSideNav.register('custom-sidenav');
AuroSideNavItem.register('custom-sidenavitem');
```

This will create a new custom element `<custom-sidenav>` and `<custom-sidenavitem>` that behaves exactly like `<auro-sidenav>` and `<auro-sidenavitem>`, allowing both to coexist on the same page without interfering with each other.
