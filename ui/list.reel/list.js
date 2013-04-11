var Montage = require("montage/core/core").Montage,
    Component = require("montage/ui/component").Component,
    List = require("matte/ui/list.reel").List;

exports.List = Montage.create(List, {
    templateDidLoad: {
        value: function() {
            this._repetition = this.templateObjects.repetition;
        }
    }
});
