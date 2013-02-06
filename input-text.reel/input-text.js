var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    NativeInputText = require("montage/ui/native/input-text.reel").InputText;

exports.InputText = Montage.create(NativeInputText, {

    hasTemplate: {value: true},

    willPrepareForDraw: {
        value: function() {
            NativeInputText.willPrepareForDraw.call(this);
            this.element.classList.add("montage-InputText");
        }
    }
});
