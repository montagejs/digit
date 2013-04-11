var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    NativeTextarea = require("native/ui/textarea.reel").Textarea;

exports.Textarea = Montage.create(NativeTextarea, {

    hasTemplate: {value: true},

    willPrepareForDraw: {
        value: function() {
            NativeTextarea.willPrepareForDraw.call(this);
            this.element.classList.add("digit-Textarea");
        }
    }
});
