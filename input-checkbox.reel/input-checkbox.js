var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    PressComposer = require("montage/ui/composer/press-composer").PressComposer;

exports.InputCheckbox = Montage.create(Component, {

    _checked: {
        value: false
    },

    _disabled: {
        value: false
    },

    /**
    The checked status of the InputCheckbox
    @type {Boolean}
    @default false
    */
    checked: {
        get: function() {
            return this._checked;
        },
        set: function(value) {
            value = !!value;
            if (this._checked !== value) {
                this._checked = value;
                this.needsDraw = true;
            }
        }
    },

    /**
    The disabled status of the InputCheckbox
    @type {Boolean}
    @default false
    */
    disabled: {
        get: function() {
            return this._disabled;
        },
        set: function(value) {
            value = !!value;
            if (this._disabled !== value) {
                this._disabled = value;
                this.needsDraw = true;
            }
        }
    },

    /**
    Handle press event from press composer
    */
    handlePress: {
        value: function(event) {
            if (this.disabled) {
                return false;
            }
            this.checked = !this.checked;
            this.needsDraw = true;
        }
    },

    /**
    Read initial values from element attributes
    */
    prepareForDraw: {
        value: function() {
            this.checked = this.element.hasAttribute("checked");
            this.disabled = this.element.hasAttribute("disabled");
        }
    },

    draw: {
        value: function() {
            if (this.checked) {
                this.element.classList.add("montage-InputCheckbox--checked");
            } else {
                this.element.classList.remove("montage-InputCheckbox--checked");
            }
            if (this.disabled) {
                this.element.classList.add("montage-InputCheckbox--disabled");
            } else {
                this.element.classList.remove("montage-InputCheckbox--disabled");
            }
        }
    }

});
