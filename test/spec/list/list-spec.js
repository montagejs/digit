var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("list-test", function(testPage) {
    var test;
    beforeEach(function() {
        test = testPage.test;
    });

    xdescribe("test/list/list-spec", function() {
        it("should scroll with the mouse", function(done) {
            // a point inside list2
            var element = testPage.document.elementFromPoint(10, 50);

            // The first dragElementOffsetTo is only needed because the Scroller
            // only scrolls after the first draw, the first one is used to
            // calculate the maxTranslateY
            testPage.dragElementOffsetTo(element, 0, 0, null, null, function() {
                testPage.waitForDraw(1, true).then(function () {
                    testPage.dragElementOffsetTo(element, 0, -40, null, null, function() {
                        testPage.waitForDraw(1, true).then(function () {
                            expect(testPage.document.elementFromPoint(10, 50)).not.toBe(element);
                            done();
                        });
                    }, {pointerType: "mouse"});
                });
            }, {pointerType: "mouse"});
        });

        it("should scroll with touch", function(done) {
            // a point inside list2
            var element = testPage.document.elementFromPoint(10, 50);

            // The first dragElementOffsetTo is only needed because the Scroller
            // only scrolls after the first draw, the first one is used to
            // calculate the maxTranslateY
            testPage.dragElementOffsetTo(element, 0, 0, null, null, function() {
                testPage.waitForDraw(1, true).then(function() {
                    testPage.dragElementOffsetTo(element, 0, -40, null, null, function() {
                        testPage.waitForDraw(1, true).then(function() {
                            expect(testPage.document.elementFromPoint(10, 50)).not.toBe(element);
                            done();
                        });
                    }, {pointerType: "touch"});
                });
            }, {pointerType: "touch"});
        });
    });
});
