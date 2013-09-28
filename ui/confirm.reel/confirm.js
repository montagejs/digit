/**
 * @module ui/confirm.reel
 */
var AbstractConfirm = require("montage/ui/base/abstract-confirm").AbstractConfirm;

/**
 * @class Confirm
 * @extends AbstractConfirm
 */
exports.Confirm = AbstractConfirm.specialize(/** @lends Confirm# */ {
    constructor: {
        value: function Confirm() {
            this.super();
        }
    },

    templateDidLoad: {
        value: function() {
            this._overlay = this.templateObjects.modalOverlay;
            this._okButton = this.templateObjects.okButton;
            this._cancelButton = this.templateObjects.cancelButton;
        }
    }
});
