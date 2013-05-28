var AbstractNumberField = require("montage/ui/base/abstract-number-field").AbstractNumberField,
    AbstractButton = require("montage/ui/base/abstract-button").AbstractButton,
    AbstractTextField = require("montage/ui/base/abstract-text-field").AbstractTextField;

exports.NumberField = AbstractNumberField.specialize({
    constructor: {
        value: function NumberField() {
            this.super();
        }
    }
});

exports.Button = AbstractButton.specialize({
    hasTemplate: {value: false}
});

exports.TextField = AbstractTextField.specialize({
    hasTemplate: {value: false}
});
