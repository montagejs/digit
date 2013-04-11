var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    PressComposer = require("montage/composer/press-composer").PressComposer;
    
var InputRadio = exports.InputRadio = Montage.create(Component, {

    _checked: {
        value: false
    },

    _disabled: {
        value: false
    },

    _required: {
        value: false
    },

    _name: {
        value: null
    },

    /**
    The checked status of the InputRadio
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
                if (value) {
                    if (this.name && this.name !== null) {
                        // dispatch an event to all other radiobuttons with the same name
                        var anEvent = document.createEvent("CustomEvent");
                        anEvent.initCustomEvent("checked", true, true, {
                            name: this.name
                        });
                        InputRadio.dispatchEvent(anEvent);
                        InputRadio.addEventListener("checked", this);
                    }
                } else {
                    InputRadio.removeEventListener("checked", this);
                }
                this.needsDraw = true;
            }
        }
    },

    handleChecked:{
        value: function(evt) {
            // if we receive this event, it means that some other radiobutton with the same name
            // has been checked. So, mark this as unchecked.
            if (this.name === evt.detail.name) {
                this.checked = false;
            }
        }
    },

    /**
    The disabled status of the InputRadio
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
    The required status of the InputRadio
    @type {Boolean}
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
    The name of the InputRadio
    @type {String}
    @default null
    */
    name: {
        get: function() {
            return this._name;
        },
        set: function(value) {
            if (this._name !== value) {
                this._name = value;
                this.needsDraw = true;
            }
        }
    },

    /**
    Handle press event from press composer
    */
    handlePress: {
        value: function(event) {
            if (this.disabled || this.checked) {
                return false;
            }
            this.checked = true;
            this.needsDraw = true;
        }
    },

    /**
    Read initial values from attributes
    */
    enterDocument: {
        value: function(firstTime) {
            if (firstTime) {
                this.checked = this.element.hasAttribute("checked");
                this.disabled = this.element.hasAttribute("disabled");
                if (this.element.hasAttribute("name")) {
                    this.name = this.element.getAttribute("name");
                }
            }
        }
    },

    /**
    Draw the input radio
    */
    draw: {
        value: function() {
            if (this.checked) {
                this.element.classList.add("digit-InputRadio--checked");
            } else {
                this.element.classList.remove("digit-InputRadio--checked");
            }
            if (this.disabled) {
                this.element.classList.add("digit-InputRadio--disabled");
            } else {
                this.element.classList.remove("digit-InputRadio--disabled");
            }
        }
    }

});
