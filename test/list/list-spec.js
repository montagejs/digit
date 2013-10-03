var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("list-test", function(testPage) {
    var test;
    beforeEach(function() {
        test = testPage.test;
    });

    describe("test/list/list-spec", function() {
        it("should scroll with the mouse", function() {
            // a point inside list2
            var element = testPage.document.elementFromPoint(10, 50);

            // The first dragElementOffsetTo is only needed because the Scroller
            // only scrolls after the first draw, the first one is used to
            // calculate the maxTranslateY
            testPage.dragElementOffsetTo(element, 0, 0, null, null, function() {
                testPage.waitForDraw();
                runs(function() {

                    testPage.dragElementOffsetTo(element, 0, -40, null, null, function() {
                        testPage.waitForDraw();
                        runs(function() {
                            expect(testPage.document.elementFromPoint(10, 50)).not.toBe(element);
                        });
                    }, {pointerType: "mouse"});

                });
            }, {pointerType: "mouse"});
        });

        it("should scroll with touch", function() {
            // a point inside list2
            var element = testPage.document.elementFromPoint(10, 50);

            // The first dragElementOffsetTo is only needed because the Scroller
            // only scrolls after the first draw, the first one is used to
            // calculate the maxTranslateY
            testPage.dragElementOffsetTo(element, 0, 0, null, null, function() {
                testPage.waitForDraw();
                runs(function() {

                    testPage.dragElementOffsetTo(element, 0, -40, null, null, function() {
                        testPage.waitForDraw();
                        runs(function() {
                            expect(testPage.document.elementFromPoint(10, 50)).not.toBe(element);
                        });
                    }, {pointerType: "touch"});

                });
            }, {pointerType: "touch"});
        });
    });
});
