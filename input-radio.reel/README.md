# Radio

![Radio](https://raw.github.com/montagejs/montage-lab/master/skeleton/mobile/components/input-radio.reel/screenshot.png)

The Radio component wraps an HTML `<input type="radio">` with custom styles and functionality.

## How to use

```html
<input data-montage-id="radio" type="radio">
```

```json
"radio": {
    "prototype": "montage/ui/input-radio.reel",
    "properties": {
        "element": {"#": "radio"}
    }
}
```


## Available properties

* `name` - Name of the radio group.
* `checked` - The checked state of the checkbox.



## Customizing with CSS

* `.montage-InputRadio` - The checkbox element

```css
.montage-InputRadio {
    border-color: blue;
}
```



## Browser support

* Chrome (latest)
* Safari 5+
* Firefox 4+
* Opera (latest)
