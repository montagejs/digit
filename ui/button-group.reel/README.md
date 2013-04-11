# Button Group

![Button Group](https://raw.github.com/montagejs/montage-lab/master/skeleton/mobile/components/button-group.reel/screenshot.png)

The Button Group component wraps multiple <button> elements and groups them together.

## How to use

```html
<div data-montage-id="buttonGroup">
    <button data-montage-id="buttonGroupItem1">1</button>
    <button data-montage-id="buttonGroupItem2">2</button>
    <button data-montage-id="buttonGroupItem3">3</button>
</div>
```

```json
"buttonGroup": {
    "prototype": "matte/ui/button-group.reel",
    "properties": {
        "element": {"#": "buttonGroup"}
    }
}
"buttonGroupItem1": {
    "prototype": "matte/ui/button.reel",
    "properties": {
        "element": {"#": "buttonGroupItem1"}
    }
}
"buttonGroupItem2": {
    "prototype": "matte/ui/button.reel",
    "properties": {
        "element": {"#": "buttonGroupItem2"}
    }
}
"buttonGroupItem3": {
    "prototype": "matte/ui/button.reel",
    "properties": {
        "element": {"#": "buttonGroupItem3"}
    }
}
```


## Available properties

* none - CSS only



## Customizing with CSS

* `.digit-ButtonGroup` - The Button element

```css
.digit-ButtonGroup {
    background-color: pink;
}
```



## Browser support

* Chrome (latest)
* Safari 5+
* Firefox 4+
* Opera (latest)
