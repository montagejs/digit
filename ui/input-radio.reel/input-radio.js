var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    AbstractInputRadio = require("montage/ui/base/abstract-input-radio").AbstractInputRadio;

CLASS_PREFIX = "digit-InputRadio";

var InputRadio = exports.InputRadio = Montage.create(AbstractInputRadio, {
    hasTemplate: {
        value: true
    }
});
