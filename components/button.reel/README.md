# Button

![Button](https://raw.github.com/montagejs/montage-lab/master/skeleton/mobile/components/button.reel/screenshot.png)

The Button component wraps a <button> or <input type="button"> element, and exposes the standard attributes of those elements as properties, which you can use with data binding, for example.

## How to use

```html
<button data-montage-id="button">Button</button>
```

```json
"progress": {
    "prototype": "montage/ui/button.reel",
    "properties": {
        "element": {"#": "button"}
    }
}
```


## Available properties

* `label` - Label of the button.



## Customizing with CSS

* `.montage-Button` - The Button element

```css
.montage-Button {
    background-color: pink;
}
```



## Browser support

* Chrome (latest)
* Safari 5+
* Firefox 4+
* Opera (latest)
