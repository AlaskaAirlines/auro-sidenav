<!--
The demo.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Sidenav

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## auro-sidenav use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Additional Information

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./readmeAddlInfo.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Examples

#### Default

The following example illustrates a common use case for the `sidenav` element that includes a navigation header, an accordion sub-nav action, as well as a link that will open to an external URL.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/full.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/full.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### auro-sidenavitem

The `<auro-sidenavitem>` element is an [extension](https://lit.dev/docs/components/defining/) of `<auro-hyperlink>` element. All of the [auro-hyperlink API](https://auro.alaskaair.com/components/auro/hyperlink/api) are therefore exposed through the `auro-sidenavitem`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/hyperlink.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/hyperlink.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### selected

The `<auro-sidenav>` element supports using the `selected` attribute on `<auro-sidenavitem>` element to designate an item as active.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/selected.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/selected.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Sections

The `<auro-sidenav>` element uses `<auro-sidenavsection>` elements to create sections and layers in the navigation. The `<auro-sidenavsection>` element is an extension of the `<auro-accordion>` element, you will need to supply a `trigger` slot for its children as well as the `<auro-sidenavitem>` elements. The `<auro-sidenav>` element will automatically apply the `chevron` and `fluid` attributes to the `<auro-sidenavsection>` elements.

The `<auro-sidenavitem>` elements will automatically be styled as tiered children in the `<auro-sidenav>` element.

Please [refer to the auro-accordion documentation](https://auro.alaskaair.com/components/auro/accordion/api) if you wish to use any of its additional atttributes or functionality.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/sections.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/sections.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
