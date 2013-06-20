# Text

![Text](screenshot.png)

The Text component can be used for any kind of dynamic text.

## How to use

```json
"text": {
    "prototype": "digit/ui/text.reel",
    "properties": {
        "element": {"#": "text"}
    }
}
```

```html
<span data-montage-id="text"></span>
```



## Available properties

* `value` - The string of the Text component.



## Customizing with CSS

* `.digit-Text` - The Text element

```css
.digit-Text {
    color: red;
}
```
