# Select

![Button](screenshot.png)

The Select Input component wraps an HTML `<select>` element.

## How to use

```json
"select": {
    "prototype": "digit/ui/select.reel",
    "properties": {
        "element": {"#": "select"},
        "content": [
            {"label": "California", "code": "CA"},
            {"label": "Hawaii", "code": "HI"},
            {"label": "New York", "code": "NY"}
        ]
    }
}
```

```html
<select data-montage-id="select"></select>
```


## Available properties

* `value` - Value of the select element.



## Customizing with CSS

* `.digit-Select` - The select element

```css
.digit-Select {
    background-color: pink;
}
```



## Browser support

* Chrome (latest)
* Firefox (latest)
* Opera (latest)
* IE 10+
* Safari 7+
