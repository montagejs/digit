/**
    @module "ui/text.reel"
    @requires montage
    @requires montage/ui/component
*/
var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    Text = require("montage/ui/text.reel").Text;

/**
    Description TODO
    @class module:"ui/text.reel".Text
    @extends module:montage/ui/component.Component
*/
exports.Text = Montage.create(Text, /** @lends module:"ui/text.reel".Text# */ {
    hasTemplate: {
        value: true
    },

    enterDocument: {
        value: function(firstTime) {
            Text.enterDocument.apply(this, arguments);

            if (firstTime) {
                this.classList.add("digit-Text");
            }
        }
    }
});
