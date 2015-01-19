/**
 * @module "digit/ui/select.reel"
 */
var AbstractSelect = require("montage/ui/base/abstract-select").AbstractSelect;
/**
 * ![Select](https://raw.github.com/montagejs/digit/master/ui/select.reel/screenshot.png)
 *
 * The Select Input component wraps an HTML `<select>` element.
 *
 * ### How to use
 *
 * ```json
 * "select": {
 *     "prototype": "digit/ui/select.reel",
 *     "properties": {
 *         "element": {"#": "select"},
 *         "content": [
 *             {"label": "California", "code": "CA"},
 *             {"label": "Hawaii", "code": "HI},
 *             {"label": "New York", "code": "NY}
 *         ]
 *     }
 * }
 * ```
 *
 * ```html
 * <select data-montage-id="select"></select>
 * ```
 *
 * See [http://montagejs.github.io/mfiddle/#!/5904481](http://montagejs.github.io/mfiddle/#!/5904481)
 *
 * ### Customizing with CSS
 *
 * * `.digit-Select` - The select element
 *
 * ```css
 * .digit-Select {
 *     background-color: pink;
 * }
 * ```
 * @class Select
 * @extends external:AbstractSelect
 */
exports.Select = AbstractSelect.specialize(/** @lends Select */{

    constructor: {
        value: function Select() {
            this.super();
            this.classList.add("digit-Select");
        }
    },

    enterDocument: {
        value: function(firstTime) {
            this.super(firstTime);

            if (firstTime) {
                this.element.addEventListener("change", this, false);
            }
        }
    },

    handleChange: {
        value: function() {
            var organizedContent = this.contentController.organizedContent,
                selectedIndex = this.element.selectedIndex;

            this.value = organizedContent[selectedIndex];
        }
    },

    draw: {
        value: function() {
            var selectedIndex,
                organizedContent = this.contentController.organizedContent;

            if (this._contentIsDirty) {
                this.drawOptions();
                this._contentIsDirty = false;
            }

            // Select the current value.

            if (this.value) {
                selectedIndex = this.getValueIndex(this.value, organizedContent);
            }else{
                selectedIndex = 0;
            }

            //selectedIndex = organizedContent.indexOf(this.value);
            if (selectedIndex == -1) {
                selectedIndex = 0;
            }

            this.element.selectedIndex = selectedIndex;
        }
    },

    getValueIndex: {
        value: function (value, options) {

            var selectedIndex = -1;
            var firstItem;
            var itemType;

            //If options length > 0, get the first item object type
            if (options && options.length > 0) {
                firstItem = options[0];
                itemType = typeof firstItem;
            } else {
                return selectedIndex;
            }

            //Judge if we directly match the item or we match the value
            if (typeof value == itemType) {
                for (var i = 0, n = options.length; i < n; i++) {
                    var item = options[i];

                    //If the select has valuePropertyName, use item[this.valuePropertyName] to do compare with value[this.valuePropertyName]
                    //Otherwise, compare the item and value directly
                    if (this.valuePropertyName) {
                        if (item[this.valuePropertyName] == value[this.valuePropertyName]) {
                            selectedIndex = i;
                            break;
                        }
                    } else {
                        if (item == value) {
                            selectedIndex = i;
                            break;
                        }
                    }
                }
            } else {


                for (i = 0, n = options.length; i < n; i++) {
                    item = options[i];

                    //If the select has valuePropertyName, use item[this.valuePropertyName] to compare with value
                    //Because value should be the key value.
                    if (this.valuePropertyName) {
                        if (item[this.valuePropertyName] == value) {
                            selectedIndex = i;
                            break;
                        }
                    } else {
                        if (item == value) {
                            selectedIndex = i;
                            break;
                        }
                    }

                }
            }

            return selectedIndex;
        }
    },

    drawOptions: {
        value: function() {
            var organizedContent = this.contentController.organizedContent,
                option,
                item,
                options = document.createDocumentFragment();

            for (var i = 0, ii = organizedContent.length; i < ii; i++) {
                option = document.createElement('option');
                item = organizedContent[i];

                option.textContent = item && item[this.labelPropertyName];
                options.appendChild(option);
            }

            this.element.innerHTML = "";
            this.element.appendChild(options);
        }
    }
});
