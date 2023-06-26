<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Attribute Examples

#### `target` and `href`

Since `auro-sidenavitem` is an extension of `auro-hyperlink` you can use the `target` and `href` attributes to style and enable the items as you would expect.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/hyperlink.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/hyperlink.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### `selected`

The `auro-sidenav` element supports using the `selected` attribute on `auro-sidenavitems` to designate an item as active.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/selected.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/selected.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Slot Examples

#### `heading`

The `heading` slot defines what to use as the header of the sidenav.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/heading.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/heading.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

#### Sections

The `auro-sidenav` registers and uses `auro-sidenavsection`s to create sectiona and layers in the navigation. The `auro-sidenavsection` is an extension of the `auro-accordion` so you will need to supply a `trigger` slot as its children as well as the `auro-sidenavitem`s. The `auro-sidenav` will automatically apply the `chevron` and `fluid` attributes to the `auro-sidenavsection`.

The `auro-sidenavitems` will automatically be styled as tiered children in the `auro-sidenav`.

Please [refer to the auro-accordion documentation](https://auro.alaskaair.com/components/auro/accordion/api) if you wish to use any of its additional atttributes or functionality.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/sections.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/sections.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
