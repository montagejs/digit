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

* `.digit-Slider` - The track of the Slider element
* `.digit-Slider-thumb` - The thumb of the Slider element
* `.digit-Slider-thumbTrack` - The element which bounds the motion of the thumb, If the width of the thumb is changed the right property should be adjusted.

```css
.digit-Slider {
    border-color: blue;
}
.digit-Slider-thumb {
    background-color: pink;
}
```



## Browser support

* Chrome (latest)
* Safari 5+
* Firefox 4+
* Opera (latest)
