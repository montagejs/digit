# Notification

![Notification](https://raw.github.com/montagejs/digit/master/notification.reel/screenshot.png)

The Notification component will slide down from the top as an overlay. It will automatically disappear.

## How to use

```html
<div data-montage-id="Notification"></div>
```

```json
"Notification": {
    "prototype": "montage/ui/notification.reel",
    "properties": {
        "element": {"#": "Notification"}
    }
}
```


## Available properties

* `type` - `alert` only has ok button, `confirm` has cancel and ok button
* `title` - Title or info of the Modal.
* `content` - A string or another reel with custom content.
* `state` - State if open
* ...


## Customizing with CSS

* `.digit-Notification` - The container
* `.digit-Notification-icon` - The icon
* `.digit-Notification-message` - The message

```css
.digit-Notification {
    background-color: pink;
}
```



## Browser support

TBD
