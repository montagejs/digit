/**
    @module "ui/list-item.reel"
    @requires montage
    @requires montage/ui/component
*/
var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component;

/**
    Description TODO
    @class module:"ui/list-item.reel".ListItem
    @extends module:montage/ui/component.Component
*/
exports.ListItem = Montage.create(Component, /** @lends module:"ui/list-item.reel".ListItem# */ {
    highlight: {
        value: false
    },

    didCreate: {
        value: function() {
            this.defineBinding("classList.has('digit-ListItem--highlight')", {
                "<-": "highlight"
            });
        }
    }
});
