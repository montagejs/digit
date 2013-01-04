var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    NativeSelect = require("montage/ui/native/select.reel").Select;

exports.Select = Montage.create(NativeSelect, {

    hasTemplate: {value: true},

    didSetElement: {
        value: function() {
            NativeSelect.didSetElement.call(this);
            this['class'] = (this['class'] || '') + ' montage-Select';
        }
    }

});
