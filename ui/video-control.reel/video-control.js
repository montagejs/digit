/**
    @module "ui/video-control.reel"
    @requires montage
    @requires montage/ui/component
*/
var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component;

/**
    Description TODO
    @class module:"ui/video-control.reel".VideoControl
    @extends module:montage/ui/component.Component
*/
exports.VideoControl = Montage.create(Component, /** @lends module:"ui/video-control.reel".VideoControl# */ {

    controller: {
        value: null
    }

});
