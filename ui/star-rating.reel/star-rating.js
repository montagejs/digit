/**
 * @module ui/star-rating.reel
 * @requires montage/ui/component
 */
var RatingBar = require("montage/ui/rating-bar.reel").RatingBar;

/**
 * @class StarRating
 * @extends RatingBar
 */
exports.StarRating = RatingBar.specialize(/** @lends StarRating# */ {


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
