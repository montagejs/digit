# Text Input

![Text Input](https://raw.github.com/montagejs/montage-lab/master/skeleton/mobile/components/input-text.reel/screenshot.png)

The InputText component wraps an HTML `<input type="text">` element.

## How to use

```html
<input data-montage-id="text" type="text">
```

```json
"text": {
    "prototype": "montage/ui/input-text.reel",
    "properties": {
        "element": {"#": "text"}
    }
}
```


## Available properties

* `maxlength` - This attribute specifies the maximum number of characters (in Unicode code points) that the user can enter.
* `placeholder` - A hint to the user of what can be entered in the control.



## Customizing with CSS

* `.montage-InputText` - The InputText element

```css
.montage-InputText {
    border-color: blue;
}
```



## Browser support

* Chrome (latest)
* Safari 5+
* Firefox 4+
* Opera (latest)
