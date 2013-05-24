# RadioButton

![RadioButton](https://raw.github.com/montagejs/digit/edge/radio-button.reel/screenshot.png)

## How to use

```html
<span data-montage-id="radio"></span>
```

```json
"radio": {
    "prototype": "digit/ui/radio-button.reel",
    "properties": {
        "element": {"#": "radio"},
        "value": 1
    }
}
```

## Available properties

* `value` - Value of the radio group.
* `checked` - The checked state of the checkbox.
* `radioButtonController` - The controller of the checkbox.

## Customizing with CSS

* `.digit-RadioButton` - The checkbox element

```css
.digit-RadioButton {
    border-color: blue;
}
```