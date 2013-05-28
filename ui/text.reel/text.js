/**
    @module "ui/text.reel"
*/
var Text = require("montage/ui/text.reel").Text;

/**
    Description TODO
    @class module:"ui/text.reel".Text
    @extends module:montage/ui/component.Component
*/
exports.Text = Text.specialize(/** @lends module:"ui/text.reel".Text# */ {
    hasTemplate: {
        value: true
    },

    constructor: {
        value: function Text() {
            this.super();
            this.classList.add("digit-Text");
        }
    }
});
