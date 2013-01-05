var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("progress-test", function(testPage) {

    describe("test/progress/progress-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("Progress", function() {
            it("can be created", function() {
                expect(testPage.test.progress).toBeDefined();
            });
        });
    });
});
