# Toggle

![Toggle](https://raw.github.com/montagejs/montage-lab/master/skeleton/mobile/components/toggle.reel/screenshot.png)

The Toggle component turns an `<input type="checkbox">` element into a toggle switch.

## How to use

```html
<input data-montage-id="toggle" type="checkbox">
```

```json
"toggle": {
    "prototype": "montage/ui/toggle.reel",
    "properties": {
        "element": {"#": "toggle"}
    }
}
```


## Available properties

* `checked` - The toggle is turned ON.


## Customizing with CSS

* `.montage-Toggle` - The track of the Toggle component
* `.montage-Toggle-thumb` - The thumb of the Toggle component

```css
.montage-Toggle {
    border-color: blue;
}
.montage-Toggle-thumb {
    background-color: pink;
}
```



## Browser support

* Chrome (latest)
* Safari 5+
