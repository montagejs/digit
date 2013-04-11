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

* `.digit-Audio` - The Audio component
* `.digit-Audio-file` - The actual audio element, hidden by default
* `.digit-Audio-controls` - Controls
* `.digit-Audio-controls-poster` - Cover art
* `.digit-Audio-controls-button-play` - Play button
* `.digit-Audio-controls-track` - Audio track
* `.digit-Audio-controls-track-timeline` - Timeline bar
* `.digit-Audio-controls-track-timeline-progress` - Progress of the timeline bar
* `.digit-Audio-controls-track-thumb` - Handle with remaining time


```css
.digit-Audio-controls {
    background: pink;
}
```



## Browser support

* TBD
