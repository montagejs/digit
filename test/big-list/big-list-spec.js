var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

var BigList = require("ui/big-list.reel").BigList;

describe("test/big-list/big-list-spec", function() {
    var bigList;

    beforeEach(function () {
        bigList = new BigList();
        bigList.flow = {};
        bigList.flow.didDraw = Function.noop;
        bigList.flow._repetition = {};

        bigList._scrollBars = {};
        bigList.templateDidLoad();
    });

    describe("BigList", function() {

        describe("scrollBars", function () {

            describe("_calculateScrollBarsVerticalLength", function () {
                it("should have the correct length", function () {
                    var height = 500;
                    var rowHeight = 250
                    var numberOfIterations = 4;
                    expect(bigList._calculateScrollBarsVerticalLength(height,rowHeight,numberOfIterations)).toEqual(0.5);
                });
                it("should have the correct length", function () {
                    var height = 500;
                    var rowHeight = 250
                    var numberOfIterations = 1;
                    expect(bigList._calculateScrollBarsVerticalLength(height,rowHeight,numberOfIterations)).toEqual(1);
                });
                it("should have the correct length", function () {
                    var height = 500;
                    var rowHeight = 250
                    var numberOfIterations = 8;
                    expect(bigList._calculateScrollBarsVerticalLength(height,rowHeight,numberOfIterations)).toEqual(0.25);
                });
            });
            describe("_calculateScrollBarsVerticalScroll", function () {
                it("should have the correct scroll", function () {
                    var height = 500;
                    var rowHeight = 250
                    var numberOfIterations = 4;
                    var verticalLength = 0.5;
                    var scroll = 2;
                    expect(
                        bigList._calculateScrollBarsVerticalScroll(scroll, height, rowHeight, numberOfIterations, verticalLength)
                    ).toEqual(.5);
                });
                it("should have the correct scroll", function () {
                    var height = 500;
                    var rowHeight = 250
                    var numberOfIterations = 8;
                    var verticalLength = 0.25;
                    var scroll = 1.5;
                    expect(
                        bigList._calculateScrollBarsVerticalScroll(scroll, height, rowHeight, numberOfIterations, verticalLength)
                    ).toEqual(.1875);
                });

            });
            describe("scroll bar opacity", function () {
                beforeEach(function () {
                    // there is overflow
                    bigList._scrollBars.verticalLength = 0.5;
                });
                it("should have opacity 0 by default", function () {
                    expect(bigList._scrollBars.opacity).toEqual(0);
                });

                it("should show scrollbars (set opacity to 0.5) after translateStart", function () {
                    bigList.handleTranslateStart();
                    expect(bigList._scrollBars.opacity).toEqual(.5);
                });
                it("should hide scrollbars (set opacity to 0) after translateEnd", function () {
                    bigList.handleTranslateStart();
                    bigList.handleTranslateEnd();
                    expect(bigList._scrollBars.opacity).toEqual(0);
                });
                it("should not show scrollbars if there is no overflow in the content", function () {
                    bigList._scrollBars.verticalLength = 1;
                    bigList.handleTranslateStart();
                    expect(bigList._scrollBars.opacity).toEqual(0);
                });
            });
        });
        it("should measure first iteration height properly", function () {
            bigList.flow._repetition._drawnIterations = [{firstElement: {scrollHeight: 200 }}];
            expect(bigList._measureRowHeight()).toEqual(200);
        });
        describe("generated Flow paths", function () {
            it("should have the expected values", function () {
                var height = 200;
                var rowHeight = 50;
                var width = 200;
                var path = bigList._calculateFlowPath(height, rowHeight);
                expect(path[0].knots[0].knotPosition[0]).toEqual(0);
                expect(path[0].knots[0].knotPosition[1]).toEqual(0);
                expect(path[0].knots[0].knotPosition[2]).toEqual(0);
                expect(path[0].knots[0].nextHandlerPosition[0]).toEqual(0);
                expect(path[0].knots[0].nextHandlerPosition[1]).toEqual(50000);
                expect(path[0].knots[0].nextHandlerPosition[2]).toEqual(0);
                expect(path[0].knots[0].previousDensity).toEqual(3000);
                expect(path[0].knots[0].nextDensity).toEqual(3000);
                expect(path[0].knots[1].knotPosition[0]).toEqual(0);
                expect(path[0].knots[1].knotPosition[1]).toEqual(150000);
                expect(path[0].knots[1].knotPosition[2]).toEqual(0);
                expect(path[0].knots[1].previousHandlerPosition[0]).toEqual(0);
                expect(path[0].knots[1].previousHandlerPosition[1]).toEqual(100000);
                expect(path[0].knots[1].previousHandlerPosition[2]).toEqual(0);
                expect(path[0].knots[1].previousDensity).toEqual(3000);
                expect(path[0].knots[1].nextDensity).toEqual(3000);
                expect(path[0].headOffset).toEqual(1);
                expect(path[0].tailOffset).toEqual(4);
                var targetPoint = bigList._calculateCameraTargetPoint(width, height, rowHeight);
                expect(targetPoint[0]).toEqual(100);
                expect(targetPoint[1]).toEqual(150);
                expect(targetPoint[2]).toEqual(0);
                var position = bigList._calculateCameraPosition(width, height, rowHeight);
                expect(position[0]).toEqual(100);
                expect(position[1]).toEqual(150);
                expect(position[2]).toEqual(100);
                var vector = bigList._calculateLinearScrollingVector(height, rowHeight);
                expect(vector[0]).toEqual(0);
                expect(vector[1]).toEqual(-125);
            });
        });
    });
});
