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

* `.montage-Modal` - The container
* `.montage-Modal-header` - The title
* `.montage-Modal-content` - The content frame
* `.montage-Modal-footer` - The footer with the cancel and/or ok button.
* `.montage-Modal-button--cancel` - The cancel button closes the Modal.
* `.montage-Modal-button--ok` - The ok button closes the Modal or confirms the action.

```css
.montage-Modal-content {
    background-color: pink;
}
```



## Browser support

TBD
