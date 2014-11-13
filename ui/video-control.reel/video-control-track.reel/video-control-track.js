/**
    @module ui/video-control.reel/video-control-track.reel
    @requires montage
    @requires montage/ui/component
*/
var AbstractSlider = require("montage/ui/base/abstract-slider").AbstractSlider,
    AbstractProgressBar = require("montage/ui/base/abstract-progress-bar").AbstractProgressBar,
    Component = require("montage/ui/component").Component;

/**
    Description TODO
    @class VideoControlTrack
    @extends Component
*/
exports.VideoControlTrack = Component.specialize(/** @lends VideoControlTrack# */ {

    /**
     * @private
     */
    constructor: {
        value: function VideoControlTrack() {
            this.super();

            this.defineBinding("max", {"<-": "videoController.duration"});
            this.defineBinding("time", {"<-": "videoController.position"});
        }
    },

    // Properties

    time: {
        value: 0
    },

    slider: {
        value: null
    },

    videoController: {
        value: null
    },

    _wasPlaying: {
        value: false
    },


    sliderTranslateStart: {
        value: function (e) {
            if(this.videoController.status === this.videoController.PLAYING) {
                this._wasPlaying = true;
                this.videoController.pause();
            } else {
                this._wasPlaying = false;
            }
        }
    },

    sliderTranslateEnd: {
        value: function (e) {
            if (this._wasPlaying) {
                this.videoController.unpause();
            }
        }
    }

});

exports.Slider = AbstractSlider.specialize({

    constructor: {
        value: function Slider() {
            this.super();
            this.defineBinding("max", {"<-": "controller.max"});
            this.defineBinding("value", {"<->": ".controller.videoController.position", source: this});

        }
    },

    hasTemplate: {
        value: false
    },

    controller: {
        value: false
    },

    handleThumbTranslateStart: {
        value: function (e) {
            AbstractSlider.handleThumbTranslateStart.apply(this, arguments);

            if (this.controller && typeof this.controller.sliderTranslateStart === "function") {
                this.controller.sliderTranslateStart.apply(this.controller, arguments);
            }
        }
    },

    handleThumbTranslateEnd: {
        value: function (e) {
            AbstractSlider.handleThumbTranslateEnd.apply(this, arguments);

            if (this.controller && typeof this.controller.sliderTranslateEnd === "function") {
                this.controller.sliderTranslateEnd.apply(this.controller, arguments);
            }
        }
    }

});


var ProgressBar = exports.ProgressBar = AbstractProgressBar.specialize({

    constructor: {
        value: function ProgressBar() {
            this.super();
            this.defineBinding("max", {"<-": "controller.max"});
            this.defineBinding("value", {"<-": "controller.time"});
        }
    },

    _max: {
        value: 100
    },

    max: {
        set: function (value) {
            if (!isNaN(value)) {
                var number = +value;

                if (this._max !== number) {
                    this._max = number;
                    this.needsDraw = true;
                }
            }
        },
        get: function () {
            return this._max;
        }
    },

    _value: {
        value: 0
    },

    value: {
        set: function (value) {
            if (!isNaN(value)) {
                var number = +value;

                if (this._value !== number) {
                    this._value = number > this._max ? this._max : number < 0 ? 0 : number;
                    this.needsDraw = true;
                }
            }
        },
        get: function () {
            return this._value;
        }
    },

    controller: {
        value: false
    },

    hasTemplate: {
        value: false
    },

    _progressBarValueElement: {
        value: null
    },

    draw: {
        value: function () {
            this._progressBarValueElement.style.left = this.max > 0 ? -(100 - ((100 * this._value) / this.max)) + "%" : "-100%";
        }
    }

});
