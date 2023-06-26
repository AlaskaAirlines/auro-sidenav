<!--
The demo.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/demo.md`
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

## Example

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
<auro-accordion lowProfile justifyRight>
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

## Recommended Use and Version Control

<!-- TODO: Update this section with custom tagging strategy -->
There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-sidenav` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@alaskaairux/auro-sidenav';
registerComponent('custom-sidenav');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-sidenav` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/custom.html -->
  <custom-sidenav>
    <span slot="heading">Salutations</span>
    <auro-sidenavitem href="https://www.oneworld.com/">World</auro-sidenavitem>
  </custom-sidenav>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/custom.html -->

```html
<custom-sidenav>
  <span slot="heading">Salutations</span>
  <auro-sidenavitem href="https://www.oneworld.com/">World</auro-sidenavitem>
</custom-sidenav>
```
<!-- AURO-GENERATED-CONTENT:END -->
