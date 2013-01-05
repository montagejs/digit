var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("header-test", function(testPage) {

    describe("test/header/header-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("Header", function() {
            it("can be created", function() {
                expect(testPage.test.header).toBeDefined();
            });
        });
    });
});
