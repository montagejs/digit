var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("input-checkbox-test", function(testPage) {

    describe("test/input-checkbox/input-checkbox-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("InputCheckbox", function() {
            it("can be created", function() {
                expect(testPage.test.inputCheckbox).toBeDefined();
            });
        });
    });
});
