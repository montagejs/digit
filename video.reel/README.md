# Video

Status: __In progress__

![Video](https://raw.github.com/montagejs/montage-lab/master/skeleton/mobile/components/video.reel/screenshot.png)

The Video component wraps a video element and provides custom controls.

## How to use

```html
<video data-montage-id="video"></video>
```

```json
"video": {
    "prototype": "montage/ui/video.reel",
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

* `.montage-Video` - The Video component
* `.montage-Video-frame` - The actual video element
* `.montage-Video-cover` - Initial cover with a the play button
* `.montage-Video-cover-button` - Initial play button
* `.montage-Video-controls` - Controls
* `.montage-Video-controls-button-play` - Play button
* `.montage-Video-controls-button-fullscreen` - Fullscreen button
* `.montage-Video-controls-track` - Video track
* `.montage-Video-controls-track-timeline` - Timeline bar
* `.montage-Video-controls-track-timeline-progress` - Progress of the timeline bar
* `.montage-Video-controls-track-thumb` - Handle with remaining time


```css
.montage-Video-controls {
    background: pink;
}
```



## Browser support

* TBD
