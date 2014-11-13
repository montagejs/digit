/**
    @module ui/video-control.reel/video-control-track.reel
    @requires montage
    @requires montage/ui/component
*/
var Montage = require("montage").Montage;
var AbstractSlider = require("montage/ui/base/abstract-slider").AbstractSlider;
var AbstractProgressBar = require("montage/ui/base/abstract-progress-bar").AbstractProgressBar;
var Component = require("montage/ui/component").Component;
var Promise = require("montage/core/promise").Promise;

/**
    Description TODO
    @class VideoControlTrack
    @extends Component
*/
exports.VideoControlTrack = Montage.create(Component, /** @lends VideoControlTrack# */ {

    /**
     * @private
     */
    constructor: {
        value: function VideoControlTrack() {
            this.super();
            this.addOwnPropertyChangeListener("time", this);

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

    formattedTime: {
        value: 0
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
    },


    // Machinery

    handleTimeChange: {
        value: function(changeValue, key, object) {
            this.formattedTime = this._prettyTime(this.time);
        }
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

exports.Slider = Montage.create(AbstractSlider, {

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


var ProgressBar = exports.ProgressBar = Montage.create(AbstractProgressBar, {

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
