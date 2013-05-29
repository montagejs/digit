# Select

![Button](screenshot.png)

The Select Input component wraps an HTML `<select>` element.

## How to use

```json
"select": {
    "prototype": "digit/ui/select.reel",
    "properties": {
        "element": {"#": "select"}
    }
}
```

```html
<select data-montage-id="select">
    <option value="CA">California</option>
    <option value="HI">Hawaii</option>
    <option value="NY">New York</option>
</select>
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
