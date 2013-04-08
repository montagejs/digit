var Montage = require("montage/core/core").Montage,
    Component = require("montage/ui/component").Component;

exports.Video = Montage.create(Component, {

    prepareForDraw: {
        value: function() {
            
            // Just temporary to test.
            var isPlaying = false;
            var _el = this._element;
            var _video = _el.getElementsByTagName("video")[0];
            
            _el.addEventListener("click", function(event) {
                if(!isPlaying) {
                    _video.play();
                    _el.classList.add("montage-Video--isPlaying");
                    isPlaying = true;
                } else {
                    _el.classList.toggle("montage-Video--showControls");
                    //setTimeout( function() { _el.classList.remove("montage-Video--showControls"); } , 5000)
                }
            }, true);
        }
    }

});