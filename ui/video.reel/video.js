var Montage = require("montage/core/core").Montage,
    Component = require("montage/ui/component").Component;

exports.Video = Montage.create(Component, {

    enterDocument: {
        value: function(firstTime) {
            if (firstTime) {
                // Just temporary to test.
                var isPlaying = false;
                var _el = this._element;
                var _video = _el.getElementsByTagName("video")[0];

                _el.addEventListener("click", function(event) {
                    if(!isPlaying) {
                        _video.play();
                        _el.classList.add("digit-Video--isPlaying");
                        isPlaying = true;
                    } else {
                        _el.classList.toggle("digit-Video--showControls");
                        //setTimeout( function() { _el.classList.remove("digit-Video--showControls"); } , 5000)
                    }
                }, true);
            }
        }
    }

});
