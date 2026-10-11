<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-sidenav

The `auro-sidenav` element provides users a way to create navigational interfaces on the left-hand
side of a page to navigate to separate pages or different sections within the same page.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type    | Default | Description                                                                    |
| ---------- | ---------- | --------- | ------- | ------- | ------------------------------------------------------------------------------ |
| static     | static     |           | boolean |         | When applied, the sidenav will expand to an open state and can't be collapsed. |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Slots

| Name      | Description                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------- |
| (default) | Default slot of the sidenav. Please construct using `auro-sidenavitems` and `auro-sidenavsections`. |
| ariaLabel | Defines what to use as the `aria-label` of the sidenav.                                             |
| heading   | Defines what to use as the header of the sidenav.                                                   |

# auro-sidenavitem

The `auro-sidenavitem` element can be used to create a link within the `auro-sidenav`.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type   | Default | Description                                |
| ---------- | ---------- | --------- | ------ | ------- | ------------------------------------------ |
| href       | href       |           | string |         | Defines the URL of the linked page.        |
| target     | target     |           | string |         | Defines where to open the linked document. |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### CSS Shadow Parts

| Name       | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| link       | Allows styling to be applied to the `a` element.                             |
| targetIcon | Allows styling to be applied to the icon that appears next to the hyperlink. |

# auro-sidenavsection

The `auro-sidenavsection` element can be used to create an accordion of `auro-sidenavitems` within the `auro-sidenav`.

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |
| toggle   | None                                                                 |        | Toggles the visibility of the accordion content.  |

### Events

| Name           | Description                                              |
| -------------- | -------------------------------------------------------- |
| toggleExpanded | Notifies that the accordion has been expanded or closed. |

### Slots

| Name      | Description                                 |
| --------- | ------------------------------------------- |
| (default) | Default slot for the accordion content.     |
| trigger   | Defines the content of the trigger element. |

### CSS Shadow Parts

| Name      | Description                         |
| --------- | ----------------------------------- |
| accordion | Apply CSS to Accordion wrapper.     |
| chevron   | Apply CSS to chevron icon.          |
| content   | Apply CSS to the accordion content. |
| trigger   | Apply CSS to trigger element.       |
<!-- AURO-GENERATED-CONTENT:END -->

## Sidenav Item

The `<auro-sidenavitem>` element is an [extension](https://lit.dev/docs/components/defining/) of `<auro-hyperlink>` element. All of the [auro-hyperlink API](https://auro.alaskaair.com/components/auro/hyperlink/api) are therefore exposed through the `auro-sidenavitem`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/sidenavitem.html) -->
  <!-- The below content is automatically added from ../apiExamples/sidenavitem.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/sidenavitem.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/sidenavitem.html -->

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

## Sidenav Section

The `<auro-sidenav>` element uses `<auro-sidenavsection>` elements to create sections and layers in the navigation. The `<auro-sidenavsection>` element is an extension of the `<auro-accordion>` element, you will need to supply a `trigger` slot for its children as well as the `<auro-sidenavitem>` elements. The `<auro-sidenav>` element will automatically apply the `chevron` and `fluid` attributes to the `<auro-sidenavsection>` elements.

The `<auro-sidenavitem>` elements will automatically be styled as tiered children in the `<auro-sidenav>` element.

Please [refer to the auro-accordion documentation](https://auro.alaskaair.com/components/auro/accordion/api) if you wish to use any of its additional attributes or functionality.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/sidenavsection.html) -->
  <!-- The below content is automatically added from ../apiExamples/sidenavsection.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/sidenavsection.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/sidenavsection.html -->

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

## Property & Attribute Examples

### Selected

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

### Static

The `<auro-sidenav>` element uses the attribute `static` to toggle on/off accordion functionality with the navigation header. This can be both static and dynamic. Look at the "Set Up" section on the component landing page for more information on dynamic usage.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/static.html) -->
  <!-- The below content is automatically added from ../apiExamples/static.html -->
  <auro-sidenav static>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/static.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/static.html -->

```html
<auro-sidenav static>
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

## Slot Examples

### Aria Label

The `ariaLabel` slot defines what to use as the aria-label of the sidenav.

**Note:** Do not use the `aria-label` attribute on the `auro-sidenav` element itself. This will be ignored in favor of the `ariaLabel` slot.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/aria-label.html) -->
  <!-- The below content is automatically added from ../apiExamples/aria-label.html -->
  <auro-sidenav static>
    <span slot="ariaLabel">History of Alaska Airlines</span>
    <auro-sidenavitem href="/content/about-us/history">Historical overview</auro-sidenavitem>
    <auro-sidenavitem href="/content/about-us/history/history-by-decade">History by decade</auro-sidenavitem>
    <auro-sidenavitem href="/content/about-us/history/pioneers">Alaska Airlines pioneers</auro-sidenavitem>
  </auro-sidenav>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/aria-label.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/aria-label.html -->

```html
<auro-sidenav static>
  <span slot="ariaLabel">History of Alaska Airlines</span>
  <auro-sidenavitem href="/content/about-us/history">Historical overview</auro-sidenavitem>
  <auro-sidenavitem href="/content/about-us/history/history-by-decade">History by decade</auro-sidenavitem>
  <auro-sidenavitem href="/content/about-us/history/pioneers">Alaska Airlines pioneers</auro-sidenavitem>
</auro-sidenav>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Heading

The `heading` slot defines what to use as the header of the sidenav.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/heading.html) -->
  <!-- The below content is automatically added from ../apiExamples/heading.html -->
  <auro-sidenav static>
    <span slot="heading">History of Alaska Airlines</span>
    <auro-sidenavitem href="/content/about-us/history">Historical overview</auro-sidenavitem>
    <auro-sidenavitem href="/content/about-us/history/history-by-decade">History by decade</auro-sidenavitem>
    <auro-sidenavitem href="/content/about-us/history/pioneers">Alaska Airlines pioneers</auro-sidenavitem>
  </auro-sidenav>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/heading.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/heading.html -->

```html
<auro-sidenav static>
  <span slot="heading">History of Alaska Airlines</span>
  <auro-sidenavitem href="/content/about-us/history">Historical overview</auro-sidenavitem>
  <auro-sidenavitem href="/content/about-us/history/history-by-decade">History by decade</auro-sidenavitem>
  <auro-sidenavitem href="/content/about-us/history/pioneers">Alaska Airlines pioneers</auro-sidenavitem>
</auro-sidenav>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## CSS Shadow Part Examples

<!-- Add all CSS Shadow Part examples here, remove section if none exist -->

## Common Usage Patterns & Functional Examples

### Responsive

The following example is a responsive sidenav that will trigger the `static` attribute on window resize.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/responsive.html) -->
  <!-- The below content is automatically added from ./../apiExamples/responsive.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/responsive.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/responsive.html -->

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

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- Remove section if component does not have any component specific tokens -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

```scss
@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;

:host {
  --ds-auro-sidenav-text-color: var(--ds-basic-color-texticon-default, #{v.$ds-basic-color-texticon-default});
  --ds-auro-sidenavitem-border-bottom-color: var(--ds-basic-color-border-divider, #{v.$ds-basic-color-border-divider});
  --ds-auro-sidenavitem-border-left-color: var(--ds-advanced-color-state-selected, #{v.$ds-advanced-color-state-selected});
  --ds-auro-sidenavitem-icon-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-sidenavsection-border-color: var(--ds-basic-color-border-divider, #{v.$ds-basic-color-border-divider});
  --ds-auro-sidenavsection-icon-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});;
  --ds-auro-sidenavsection-text-color: var(--ds-basic-color-texticon-default, #{v.$ds-basic-color-texticon-default});
  --ds-auro-sidenavsection-trigger-background-hover-color: var(--ds-advanced-color-state-background-hover, #{v.$ds-advanced-color-state-background-hover});
  --ds-auro-sidenavsection-trigger-border-color: transparent;
}
```
<!-- AURO-GENERATED-CONTENT:END -->
