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
                window.addEventListener("resize", function () {
                    self.needsDraw = true;
                }, false);
            }
        }
    },

    _scrollBarsVerticalLength: {
        value: 1
    },

    _scrollBarsVerticalScroll: {
        value: 0
    },

    _scrollBarsOpacity: {
        value: 0
    },

    __height: {
        value: null
    },

    _height: {
        get: function () {
            return this.__height;
        },
        set: function (value) {
            this.__height = value;
            this._updateScrollBars();
        }
    },

    __numberOfIterations: {
        value: null
    },

    _numberOfIterations: {
        get: function () {
            return this.__numberOfIterations;
        },
        set: function (value) {
            this.__numberOfIterations = value;
            this._updateScrollBars();
        }
    },

    __rowHeight: {
        value: null
    },

    _rowHeight: {
        get: function () {
            return this.__rowHeight;
        },
        set: function (value) {
            this.__rowHeight = value;
            this._updateScrollBars();
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
            this._updateScrollBars();
        }
    },

    _updateScrollBars: {
        value: function () {
            this._scrollBarsVerticalLength = (this.__height / this.__rowHeight) / this.__numberOfIterations;
            if (this._scrollBarsVerticalLength < 1) {
                this._scrollBarsVerticalScroll = (this.__scroll * (1 - this._scrollBarsVerticalLength)) / (this.__numberOfIterations - (this.__height / this.__rowHeight));
            } else {
                this._scrollBarsVerticalLength = 1;
                this._scrollBarsVerticalScroll = 0;
            }
        }
    },

    __firstIteration: {
        value: null
    },

    _firstIteration: {
        get: function () {
            return this.__firstIteration;
        },
        set: function (value) {
            this.__firstIteration = value;
            this.needsDraw = true;
        }
    },

    willDraw: {
        value: function () {
            if ((typeof this.__firstIteration !== "undefined") && (this.__firstIteration !== null)) {
                this._width = this.element.clientWidth;
                this._height = this.element.clientHeight;
                this._rowHeight = this.__firstIteration.firstElement.scrollHeight;
                this.flow.linearScrollingVector = [0, (-500 * this.__rowHeight) / this.__height];
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
                                    this.__rowHeight * 1000,
                                    0
                                ],
                                "nextDensity": 3000,
                                "previousDensity": 3000
                            },
                            {
                                "knotPosition": [
                                    0,
                                    this.__rowHeight * 3000,
                                    0
                                ],
                                "previousHandlerPosition": [
                                    0,
                                    this.__rowHeight * 2000,
                                    0
                                ],
                                "nextDensity": 3000,
                                "previousDensity": 3000
                            }
                        ],
                        "units": {},
                        "headOffset": 1,
                        "tailOffset": this.__height / this.__rowHeight
                    }
                ];
                this.flow.cameraTargetPoint = [
                    this._width / 2,
                    this.__height / 2 + this.__rowHeight,
                    0
                ];
                this.flow.cameraPosition = [
                    this._width / 2,
                    this.__height / 2 + this.__rowHeight,
                    this.__height / 2
                ];
                this.flow.cameraFov = 90;
                this._scrollBars.displayHorizontal = false;
                this._scrollBars.displayVertical = true;
            }
        }
    },

    didTranslateStart: {
        value: function () {
            // equivalent to CSS' overflow: auto
            if (this._scrollBarsVerticalLength < 1) {
                this._scrollBarsOpacity = 0.5;
            }
        }
    },

    didTranslateEnd: {
        value: function () {
            this._scrollBarsOpacity = 0;
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
    }

});
