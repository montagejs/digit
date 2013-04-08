var Montage = require("montage/core/core").Montage,
    Component = require("montage/ui/component").Component,
    NativeButton = require("native/ui/button.reel").Button;

exports.Button = Montage.create(NativeButton, {

    hasTemplate: {value: true},

    willPrepareForDraw: {
        value: function() {
            NativeButton.willPrepareForDraw.call(this);
            this.element.classList.add("montage-Button");
        }
    }
});
