var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("input-radio-test", function(testPage) {

    describe("test/input-radio/input-radio-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("InputRadio", function() {
            it("can be created", function() {
                expect(testPage.test.inputRadio).toBeDefined();
            });
        });
    });
});
