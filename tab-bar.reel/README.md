# Tab Bar

![Tab Bar](https://raw.github.com/montagejs/digit/master/tab-bar.reel/screenshot.png)
![Tab Bar + icons](https://raw.github.com/montagejs/digit/master/tab-bar.reel/screenshot-icons.png)
![Tab Bar - icons only](https://raw.github.com/montagejs/digit/master/tab-bar.reel/screenshot-iconsonly.png)

The Tab Bar wraps a <nav> element and adds tab buttons. It can be used as text only or with icons.

## How to use

```html
<nav data-montage-id="tabBar"></nav>
```

```json
"tabBar": {
    "prototype": "montage/ui/tab-bar.reel",
    "properties": {
        "element": {"#": "tabBar"}
    }
}
```


## Available properties

* `items` - Tab buttons.
* `active` - Current active tab



## Customizing with CSS

* `.montage-TabBar` - The Tab Bar component
* `.montage-TabBar-tab` - The tab button

```css
.montage-TabBar-tab {
    background-color: pink;
}
```


## Icons

The Tab Bar can also be used with additional icons or icons only. A good place to find lots of icon sets is the [icomoon app](http://icomoon.io/app/). You can choose only the icons you need for smaller file size. In the example below we're using the [Entypo](http://www.entypo.com) icons. 

## Icons + Label
```html
<button data-icon="pictures">Pictures</button>
```
![Tab Bar + icons](https://raw.github.com/montagejs/digit/master/tab-bar.reel/screenshot-icons.png)


## Icons only
```html
<button class="montage-TabBar--iconOnly" data-icon="pictures">Pictures</button>
```
![Tab Bar - icons only](https://raw.github.com/montagejs/digit/master/tab-bar.reel/screenshot-iconsonly.png)



## Browser support

* Chrome (latest)
* Safari 5+
* Firefox 4+
* Opera (latest)
