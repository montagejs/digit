var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    NativeSelect = require("montage/ui/native/select.reel").Select;

exports.Select = Montage.create(NativeSelect, {

    hasTemplate: {value: true},

    willPrepareForDraw: {
        value: function() {
            NativeSelect.willPrepareForDraw.call(this);
            this.element.classList.add("montage-Select");
        }
    }

});
