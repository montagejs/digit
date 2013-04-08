# Audio

Status: __In progress__

![Audio](https://raw.github.com/montagejs/digit/master/audio.reel/screenshot.png)

The Audio component wraps an audio element and provides custom controls.

## How to use

```html
<audio data-montage-id="audio"></audio>
```

```json
"audio": {
    "prototype": "matte/ui/audio.reel",
    "properties": {
        "element": {"#": "audio"}
    }
}
```


## Available properties

* `src` - Source file of the audio.
* `poster` - the cover art.
* `...`



## Customizing with CSS

* `.montage-Audio` - The Audio component
* `.montage-Audio-file` - The actual audio element, hidden by default
* `.montage-Audio-controls` - Controls
* `.montage-Audio-controls-poster` - Cover art
* `.montage-Audio-controls-button-play` - Play button
* `.montage-Audio-controls-track` - Audio track
* `.montage-Audio-controls-track-timeline` - Timeline bar
* `.montage-Audio-controls-track-timeline-progress` - Progress of the timeline bar
* `.montage-Audio-controls-track-thumb` - Handle with remaining time


```css
.montage-Audio-controls {
    background: pink;
}
```



## Browser support

* TBD
