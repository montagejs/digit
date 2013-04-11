# Map

![Map](https://raw.github.com/montagejs/montage-lab/master/skeleton/mobile/components/map.reel/screenshot.png)

The Map component adds a static maps image form Google Maps.

## How to use

```html
<div data-montage-id="map"></div>
```

```json
"map": {
    "prototype": "matte/ui/map.reel",
    "properties": {
        "element": {"#": "map"}
    }
}
```


## Available properties

* `center` - Defines the center of the map. This parameter takes a location as either a comma-separated {latitude,longitude} pair (e.g. "40.714728,-73.998672") or a string address (e.g. "city hall, new york, ny").
* `zoom` - Defines the zoom level of the map, which determines the magnification level of the map.
* `size` - Size of the map in pixels (e.g. "500x400").



## Customizing with CSS

* `.digit-Map` - The Map element
* `.digit-Map-img` - The actually map image
* `.digit-Map-link` - The external link button

```css
.digit-Map {
    border-radius: 0;
}
```



## Browser support

* Chrome (latest)
* Safari 5+
* Firefox 4+
* Opera (latest)
