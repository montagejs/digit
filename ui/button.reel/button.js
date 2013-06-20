var AbstractButton = require("montage/ui/base/abstract-button").AbstractButton;

exports.Button = AbstractButton.specialize({

    hasTemplate: {value: true},

    constructor : {
        value: function Button() {
            this.super();

            this.classList.add("digit-Button");
        }
    }
});
