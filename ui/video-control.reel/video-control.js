/**
    @module "ui/video-control.reel"
    @requires montage
    @requires montage/ui/component
*/
var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component;
var AbstractButton = require("montage/ui/base/abstract-button").AbstractButton;

/**
    Description TODO
    @class module:"ui/video-control.reel".VideoControl
    @extends module:montage/ui/component.Component
*/
exports.VideoControl = Montage.create(Component, /** @lends module:"ui/video-control.reel".VideoControl# */ {

    // Lifecycle

    /**
     * @private
     */
    constructor: {
        value: function VideoControl() {
            Component.constructor.call(this); // super
            this.addPathChangeListener("videoController.status", this, "handleControllerStatusChange");

            this.defineBinding("_controlTrack.value", {"<->": "videoController.position", source: this});
            this.defineBinding("_controlTrack.max", {"<-": "videoController.duration", source: this});
            this.defineBinding("_controlTrack.time", {"<-": "videoController.position", source: this});
        }
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
            this.video.toggleFullScreen()
        }
    },

    // Properties
    videoController: {
        value: null
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

    _controlTrack: {
        value: null
    }

});

exports.Button = Montage.create(AbstractButton, {
    hasTemplate: {value: false}
});
