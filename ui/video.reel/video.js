var Montage = require("montage/core/core").Montage;
var Component = require("montage/ui/component").Component;
var PressComposer = require("montage/composer/press-composer").PressComposer;
var AbstractVideo = require("montage/ui/base/abstract-video").AbstractVideo;

exports.Video = AbstractVideo.specialize({

    // Lifecycle

    /**
     * @private
     */
    constructor: {
        value: function Video() {
            AbstractVideo.constructor.call(this); // super
            this.addPathChangeListener("videoController.status", this, "handleControllerStatusChange");
        }
    },

    enterDocument: {
        value: function(firstTime) {
            // Call super method
            if (AbstractVideo.enterDocument) {
                AbstractVideo.enterDocument.call(this, firstTime);
            }
            
            if (firstTime) {
                this.setupFirstPlay();
                
                this.addOwnPropertyChangeListener("src", this);
                this.addOwnPropertyChangeListener("posterSrc", this);
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
            this.loadMedia();
            this.videoController.play();
            this.classList.remove("digit-Video--firstPlay");
        }
    },

    handleVideoPress: {
        value: function(event) {
            if (this.videoController.status === this.videoController.EMPTY) {
                this.loadMedia();
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
            if (this.videoController) {
                if (!this._firstPlay && newValue !== this.videoController.PLAYING) {
                    this.clearHideControlsTimeout();
                    this.classList.add("digit-Video--showControls");
                } else if (this._firstPlay && newValue === this.videoController.PLAYING) {
                    this.doFirstPlay();
                }
            }
        }
    },

    handleSrcChange: {
        value: function() {
            // We need to create a new video element because there's really
            // no good way to unload the current video in order to show the
            // cover for the next video (without loading the new video in the
            // first place but we want to avoid doing it, only when the user
            // presses play).
            var currentVideoElement = this.mediaElement,
                newVideoElement = document.createElement("video");

            newVideoElement.className = currentVideoElement.className;
            this.element.replaceChild(newVideoElement, currentVideoElement);
            this.mediaElement = newVideoElement;

            this.setupFirstPlay();
        }
    },

    handlePostersrcChange: {
        value: function() {
            this.showPoster();
        }
    },

    // Properties

    // Machinery

    setupFirstPlay: {
        value: function() {
            this.element.removeEventListener("touchstart", this, false);
            this.element.removeEventListener("mousedown", this, false);
            this._firstPlay = true;
            this.videoController.stop();

            this.classList.add("digit-Video--firstPlay");
            this.classList.remove("digit-Video--showControls");

            this._pressComposer = PressComposer.create();
            this._pressComposer.identifier = "video";
            this.addComposerForElement(this._pressComposer, this.mediaElement);
            this.showPoster();
        }
    },

    draw: {
        value: function() {
            // Call super method
            if (AbstractVideo.draw) {
                AbstractVideo.draw.call(this);
            }

            if (this.supportsFullScreen) {
                if (!this.isFullScreen) {
                    this.element.classList.remove("fullscreen");
                } else {
                    this.element.classList.add("fullscreen");
                }
            } else {
                this.element.classList.remove("fullscreen");
            }
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
