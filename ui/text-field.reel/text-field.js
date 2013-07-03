var AbstractTextField = require("montage/ui/base/abstract-text-field").AbstractTextField;

exports.TextField = AbstractTextField.specialize({

    hasTemplate: {
        value: true
    },

    constructor: {
        value: function TextField() {
            this.super();
        }
    }
});
