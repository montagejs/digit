var Montage = require("montage/core/core").Montage,
    Component = require("montage/ui/component").Component,
    NativeButton = require("native/ui/button.reel").Button;

exports.ButtonGroup = Montage.create(NativeButton, {

    hasTemplate: {value: true},

    enterDocument: {
        value: function() {
            NativeButton.enterDocument.apply(this, arguments);
            this.element.classList.add("digit-ButtonGroup");
        }
    }
});
