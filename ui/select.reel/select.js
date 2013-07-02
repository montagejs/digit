var AbstractSelect= require("montage/ui/base/abstract-select").AbstractSelect;

exports.Select = AbstractSelect.specialize({

    constructor: {
        value: function Select() {
            this.super();
            this.classList.add("digit-Select");

            this.addPathChangeListener("content", this, "handleContentChange");
        }
    },

    enterDocument: {
        value: function(firstTime) {
            this.super(firstTime);

            this.element.addEventListener("change", this, false);
        }
    },

    handleChange: {
        value: function() {
            var organizedContent = this.contentController.organizedContent,
                selectedIndex = this.element.selectedIndex;

            this.value = organizedContent[selectedIndex];
        }
    },

    handleContentChange: {
        value: function() {
            // Default to the first value in the content controller if no value
            // has been set yet. We don't support not having a selected value.
            if (this.value == null) {
                this.value = this.contentController.organizedContent[0];
            }
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
            selectedIndex = organizedContent.indexOf(this.value);
            if (selectedIndex == -1) {
                selectedIndex = 0;
            }

            this.element.selectedIndex = selectedIndex;
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

                option.textContent = item[this.labelPropertyName];
                options.appendChild(option);
            }

            this.element.innerHTML = "";
            this.element.appendChild(options);
        }
    }
});
