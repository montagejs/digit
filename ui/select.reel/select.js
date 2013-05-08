var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    NativeSelect = require("native/ui/select.reel").Select;

exports.Select = Montage.create(NativeSelect, {

    hasTemplate: {value: true},

    enterDocument: {
        value: function() {
            NativeSelect.enterDocument.apply(this, arguments);
            this.element.classList.add("digit-Select");
        }
    }

});
