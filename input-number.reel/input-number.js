var Montage = require("montage/core/core").Montage,
    Component = require("montage/ui/component").Component;

exports.InputNumber = Montage.create(Component, {

    _value: {
        value: null
    },
    
    _min: {
        value: null
    },
    
    _max: {
        value: null
    },
    
    _step: {
        value: null
    },
    

    /**
    The maximum value allowed in the InputNumber. Can be any number of the string "any".
    @type {number|string}
    @default null
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
    The maximum value allowed in the InputNumber. Can be any number of the string "any".
    @type {number|string}
    @default null
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
    The amount the value changes when using the plus/minus buttons.
    @type {number}
    @default 1
    */
    step: {
        get: function() {
            return this._step;
        },
        set: function(value) {
            if (isNaN(value = parseFloat(value))) {
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
                this._value = value
                this.needsDraw = true;
            }
        }
    },
    
    /**
    Handle increment-button action
    */
    handlePlusAction: {
        value: function(event) {
            if (this.value % this.step) {
                if (this.value < 0) {
                    this.value -= this.value % this.step;
                } else {
                    this.value += this.step - (this.value % this.step);
                }
            } else {
                this.value += this.step;
            }
        }
    },

   
    /**
    Handle decrement-button action
    */
    handleMinusAction: {
        value: function(event) {
            if (this.value % this.step) {
                if (this.value > 0) {
                    this.value -= this.value % this.step;
                } else {
                    this.value -= this.step + (this.value % this.step);
                }
            } else {
                this.value -= this.step;
            }
        }
    },
    
    /**
    Read initial attribute values
    */
    prepareForDraw: {
        value: function() {
            this.min = this.element.getAttribute('min');
            this.max = this.element.getAttribute('max');
            this.step = this.element.getAttribute('step') || 1;
            this.value = this.element.getAttribute('value') || 0;
        }
    }

});
