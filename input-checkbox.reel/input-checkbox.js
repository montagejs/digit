var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    NativeInputCheckbox = require("montage/ui/native/input-checkbox.reel").InputCheckbox;

exports.InputCheckbox = Montage.create(NativeInputCheckbox, {

    hasTemplate: {value: true},

    didSetElement: {
        value: function() {
            NativeInputCheckbox.didSetElement.call(this);
            this['class'] = (this['class'] || '') + ' montage-InputCheckbox';
        }
    }

});
