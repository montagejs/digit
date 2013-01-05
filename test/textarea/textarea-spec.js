var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("textarea-test", function(testPage) {

    describe("test/textarea/textarea-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("Textarea", function() {
            it("can be created", function() {
                expect(testPage.test.textarea).toBeDefined();
            });
        });
    });
});
