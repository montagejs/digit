# Checkbox

![Checkbox](https://raw.github.com/montagejs/montage-lab/master/skeleton/mobile/components/input-checkbox.reel/screenshot.png)

The Checkbox component wraps an HTML `<input type="checkbox">` with custom styles and functionality.

## How to use

```html
<input data-montage-id="checkbox" type="checkbox">
```

```json
"checkbox": {
    "prototype": "montage/ui/input-checkbox.reel",
    "properties": {
        "element": {"#": "checkbox"}
    }
}
```


## Available properties

* `checked` - The checked state of the checkbox.



## Customizing with CSS

* `.montage-InputCheckbox` - The checkbox element

```css
.montage-InputCheckbox {
    border-color: blue;
}
```



## Browser support

* Chrome (latest)
* Safari 5+
* Firefox 4+
* Opera (latest)
