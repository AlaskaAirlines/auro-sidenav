<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Sidenav Item

The `<auro-sidenavitem>` element is an [extension](https://lit.dev/docs/components/defining/) of `<auro-hyperlink>` element. All of the [auro-hyperlink API](https://auro.alaskaair.com/components/auro/hyperlink/api) are therefore exposed through the `auro-sidenavitem`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/sidenavitem.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/sidenavitem.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Sidenav Section

The `<auro-sidenav>` element uses `<auro-sidenavsection>` elements to create sections and layers in the navigation. The `<auro-sidenavsection>` element is an extension of the `<auro-accordion>` element, you will need to supply a `trigger` slot for its children as well as the `<auro-sidenavitem>` elements. The `<auro-sidenav>` element will automatically apply the `chevron` and `fluid` attributes to the `<auro-sidenavsection>` elements.

The `<auro-sidenavitem>` elements will automatically be styled as tiered children in the `<auro-sidenav>` element.

Please [refer to the auro-accordion documentation](https://auro.alaskaair.com/components/auro/accordion/api) if you wish to use any of its additional attributes or functionality.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/sidenavsection.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/sidenavsection.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>


## Property & Attribute Examples

### Selected

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

### Static

The `<auro-sidenav>` element uses the attribute `static` to toggle on/off accordion functionality with the navigation header. This can be both static and dynamic. Look at the "Set Up" section on the component landing page for more information on dynamic usage.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/static.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/static.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Slot Examples

### Aria Label

The `ariaLabel` slot defines what to use as the aria-label of the sidenav.

**Note:** Do not use the `aria-label` attribute on the `auro-sidenav` element itself. This will be ignored in favor of the `ariaLabel` slot.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/aria-label.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/aria-label.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Heading

The `heading` slot defines what to use as the header of the sidenav.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/heading.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/heading.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## CSS Shadow Part Examples

<!-- Add all CSS Shadow Part examples here, remove section if none exist -->

## Common Usage Patterns & Functional Examples

### Responsive

The following example is a responsive sidenav that will trigger the `static` attribute on window resize.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/responsive.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
 
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
 
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/responsive.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
 
</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- Remove section if component does not have any component specific tokens -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
