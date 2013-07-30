var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("list-test", function(testPage) {

    describe("test/list/list-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("List", function() {
            it("can be created", function() {
                expect(testPage.test.list).toBeDefined();
            });
            var list;

            beforeEach(function() {
                if (!list) {
                    list = testPage.test.list;
                }
            });
            describe("scrollBars", function () {
                it("should have opacity 0 by default", function () {
                    expect(list._scrollBarsOpacity).toEqual(0);
                });
                it("should have the correct length", function () {
                    list._numberOfIterations = 4;
                    list._height = 500;
                    list._rowHeight = 250;
                    expect(list._scrollBarsVerticalLength).toEqual(0.5);
                });
                it("should have the correct length", function () {
                    list._numberOfIterations = 1;
                    list._height = 500;
                    list._rowHeight = 250;
                    expect(list._scrollBarsVerticalLength).toEqual(1);
                });
                it("should have the correct length", function () {
                    list._numberOfIterations = 8;
                    list._height = 500;
                    list._rowHeight = 250;
                    expect(list._scrollBarsVerticalLength).toEqual(0.25);
                });
                it("should have the correct scroll", function () {
                    list._numberOfIterations = 4;
                    list._height = 500;
                    list._rowHeight = 250;
                    list._scroll = 2;
                    expect(list._scrollBarsVerticalScroll).toEqual(.5);
                });
                it("should have the correct scroll", function () {
                    list._numberOfIterations = 8;
                    list._height = 500;
                    list._rowHeight = 250;
                    list._scroll = 1.5;
                    expect(list._scrollBarsVerticalScroll).toEqual(.1875);
                });
                it("should show scrollbars (set opacity to 0.5) after translateStart", function () {
                    list._numberOfIterations = 8;
                    list._height = 500;
                    list._rowHeight = 250;
                    list._scroll = 1.5;
                    list.didTranslateStart();
                    expect(list._scrollBarsOpacity).toEqual(.5);
                });
                it("should hide scrollbars (set opacity to 0) after translateEnd", function () {
                    list._numberOfIterations = 8;
                    list._height = 500;
                    list._rowHeight = 250;
                    list._scroll = 1.5;
                    list.didTranslateStart();
                    list.didTranslateEnd();
                    expect(list._scrollBarsOpacity).toEqual(0);
                });
                it("should not show scrollbars if there is no overflow in the content", function () {
                    list._numberOfIterations = 1;
                    list._height = 500;
                    list._rowHeight = 250;
                    list.didTranslateStart();
                    expect(list._scrollBarsOpacity).toEqual(0);
                });
            });
            it("should measure first iteration height properly", function () {
                list._firstIteration = {
                    firstElement: document.createElement("div")
                };
                list._firstIteration.firstElement.style.width = "300px";
                list._firstIteration.firstElement.style.height = "200px";
                list.element.appendChild(list._firstIteration.firstElement);
                list.willDraw();
                expect(list._rowHeight).toEqual(200);
                list.element.removeChild(list._firstIteration.firstElement);
            });
            describe("generated Flow paths", function () {
                it("should have the expected values", function () {
                    list.element.style.width = "200px";
                    list.element.style.height = "200px";
                    list._firstIteration = {
                        firstElement: document.createElement("div")
                    };
                    list._firstIteration.firstElement.style.width = "200px";
                    list._firstIteration.firstElement.style.height = "50px";
                    list.element.appendChild(list._firstIteration.firstElement);
                    list._numberOfIterations = 10;
                    list.willDraw();
                    expect(list.flow.paths[0].knots[0].knotPosition[0]).toEqual(0);
                    expect(list.flow.paths[0].knots[0].knotPosition[1]).toEqual(0);
                    expect(list.flow.paths[0].knots[0].knotPosition[2]).toEqual(0);
                    expect(list.flow.paths[0].knots[0].nextHandlerPosition[0]).toEqual(0);
                    expect(list.flow.paths[0].knots[0].nextHandlerPosition[1]).toEqual(50000);
                    expect(list.flow.paths[0].knots[0].nextHandlerPosition[2]).toEqual(0);
                    expect(list.flow.paths[0].knots[0].previousDensity).toEqual(3000);
                    expect(list.flow.paths[0].knots[0].nextDensity).toEqual(3000);
                    expect(list.flow.paths[0].knots[1].knotPosition[0]).toEqual(0);
                    expect(list.flow.paths[0].knots[1].knotPosition[1]).toEqual(150000);
                    expect(list.flow.paths[0].knots[1].knotPosition[2]).toEqual(0);
                    expect(list.flow.paths[0].knots[1].previousHandlerPosition[0]).toEqual(0);
                    expect(list.flow.paths[0].knots[1].previousHandlerPosition[1]).toEqual(100000);
                    expect(list.flow.paths[0].knots[1].previousHandlerPosition[2]).toEqual(0);
                    expect(list.flow.paths[0].knots[1].previousDensity).toEqual(3000);
                    expect(list.flow.paths[0].knots[1].nextDensity).toEqual(3000);
                    expect(list.flow.paths[0].headOffset).toEqual(1);
                    expect(list.flow.paths[0].tailOffset).toEqual(4);
                    expect(list.flow.cameraTargetPoint[0]).toEqual(100);
                    expect(list.flow.cameraTargetPoint[1]).toEqual(150);
                    expect(list.flow.cameraTargetPoint[2]).toEqual(0);
                    expect(list.flow.cameraPosition[0]).toEqual(100);
                    expect(list.flow.cameraPosition[1]).toEqual(150);
                    expect(list.flow.cameraPosition[2]).toEqual(100);
                    expect(list.flow.cameraFov).toEqual(90);
                    expect(list.flow.linearScrollingVector[0]).toEqual(0);
                    expect(list.flow.linearScrollingVector[1]).toEqual(-125);
                    list.element.removeChild(list._firstIteration.firstElement);
                });
            });
        });
    });
});
