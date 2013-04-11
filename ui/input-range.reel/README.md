# Range Input

![Range Input](https://raw.github.com/montagejs/montage-lab/master/skeleton/mobile/components/input-range.reel/screenshot.png)

The Range Input component wraps an HTML `<input type="range">` element.

## How to use

```html
<input data-montage-id="range" type="range">
```

```json
"range": {
    "prototype": "matte/ui/input-range.reel",
    "properties": {
        "element": {"#": "range"}
    }
}
```


## Available properties

* `max` - Maximal value.
* `value` - Current value of the Range Input.



## Customizing with CSS

* `.digit-InputRange` - The track of the InputRange element
* `.digit-InputRange-thumb` - The thumb of the InputRange element

```css
.digit-InputRange {
    border-color: blue;
}
.digit-InputRange-thumb {
    background-color: pink;
}
```



## Browser support

* Chrome (latest)
* Safari 5+
* Firefox 4+
* Opera (latest)
