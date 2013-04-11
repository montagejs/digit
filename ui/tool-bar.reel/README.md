# Tool Bar

![Tool Bar](https://raw.github.com/montagejs/digit/master/tool-bar.reel/screenshot.png)

The Tool Bar wraps a `<menu>` element and adds groups of buttons with icons.

## How to use

```html
<nav data-montage-id="toolBar"></nav>
```

```json
"toolBar": {
    "prototype": "matte/ui/tool-bar.reel",
    "properties": {
        "element": {"#": "toolBar"}
    }
}
```


## Available properties

* `groups` - Button groups.
* `align` - Aligns the button groups. Default is centered. Options are:
    * `left`
    * `right`
    * `justify`



## Customizing with CSS

* `.digit-ToolBar` - The Tool Bar component
* `.digit-ToolBar-group` - Visually groups button together
* `.digit-ToolBar-button` - The Tool Bar button

```css
.digit-ToolBar-button {
    font-size: 20px;
}
```




## Icons

The Tool Bar works best with icons. A good place to find lots of icon sets is the [icomoon app](http://icomoon.io/app/). You can choose only the icons you need for smaller file size. In the example below we're using the [Entypo](http://www.entypo.com) icons. 

Usage:
```html
<button data-icon="pictures">Pictures</button>
```






## Browser support

* Chrome (latest)
* Safari 5+
