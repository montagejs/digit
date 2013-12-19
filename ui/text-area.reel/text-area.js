/**
 * @module "digit/ui/text-area.reel"
 */
var AbstractTextArea = require("montage/ui/base/abstract-text-area").AbstractTextArea;
/**
 * ![TextArea](https://raw.github.com/montagejs/digit/master/ui/text-area.reel/screenshot.png)
 *
 * ### How to use
 *
 * ```json
 * "textArea": {
 *     "prototype": "digit/ui/text-area.reel",
 *     "properties": {
 *         "element": {"#": "textArea"}
 *     }
 * }
 * ```
 *
 * ```html
 * <textarea data-montage-id="textArea"></textarea>
 * ```
 *
 * ### Customizing with CSS
 *
 * * `.digit-TextArea` - The TextArea element
 *
 * ```css
 * .digit-TextArea {
 *     border-color: blue;
 * }
 * ```
 * @class TextArea
 * @extends external:AbstractTextArea
 */
exports.TextArea = AbstractTextArea.specialize(/** @lends TextArea */{

    hasTemplate: {
        value: true
    },

    constructor: {
        value: function TextArea() {
            this.super();
        }
    }
});
