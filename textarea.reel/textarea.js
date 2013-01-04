var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    NativeTextarea = require("montage/ui/native/textarea.reel").Textarea;

exports.Textarea = Montage.create(NativeTextarea, {

    hasTemplate: {value: true},

    didSetElement: {
        value: function() {
            NativeTextarea.didSetElement.call(this);
            this['class'] = (this['class'] || '') + ' montage-Textarea';
        }
    }
});
