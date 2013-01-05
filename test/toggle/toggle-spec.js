var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("toggle-test", function(testPage) {

    describe("test/toggle/toggle-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("Toggle", function() {
            it("can be created", function() {
                expect(testPage.test.toggle).toBeDefined();
            });
        });
    });
});
