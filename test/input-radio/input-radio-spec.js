var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("input-radio-test", function(testPage) {

    describe("test/input-radio/input-radio-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("interaction", function() {
            it("should be checked when clicked or touched", function() {
                var inputRadio = testPage.test.templateObjects.inputRadio1;

                testPage.clickOrTouch({target: inputRadio.element});
                expect(inputRadio.checked).toBe(true);
            });
        });
    });
});
