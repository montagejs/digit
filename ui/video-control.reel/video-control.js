/**
    @module "ui/video-control.reel"
    @requires montage
    @requires montage/ui/component
*/
var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component;

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
            alert("fullScreen")
            this.controller.fullscreen();
        }
    },

    // Properties

    controller: {
        value: null
    },

    // Machinery

    _controlTrack: {
        value: null
    }

});
