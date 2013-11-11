/**
    @module "ui/flow-list.reel"
    @requires montage
    @requires montage/ui/component
*/
var Montage = require("montage").Montage,
    Component = require("montage/ui/component").Component,
    observeProperty = require("montage/frb/observers").observeProperty;

/**
    Description TODO
    @class module:"ui/flow-list.reel".FlowList
    @extends module:montage/ui/component.Component
*/
exports.List = Montage.create(Component, /** @lends module:"ui/flow-list.reel".FlowList# */ {

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
                this._width = this.element.clientWidth;
                this._height = this.element.clientHeight;
                this._rowHeight = this.flow._repetition._drawnIterations[0].firstElement.scrollHeight;
                this.flow.linearScrollingVector = [0, (-500 * this._rowHeight) / this._height, 0];
                this.flow.paths = [
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
                                    this._rowHeight * 1000,
                                    0
                                ],
                                "nextDensity": 3000,
                                "previousDensity": 3000
                            },
                            {
                                "knotPosition": [
                                    0,
                                    this._rowHeight * 3000,
                                    0
                                ],
                                "previousHandlerPosition": [
                                    0,
                                    this._rowHeight * 2000,
                                    0
                                ],
                                "nextDensity": 3000,
                                "previousDensity": 3000
                            }
                        ],
                        "units": {},
                        "headOffset": 1,
                        "tailOffset": this._height / this._rowHeight
                    }
                ];
                this.flow.cameraTargetPoint = [
                    this._width / 2,
                    this._height / 2 + this._rowHeight,
                    0
                ];
                this.flow.cameraPosition = [
                    this._width / 2,
                    this._height / 2 + this._rowHeight,
                    this._height / 2
                ];
                this.flow.cameraFov = 90;
                this._scrollBars.displayHorizontal = false;
                this._scrollBars.displayVertical = true;
                this._scrollBars.verticalLength = (this._height / this._rowHeight) / this.flow._numberOfIterations;
            }
        }
    },

    draw: {
        value: function () {

        }
    },

    handleTranslateStart: {
        value: function(event) {
            this._scrollBars.opacity = 0.5;
        }
    },

    handleTranslateEnd: {
        value: function(event) {
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
            this._scrollBars.verticalScroll = (value * (1 - this._scrollBars.verticalLength)) / (this.flow._numberOfIterations - (this._height / this._rowHeight));
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
        }
    },

});
