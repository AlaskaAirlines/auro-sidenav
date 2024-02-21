<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Sidenav

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
`<auro-sidenav>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) that provides users a way to create navigational interfaces on the lefthand
side of a page to navigate to seperate pages or different sections within the same page.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-sidenav use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The `<auro-sidenav>` element should be used in situations where users may:

* create in-page navigation for long content-heavy pages
* provide navigation to related pages on a page
<!-- AURO-GENERATED-CONTENT:END -->

## Additional Information

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./readmeAddlInfo.md) -->
<!-- The below content is automatically added from ./readmeAddlInfo.md -->
When consuming the `auro-sidenav` you will be registering the `auro-sidenavitem` and `auro-sidenavsection` component as well as the `auro-sidenav` components to the DOM. These components will be necessary to create the navigation.

The `auro-sidenavsection` is an extension of the `auro-accordion` can be used to create sections.

The `auro-sidenavitem` is an extension of the `auro-hyperlink` and used to create the navigational links in the `auro-sidenav`. You can use the expected `href` and `target` attributes to properly enable and style the links.

Please refer to the below example to see how to use these components.
<!-- AURO-GENERATED-CONTENT:END -->

## Examples

#### Default

The following example illustrates a common use case for the `sidenav` element that includes a navigation header, an accordion sub-nav action, as well as a link that will open to an external URL.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/full.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/full.html -->
  <auro-sidenav>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/full.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/full.html -->

```html
<auro-sidenav>
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

#### auro-sidenavitem

The `<auro-sidenavitem>` element is an [extension](https://lit.dev/docs/components/defining/) of `<auro-hyperlink>` element. All of the [auro-hyperlink API](https://auro.alaskaair.com/components/auro/hyperlink/api) are therefore exposed through the `auro-sidenavitem`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/hyperlink.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/hyperlink.html -->
  <auro-sidenav>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/hyperlink.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/hyperlink.html -->

```html
<auro-sidenav>
  <span slot="heading">Airlines</span>
  <auro-sidenavitem href="/" target="_blank">Alaska Airlines</auro-sidenavitem>
  <auro-sidenavitem href="https://www.aa.com/" target="_blank">American Airlines</auro-sidenavitem>
  <auro-sidenavitem href="https://www.britishairways.com/" target="_blank">British Airways</auro-sidenavitem>
  <auro-sidenavitem href="https://www.jal.co.jp/" target="_blank">Japan Airlines</auro-sidenavitem>
</auro-sidenav>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### selected

The `<auro-sidenav>` element supports using the `selected` attribute on `<auro-sidenavitem>` element to designate an item as active.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/selected.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/selected.html -->
  <auro-sidenav>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/selected.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/selected.html -->

```html
<auro-sidenav>
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

Please [refer to the auro-accordion documentation](https://auro.alaskaair.com/components/auro/accordion/api) if you wish to use any of its additional atttributes or functionality.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/sections.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/sections.html -->
  <auro-sidenav>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/sections.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/sections.html -->

```html
<auro-sidenav>
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