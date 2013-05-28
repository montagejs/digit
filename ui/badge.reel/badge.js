/**
    @module "ui/badge.reel"
*/
var Text = require("montage/ui/text.reel").Text;

/**
    Description TODO
    @class module:"ui/badge.reel".Badge
    @extends module:montage/ui/component.Component
*/
exports.Badge = Text.specialize(/** @lends module:"ui/badge.reel".Badge# */ {
    hasTemplate: {
        value: true
    },

    constructor: {
        value: function Badge() {
            this.super();
            this.classList.add("digit-Badge");
        }
    },

    value: {
        set: function(value) {
            value = parseInt(value, 10);
            Object.getOwnPropertyDescriptor(Text, "value").set.call(this, value);
        },

        get: function() {
            return Object.getOwnPropertyDescriptor(Text, "value").get.call(this);
        }
    }
});
