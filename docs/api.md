# auro-sidenav

The auro-sidenav element provides users a way to create navigational interfaces on the lefthand
side of a page to navigate to seperate pages or different sections within the same page.

## Slots

| Name      | Description                                      |
|-----------|--------------------------------------------------|
|           | Default slot of the sidenav. Please construct using auro-sidenavitems and auro-sidenavsections. |
| `heading` | Defines what to use as the header of the sidenav. |


# auro-sidenavitem

## Properties

| Property         | Attribute        | Type      | Default | Description                                      |
|------------------|------------------|-----------|---------|--------------------------------------------------|
| `download`       | `download`       | `Boolean` | false   | Specifies that the target will be downloaded when a user clicks on the hyperlink. |
| `fluid`          | `fluid`          | `Boolean` |         | Modifier for `type="cta"` fluid-width UI option. |
| `href`           | `href`           | `String`  |         | Specifies the URL of the page link.              |
| `ondark`         | `ondark`         | `Boolean` | false   | Specifies dark theme use of hyperlink.           |
| `referrerpolicy` | `referrerpolicy` | `Boolean` |         | Sets `strict-origin-when-cross-origin` to send a full URL when performing a same-origin request, only sends the origin when the protocol security level stays the same (HTTPS→HTTPS), and sends no header to a less secure destination (HTTPS→HTTP). |
| `rel`            | `rel`            | `String`  |         | Specifies the relationship between the current document and the linked document. |
| `relative`       | `relative`       | `Boolean` | false   | Add flag to disable auto URL re-write feature.   |
| `role`           | `role`           | `String`  |         | Use for aria roles; currently supports `button` for extended experiences. |
| `secondary`      | `secondary`      | `Boolean` | false   | Modifier for `type="cta"` secondary UI option.   |
| `small`          | `small`          | `Boolean` | false   | Modifier for `type="cta"` small UI option.       |
| `target`         | `target`         | `String`  |         | Specifies where to open the linked document.     |
| `type`           | `type`           | `String`  |         | Enumerable attribute; [`nav`, `cta`]             |

## CSS Shadow Parts

| Part   | Description                  |
|--------|------------------------------|
| `link` | Apply CSS to the `a` element |


# auro-sidenavsection

## Attributes

| Attribute    | Type      | Description                                      |
|--------------|-----------|--------------------------------------------------|
| `alignRight` | `Boolean` | If set, the trigger content will align right.    |
| `chevron`    | `String`  | Sets chevron variant option. Possible values are: `none`, `right`. |
| `emphasis`   | `Boolean` | If set, emphasis styles will be applied to the auro-accordions. |
| `grouped`    | `Boolean` | Attribute will be set on accordion when it appears in an accordion group. |
| `variant`    | `String`  | Sets accordion variant option. Possible values are: `sm`, `lg`. |

## Properties

| Property   | Attribute  | Type      | Description                        |
|------------|------------|-----------|------------------------------------|
| `expanded` | `expanded` | `Boolean` | If set, the accordion is expanded. |

## Methods

| Method   | Type       | Description                                      |
|----------|------------|--------------------------------------------------|
| `toggle` | `(): void` | Toggles the visibility of the accordion content. |

## Events

| Event            | Description                                      |
|------------------|--------------------------------------------------|
| `toggleExpanded` | Notifies that the accordion has been expanded or closed. |

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
