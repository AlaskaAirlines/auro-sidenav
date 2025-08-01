# auro-sidenav

The auro-sidenav element provides users a way to create navigational interfaces on the left-hand
side of a page to navigate to separate pages or different sections within the same page.

## Properties

| Property | Attribute | Type      |
|----------|-----------|-----------|
| `static` | `static`  | `boolean` |

## Slots

| Name      | Description                                      |
|-----------|--------------------------------------------------|
|           | Default slot of the sidenav. Please construct using auro-sidenavitems and auro-sidenavsections. |
| `heading` | Defines what to use as the header of the sidenav. |


# auro-sidenavitem

The auro-sidenavitem element is the default child element of auro-sidenav.

## Properties

| Property         | Attribute        | Modifiers | Type      | Default   | Description                                      |
|------------------|------------------|-----------|-----------|-----------|--------------------------------------------------|
| `download`       | `download`       |           | `boolean` | false     | If true, the linked resource will be downloaded when the hyperlink is clicked. |
| `fluid`          | `fluid`          |           | `boolean` |           | If true and `type="cta"`, the hyperlink will have a fluid-width UI. |
| `href`           | `href`           |           | `string`  |           | Defines the URL of the linked page.              |
| `ondark`         | `ondark`         |           | `boolean` | false     | If true, the hyperlink will be styled for use on a dark background. |
| `referrerpolicy` | `referrerpolicy` |           | `boolean` |           | If true, sets `strict-origin-when-cross-origin` to control the referrer information sent with requests. |
| `rel`            | `rel`            |           | `string`  |           | Defines the relationship between the current document and the linked document. |
| `relative`       | `relative`       |           | `boolean` | false     | If true, the auto URL re-write feature will be disabled. |
| `role`           | `role`           |           | `string`  |           | DEPRECATED.                                      |
| `safeUri`        |                  | readonly  | `string`  |           | Returns a safe URI based on the provided `href` and `relative` parameters.<br />If `href` is truthy, it generates a safe URL using the `safeUrl` function.<br />Otherwise, it returns an empty string. |
| `target`         | `target`         |           | `string`  |           | Defines where to open the linked document.       |
| `type`           | `type`           |           | `string`  |           | Defines the type of hyperlink; accepts `nav` or `cta`. |
| `variant`        | `variant`        |           | `string`  | "primary" | Sets button variant option.                      |

## CSS Shadow Parts

| Part         | Description                                      |
|--------------|--------------------------------------------------|
| `link`       | Allows styling to be applied to the `a` element. |
| `targetIcon` | Allows styling to be applied to the icon that appears next to the hyperlink. |


# auro-sidenavsection

The auro-sidenavsection element can be used to create an accordion of auro-sidenavitems within the auro-sidenav.

## Properties

| Property     | Attribute    | Type      | Default | Description                                      |
|--------------|--------------|-----------|---------|--------------------------------------------------|
| `alignRight` | `alignRight` | `Boolean` |         | If set, the trigger content will align right.    |
| `chevron`    | `chevron`    | `String`  |         | Sets chevron variant option. Possible values are: `none`, `right`. |
| `disabled`   | `disabled`   | `Boolean` |         | If set, the accordion is disabled and have reduced opacity. |
| `emphasis`   | `emphasis`   | `Boolean` |         | If set, emphasis styles will be applied to the auro-accordions. |
| `expanded`   | `expanded`   | `Boolean` | false   | If set, the accordion is expanded.               |
| `grouped`    | `grouped`    | `Boolean` |         | Attribute will be set on accordion when it appears in an accordion group. |
| `variant`    | `variant`    | `String`  |         | Sets accordion variant option. Possible values are: `sm`, `lg`. |

## Methods

| Method   | Type       | Description                                      |
|----------|------------|--------------------------------------------------|
| `toggle` | `(): void` | Toggles the visibility of the accordion content. |

## Events

| Event            | Type                                  | Description                                      |
|------------------|---------------------------------------|--------------------------------------------------|
| `toggleExpanded` | `CustomEvent<{ expanded: boolean; }>` | Notifies that the accordion has been expanded or closed. |

## Slots

| Name      | Description                                 |
|-----------|---------------------------------------------|
|           | Default slot for the accordion content.     |
| `trigger` | Defines the content of the trigger element. |

## CSS Shadow Parts

| Part        | Description                         |
|-------------|-------------------------------------|
| `accordion` | Apply CSS to Accordion wrapper.     |
| `chevron`   | Apply CSS to chevron icon.          |
| `content`   | Apply CSS to the accordion content. |
| `trigger`   | Apply CSS to trigger element.       |
