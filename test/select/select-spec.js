var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("select-test", function(testPage) {

    describe("test/select/select-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("Select", function() {
            it("can be created", function() {
                expect(testPage.test.select).toBeDefined();
            });
        });
    });
});
