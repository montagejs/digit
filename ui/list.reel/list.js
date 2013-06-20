var List = require("matte/ui/list.reel").List;

exports.List = List.specialize({
    constructor: {
        value: function List() {
            this.super();
        }
    },

    templateDidLoad: {
        value: function() {
            this._repetition = this.templateObjects.repetition;
        }
    },

    enterDocument: {
        value: function(firstTime) {
            if (firstTime) {
                this.element.addEventListener("touchstart", this, false);
            }
        }
    },

    // Based on https://github.com/joelambert/ScrollFix/blob/master/scrollfix.js
    handleTouchstart: {
        value: function() {
            var element = this.element,
                startTopScroll = element.scrollTop;

            if (startTopScroll <= 0) {
                element.scrollTop = 1;
            }

            if (startTopScroll + element.offsetHeight >= element.scrollHeight) {
                element.scrollTop = element.scrollHeight - element.offsetHeight - 1;
            }
        }
    }
});
