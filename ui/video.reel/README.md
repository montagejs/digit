# Video

Status: __In progress__

![Video](https://raw.github.com/montagejs/digit/master/ui/video.reel/screenshot.png)

The Video component wraps a video element and provides custom controls.

## How to use

```html
<div data-montage-id="video"></div>
```

```json
"video": {
    "prototype": "ui/video.reel",
    "properties": {
        "element": {"#": "video"},
        "src": "movie.ogg",
        "posterSrc": "poster.png"
    }
}
```


## Available properties

* `src` - Source file of the video.
* `posterSrc` - An image that gets shown before the video plays.
* `sources` - Array of video source files.
* `videoController` - The MediaController object used to control playback.


## Using multiple sources

Multiple source files can be specified with the `sources` property. The Video component will use the first source with a supported media type.

```json
"video": {
    "prototype": "ui/video.reel",
    "properties": {
        "element": {"#": "video"},
        "sources": [
            {"src": "movie.ogg", "type": "video/ogg"},
            {"src": "movie.mp4", "type": "video/mpeg"}
        ]
    }
}
```


## Synchronized playback

Playback of multiple videos can be synchronized by using the same MediaController.

```html
<div data-montage-id="video1"></div>
<div data-montage-id="video2"></div>
```

```json
"video1": {
    "prototype": "ui/video.reel",
    "properties": {
        "element": {"#": "video1"},
        "videoController" : {"@": "mediaController"},
        "src": "movie1.mp4"
    }
},
"video2": {
    "prototype": "ui/video.reel",
    "properties": {
        "element": {"#": "video2"},
        "videoController" : {"@": "mediaController"},
        "src": "movie2.mp4"
    }
},
"mediaController": {
    "prototype": "montage/core/media-controller",
    "properties": {
        "autoplay": false
    }
}
```

## Customizing with CSS

* `.digit-Video` - The Video component
* `.digit-Video-frame` - The actual video element
* `.digit-Video-cover` - Initial cover with a play button
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
