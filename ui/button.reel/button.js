/**
 * @module "montage/ui/button.reel"
 */
var AbstractButton = require("montage/ui/base/abstract-button").AbstractButton;
/**
 * ![Button](https://raw.github.com/montagejs/digit/master/ui/button.reel/screenshot.png)
 *
 * The Button component wraps a <button> or <input type="button"> element.
 *
 * ### How to use
 *
 * ```json
 * "button": {
 *     "prototype": "digit/ui/button.reel",
 *     "properties": {
 *         "element": {"#": "button"}
 *     }
 * }
 * ```
 *
 * ```html
 * <button data-montage-id="button">Button</button>
 * ```
 *
 * ### Customizing with CSS
 *
 * * `.digit-Button` - The Button element
 *
 * ```css
 * .digit-Button {
 *     background-color: pink;
 * }
 * ```
 * @class Button
 * @extends external:AbstractButton
 * @classdesc
 */
exports.Button = AbstractButton.specialize( /** @lends Button# */ {

    hasTemplate: {value: true},

    constructor : {
        value: function Button() {
            this.super();

            this.classList.add("digit-Button");
        }
    }
});
