# Video

Status: __In progress__

![Video](https://raw.github.com/montagejs/digit/master/video.reel/screenshot.png)

The Video component wraps a video element and provides custom controls.

## How to use

```html
<video data-montage-id="video"></video>
```

```json
"video": {
    "prototype": "matte/ui/video.reel",
    "properties": {
        "element": {"#": "video"}
    }
}
```


## Available properties

* `src` - Source file of the video.
* `poster` - An image that gets shown before the video plays.
* `size` - Size of the video in pixels (e.g. "500x400").
* `...`



## Customizing with CSS

* `.digit-Video` - The Video component
* `.digit-Video-frame` - The actual video element
* `.digit-Video-cover` - Initial cover with a the play button
* `.digit-Video-cover-button` - Initial play button
* `.digit-Video-controls` - Controls
* `.digit-Video-controls-button-play` - Play button
* `.digit-Video-controls-button-fullscreen` - Fullscreen button
* `.digit-Video-controls-track` - Video track
* `.digit-Video-controls-track-timeline` - Timeline bar
* `.digit-Video-controls-track-timeline-progress` - Progress of the timeline bar
* `.digit-Video-controls-track-thumb` - Handle with remaining time


```css
.digit-Video-controls {
    background: pink;
}
```



## Browser support

* TBD
