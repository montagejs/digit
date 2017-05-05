var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("radio-button-test", function(testPage) {

    describe("test/radio-button/radio-button-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("interaction", function() {
            xit("should be checked when clicked or touched", function(done) {
                var radioButton = testPage.test.templateObjects.radioButton1;

                testPage.clickOrTouch({target: radioButton.element});

                testPage.waitForComponentDraw(radioButton).then(function() {
                    expect(radioButton.checked).toBe(true);
                    done();
                });
            });
        });
    });
});
