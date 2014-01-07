/**
    @module "ui/big-list.reel"
*/
var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    observeProperty = require("montage/frb/observers").observeProperty;

var deprecationWarning = require("montage/core/deprecate").deprecationWarning;

/**
    @class BigList
    @extends Component
*/
exports.BigList = Component.specialize( /** @lends BigList# */ {

    enterDocument: {
        value: function(firstTime) {
            var self = this;

            if (firstTime) {
                this.flow._flowTranslateComposer.addEventListener("translateStart", this, false);
                this.flow._flowTranslateComposer.addEventListener("translateEnd", this, false);
                window.addEventListener("resize", function () {
                    self.needsDraw = true;
                }, false);
            }
        }
    },

    willDraw: {
        value: function () {
            if (this.flow._repetition._drawnIterations[0]) {
                this._width = this._measureWidth();
                this._height = this._measureHeight();
                this._rowHeight = this._measureRowHeight();
                this.flow.linearScrollingVector = this._calculateLinearScrollingVector(this._height, this._rowHeight);
                this.flow.paths = this._calculateFlowPath(this._height, this._rowHeight);
                this.flow.cameraTargetPoint = this._calculateCameraTargetPoint(this._width, this._height, this._rowHeight)
                this.flow.cameraPosition = this._calculateCameraPosition(this._width, this._height, this._rowHeight);
                this.flow.cameraFov = 90;
                this._scrollBars.displayHorizontal = false;
                this._scrollBars.displayVertical = true;
                this._scrollBars.verticalLength = this._calculateScrollBarsVerticalLength(this._height,  this._rowHeight, this.flow._numberOfIterations);
            }
        }
    },

    draw: {
        value: function () {

        }
    },

    _measureHeight: {
        value: function() {
            return this.element.clientHeight;
        }
    },

    _measureWidth: {
        value: function() {
            return this.element.clientWidth;
        }
    },

    _measureRowHeight: {
        value: function() {
            return this.flow._repetition._drawnIterations[0].firstElement.scrollHeight;
        }
    },

    _calculateLinearScrollingVector: {
        value: function(height, rowHeight) {
            return [0, (-500 * rowHeight) / height, 0]
        }
    },

    _calculateScrollBarsVerticalLength: {
        value: function(height, rowHeight, numberOfIterations) {
            var length = (height / rowHeight) / numberOfIterations;
            return  length > 1 ? 1 : length;
        }
    },

    _calculateFlowPath: {
        value: function(height, rowHeight) {
            return [
                {
                    "knots": [
                        {
                            "knotPosition": [
                                0,
                                0,
                                0
                            ],
                            "nextHandlerPosition": [
                                0,
                                rowHeight * 1000,
                                0
                            ],
                            "nextDensity": 3000,
                            "previousDensity": 3000
                        },
                        {
                            "knotPosition": [
                                0,
                                rowHeight * 3000,
                                0
                            ],
                            "previousHandlerPosition": [
                                0,
                                rowHeight * 2000,
                                0
                            ],
                            "nextDensity": 3000,
                            "previousDensity": 3000
                        }
                    ],
                    "units": {},
                    "headOffset": 1,
                    "tailOffset": height / rowHeight
                }
            ];
        }
    },

    _calculateCameraPosition: {
        value: function(width, height, rowHeight) {
            return [
                width / 2,
                height / 2 + rowHeight,
                height / 2
            ];
        }
    },

    _calculateCameraTargetPoint: {
        value: function(width, height, rowHeight) {
            return [
                width / 2,
                height / 2 + rowHeight,
                0
            ];
        }
    },

    handleTranslateStart: {
        value: function() {
            if (this._scrollBars.verticalLength < 1) {
                this._scrollBars.opacity = 0.5;
            }

        }
    },

    handleTranslateEnd: {
        value: function() {
            this._scrollBars.opacity = 0;
        }
    },

    __scroll: {
        value: 0
    },

    _scroll: {
        get: function () {
            return this.__scroll;
        },
        set: function (value) {
            this.__scroll = value;
            this._scrollBars.verticalScroll = this._calculateScrollBarsVerticalScroll(
                value, this._height, this._rowHeight, this.flow._numberOfIterations, this._scrollBars.verticalLength
            );
        }
    },

    _calculateScrollBarsVerticalScroll: {
        value: function(value, height, rowHeight, numberOfIterations, verticalLength) {
            if (verticalLength === 1) {
                return  0;
            }
            return  (value * (1 - verticalLength)) / (numberOfIterations - (height / rowHeight));
        }
    },

    _content: {
        value: null
    },

    content: {
        set: function(value) {
            this._content = value;
            this.defineBinding("flow.content", {
                "<-": "content"
            });
        },
        get: function() {
            return this._content;
        }
    },

    _contentController: {
        value: null
    },

    contentController: {
        set: function(value) {
            this._contentController = value;
            this.defineBinding("flow.contentController", {
                "<-": "contentController"
            });
        },
        get: function() {
            return this._contentController;
        }
    },

    isSelectionEnabled: {
        value: null
    },

    observeProperty: {
        value: function (key, emit, source, parameters, beforeChange) {
            if (key === "objectAtCurrentIteration" || key === "currentIteration") {
                deprecationWarning(key,":iteration.object");
                if (this.flow) {
                    return this.flow.observeProperty(key, emit, source, parameters, beforeChange);
                }
            } else {
                return observeProperty(this, key, emit, source, parameters, beforeChange);
            }
        }
    },

    templateDidLoad: {
        value: function() {
            var self = this,
                oldDidDraw = this.flow.didDraw;

            this.flow.didDraw = function () {
                if (self.flow._repetition._drawnIterations[0]) {
                    self.needsDraw = true;
                    self.flow.didDraw = oldDidDraw;
                }
            }
            // initialize scroll bars
            this._scrollBars.opacity = 0;
        }
    }

});
