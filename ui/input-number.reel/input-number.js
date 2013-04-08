var Montage = require("montage/core/core").Montage,
    Component = require("montage/ui/component").Component;

exports.InputNumber = Montage.create(Component, {

    _value: {
        value: 0
    },

    _required: {
        value: false
    },

    _min: {
        value: "any"
    },

    _max: {
        value: "any"
    },

    _step: {
        value: 1
    },

    /**
    The required status of the InputNumber
    @type {boolean}
    @default false
    */
    required: {
        get: function() {
            return this._required;
        },
        set: function(value) {
            value = !!value;
            if (this._required !== value) {
                this._required = value;
            }
        }
    },

    /**
    The maximum value allowed in the InputNumber. Can be any number or the string "any".
    @type {number|string}
    @default "any"
    */
    min: {
        get: function() {
            return this._min;
        },
        set: function(value) {
            if (value !== "any" && isNaN(value = parseFloat(value))) {
                return false;
            }
            if (this._min !== value) {
                this._min = value;
                if (typeof value == "number" && this.value < value) {
                    this.value = value;
                }
            }
        }
    },

    /**
    The maximum value allowed in the InputNumber. Can be any number or the string "any".
    @type {number|string}
    @default "any"
    */
    max: {
        get: function() {
            return this._max;
        },
        set: function(value) {
            if (value !== "any" && isNaN(value = parseFloat(value))) {
                return false;
            }
            if (this._max !== value) {
                this._max = value;
                if (typeof value == "number" && this.value > value) {
                    this.value = value;
                }
            }
        }
   },

    /**
    The amount the value changes when using the plus/minus buttons. Can be any positive number.
    @type {number}
    @default 1
    */
    step: {
        get: function() {
            return this._step;
        },
        set: function(value) {
            if (isNaN(value = parseFloat(value)) || value <= 0) {
                return false;
            }
            if (this._step !== value) {
                this._step = value;
            }
        }
    },

    /**
    The value of the InputNumber
    @type {number}
    @default 0
    */
    value: {
        get: function() {
            return this._value;
        },
        set: function(value) {
            if (isNaN(value = parseFloat(value))) {
                return false;
            }
            if (typeof this.min == 'number' && value < this.min) {
                value = this.min;
            }
            if (typeof this.max == 'number' && value > this.max) {
                value = this.max;
            }
            if (this._value !== value) {
                this._value = value;
            }
        }
    },

    /**
    Handle increment-button action
    */
    handlePlusAction: {
        value: function(event) {
            var stepBase = (typeof this.min == "number") ? this.min : 0;
            var value = this.value - stepBase;
            if (value % this.step) {
                if (value < 0) {
                    value -= value % this.step;
                } else {
                    value += this.step - (value % this.step);
                }
            } else {
                value += this.step;
            }
            this.value = value + stepBase;
        }
    },

    /**
    Handle decrement-button action
    */
    handleMinusAction: {
        value: function(event) {
            var stepBase = (typeof this.min == "number") ? this.min : 0;
            var value = this.value - stepBase;
            if (value % this.step) {
                if (value > 0) {
                    value -= value % this.step;
                } else {
                    value -= this.step + (value % this.step);
                }
            } else {
                value -= this.step;
            }
            this.value = value + stepBase;
        }
    },

    /**
    Read initial attribute values
    */
    prepareForDraw: {
        value: function() {
            this.min = this.element.getAttribute('min');
            this.max = this.element.getAttribute('max');
            this.step = this.element.getAttribute('step');
            this.value = this.element.getAttribute('value');
            this.required = this.element.hasAttribute('required');
        }
    }

});
