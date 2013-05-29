var AbstractNumberField = require("montage/ui/base/abstract-number-field").AbstractNumberField;

exports.NumberField = AbstractNumberField.specialize({
    constructor: {
        value: function NumberField() {
            this.super();
        }
    }
});
