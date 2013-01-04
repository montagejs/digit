var Montage = require("montage/core/core").Montage,
    Component = require("montage/ui/component").Component,
    NativeButton = require("montage/ui/native/button.reel").Button;

exports.ButtonGroup = Montage.create(NativeButton, {

    hasTemplate: {value: true},

    didSetElement: {
        value: function() {
            NativeButton.didSetElement.call(this);
            this['class'] = (this['class'] || '') + ' montage-ButtonGroup';
        }
    }
});
