var Montage = require("montage/core/core").Montage,
    AbstractNumberField = require("montage/ui/base/abstract-number-field").AbstractNumberField,
    AbstractButton = require("montage/ui/base/abstract-button").AbstractButton,
    AbstractTextField = require("montage/ui/base/abstract-text-field").AbstractTextField;

exports.NumberField = Montage.create(AbstractNumberField, {

});

exports.Button = Montage.create(AbstractButton, {
    hasTemplate: {value: false}
});

exports.TextField = Montage.create(AbstractTextField, {
    hasTemplate: {value: false}
});
