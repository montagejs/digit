var AbstractTextArea = require("montage/ui/base/abstract-text-area").AbstractTextArea;

exports.TextArea = AbstractTextArea.specialize({

    hasTemplate: {
        value: true
    },

    constructor: {
        value: function TextArea() {
            this.super();
        }
    }
});
