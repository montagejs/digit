# Slider

![Slider](screenshot.png)

The Slider component wraps an HTML `<input type="range">` element.

## How to use

```json
"slider": {
    "prototype": "digit/ui/slider.reel",
    "properties": {
        "element": {"#": "slider"}
    }
}
```

```html
<input data-montage-id="slider" type="range">
```


## Available properties

* `"min": 10` - Minimal value.
* `"max": 50` - Maximal value.
* `"value": 20` - Current value of the Slider.
* `"step": 5` - Sets the increment value.
* `"axis": "vertical"` - Changes the axis to vertical.



## Customizing with CSS

* `.digit-Slider` - The track of the Slider element
* `.digit-Slider-thumb` - The thumb of the Slider element

```css
.digit-Slider {
    border-color: blue;
}
.digit-Slider-thumb {
    background-color: pink;
}
```