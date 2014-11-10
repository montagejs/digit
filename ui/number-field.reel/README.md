# Number Field

![NumberField](screenshot.png)

The Number Field component wraps an HTML `<input type="number">` element and adds a plus and minus stepper button.

## How to use

```json
"number": {
    "prototype": "digit/ui/number-field.reel",
    "properties": {
        "element": {"#": "number"},
        "value": 0
    }
}
```

```html
<input data-montage-id="number" type="number">
```


## Available properties

* `value` - Current value
* `min` - Minimum value
* `max` - Maximum value



## Customizing with CSS

* `.digit-NumberField` - The NumberField wrapper
* `.digit-NumberField-input` - The actual input for the numbers
* `.digit-NumberField-minus` - The minus button
* `.digit-NumberField-plus` - The plus button

```css
.digit-NumberField-input {
    width: 100px;
}
```



## Browser support

* Chrome (latest)
* Firefox (latest)
* Opera (latest)
* IE 10+
* Safari 7+
