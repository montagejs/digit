var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    NativeInputText = require("native/ui/input-text.reel").InputText;

exports.InputText = Montage.create(NativeInputText, {

    hasTemplate: {value: true},

    enterDocument: {
        value: function() {
            NativeInputText.enterDocument.apply(this, arguments);
            this.element.classList.add("digit-InputText");
        }
    }
});
