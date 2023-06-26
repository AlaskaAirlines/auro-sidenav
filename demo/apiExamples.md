<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-sidenav

The auro-sidenav element provides users a way to create navigational interfaces on the lefthand
side of a page to navigate to seperate pages or different sections within the same page.

## Slots

| Name      | Description                                      |
|-----------|--------------------------------------------------|
|           | Default slot of the sidenav. Please construct using auro-sidenavitems and auro-sidenavsections. |
| [heading](#heading) | Defines what to use as the header of the sidenav |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
      <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
      <auro-sidenav>
        <span slot="heading">Alaska Airlines History</span>
        <auro-sidenavitem href="/content/about-us/history">Historical overview</auro-sidenavitem>
        <auro-sidenavitem href="/content/about-us/history/history-by-decade">History by decade</auro-sidenavitem>
        <auro-sidenavitem href="/content/about-us/history/pioneers">Alaska Airlines pioneers</auro-sidenavitem>
      </auro-sidenav>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-sidenav>
  <span slot="heading">Alaska Airlines History</span>
  <auro-sidenavitem href="/content/about-us/history">Historical overview</auro-sidenavitem>
  <auro-sidenavitem href="/content/about-us/history/history-by-decade">History by decade</auro-sidenavitem>
  <auro-sidenavitem href="/content/about-us/history/pioneers">Alaska Airlines pioneers</auro-sidenavitem>
</auro-sidenav>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Attribute Examples

#### "target" and "href"

Since `auro-sidenavitem` is an extension of `auro-hyperlink` you can use the `target` and `href` attributes to style and enable the items as you would expect.

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
<auro-accordion lowProfile justifyRight>
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

The `auro-sidenav` element supports using the `selected` attribute on `auro-sidenavitems` to designate an item as active.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/selected.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/selected.html -->
  <auro-sidenav>
    <span slot="heading">Auro Components</span>
    <auro-sidenavitem href="https://auro.alaskaair.com/components/auro/menu">Menu</auro-sidenavitem>
    <auro-sidenavitem href="https://auro.alaskaair.com/components/auro/sidenav" selected>Sidenav</auro-sidenavitem>
    <auro-sidenavitem href="https://auro.alaskaair.com/components/auro/button">Button</auro-sidenavitem>
    <auro-sidenavitem href="https://auro.alaskaair.com/components/auro/badge">Badge</auro-sidenavitem>
  </auro-sidenav>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/selected.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/selected.html -->

```html
<auro-sidenav>
  <span slot="heading">Auro Components</span>
  <auro-sidenavitem href="https://auro.alaskaair.com/components/auro/menu">Menu</auro-sidenavitem>
  <auro-sidenavitem href="https://auro.alaskaair.com/components/auro/sidenav" selected>Sidenav</auro-sidenavitem>
  <auro-sidenavitem href="https://auro.alaskaair.com/components/auro/button">Button</auro-sidenavitem>
  <auro-sidenavitem href="https://auro.alaskaair.com/components/auro/badge">Badge</auro-sidenavitem>
</auro-sidenav>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Slot Examples

#### <a name="heading"></a>`heading`<a href="#auro-sidenav" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
The `heading` slot defines what to use as the header of the sidenav.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/heading.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/heading.html -->
  <auro-sidenav>
    <span slot="heading">History of Alaska Airlines</span>
    <auro-sidenavitem href="/content/about-us/history">Historical overview</auro-sidenavitem>
    <auro-sidenavitem href="/content/about-us/history/history-by-decade">History by decade</auro-sidenavitem>
    <auro-sidenavitem href="/content/about-us/history/pioneers">Alaska Airlines pioneers</auro-sidenavitem>
  </auro-sidenav>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/heading.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/heading.html -->

```html
<auro-sidenav>
  <span slot="heading">History of Alaska Airlines</span>
  <auro-sidenavitem href="/content/about-us/history">Historical overview</auro-sidenavitem>
  <auro-sidenavitem href="/content/about-us/history/history-by-decade">History by decade</auro-sidenavitem>
  <auro-sidenavitem href="/content/about-us/history/pioneers">Alaska Airlines pioneers</auro-sidenavitem>
</auro-sidenav>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### Sections

The `auro-sidenav` registers and uses `auro-sidenavsection`s to create sectiona and layers in the navigation. The `auro-sidenavsection` is an extension of the `auro-accordion` so you will need to supply a `trigger` slot as its children as well as the `auro-sidenavitem`s. The `auro-sidenav` will automatically apply the `chevron` and `fluid` attributes to the `auro-sidenavsection`.

The `auro-sidenavitems` will automatically be styled as tiered children in the `auro-sidenav`.

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
<auro-accordion lowProfile justifyRight>
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
