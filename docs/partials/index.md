<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Sidenav

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## auro-sidenav use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Additional Information

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/readmeAddlInfo.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Setup

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/setup.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Examples

#### Default

The following example illustrates a common use case for the `sidenav` element that includes a navigation header, an accordion sub-nav action, as well as a link that will open to an external URL.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/full.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/full.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Responsive

The following example is a responsive sidenav using the code outlined above to trigger the `static` attribute on window resize.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/responsive.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/responsive.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### auro-sidenavitem

The `<auro-sidenavitem>` element is an [extension](https://lit.dev/docs/components/defining/) of `<auro-hyperlink>` element. All of the [auro-hyperlink API](https://auro.alaskaair.com/components/auro/hyperlink/api) are therefore exposed through the `auro-sidenavitem`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/hyperlink.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/hyperlink.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Selected

The `<auro-sidenav>` element supports using the `selected` attribute on `<auro-sidenavitem>` element to designate an item as active.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/selected.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/selected.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Sections

The `<auro-sidenav>` element uses `<auro-sidenavsection>` elements to create sections and layers in the navigation. The `<auro-sidenavsection>` element is an extension of the `<auro-accordion>` element, you will need to supply a `trigger` slot for its children as well as the `<auro-sidenavitem>` elements. The `<auro-sidenav>` element will automatically apply the `chevron` and `fluid` attributes to the `<auro-sidenavsection>` elements.

The `<auro-sidenavitem>` elements will automatically be styled as tiered children in the `<auro-sidenav>` element.

Please [refer to the auro-accordion documentation](https://auro.alaskaair.com/components/auro/accordion/api) if you wish to use any of its additional atttributes or functionality.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/sections.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/sections.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>


#### Mobile experience header

The `<auro-sidenav>` element uses the attribute `static` to toggle on/off accordion functionality with the navigation header. This can be both static and dynamic. Refer to the [default](#default) example for how to change this value dynamically based on a specific media query design token.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/isToggle.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/isToggle.html) -->
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/custom.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
