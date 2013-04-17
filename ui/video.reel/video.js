var Montage = require("montage/core/core").Montage;
var Component = require("montage/ui/component").Component;
var PressComposer = require("montage/composer/press-composer").PressComposer;
var MediaController = require("montage/core/media-controller").MediaController;

exports.Video = Montage.create(Component, {

    // Lifecycle

    didCreate: {
        value: function() {
            this.addPathChangeListener("controller.status", this, "handleControllerStatusChange");
        }
    },


    enterDocument: {
        value: function(firstTime) {
            if (firstTime) {
                this.setupFirstPlay();

                this.addOwnPropertyChangeListener("src", this);
                this.addOwnPropertyChangeListener("poster", this);
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
            this.controller.loadMedia();
            this.controller.play();
            this.classList.remove("digit-Video--firstPlay");
        }
    },

    // Event Handlers

//    handleVideoPressStart: {
//        value: function() {
//            console.log("pressStart" + this.identifier, "target", event.target.identifier)
//            if(! this._showControlsTimeout) {
//                clearTimeout(this._showControlsTimeout);
//            }
//            this.classList.add("digit-Video--showControls");
//        }
//    },

    handleVideoPress: {
        value: function(event) {
            if (this.controller.status === this.controller.EMPTY) {
                this.controller.loadMedia();
                this.classList.remove("digit-Video--firstPlay");
                this._pressComposer.unload();
                this._pressComposer.removeEventListener("pressStart", this, false);
                this._pressComposer.removeEventListener("press", this, false);
                this._pressComposer.removeEventListener("pressCancel", this, false);

                this._pressComposer = null;
            }
        }
    },

    handleTouchstart: {
        value: function() {
            this.clearHideControlsTimeout();
            this.classList.add("digit-Video--showControls");
            document.addEventListener("touchend",this , false);
        }
    },
    handleTouchend: {
        value: function() {
            var self = this;
            this.setHideControlsTimeout();
        }
    },

    handleMousedown: {
        value: function() {
            this.clearHideControlsTimeout();
            this.classList.add("digit-Video--showControls");
            document.addEventListener("mouseup",this , false);
        }
    },
    handleMouseup: {
        value: function() {
            var self = this;
            this.setHideControlsTimeout();
        }
    },

    handleControllerStatusChange: {
        value: function (newValue, path, myObject) {
            if (this.controller) {
                if (!this._firstPlay && newValue !== this.controller.PLAYING) {
                    this.clearHideControlsTimeout();
                    this.classList.add("digit-Video--showControls");
                } else if (this._firstPlay && newValue === this.controller.PLAYING) {
                    this.doFirstPlay();
                }
            }
        }
    },

    handleSrcChange: {
        value: function() {
            this.setupFirstPlay();
        }
    },

    handlePosterChange: {
        value: function() {
            this.controller.showPoster();
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

    setupFirstPlay: {
        value: function() {
            this.element.removeEventListener("touchstart", this, false);
            this.element.removeEventListener("mousedown", this, false);
            this._firstPlay = true;
            this.controller.stop();

            this.classList.add("digit-Video--firstPlay");
            this.classList.remove("digit-Video--showControls");

            this._pressComposer = PressComposer.create();
            this._pressComposer.identifier = "video";
            this.addComposerForElement(this._pressComposer, this.controller.mediaElement);
            this.controller.showPoster();
        }
    },

    doFirstPlay: {
        value: function(newValue) {
            this.element.addEventListener("touchstart",this , false);
            this.element.addEventListener("mousedown",this , false);
            this._firstPlay = false;
        }
    },

    setHideControlsTimeout: {
        value: function(newValue) {
            var self = this;
            this.clearHideControlsTimeout();
            this._hideControlsTimeout = setTimeout(function() {
                self.classList.remove("digit-Video--showControls");
            }, 2500);
        }
    },

    clearHideControlsTimeout: {
        value: function(newValue) {
            if(this._hideControlsTimeout) {
                clearTimeout(this._hideControlsTimeout);
            }
        }
    },

    _firstPlay: {
        value: true
    },

    _hideControlsTimeout: {
        value: null
    }
});
