# Action Sheet

![Action Sheet](https://raw.github.com/montagejs/digit/master/action-sheet.reel/screenshot.png)

The Action Sheet component slides up from the bottom over the content and contains buttons that will perform different actions.

## How to use

```html
<div data-montage-id="ActionSheet"></div>
```

```json
"ActionSheet": {
    "prototype": "montage/ui/action-sheet.reel",
    "properties": {
        "element": {"#": "ActionSheet"}
    }
}
```


## Available properties

* `title` - Title or info of the Action Sheet.
* `state` - State if shown or hidden
* ...


## Customizing with CSS

* `.digit-ActionSheet` - The container
* `.digit-ActionSheet-title` - The title, 1-2 lines long
* `.digit-ActionSheet-button` - The action buttons
* `.digit-ActionSheet-button--cancel` - The cancel button closes the Action Sheet.

```css
.digit-ActionSheet {
    background-color: pink;
}
```



## Browser support

TBD
