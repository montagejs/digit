# Select

![Button](https://raw.github.com/montagejs/montage-lab/master/skeleton/mobile/components/select.reel/screenshot.png)

The Select Input component wraps an HTML `<select>` element.

## How to use

```html
<select data-montage-id="select">
    <option value="CA">California</option>
    <option value="HI">Hawaii</option>
    <option value="NY">New York</option>
</select>
```

```json
"select": {
    "prototype": "montage/ui/select.reel",
    "properties": {
        "element": {"#": "select"}
    }
}
```


## Available properties

* `value` - Value of the select element.



## Customizing with CSS

* `.montage-Select` - The Button element

```css
.montage-Select {
    background-color: pink;
}
```



## Browser support

* Chrome (latest)
* Safari 5+
* Firefox 4+
* Opera (latest)
