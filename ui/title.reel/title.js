/**
    @module "ui/title.reel"
    @requires montage
    @requires montage/ui/component
*/
var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    Text = require("montage/ui/text.reel").Text;

/**
    Description TODO
    @class module:"ui/title.reel".Title
    @extends module:montage/ui/component.Component
*/
exports.Title = Montage.create(Text, /** @lends module:"ui/title.reel".Title# */ {
    hasTemplate: {
        value: true
    },

    enterDocument: {
        value: function(firstTime) {
            Text.enterDocument.apply(this, arguments);

            if (firstTime) {
                this.classList.add("digit-Title");
            }
        }
    }
});
