# List

![List](https://raw.github.com/montagejs/digit/master/list.reel/screenshot.png)

The List component wraps an `<ul>` element. It supports different kind of list item types.

## How to use

```html
<ul data-montage-id="list"></ul>
```

```json
"list": {
    "prototype": "matte/ui/list.reel",
    "properties": {
        "element": {"#": "list"}
    }
}
```


## Available properties

* `items` - List items.



## Customizing with CSS

* `.montage-List` - The List component
* `.montage-List-item` - The list item (`<li>`)

```css
.montage-List-item {
    background-color: pink;
}
```


## Different List-item types

A List-item can contain just a label with text. Or it can be mixed and matched with the following: 

* `.montage-List-item-label` - Can have text inside.
* `.montage-List-item-cell` - An empty container that centers its child. This is great for adding other controls like a Checkbox or Toggle.
* `.montage-List-item-badge` - Pushed back text. Mostly used for numbers, notifications or other kind of text/label that should be highlighted.
* `.montage-List-item-icon` - An icon. Great for giving a visual hint or group the items.
* `.montage-List-item-image` - And image. Can be used for avatars or thumbnails. Minimum size: 50x50 (100x100 for Retina). Also note that if the images are not a square, they get cropped and centered.

![List-item types](https://raw.github.com/montagejs/digit/master/list.reel/screenshot-types.png)




## Browser support

* Chrome (latest)
* Safari 5+
