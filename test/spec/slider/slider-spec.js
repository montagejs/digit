var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("slider-test", function(testPage) {

    describe("test/slider/slider-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("InputRange", function() {
            it("can be created", function() {
                expect(testPage.test.slider).toBeDefined();
            });
        });
    });
});
