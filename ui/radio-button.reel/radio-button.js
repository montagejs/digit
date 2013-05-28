var AbstractRadioButton = require("montage/ui/base/abstract-radio-button").AbstractRadioButton;

CLASS_PREFIX = "digit-RadioButton";

exports.RadioButton = AbstractRadioButton.specialize({
    constructor: {
        value: function RadioButton() {
            this.super();
        }
    }
});
