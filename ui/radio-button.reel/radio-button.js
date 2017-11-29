/**
 * @module "digit/ui/radio-button.reel"
 */
var AbstractRadioButton = require("montage/ui/base/abstract-radio-button").AbstractRadioButton;

/**
 * ![RadioButton](https://raw.github.com/montagejs/digit/master/ui/radio-button.reel/screenshot.png)
 *
 * ### How to use
 *
 * ```json
 * "radio": {
 *     "prototype": "digit/ui/radio-button.reel",
 *     "values": {
 *         "element": {"#": "radio"},
 *         "value": 1
 *     }
 * }
 * ```
 *
 * ```html
 * <span data-montage-id="radio"></span>
 * ```
 *
 * ### Customizing with CSS
 *
 * * `.digit-RadioButton` - The radio button element
 *
 * ```css
 * .digit-RadioButton {
 *     border-color: blue;
 * }
 * ```
 * @class RadioButton
 * @extends external:AbstractRadioButton
 */
exports.RadioButton = AbstractRadioButton.specialize(/** @lends RadioButton */{
    constructor: {
        value: function RadioButton() {
            this.super();
        }
    }
});
