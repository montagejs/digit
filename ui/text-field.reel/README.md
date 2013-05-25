# Text Field

![Text Field](https://raw.github.com/montagejs/digit/edge/ui/text-field.reel/screenshot.png)

The TextField component wraps an HTML `<input type="text">` element.

## How to use

```html
<input data-montage-id="text" type="text">
```

```json
"text": {
    "prototype": "digit/ui/text-field.reel",
    "properties": {
        "element": {"#": "text"}
    }
}
```


## Available properties

* `value` - The text of the text field.
* `placeholderValue` - A hint to the user of what can be entered in the control.
* `enabled` - The state of the text field.


## Customizing with CSS

* `.digit-TextField` - The TextField element

```css
.digit-TextField {
    border-color: blue;
}
```



## Browser support

* Chrome (latest)
* Safari 5+
* Firefox 4+
* Opera (latest)
