/**
    @module "ui/title.reel"
*/
var MontageText = require("montage/ui/text.reel").Text;

/**
    Description TODO
    @class module:"ui/title.reel".Title
    @extends module:montage/ui/component.Component
*/
exports.Title = MontageText.specialize(/** @lends module:"ui/title.reel".Title# */ {
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
