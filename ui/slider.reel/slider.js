var AbstractSlider = require("montage/ui/base/abstract-slider").AbstractSlider;

exports.Slider = AbstractSlider.specialize({
    constructor: {
        value: function Slider() {
            this.super();
        }
    }
});
