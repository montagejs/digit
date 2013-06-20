# RadioButton

![RadioButton](screenshot.png)

## How to use

```json
"radio": {
    "prototype": "digit/ui/radio-button.reel",
    "properties": {
        "element": {"#": "radio"},
        "value": 1
    }
}
```

```html
<span data-montage-id="radio"></span>
```


## Available properties

* `value` - Value of the radio group.
* `checked` - The checked state of the radio button.
* `radioButtonController` - The controller of the radio button.

## Customizing with CSS

* `.digit-RadioButton` - The radio button element

```css
.digit-RadioButton {
    border-color: blue;
}
```