var Montage = require("montage/core/core").Montage,
    Component = require("montage/ui/component").Component;

exports.Audio = Montage.create(Component, {

    enterDocument: {
        value: function(firstTime) {
            if (firstTime) {
                // Just temporary to test.
                var isPlaying = false;
                var _el = this._element;
                var _audio = _el.getElementsByTagName("audio")[0];

                _el.addEventListener("click", function(event) {
                    if(!isPlaying) {
                        _audio.play();
                        _el.classList.add("montage-Audio--isPlaying");
                        isPlaying = true;
                    } else {
                        _audio.pause();
                        _el.classList.remove("montage-Audio--isPlaying");
                        //setTimeout( function() { _el.classList.remove("montage-Video--showControls"); } , 5000)
                        isPlaying = false;
                    }
                }, true);
            }
        }
    }

});
