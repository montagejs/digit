/**
    @module "ui/video-control.reel"
    @requires montage
    @requires montage/ui/component
*/
var Component = require("montage/ui/component").Component,
    AbstractButton = require("montage/ui/base/abstract-button").AbstractButton;

/**
    Description TODO
    @class module:"ui/video-control.reel".VideoControl
    @extends module:montage/ui/component.Component
*/
exports.VideoControl = Component.specialize( /** @lends module:"ui/video-control.reel".VideoControl# */ {

    // Lifecycle

    /**
     * @private
     */
    constructor: {
        value: function VideoControl() {
            this.super();

            this.defineBinding("time", {"<-": "videoController.position"});
            this.addPathChangeListener("videoController.status", this, "handleControllerStatusChange");
        }
    },

    // Properties
    videoController: {
        value: null
    },

    _time: {
        value: 0
    },

    time: {
        set: function (time) {
            if (!isNaN(time)) {
                var timeNumber = +time;

                if (timeNumber >= 0 && timeNumber !== this._time) {
                    this._time = timeNumber;
                    this.formattedTime = this._prettyTime(timeNumber, this.videoController.duration);
                }
            }
        },
        get: function () {
            return this._time;
        }
    },

    formattedTime: {
        value: null
    },

    // Event Handlers

    handlePlayAction: {
        value: function (e) {
            if (this.videoController.status === this.videoController.PLAYING) {
                this.videoController.pause();
            } else if (this.videoController.status === this.videoController.PAUSED) {
                this.videoController.unpause();
            } else {
                this.videoController.play();
            }
        }
    },


    handleFullScreenAction: {
        value: function (e) {
            this.video.toggleFullScreen();
        }
    },


    // Machinery

    handleControllerStatusChange: {
        value: function (newValue, path, myObject) {
            if (this.videoController) {
                if (newValue === this.videoController.PLAYING) {
                    this.classList.add("digit-VideoControl--playing");
                } else {
                    this.classList.remove("digit-VideoControl--playing");
                }
            }
        }
    },

    _prettyTime: {
        value: function(time, duration) {
            var shouldDisplayHours, sec, min, hour;

            time = (0.5 + time) << 0;
            shouldDisplayHours = ~~(duration / 3600) > 0;

            if (time === 0) {
                return shouldDisplayHours ? "00:00:00" : "00:00";
            }

            sec = time % 60;
            min = ~~(time / 60) % 60;
            hour = ~~(time / 3600);

            return (hour === 0 ? shouldDisplayHours ? "00:" : "" : hour < 10 ? "0" + hour + ":" : hour + ":") +
                (min < 10 ? "0" + min : min) + ":" +
                (sec < 10 ? "0" + sec : sec);
        }
    }

});

exports.Button = AbstractButton.specialize({
    hasTemplate: {value: false}
});
