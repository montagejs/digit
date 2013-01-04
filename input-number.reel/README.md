# Number Input

![Text Input](https://raw.github.com/montagejs/montage-lab/master/skeleton/mobile/components/input-number.reel/screenshot.png)

The Number Input component wraps an HTML `<input type="number">` element and adds a plus and minus stepper button.

## How to use

```html
<input data-montage-id="number" type="number">
```

```json
"number": {
    "prototype": "montage/ui/input-number.reel",
    "properties": {
        "element": {"#": "number"}
    }
}
```


## Available properties

* `value` - Current value
* `min` - Minimum value
* `max` - Maximum value



## Customizing with CSS

* `.montage-InputNumber` - The InputNumber wrapper
* `.montage-InputNumber-input` - The actual input for the numbers
* `.montage-InputNumber-minus` - The minus button
* `.montage-InputNumber-plus` - The plus button

```css
.montage-InputNumber-input {
    width: 100px;
}
```



## Browser support

* Chrome (latest)
* Safari 5+
