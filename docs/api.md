# auro-sidenav

The auro-sidenav element provides users a way to create navigational interfaces on the left-hand
side of a page to navigate to separate pages or different sections within the same page.


### Properties & Attributes

| Properties | Attributes | Type | Default | Description  |
| --- | --- | --- | --- | --- |
static | static | boolean |  | When applied the sidenav will expand to an open state and can't be collapsed.


### Methods

| Name | Parameters | Return | Description |
| --- | --- | --- | --- |
register | `name` (string) - The name of element that you want to register to. |  | This will register this element with the browser.


### Slots

| Name | Description |
| --- | --- |
heading | Defines what to use as the header of the sidenav.
(default) | Default slot of the sidenav. Please construct using auro-sidenavitems and auro-sidenavsections.
ariaLabel | Defines what to use as the aria-label of the sidenav.



---

# auro-sidenavitem

The auro-sidenavitem element is the default child element of auro-sidenav.


### Properties & Attributes

| Properties | Attributes | Type | Default | Description  |
| --- | --- | --- | --- | --- |
role |  | String |  | Defines ARIA roles; currently supports `button` for extended experiences.
safeUri |  |  |  | Returns a safe URI based on the provided `href` and `relative` parameters.<br>If `href` is truthy, it generates a safe URL using the `safeUrl` function.<br>Otherwise, it returns an empty string.
includesDomain |  |  |  | Checks whether the provided URI (if available) includes the 'http' protocol.<br>If the URI is truthy, it examines whether it contains 'http'.<br>Otherwise, it returns false.
appearance | appearance | string | 'default' | Defines whether the component will be on lighter or darker backgrounds.
download | download | boolean | false | If true, the linked resource will be downloaded when the hyperlink is clicked.
relative | relative | boolean | false | If true, the auto URL re-write feature will be disabled.
ondark | ondark | boolean | false | DEPRECATED - use `appearance` instead.
variant | variant | string | "primary" | Sets button variant option.
href | href | string |  | Defines the URL of the linked page.
rel | rel | string |  | Defines the relationship between the current document and the linked document.
target | target | string |  | Defines where to open the linked document.
type | type | string |  | Defines the type of hyperlink; accepts `nav` or `cta`.
fluid | fluid | boolean |  | If true and `type="cta"`, the hyperlink will have a fluid-width UI.
referrerpolicy | referrerpolicy | boolean |  | If true, sets `strict-origin-when-cross-origin` to control the referrer information sent with requests.


### Methods

| Name | Parameters | Return | Description |
| --- | --- | --- | --- |
register | `name` (string) - The name of element that you want to register to. |  | This will register this element with the browser.


### CSS Shadow Parts

| Name | Description |
| --- | --- |
link | Allows styling to be applied to the `a` element.
targetIcon | Allows styling to be applied to the icon that appears next to the hyperlink.



---

# auro-sidenavsection

The auro-sidenavsection element can be used to create an accordion of auro-sidenavitems within the auro-sidenav.


### Properties & Attributes

| Properties | Attributes | Type | Default | Description  |
| --- | --- | --- | --- | --- |
expanded | expanded | boolean | false | If set, the accordion is expanded.
alignRight | alignRight | boolean |  | If set, the trigger content will align right.
emphasis | emphasis | boolean |  | If set, emphasis styles will be applied to the auro-accordions.
grouped | grouped | boolean |  | Attribute will be set on accordion when it appears in an accordion group.
chevron | chevron | string |  | Sets chevron variant option. Possible values are: `none`, `right`.
variant | variant | string |  | Sets accordion variant option. Possible values are: `sm`, `lg`.
disabled | disabled | boolean |  | If set, the accordion is disabled and have reduced opacity.


### Methods

| Name | Parameters | Return | Description |
| --- | --- | --- | --- |
register | `name` (string) - The name of element that you want to register to. |  | This will register this element with the browser.
toggle | None |  | Toggles the visibility of the accordion content.


### Events

| Name | Description |
| --- | --- |
toggleExpanded | Notifies that the accordion has been expanded or closed.


### Slots

| Name | Description |
| --- | --- |
(default) | Default slot for the accordion content.
trigger | Defines the content of the trigger element.


### CSS Shadow Parts

| Name | Description |
| --- | --- |
accordion | Apply CSS to Accordion wrapper.
trigger | Apply CSS to trigger element.
chevron | Apply CSS to chevron icon.
content | Apply CSS to the accordion content.


    