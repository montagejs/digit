# Badge

![Badge](screenshot.png)

The Badge can be used as a notification counter or highlighting.

## How to use

```json
"badge": {
    "prototype": "digit/ui/badge.reel",
    "properties": {
        "element": {"#": "badge"}
    }
}
```

```html
<span data-montage-id="badge"></span>
```



## Available properties

* `value` - The text of the Badge.



## Customizing with CSS

* `.digit-Badge` - The Badge element

```css
.digit-Badge {
    background: red;
}
```



## Browser support

* Chrome (latest)
* Firefox (latest)
* Opera (latest)
* IE 10+
* Safari 7+
