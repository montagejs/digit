var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    NativeInputCheckbox = require("montage/ui/native/input-checkbox.reel").InputCheckbox;

exports.InputCheckbox = Montage.create(NativeInputCheckbox, {

    hasTemplate: {value: true},

    willPrepareForDraw: {
        value: function() {
            NativeInputCheckbox.willPrepareForDraw.call(this);
            this.element.classList.add("montage-InputCheckbox");
        }
    }

});
