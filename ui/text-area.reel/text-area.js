var Montage = require("montage").Montage,
    AbstractTextArea = require("montage/ui/base/abstract-text-area").AbstractTextArea;

exports.TextArea = AbstractTextArea.specialize({

    hasTemplate: {
        value: true
    },

    constructor: {
        value: function() {
            this.super();

            this.classList.add("digit-TextArea");
        }
    }
});
