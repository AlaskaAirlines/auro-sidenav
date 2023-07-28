# auro-sidenav

The auro-sidenav element provides users a way to create navigational interfaces on the lefthand
side of a page to navigate to seperate pages or different sections within the same page.

## Methods

| Method      | Type       | Description                                      |
|-------------|------------|--------------------------------------------------|
| `initItems` | `(): void` | Initializes list of sidenavitems in the DOM. This must re-run whenever slotted items change. |

## Slots

| Name      | Description                                      |
|-----------|--------------------------------------------------|
|           | Default slot of the sidenav. Please construct using auro-sidenavitems and auro-sidenavsections. |
| `heading` | Defines what to use as the header of the sidenav. |
