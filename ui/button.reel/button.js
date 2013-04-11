var Montage = require("montage/core/core").Montage,
    AbstractButton = require("montage/ui/base/abstract-button").AbstractButton;

exports.Button = Montage.create(AbstractButton, {

    hasTemplate: {value: true},

    didCreate: {
        value: function() {
            AbstractButton.didCreate.call(this);
            this.classList.add("digit-Button");
        }
    }
});
