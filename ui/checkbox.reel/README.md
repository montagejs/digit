# Checkbox

![Checkbox](https://raw.github.com/montagejs/montage/edge/checkbox.reel/screenshot.png)

## How to use

```html
<span data-montage-id="checkbox"></span>
```

```json
"checkbox": {
    "prototype": "digit/ui/checkbox.reel",
    "properties": {
        "element": {"#": "checkbox"}
    }
}
```


## Available properties

* `checked` - The checked state of the checkbox.
* `value` - The value of the checkbox.
* `enabled` - The state of the checkbox.


## Customizing with CSS

* `.digit-Checkbox` - The checkbox element

```css
.digit-Checkbox {
    border-color: blue;
}
```
