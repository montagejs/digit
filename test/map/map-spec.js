var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("map-test", function(testPage) {

    describe("test/map/map-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("Map", function() {
            it("can be created", function() {
                expect(testPage.test.map).toBeDefined();
            });
        });
    });
});
