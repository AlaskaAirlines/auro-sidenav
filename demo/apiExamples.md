<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-sidenav

The auro-sidenav element provides users a way to create navigational interfaces on the lefthand
side of a page to navigate to seperate pages or different sections within the same page.

## Slots

| Name      | Description                                      |
|-----------|--------------------------------------------------|
|           | Default slot of the sidenav. Please construct using auro-sidenavitems and auro-sidenavsections. |
| [heading](#heading) | Defines what to use as the header of the sidenav. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Slot Examples

#### <a name="heading"></a>`heading`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
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
<auro-accordion alignRight>
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
