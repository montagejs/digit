var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    NativeInputRadio = require("montage/ui/native/input-radio.reel").InputRadio;

exports.InputRadio = Montage.create(NativeInputRadio, {

    hasTemplate: {value: true},

    didSetElement: {
        value: function() {
            NativeInputRadio.didSetElement.call(this);
            this['class'] = (this['class'] || '') + ' montage-InputRadio';
        }
    }

});
