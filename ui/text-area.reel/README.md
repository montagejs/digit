# TextArea

![TextArea](screenshot.png)

## How to use

```json
"textArea": {
    "prototype": "digit/ui/text-area.reel",
    "properties": {
        "element": {"#": "textArea"}
    }
}
```

```html
<textarea data-montage-id="textArea"></textarea>
```



## Available properties

* `value` - The text of the text area.
* `placeholderValue` - A hint to the user of what can be entered in the control.
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
* Firefox (latest)
* Opera (latest)
* IE 10+
* Safari 7+
