# TextArea

![TextArea](https://raw.github.com/montagejs/digit/edge/ui/text-area.reel/screenshot.png)

## How to use

```html
<textarea data-montage-id="textArea"></textarea>
```

```json
"textArea": {
    "prototype": "matte/ui/text-area.reel",
    "properties": {
        "element": {"#": "textArea"}
    }
}
```

## Available properties

* `value` - The text of the text area.
* `placeholderValue` - A hint to the user of what can be entered in the
control.
* `enalbed` - The state of the text area.


## Customizing with CSS

* `.digit-TextArea` - The TextArea element

```css
.digit-TextArea {
    border-color: blue;
}
```



## Browser support

* Chrome (latest)
* Safari 5+
* Firefox 4+
* Opera (latest)
