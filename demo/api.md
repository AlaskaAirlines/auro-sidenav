<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-sidenav

The auro-sidenav element provides users a way to create navigational interfaces on the lefthand
side of a page to navigate to seperate pages or different sections within the same page.

## Properties

| Property | Attribute | Type      |
|----------|-----------|-----------|
| [static](#static) | `static`  | `boolean` |

## Slots

| Name      | Description                                      |
|-----------|--------------------------------------------------|
|           | Default slot of the sidenav. Please construct using auro-sidenavitems and auro-sidenavsections. |
| [heading](#heading) | Defines what to use as the header of the sidenav. |

# auro-sidenavitem

## Properties

| Property         | Attribute        | Type      | Default | Description                                      |
|------------------|------------------|-----------|---------|--------------------------------------------------|
| [download](#download)       | `download`       | `Boolean` | false   | Specifies that the target will be downloaded when a user clicks on the hyperlink. |
| [fluid](#fluid)          | `fluid`          | `Boolean` |         | Modifier for `type="cta"` fluid-width UI option. |
| [href](#href)           | `href`           | `String`  |         | Specifies the URL of the page link.              |
| [ondark](#ondark)         | `ondark`         | `Boolean` | false   | Specifies dark theme use of hyperlink.           |
| [referrerpolicy](#referrerpolicy) | `referrerpolicy` | `Boolean` |         | Sets `strict-origin-when-cross-origin` to send a full URL when performing a same-origin request, only sends the origin when the protocol security level stays the same (HTTPS→HTTPS), and sends no header to a less secure destination (HTTPS→HTTP). |
| [rel](#rel)            | `rel`            | `String`  |         | Specifies the relationship between the current document and the linked document. |
| [relative](#relative)       | `relative`       | `Boolean` | false   | Add flag to disable auto URL re-write feature.   |
| [role](#role)           | `role`           | `String`  |         | Use for aria roles; currently supports `button` for extended experiences. |
| [secondary](#secondary)      | `secondary`      | `Boolean` | false   | Modifier for `type="cta"` secondary UI option.   |
| [small](#small)          | `small`          | `Boolean` | false   | Modifier for `type="cta"` small UI option.       |
| [target](#target)         | `target`         | `String`  |         | Specifies where to open the linked document.     |
| [type](#type)           | `type`           | `String`  |         | Enumerable attribute; [`nav`, `cta`]             |

## CSS Shadow Parts

| Part   | Description                  |
|--------|------------------------------|
| [link](#link) | Apply CSS to the `a` element |

# auro-sidenavsection

## Attributes

| Attribute    | Type      | Description                                      |
|--------------|-----------|--------------------------------------------------|
| [alignRight](#alignRight) | `Boolean` | If set, the trigger content will align right.    |
| [chevron](#chevron)    | `String`  | Sets chevron variant option. Possible values are: `none`, `right`. |
| [emphasis](#emphasis)   | `Boolean` | If set, emphasis styles will be applied to the auro-accordions. |
| [grouped](#grouped)    | `Boolean` | Attribute will be set on accordion when it appears in an accordion group. |
| [variant](#variant)    | `String`  | Sets accordion variant option. Possible values are: `sm`, `lg`. |

## Properties

| Property   | Attribute  | Type      | Description                        |
|------------|------------|-----------|------------------------------------|
| [expanded](#expanded) | `expanded` | `Boolean` | If set, the accordion is expanded. |

## Methods

| Method   | Type       | Description                                      |
|----------|------------|--------------------------------------------------|
| [toggle](#toggle) | `(): void` | Toggles the visibility of the accordion content. |

## Events

| Event            | Description                                      |
|------------------|--------------------------------------------------|
| [toggleExpanded](#toggleExpanded) | Notifies that the accordion has been expanded or closed. |

## Slots

| Name      | Description                                 |
|-----------|---------------------------------------------|
|           | Default slot for the accordion content.     |
| [trigger](#trigger) | Defines the content of the trigger element. |

## CSS Shadow Parts

| Part        | Description                         |
|-------------|-------------------------------------|
| [accordion](#accordion) | Apply CSS to Accordion wrapper.     |
| [chevron](#chevron)   | Apply CSS to chevron icon.          |
| [content](#content)   | Apply CSS to the accordion content. |
| [trigger](#trigger)   | Apply CSS to trigger element.       |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Slot Examples

#### <a name="heading"></a>`heading`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
The `heading` slot defines what to use as the header of the sidenav.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/heading.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/heading.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/heading.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/heading.html -->

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
