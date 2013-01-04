# Textarea

![Textarea](https://raw.github.com/montagejs/montage-lab/master/skeleton/mobile/components/textarea.reel/screenshot.png)

The InputText component wraps an HTML `<textarea>` element.

## How to use

```html
<textarea data-montage-id="textarea"></textarea>
```

```json
"textarea": {
    "prototype": "montage/ui/textarea.reel",
    "properties": {
        "element": {"#": "textarea"}
    }
}
```


## Available properties

* `maxlength` - This attribute specifies the maximum number of characters (in Unicode code points) that the user can enter.
* `placeholder` - A hint to the user of what can be entered in the control.



## Customizing with CSS

* `.montage-Textarea` - The Textarea element

```css
.montage-Textarea {
    border-color: blue;
}
```



## Browser support

* Chrome (latest)
* Safari 5+
* Firefox 4+
* Opera (latest)
