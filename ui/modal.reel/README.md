# Modal

![Modal](https://raw.github.com/montagejs/digit/master/modal.reel/screenshot.png)

The Modal component will "pop up" in the center as an overlay. It can be used as confirmation, alert or whenever you would like the user to focus on something and block other interaction.

## How to use

```html
<div data-montage-id="Modal"></div>
```

```json
"Modal": {
    "prototype": "montage/ui/modal.reel",
    "properties": {
        "element": {"#": "Modal"}
    }
}
```


## Available properties

* `type` - `alert` only has ok button, `confirm` has cancel and ok button
* `title` - Title or info of the Modal.
* `content` - A string or another reel with custom content.
* `state` - State if open
* ...


## Customizing with CSS

* `.digit-Modal` - The container
* `.digit-Modal-header` - The title
* `.digit-Modal-content` - The content frame
* `.digit-Modal-footer` - The footer with the cancel and/or ok button.
* `.digit-Modal-button--cancel` - The cancel button closes the Modal.
* `.digit-Modal-button--ok` - The ok button closes the Modal or confirms the action.

```css
.digit-Modal-content {
    background-color: pink;
}
```



## Browser support

TBD
