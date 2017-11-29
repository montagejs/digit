# Toggle Switch

![Toggle Switch](screenshot.png)

The Toggle Switch component turns an `<input type="checkbox">` element into a toggle switch.

## How to use

```html
<input data-montage-id="toggle-switch" type="checkbox">
```

```json
"toggle-switch": {
    "prototype": "ui/toggle-switch.reel",
    "values": {
        "element": {"#": "toggle-switch"}
    }
}
```


## Available properties

* `checked` - The toggle switch is turned ON.


## Customizing with CSS

* `.digit-ToggleSwitch` - The track of the Toggle component
* `.digit-ToggleSwitch-thumb` - The thumb of the Toggle component

```css
.digit-ToggleSwitch {
    border-color: blue;
}
.digit-ToggleSwitch-thumb {
    background-color: pink;
}
```



## Browser support

* Chrome (latest)
* Firefox (latest)
* Opera (latest)
* IE 10+
* Safari 7+
