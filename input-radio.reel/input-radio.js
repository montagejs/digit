var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    NativeInputRadio = require("montage/ui/native/input-radio.reel").InputRadio;

exports.InputRadio = Montage.create(NativeInputRadio, {

    hasTemplate: {value: true},

    willPrepareForDraw: {
        value: function() {
            NativeInputRadio.willPrepareForDraw.call(this);
            this.element.classList.add("montage-InputRadio");
        }
    }

});
