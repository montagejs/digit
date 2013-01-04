var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    NativeInputText = require("montage/ui/native/input-text.reel").InputText;

exports.InputText = Montage.create(NativeInputText, {

    hasTemplate: {value: true},

    didSetElement: {
        value: function() {
            NativeInputText.didSetElement.call(this);
            this['class'] = (this['class'] || '') + ' montage-InputText';
        }
    }
});
