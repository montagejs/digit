var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    AbstractRadioButton = require("montage/ui/base/abstract-radio-button").AbstractRadioButton;

CLASS_PREFIX = "digit-RadioButton";

var RadioButton = exports.RadioButton = Montage.create(AbstractRadioButton, {
});
