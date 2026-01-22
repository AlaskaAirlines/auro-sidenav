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