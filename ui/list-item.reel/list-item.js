/**
    @module "ui/list-item.reel"
*/
var Component = require("montage/ui/component").Component;

/**
    Description TODO
    @class module:"ui/list-item.reel".ListItem
    @extends module:montage/ui/component.Component
*/
exports.ListItem = Component.specialize(/** @lends module:"ui/list-item.reel".ListItem# */ {
    highlight: {
        value: false
    },

    constructor: {
        value: function ListItem() {
            this.super();

            this.defineBinding("classList.has('digit-ListItem--highlight')", {
                "<-": "highlight"
            });
        }
    }
});
