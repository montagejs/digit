/**
    @module "ui/title.reel"
*/
var Text = require("montage/ui/text.reel").Text;

/**
    Description TODO
    @class module:"ui/title.reel".Title
    @extends module:montage/ui/component.Component
*/
exports.Title = Text.specialize(/** @lends module:"ui/title.reel".Title# */ {
    hasTemplate: {
        value: true
    },

    constructor: {
        value: function Title() {
            this.super();
            this.classList.add("digit-Title");
        }
    }
});
