<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/api.md) -->
<!-- The below content is automatically added from ../docs/api.md -->

# auro-sidenav

The auro-sidenav element provides users a way to create navigational interfaces on the left-hand
side of a page to navigate to separate pages or different sections within the same page.

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

The auro-sidenavitem element is the default child element of auro-sidenav.

## Properties

| Property         | Attribute        | Modifiers | Type      | Default   | Description                                      |
|------------------|------------------|-----------|-----------|-----------|--------------------------------------------------|
| [download](#download)       | `download`       |           | `boolean` | false     | If true, the linked resource will be downloaded when the hyperlink is clicked. |
| [fluid](#fluid)          | `fluid`          |           | `boolean` |           | If true and `type="cta"`, the hyperlink will have a fluid-width UI. |
| [href](#href)           | `href`           |           | `string`  |           | Defines the URL of the linked page.              |
| [ondark](#ondark)         | `ondark`         |           | `boolean` | false     | If true, the hyperlink will be styled for use on a dark background. |
| [referrerpolicy](#referrerpolicy) | `referrerpolicy` |           | `boolean` |           | If true, sets `strict-origin-when-cross-origin` to control the referrer information sent with requests. |
| [rel](#rel)            | `rel`            |           | `string`  |           | Defines the relationship between the current document and the linked document. |
| [relative](#relative)       | `relative`       |           | `boolean` | false     | If true, the auto URL re-write feature will be disabled. |
| [role](#role)           | `role`           |           | `string`  |           | DEPRECATED.                                      |
| [safeUri](#safeUri)        |                  | readonly  | `string`  |           | Returns a safe URI based on the provided `href` and `relative` parameters.<br />If `href` is truthy, it generates a safe URL using the `safeUrl` function.<br />Otherwise, it returns an empty string. |
| [target](#target)         | `target`         |           | `string`  |           | Defines where to open the linked document.       |
| [type](#type)           | `type`           |           | `string`  |           | Defines the type of hyperlink; accepts `nav` or `cta`. |
| [variant](#variant)        | `variant`        |           | `string`  | "primary" | Sets button variant option.                      |

## CSS Shadow Parts

| Part         | Description                                      |
|--------------|--------------------------------------------------|
| [link](#link)       | Allows styling to be applied to the `a` element. |
| [targetIcon](#targetIcon) | Allows styling to be applied to the icon that appears next to the hyperlink. |

# auro-sidenavsection

The auro-sidenavsection element can be used to create an accordion of auro-sidenavitems within the auro-sidenav.

## Properties

| Property     | Attribute    | Type      | Default | Description                                      |
|--------------|--------------|-----------|---------|--------------------------------------------------|
| [alignRight](#alignRight) | `alignRight` | `Boolean` |         | If set, the trigger content will align right.    |
| [chevron](#chevron)    | `chevron`    | `String`  |         | Sets chevron variant option. Possible values are: `none`, `right`. |
| [disabled](#disabled)   | `disabled`   | `Boolean` |         | If set, the accordion is disabled and have reduced opacity. |
| [emphasis](#emphasis)   | `emphasis`   | `Boolean` |         | If set, emphasis styles will be applied to the auro-accordions. |
| [expanded](#expanded)   | `expanded`   | `Boolean` | false   | If set, the accordion is expanded.               |
| [grouped](#grouped)    | `grouped`    | `Boolean` |         | Attribute will be set on accordion when it appears in an accordion group. |
| [variant](#variant)    | `variant`    | `String`  |         | Sets accordion variant option. Possible values are: `sm`, `lg`. |

## Methods

| Method   | Type       | Description                                      |
|----------|------------|--------------------------------------------------|
| [toggle](#toggle) | `(): void` | Toggles the visibility of the accordion content. |

## Events

| Event            | Type                                  | Description                                      |
|------------------|---------------------------------------|--------------------------------------------------|
| [toggleExpanded](#toggleExpanded) | `CustomEvent<{ expanded: boolean; }>` | Notifies that the accordion has been expanded or closed. |

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

#### heading

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

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ../src/styles/tokens.scss -->

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
