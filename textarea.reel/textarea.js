var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    NativeTextarea = require("montage/ui/native/textarea.reel").Textarea;

exports.Textarea = Montage.create(NativeTextarea, {

    hasTemplate: {value: true},

    willPrepareForDraw: {
        value: function() {
            NativeTextarea.willPrepareForDraw.call(this);
            this.element.classList.add("montage-Textarea");
        }
    }
});
