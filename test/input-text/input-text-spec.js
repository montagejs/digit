var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("input-text-test", function(testPage) {

    describe("test/input-text/input-text-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("InputText", function() {
            it("can be created", function() {
                expect(testPage.test.inputText).toBeDefined();
            });
        });
    });
});
