/**
 * @module ui/alert.reel
 */
var AbstractAlert = require("montage/ui/base/abstract-alert").AbstractAlert;

/**
 * @class Alert
 * @extends AbstractAlert
 */
exports.Alert = AbstractAlert.specialize(/** @lends Alert# */ {
    constructor: {
        value: function Alert() {
            this.super();
        }
    },

    templateDidLoad: {
        value: function() {
            this._overlay = this.templateObjects.modalOverlay;
            this._okButton = this.templateObjects.okButton;
        }
    }
});
