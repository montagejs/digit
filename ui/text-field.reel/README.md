# TextField

![TextField](screenshot.png)

The TextField component wraps an HTML `<input type="text">` element.

## How to use

```json
"textField": {
    "prototype": "digit/ui/text-field.reel",
    "properties": {
        "element": {"#": "textField"}
    }
}
```

```html
<input data-montage-id="textField" type="text">
```




## Available properties

* `value` - The text of the text field.
* `placeholderValue` - A hint to the user of what can be entered in the control.
* `enabled` - The state of the text field.


## Customizing with CSS

* `.digit-TextField` - The TextField element

```css
.digit-TextField {
    border-color: blue;
}
```



## Browser support

* Chrome (latest)
* Firefox (latest)
* Opera (latest)
* IE 10+
* Safari 7+
