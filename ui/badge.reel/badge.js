/**
    @module "ui/badge.reel"
    @requires montage
    @requires montage/ui/component
*/
var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    Text = require("montage/ui/text.reel").Text;

/**
    Description TODO
    @class module:"ui/badge.reel".Badge
    @extends module:montage/ui/component.Component
*/
exports.Badge = Montage.create(Text, /** @lends module:"ui/badge.reel".Badge# */ {
    hasTemplate: {
        value: true
    },

    enterDocument: {
        value: function(firstTime) {
            Text.enterDocument.apply(this, arguments);

            if (firstTime) {
                this.classList.add("digit-Badge");
            }
        }
    },

    value: {
        set: function(value) {
            value = parseInt(value, 10);
            Object.getOwnPropertyDescriptor(Text, "value").set.call(this, value);
        }
    }

//    didCreate: {
//        value: function() {
//            this.classList.add("digit-Badge");
//        }
//    }
});
