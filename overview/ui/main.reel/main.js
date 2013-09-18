var Component = require("montage/ui/component").Component;

exports.Main = Component.specialize({

    draw: {
        value: function() {
            // There can normallt only be one alert, absolutely-positioned,
            // so we need to manually mangle the dom and style them to appear inline.
            var alerts = ["alert", "alert-light", "alert-dark"];
            alerts.forEach(function(alertName){
                this[alertName].element.appendChild(this[alertName]._overlay.element);
            }.bind(this));
        }
    }
});
