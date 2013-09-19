var Component = require("montage/ui/component").Component;

exports.Main = Component.specialize({

    draw: {
        value: function() {
            // There can normally only be one overlay, absolutely-positioned,
            // so we need to manually mangle the dom and style them to appear inline.
            var overlays = ["alert", "alert-light", "alert-dark", "confirm", "confirm-light", "confirm-dark"];
            overlays.forEach(function(overlayName){
                this[overlayName].element.appendChild(this[overlayName]._overlay.element);
            }.bind(this));
        }
    }
});
