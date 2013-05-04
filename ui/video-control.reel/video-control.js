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
    didCreate: {
        value: function () {
            this.addPathChangeListener("controller.status", this, "handleControllerStatusChange");

            this.defineBinding("_controlTrack.value", {"<->": "controller.position", source: this});
            this.defineBinding("_controlTrack.max", {"<-": "controller.duration", source: this});
            this.defineBinding("_controlTrack.time", {"<-": "controller.position", source: this});
        }
    },

    // Event Handlers

    handlePlayAction: {
        value: function (e) {
            this.controller.playPause();
        }
    },

    handleFullScreenAction: {
        value: function (e) {
            this.controller.fullscreen();
        }
    },

    // Properties

    controller: {
        value: null
    },

    // Machinery

    handleControllerStatusChange: {
        value: function (newValue, path, myObject) {
            if (this.controller) {
                if (newValue === this.controller.PLAYING) {
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
