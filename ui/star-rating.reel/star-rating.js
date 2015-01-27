/**
 * @module ui/star-rating.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class StarRating
 * @extends Component
 */
exports.StarRating = Component.specialize(/** @lends StarRating# */ {


    /**
     * The number of stars.
     *
     * @type {number}
     * @default 5
     */
    starCount: {
        set: function(starCount) {
            this.itemCount = starCount;
        },
        get: function() {
            return this._itemCount;
        }
    }


});
