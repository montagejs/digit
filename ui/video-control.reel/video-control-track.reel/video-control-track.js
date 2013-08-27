/**
    @module ui/video-control.reel/video-control-track.reel
    @requires montage
    @requires montage/ui/component
*/
var Montage = require("montage").Montage;
var AbstractSlider = require("montage/ui/base/abstract-slider").AbstractSlider;
var Promise = require("montage/core/promise").Promise;

/**
    Description TODO
    @class VideoControlTrack
    @extends Component
*/
exports.VideoControlTrack = Montage.create(AbstractSlider, /** @lends VideoControlTrack# */ {

    // Lifecycle

    /**
     * @private
     */
    /**
     * @private
     */
    constructor: {
        value: function VideoControlTrack() {
            AbstractSlider.constructor.call(this); // super
            this.addOwnPropertyChangeListener("time", this);

//            this.defineBinding("value", {"<->": "controller.position", source: this});
            this.defineBinding("max", {"<-": "videoController.duration", source: this});
            this.defineBinding("time", {"<-": "videoController.position", source: this});
        }
    },

    // Event Listeners

    handleThumbTranslateStart: {
        value: function (e) {
            AbstractSlider.handleThumbTranslateStart.apply(this, arguments);
            if(this.videoController.status === this.videoController.PLAYING ) {
                this._wasPlaying = true;
                this.videoController.pause();
            } else {
                this._wasPlaying = false;
            }
        }
    },

    handleThumbTranslate: {
        value: function (event) {
            AbstractSlider.handleThumbTranslate.apply(this, arguments);

        }
    },

    handleThumbTranslateEnd: {
        value: function (e) {
            AbstractSlider.handleThumbTranslateEnd.apply(this, arguments);
            if ( this._wasPlaying ) {
                this.videoController.unpause();
            }
        }
    },


    // Elements for AbstractSlider

    _sliderThumbTrackElement: {
        value: null
    },

    _sliderThumbElement: {
        value: null
    },

    // Properties

    time: {
        value: 0
    },

    formattedTime: {
        value: 0
    },

    controller: {
        value: null
    },

    // Machinery

    handleTimeChange: {
        value: function(changeValue, key, object) {
            this.formattedTime = this._prettyTime(this.time);
        }
    },

    _wasPlaying: {
        value: false
    },

    _prettyTime: {
        value: function(time) {

            var sec, min, hour;
            time = parseInt(time, 10);
            if (isNaN(time) || time < 0) {
                return "";
            }
            sec = time % 60;
            min = Math.floor(time / 60) % 60;
            hour = Math.floor(time / 3600);
            return (hour > 0 ? hour + ":" : "") + (min < 10 ? min : min) + ":" + (sec < 10 ? "0"+sec : sec);
        }
    }

});
