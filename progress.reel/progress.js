var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    NativeProgress = require("montage/ui/native/progress.reel").Progress;

exports.Progress = Montage.create(NativeProgress, {

    hasTemplate: {value: true},

/**
  Description TODO
  @private
*/
    _barElement: {
        enumerable: false,
        value: null
    },
/**
  Description TODO
  @private
*/
    _value: {
        enumerable: false,
        value: null
    },
/**
        Description TODO
        @type {Function}
        @default {Number} 0
    */
    value: {
        get: function() {
            return this._value;
        },
        set: function(val) {
            if(val !== this._value) {
                this._value = String.isString(val) ? parseInt(val, 10) : val;

                if(this._max && (this._value > this._max)) {
                    this._value = this._max;
                }
                if(this._value < 0) {
                    this._value = 0;
                }
                this.needsDraw = true;
            }
        }
    },
/**
  Description TODO
  @private
*/
    _max: {
        enumerable: false,
        value: null
    },
/**
        Description TODO
        @type {Function}
        @default {Number} 100
    */
    max: {
        get: function() {
            return this._max;
        },
        set: function(val) {
            if(val !== this._max) {
                this._max = String.isString(val) ? parseInt(val, 10) : val;
                if(this._max <= 0) {
                    this._max = 1; // Prevent divide by zero errors
                }
                this.needsDraw = true;
            }
        }
    },

    didCreate: {
        value: function() {

            if(NativeProgress.didCreate) {
                NativeProgress.didCreate.call(this);
            }
        }
    },

/**
    Description TODO
    @function
    */
    draw: {
        enumerable: false,
        value: function() {
            var ratio = this._value / this._max;
            // constrain to interval [0, 1]
            ratio = Math.min(Math.max(ratio, 0), 1);
            // map into [0, 100]
            var percentage = ratio * 100;
            this._barElement.style.width = percentage + '%';
        }
    }
});
