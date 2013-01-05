var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("input-number-test", function(testPage) {

    describe("test/input-number/input-number-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("InputNumber", function() {
            it("can be created", function() {
                expect(testPage.test.inputNumber).toBeDefined();
            });
        });
    });
});
