# Button

![Button](screenshot.png)

The Button component wraps a <button> or <input type="button"> element, and exposes the standard attributes of those elements as properties, which you can use with data binding, for example.

## How to use

```json
"button": {
    "prototype": "digit/ui/button.reel",
    "properties": {
        "element": {"#": "button"}
    }
}
```

```html
<button data-montage-id="button">Button</button>
```


## Available properties

* `label` - Label of the button.



## Customizing with CSS

* `.digit-Button` - The Button element

```css
.digit-Button {
    background-color: pink;
}
```



------------------------------------



# ButtonGroup

![ButtonGroup](screenshot-group.png)

The ButtonGroup component wraps multiple `Button`s and groups them together.

## How to use

```json
"button-1": {
    "prototype": "digit/ui/button.reel",
    "properties": {
        "element": {"#": "button-1"}
    }
}
"button-2": {
    "prototype": "digit/ui/button.reel",
    "properties": {
        "element": {"#": "button-2"}
    }
}
"button-3": {
    "prototype": "digit/ui/button.reel",
    "properties": {
        "element": {"#": "button-3"}
    }
}
```

```html
<span class="digit-ButtonGroup">
    <button data-montage-id="button-1">1</button>
    <button data-montage-id="button-2">2</button>
    <button data-montage-id="button-3">3</button>
</span>
```


## Available properties

* None - The ButtonGroup only adds styling



## Customizing with CSS

* `.digit-ButtonGroup` - The wrapper that holds multiple `Button`s.

```css
.digit-ButtonGroup {
    border-radius: 4px;
}

.digit-ButtonGroup > .digit-Button {
    background-color: pink;
}

```