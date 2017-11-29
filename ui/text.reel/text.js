/**
 * @module "digit/ui/text.reel"
 */
var MontageText = require("montage/ui/text.reel").Text;

/**
 * ![Text](https://raw.github.com/montagejs/digit/master/ui/text.reel/screenshot.png)
 *
 * The Text component can be used for any kind of dynamic text.
 *
 * ### How to use
 *
 * ```json
 * "text": {
 *     "prototype": "digit/ui/text.reel",
 *     "values": {
 *         "element": {"#": "text"}
 *     }
 * }
 * ```
 *
 * ```html
 * <span data-montage-id="text"></span>
 * ```
 *
 * ### Customizing with CSS
 * * `.digit-Text` - The Text element
 *
 * ```css
 * .digit-Text {
 *     color: red;
 * }
 * ```
 * @class Text
 * @extends external:Text
 */
exports.Text = MontageText.specialize(/** @lends Text */ {
    hasTemplate: {
        value: true
    },

    constructor: {
        value: function Text() {
            this.super();
            this.classList.add("digit-Text");
        }
    }
});
