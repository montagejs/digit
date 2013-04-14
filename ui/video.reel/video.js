var Montage = require("montage/core/core").Montage;
var Component = require("montage/ui/component").Component;
var PressComposer = require("montage/composer/press-composer").PressComposer;
var MediaController = require("montage/core/media-controller").MediaController;

exports.Video = Montage.create(Component, {

    // Lifecycle

    didCreate: {
        value: function() {
            this._pressComposer = PressComposer.create();
            this.addComposer(this._pressComposer);
        }
    },


    enterDocument: {
        value: function(firstTime) {
            if (firstTime) {
                this.controller.showPoster();
            }
        }
    },

    prepareForActivationEvents: {
        value: function() {
            this._pressComposer.addEventListener("pressStart", this, false);
            this._pressComposer.addEventListener("press", this, false);
            this._pressComposer.addEventListener("pressCancel", this, false);
        }
    },

    // Event Handlers

    handlePlayAction: {
        value: function (e) {
            if (this.controller.status === this.controller.EMPTY) {
                this.controller.loadMedia();
            }
            this.classList.remove("digit-Video--firstPlay");
        }
    },
    // Handlers

    handlePressStart: {
        value: function() {
            if(! this._showControlsTimeout) {
                clearTimeout(this._showControlsTimeout);
            }
            this.classList.add("digit-Video--showControls");
        }
    },

    handlePress: {
        value: function(event) {
            if (this.controller.status === this.controller.EMPTY) {
                this.controller.loadMedia();
                this.classList.remove("digit-Video--firstPlay");
            } else {
                var self = this;

                this._showControlsTimeout = setTimeout(function() {
                    self.classList.remove("digit-Video--showControls");
                }, 5000);
            }


        }
    },

    handlePressCancel: {
        value: function(event) {
            var self = this;
            this._showControlsTimeout = setTimeout(function() {
                self.classList.remove("digit-Video--showControls");
            }, 5000);
        }
    },

    // Properties

    src: {
        value: "../../ui/video.reel/video.mov"
    },

    poster: {
        value: "../../ui/video.reel/poster.png"
    },

    controller: {
        value: null
    },

    // Machinery

    _showControlsTimeout: {
        value: null
    }
});
